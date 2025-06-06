import { useState } from 'react'
import './Dice.css'

interface DiceProps {
  onRoll: (number: number) => void
  isRolling: boolean
}

const Dice = ({ onRoll, isRolling }: DiceProps) => {
  const [showNumber, setShowNumber] = useState(false)
  const [rolledNumber, setRolledNumber] = useState<number | null>(null)

  const handleClick = () => {
    if (isRolling) return
    
    const number = Math.floor(Math.random() * 10) + 1
    setRolledNumber(number)
    setShowNumber(false)
    
    // Add rolling animation delay
    setTimeout(() => {
      setShowNumber(true)
      onRoll(number)
    }, 1000)
  }

  const getDotPattern = (num: number) => {
    const patterns = {
      1: [5],
      2: [1, 9],
      3: [1, 5, 9],
      4: [1, 3, 7, 9],
      5: [1, 3, 5, 7, 9],
      6: [1, 3, 4, 6, 7, 9],
      7: [1, 2, 3, 5, 7, 8, 9],
      8: [1, 2, 3, 4, 6, 7, 8, 9],
      9: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      10: [1, 2, 3, 4, 5, 6, 7, 8, 9] // Show all dots for 10
    }
    return patterns[num as keyof typeof patterns] || []
  }

  return (
    <div 
      className={`dice ${isRolling ? 'rolling' : ''} ${showNumber ? 'revealed' : ''}`}
      onClick={handleClick}
    >
      <div className="dice-face">
        {showNumber && rolledNumber ? (
          <>
            {rolledNumber === 10 ? (
              <div className="ten-display">
                <div className="ten-number">10</div>
              </div>
            ) : (
              <>
                <div className="dots-container">
                  {Array.from({ length: 9 }, (_, i) => (
                    <div
                      key={i}
                      className={`dot ${getDotPattern(rolledNumber).includes(i + 1) ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <div className="number-display">{rolledNumber}</div>
              </>
            )}
          </>
        ) : (
          <div className="dice-question">?</div>
        )}
      </div>
    </div>
  )
}

export default Dice
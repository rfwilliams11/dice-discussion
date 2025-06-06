import { useState } from 'react'

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
      className={`
        w-30 h-30 bg-gradient-to-br from-gray-100 to-gray-300 
        border-3 border-gray-800 rounded-2xl cursor-pointer 
        flex items-center justify-center mx-auto my-5 
        transition-all duration-300 shadow-lg select-none relative
        hover:shadow-xl hover:-translate-y-1 hover:from-white hover:to-gray-200
        active:translate-y-0 active:shadow-md
        ${isRolling ? 'animate-spin pointer-events-none' : ''}
      `}
      onClick={handleClick}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {showNumber && rolledNumber ? (
          <>
            {rolledNumber === 10 ? (
              <div className="flex items-center justify-center w-full h-full relative">
                <div className="text-6xl font-bold text-gray-800 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
                  10
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-2 w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {Array.from({ length: 9 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        getDotPattern(rolledNumber).includes(i + 1) 
                          ? 'bg-gray-800 shadow-md' 
                          : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-2 right-2 text-xl font-bold text-gray-600 bg-white/80 rounded-full w-6 h-6 flex items-center justify-center border border-gray-300">
                  {rolledNumber}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-5xl font-bold text-gray-600 drop-shadow-sm">?</div>
        )}
      </div>
    </div>
  )
}

export default Dice
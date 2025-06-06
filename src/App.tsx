import { useState } from 'react'
import './App.css'
import { TOPICS_DATA } from './constants'

interface Topics {
  general: string
  aiFocused: string
  roseThorn: string
}

function App() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null)
  const [topics, setTopics] = useState<Topics | null>(null)

  const generateRandomNumber = (): void => {
    const number = Math.floor(Math.random() * 10) + 1
    setRandomNumber(number)
    
    setTopics({
      general: TOPICS_DATA.general[number - 1],
      aiFocused: TOPICS_DATA.aiFocused[number - 1],
      roseThorn: TOPICS_DATA.roseThorn[number - 1]
    })
  }

  return (
    <>
      <h1>Dice Discussion</h1>
      <div className="card">
        <button onClick={generateRandomNumber}>
          Roll the Dice (1-10)
        </button>
        {randomNumber && (
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>
            {randomNumber}
          </p>
        )}
        {topics && (
          <div style={{ textAlign: 'left', margin: '20px 0' }}>
            <h3>Discussion Topics:</h3>
            <div style={{ marginBottom: '15px' }}>
              <h4>General:</h4>
              <p>{topics.general}</p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <h4>AI Focused:</h4>
              <p>{topics.aiFocused}</p>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <h4>Rose or Thorn:</h4>
              <p>{topics.roseThorn}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App

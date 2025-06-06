import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(null)
  const [topics, setTopics] = useState(null)
  const [topicsData, setTopicsData] = useState(null)

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const [generalRes, aiFocusedRes, roseThornRes] = await Promise.all([
          fetch('/general.txt'),
          fetch('/ai-focused.txt'),
          fetch('/rose-thorn.txt')
        ])

        const [generalText, aiFocusedText, roseThornText] = await Promise.all([
          generalRes.text(),
          aiFocusedRes.text(),
          roseThornRes.text()
        ])

        setTopicsData({
          general: generalText.trim().split('\n'),
          aiFocused: aiFocusedText.trim().split('\n'),
          roseThorn: roseThornText.trim().split('\n')
        })
      } catch (error) {
        console.error('Error loading topics:', error)
      }
    }

    loadTopics()
  }, [])

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1
    setRandomNumber(number)
    
    if (topicsData) {
      setTopics({
        general: topicsData.general[number - 1],
        aiFocused: topicsData.aiFocused[number - 1],
        roseThorn: topicsData.roseThorn[number - 1]
      })
    }
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

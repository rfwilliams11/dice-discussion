import { useState } from "react";
import "./App.css";
import { TOPICS_DATA } from "./constants";
import Dice from "./components/Dice";
import TopicCard from "./components/TopicCard";

interface Topics {
  general: string;
  aiFocused: string;
  roseThorn: string;
}

function App() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [topics, setTopics] = useState<Topics | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleDiceRoll = (number: number): void => {
    setIsRolling(true);
    setRandomNumber(number);

    setTopics({
      general: TOPICS_DATA.general[number - 1],
      aiFocused: TOPICS_DATA.aiFocused[number - 1],
      roseThorn: TOPICS_DATA.roseThorn[number - 1],
    });

    // Reset rolling state after animation
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  return (
    <>
      <h1 style={{ marginBottom: "0px" }}>Dice Discussion</h1>
      <div className="card">
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Click the dice to roll a number (1-10) and get discussion topics!
        </p>

        <Dice onRoll={handleDiceRoll} isRolling={isRolling} />

        {topics && (
          <div style={{ margin: "30px 0" }}>
            <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
              Modern Web Discussion Topics
            </h3>
            <div className="topics-container">
              <TopicCard
                title="General"
                content={topics.general}
                colorClass="general"
              />
              <TopicCard
                title="AI Focused"
                content={topics.aiFocused}
                colorClass="ai-focused"
              />
              <TopicCard
                title="Rose or Thorn"
                content={topics.roseThorn}
                colorClass="rose-thorn"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

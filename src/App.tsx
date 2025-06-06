import { useState } from "react";
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-0">
          Dice Discussion
        </h1>
        
        <div className="text-center py-8">
          <p className="mb-5 text-gray-600 text-lg">
            Click the dice to roll a number (1-10) and get discussion topics!
          </p>

          <Dice onRoll={handleDiceRoll} isRolling={isRolling} />

          {topics && (
            <div className="mt-8">
              <h3 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                Modern Web Discussion Topics
              </h3>
              <div className="flex flex-wrap gap-5 justify-center max-w-6xl mx-auto">
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
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import GameScreen from "./components/GameScreen";
import { getProgress, setProgress } from "./utils/progress";

export default function App() {
  const [shahs, setShahs] = useState([]);
  const [progress, setLocalProgress] = useState(getProgress());
  const [currentOpponent, setCurrentOpponent] = useState(null);

  useEffect(() => {
    // Init Yandex SDK
    if (window.YaGames) {
      window.YaGames.init()
        .then((ysdk) => {
          window.ysdk = ysdk;
        })
        .catch(() => {});
    }

    // Load shahs data
    fetch("/data/shahs.json")
      .then((r) => r.json())
      .then(setShahs)
      .catch(console.error);
  }, []);

  const handleSelectOpponent = (shah) => {
    setCurrentOpponent(shah);
  };

  const handleExit = () => {
    setCurrentOpponent(null);
  };

  const handleWin = (shahId) => {
    setProgress(shahId);
    setLocalProgress(shahId);
  };

  if (!shahs.length) {
    return (
      <div className="loading-screen">
        <div className="loading-ornament">&#9813;</div>
        <p>Загрузка...</p>
      </div>
    );
  }

  if (currentOpponent) {
    return (
      <GameScreen
        opponent={currentOpponent}
        onExit={handleExit}
        onWin={handleWin}
      />
    );
  }

  return (
    <MainMenu
      shahs={shahs}
      progress={progress}
      onSelectOpponent={handleSelectOpponent}
    />
  );
}

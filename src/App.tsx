import { useState, useEffect } from 'react';
import './styles/App.css';
import LevelDisplay from './components/LevelDisplay';
import ThemeToggle from './components/ThemeToggle';
import { initTelegramApp } from './services/telegramWebApp';
import { useEcoProgress } from './hooks/useEcoProgress';

function App() {
  const [ecoPoints, setEcoPoints] = useState(0);
  const { stage: actionCount, waterPlant: performAction, canWater: canAct } = useEcoProgress();
  const [level, setLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [streak, setStreak] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    try {
      const tg = initTelegramApp();
      tg.setHeaderColor(isDarkMode ? '#1a1a1a' : '#4CAF50');
      tg.setBackgroundColor(isDarkMode ? '#000000' : '#F0FFF0');
    } catch (error) {
      console.error('Failed to initialize Telegram Web App:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _handleEcoAction = () => {
    if (canAct) {
      const streakBonus = Math.min(streak, 5);
      const pointsEarned = Math.floor(Math.random() * 5) + 1 + streakBonus;
      setEcoPoints(prev => prev + pointsEarned);
      performAction();
      setStreak(prev => prev + 1);
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2000);

      if (actionCount >= 20) {
        setLevel(prev => prev + 1);
      }
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            {/* Remove the EcoAction component */}
            {/* <EcoAction stage={actionCount} isNightMode={isDarkMode} /> */}
            
            {/* Remove the WateringButton component */}
            {/* <WateringButton onWater={handleEcoAction} canWater={canAct} timeUntilNextWater={timeUntilNextAction} /> */}
            
            {/* Remove the Shop component */}
            {/* <Shop tokens={ecoPoints} setTokens={setEcoPoints} /> */}
          </>
        );
      case 'impact':
        return <h2>Environmental Impact</h2>;
      case 'community':
        return <h2>Eco Community</h2>;
      case 'rewards':
        return <h2>Green Rewards</h2>;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="app-container">
        <ThemeToggle isNightMode={isDarkMode} toggleNightMode={toggleTheme} />
        <h1>@AnonfrXBT</h1>
        <LevelDisplay level={level} />
        <div className="content-area">
          {renderSection()}
          {showReward && <div className="reward-popup">+{ecoPoints} eco points!</div>}
        </div>
      </div>
      <nav className="bottom-nav">
        <a href="#" className="nav-item" onClick={() => setActiveSection('home')}>
          <span className="nav-icon">🌱</span>
          Home
        </a>
        <a href="#" className="nav-item" onClick={() => setActiveSection('impact')}>
          <span className="nav-icon">🌍</span>
          Impact
        </a>
        <a href="#" className="nav-item" onClick={() => setActiveSection('community')}>
          <span className="nav-icon">👥</span>
          Community
        </a>
        <a href="#" className="nav-item" onClick={() => setActiveSection('rewards')}>
          <span className="nav-icon">🏆</span>
          Rewards
        </a>
      </nav>
      <div style={{ display: 'none' }}>{_handleEcoAction.toString()}</div>
    </div>
  );
}

export default App;
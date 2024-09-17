import React from 'react';

interface NightModeToggleProps {
  isNightMode: boolean;
  toggleNightMode: () => void;
}

const NightModeToggle: React.FC<NightModeToggleProps> = ({ isNightMode, toggleNightMode }) => {
  return (
    <button onClick={toggleNightMode} className={`night-mode-toggle ${isNightMode ? 'night' : 'day'}`}>
      {isNightMode ? '☀️' : '🌙'}
    </button>
  );
};

export default NightModeToggle;

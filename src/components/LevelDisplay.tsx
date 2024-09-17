import React from 'react';

interface LevelDisplayProps {
  level: number;
}

const LevelDisplay: React.FC<LevelDisplayProps> = ({ level }) => {
  return <h2>Level: {level}</h2>;
};

export default LevelDisplay;

import React from 'react';

const plantStages = ['🌱', '🌿', '🌳', '🌳🌸', '🌳🍎'];

interface PlantProps {
  stage: number;
  isNightMode: boolean;
}

const Plant: React.FC<PlantProps> = ({ stage, isNightMode }) => {
  return (
    <div className={`plant ${isNightMode ? 'night' : 'day'}`}>
      <p style={{ fontSize: '4rem', margin: '10px 0' }}>{plantStages[stage]}</p>
      {/* Remove the following line */}
      {/* <p>Growth Stage: {stage + 1}/5</p> */}
    </div>
  );
};

export default Plant;

import React from 'react';

interface WateringButtonProps {
  onWater: () => void;
  canWater: boolean;
  timeUntilNextWater: number;
}

const WateringButton: React.FC<WateringButtonProps> = ({ onWater, canWater, timeUntilNextWater }) => {
  return (
    <div>
      <button onClick={onWater} disabled={!canWater} className="watering-button">
        Water Plant
      </button>
      {!canWater && <p>Next water in: {timeUntilNextWater}s</p>}
    </div>
  );
};

export default WateringButton;

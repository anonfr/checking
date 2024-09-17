import { useState, useEffect } from 'react';

export function useEcoProgress() {
  const [stage, setStage] = useState(0);
  const [lastWatered, setLastWatered] = useState(Date.now());
  const [canWater, setCanWater] = useState(true);
  const [timeUntilNextWater, setTimeUntilNextWater] = useState(0);

  useEffect(() => {
    const growthInterval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastWater = (now - lastWatered) / 1000;
      if (timeSinceLastWater >= 60) {
        setCanWater(true);
        setTimeUntilNextWater(0);
      } else {
        setCanWater(false);
        setTimeUntilNextWater(Math.ceil(60 - timeSinceLastWater));
      }
    }, 1000);

    return () => clearInterval(growthInterval);
  }, [lastWatered]);

  const waterPlant = () => {
    if (canWater) {
      setStage(prevStage => (prevStage < 4 ? prevStage + 1 : 0));
      setLastWatered(Date.now());
      setCanWater(false);
    }
  };

  return { stage, waterPlant, canWater, timeUntilNextWater };
};

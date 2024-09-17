import React from 'react';

interface ShopProps {
  tokens: number;
  setTokens: React.Dispatch<React.SetStateAction<number>>;
}

const Shop: React.FC<ShopProps> = ({ tokens, setTokens }) => {
  const buyFertilizer = () => {
    if (tokens >= 10) {
      setTokens(prev => prev - 10);
      alert('Fertilizer bought! Plant growth speed increased.');
    } else {
      alert('Not enough tokens!');
    }
  };

  return (
    <div className="shop">
      <h3>Shop</h3>
      <button onClick={buyFertilizer}>Buy Fertilizer (10 tokens)</button>
    </div>
  );
};

export default Shop;

import React, { useState } from 'react';

function CoinFlipper() {
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const outcomes = ['Heads', 'Tails'];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    setResult(outcomes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Coin Flipper</h1>
      <button 
        onClick={flipCoin} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Flip Coin
      </button>
      {result && <p style={{ fontSize: '24px', marginTop: '20px' }}>Result: {result}</p>}
    </div>
  );
}

export default CoinFlipper;

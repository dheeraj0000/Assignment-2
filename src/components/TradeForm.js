// TradeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TradeForm = ({ selectedStock }) => {
  const [quantity, setQuantity] = useState(0);

  const handleTrade = (type) => {
    axios.post('/api/trade', {
      symbol: selectedStock.symbol,
      quantity,
      type
    })
    .then(response => {
      alert(`Successfully ${type} ${quantity} shares of ${selectedStock.name}`);
    })
    .catch(error => console.error('Error trading stock:', error));
  };

  return (
    <div>
      <h2>Trade {selectedStock.name}</h2>
      <input 
        type="number" 
        value={quantity} 
        onChange={e => setQuantity(e.target.value)} 
        placeholder="Quantity" 
      />
      <button onClick={() => handleTrade('buy')}>Buy</button>
      <button onClick={() => handleTrade('sell')}>Sell</button>
    </div>
  );
};

export default TradeForm;

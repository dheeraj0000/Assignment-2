// StockList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockList = ({ onSelectStock }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from backend
    axios.get('/api/stocks')
      .then(response => setStocks(response.data))
      .catch(error => console.error('Error fetching stocks:', error));
  }, []);

  return (
    <div>
      <h2>Available Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol} onClick={() => onSelectStock(stock)}>
            {stock.name} ({stock.symbol}): ${stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;

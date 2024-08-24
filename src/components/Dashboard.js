// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    // Fetch holdings from backend
    axios.get('/api/holdings')
      .then(response => setHoldings(response.data))
      .catch(error => console.error('Error fetching holdings:', error));
  }, []);

  return (
    <div>
      <h2>Your Holdings</h2>
      <ul>
        {holdings.map(holding => (
          <li key={holding.symbol}>
            {holding.name} ({holding.symbol}): {holding.quantity} shares
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

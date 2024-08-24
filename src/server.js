// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let holdings = [];

// Dummy stock data
const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 3400 }
];

// Get all stocks
app.get('/api/stocks', (req, res) => {
  res.json(stocks);
});

// Get user holdings
app.get('/api/holdings', (req, res) => {
  res.json(holdings);
});

// Trade stocks
app.post('/api/trade', (req, res) => {
  const { symbol, quantity, type } = req.body;
  const stock = stocks.find(s => s.symbol === symbol);

  if (!stock) return res.status(404).json({ error: 'Stock not found' });

  if (type === 'buy') {
    holdings.push({ ...stock, quantity });
  } else if (type === 'sell') {
    holdings = holdings.filter(h => h.symbol !== symbol || h.quantity > quantity);
  }

  res.json({ message: `Successfully ${type}ed ${quantity} shares of ${symbol}` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

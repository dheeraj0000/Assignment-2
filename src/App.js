// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StockList from './components/StockList';
import TradeForm from './components/TradeForm';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedStock, setSelectedStock] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<StockList onSelectStock={setSelectedStock} />} />
          <Route path="/trade" element={selectedStock ? <TradeForm selectedStock={selectedStock} /> : <p>Select a stock first.</p>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

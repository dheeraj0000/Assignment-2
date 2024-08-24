// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/trade">Trade</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;

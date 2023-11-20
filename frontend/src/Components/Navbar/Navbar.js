// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
      <div className="dropdown">
        <button className="dropbtn">Login/Register</button>
        <div className="dropdown-content">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

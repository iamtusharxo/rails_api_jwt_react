// Home.js

import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Welcome to Our E-commerce Website</h2>
        <p>Explore our latest products and deals!</p>
        
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <button onClick={() => scrollToSection('products')}>Products</button>
        <button onClick={() => scrollToSection('ourMotto')}>Our Motto</button>
        <button onClick={() => scrollToSection('aboutUs')}>About Us</button>
      </div>
      <div className='navbar-right'>
      <div className="dropdown">
        <button className="dropbtn">Login/Register</button>
        <div className="dropdown-content">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './DashboardNavbar.css';
import logo from '../../../../assets/images.png';

const DashboardNavbar = ({ showDropdowns = true, showLogo = false, dropdownLinks = [] }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  const { user } = currentUser;

  const renderDropdownContent = () => {
    return dropdownLinks.map((link, index) => (
      <Link key={index} to={link.to}>
        {link.label}
      </Link>
    ));
  };

  if (!user || !user.role || !user.role.name) {
    return <Navigate to="/login" />;
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {showLogo ? (
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
        ) : null}
      </div>
      <div className="navbar-right">
        {showDropdowns ? (
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">{renderDropdownContent()}</div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default DashboardNavbar;

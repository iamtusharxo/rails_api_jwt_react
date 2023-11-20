import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './DashboardNavbar.css';

const DashboardNavbar = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  const { user } = currentUser;

  const renderDropdownContent = () => {
    if (user && user.role && user.role.name === 'superadmin') {
      return (
        <>
          <Link to="/home">Home</Link>
          <Link to="/superadmin">All Users</Link>
          <Link to="/logout">Logout</Link>
        </>
      );
    } else if (user && user.role && user.role.name === 'admin') {
      return (
        <>
          <Link to="/home">Home</Link>
          <Link to="/admin">All Users</Link>
          <Link to="/logout">Logout</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/home">Home</Link>
          <Link to="/users">All Users</Link>
          <Link to="/logout">Logout</Link>
        </>
      );
    }
  };

  if (!user || !user.role || !user.role.name) {
    return <Navigate to="/login" />;
  }

  return (
    <nav className="navbar">
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            {renderDropdownContent()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

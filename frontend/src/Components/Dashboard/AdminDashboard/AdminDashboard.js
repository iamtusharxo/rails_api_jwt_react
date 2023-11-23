// AdminDashboard.js

import React from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar';

const AdminDashboard = () => {
  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home' },
        { to: '/profile', label: 'Profile' },
        { to: '/users', label: 'User' },
        { to: '/logout', label: 'Logout' },
      ]} />
      <h2>Admin Dashboard</h2>
      <p>This is the Admin dashboard content.</p>
    </div>
  );
};

export default AdminDashboard;

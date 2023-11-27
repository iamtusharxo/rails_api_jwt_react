import React from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar'
const SuperAdminDashboard = () => {
  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home' },
        { to: '/users', label: 'User' },
        { to: '/logout', label: 'Logout' },
      ]} />
      <h2>Super Admin Dashboard</h2>
      <p>This is the Super Admin dashboard content.</p>
    </div>
  );
};

export default SuperAdminDashboard;

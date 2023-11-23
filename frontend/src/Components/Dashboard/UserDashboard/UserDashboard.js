import React from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar';

const UserDashboard = () => {
  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home' },
        { to: '/users', label: 'User' },
        { to: '/logout', label: 'Logout' },
      ]} />
      <h2>User Dashboard</h2>
      <p>This is the User dashboard content.</p>
    </div>
  );
};

export default UserDashboard;

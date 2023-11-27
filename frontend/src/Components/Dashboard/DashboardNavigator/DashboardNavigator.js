// DashboardNavigator.js

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
import SuperAdminDashboard from '../SuperAdminDashboard/SuperAdminDashboard';

const DashboardNavigator = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
  const { user } = currentUser;
  if (!user || !user.role) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      {user.role.name === 'admin' && <Route path="/" element={<AdminDashboard />} />}
      {user.role.name === 'user' && <Route path="/" element={<UserDashboard />} />}
      {user.role.name === 'superadmin' && <Route path="/" element={<SuperAdminDashboard />} />}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default DashboardNavigator;

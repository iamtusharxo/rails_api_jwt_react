// Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import DashboardNavbar from '../Dashboard/shared/DashboardNavbar/DashboardNavbar';
import API_BASE_URL from '../shared/config/apiconfig';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const userId = localStorage.getItem('UserId');
          const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
            headers: {
              Authorization: `${token}`,
            },
          });

          setUserProfile(response.data);
          setError('');
        }
      } catch (error) {
        setError('Error fetching user profile');
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[{ to: '/logout', label: 'Logout' }]} />
      <div className="profile-container">
        {error && <p className="error-message">{error}</p>}
        <h2>User Profile</h2>
        <div className="user-info">
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Role: {userProfile.role && userProfile.role.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

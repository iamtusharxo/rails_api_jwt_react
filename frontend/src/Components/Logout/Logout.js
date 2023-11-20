// components/Logout.js

import React, { useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../shared/config/apiconfig';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      const token = localStorage.getItem('authToken');
      const current_user = localStorage.getItem('currentUser');
      try {
        if (token && current_user){
          await axios.delete(`${API_BASE_URL}/logout`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          localStorage.removeItem('authToken');
          localStorage.removeItem('currentUser');
       }
        navigate('/home');
      } catch (error) {
        navigate('/home');
        console.error('Logout error:', error);
      }
    };
    handleLogout();
  });

  return null;
};

export default Logout;

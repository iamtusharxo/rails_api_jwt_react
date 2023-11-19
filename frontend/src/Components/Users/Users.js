import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../shared/config/apiconfig';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        console.log(token);
        if (token) {
          const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setUsers(response.data);
          setError('');
          const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
          console.log(currentUserData)
          if (currentUserData) {
            setCurrentUserEmail(currentUserData.user.email);
          }
        }
      } catch (error) {
        setError('Error fetching user data');
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>User List</h2>
      <p>Current User Email: {currentUserEmail}</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

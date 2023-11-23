import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../shared/config/apiconfig';
import isLoggedUser from '../shared/config/isLoggedUser';
import './Users.css';
import DashboardNavbar from '../Dashboard/shared/DashboardNavbar/DashboardNavbar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [error, setError] = useState('');
  const isLoggedIn = isLoggedUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const response = await axios.get(`${API_BASE_URL}/users`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          setUsers(response.data);
          setError('');
          const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
          if (currentUserData) {
            setCurrentUserEmail(currentUserData.user.email);
          }
        }
      } catch (error) {
        setError('Error fetching user data');
      }
    };

    fetchData();
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    navigate('/dashboard');
    return null;
  }

  return (
    <>
    <DashboardNavbar showDropdowns={false} showLogo={true} />
    <div className="users-container">
      {error && <p className="error-message">{error}</p>}
      <h2>User List</h2>
      <p className="current-user">Current User Email: {currentUserEmail}</p>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Reports</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role.name}</td>
                <td>
                  <ul>
                    {user.reports.map((report) => (
                      <li key={report.title}>{report.title}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>

  );
};

export default Users;

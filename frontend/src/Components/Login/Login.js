import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../shared/config/apiconfig';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        user: {
          email: email,
          password: password,
        }
      });
      const current_user = response.data.status.data
      const auth_token = response.headers.authorization;
      localStorage.setItem('authToken', auth_token);
      localStorage.setItem('currentUser', JSON.stringify(current_user));
      navigate('/users')
      setError('');
    } catch (error) {
      console.log(error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;

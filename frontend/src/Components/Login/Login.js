import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../shared/config/apiconfig';
import isLoggedUser from '../shared/config/isLoggedUser';
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedUser()) {
      navigate('/');
    }
  }, [navigate]);


  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/login`, {
        user: {
          email: email,
          password: password,
        },
      });
      const currentUser = response.data.status.data;
      const userId = currentUser.user.id;
      const authToken = response.headers.authorization;

      sessionStorage.setItem('authToken', authToken);
      sessionStorage.setItem('UserId', userId);
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

      navigate('/dashboard');
      setError('');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-container">
      <form className="login-form">
      <div className='login-heading'>Login</div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin} disabled={loading} className="btn-submit">
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <a className='footer-link' onClick={() => navigate('/forget-password')}>Forgot Password</a>
          <div style={{ margin: '10px' }}></div>
          <a className='footer-link' onClick={() => navigate('/home')}>Back to Home</a>
        </div>


      </form>
    </div>
  );
};

export default Login;

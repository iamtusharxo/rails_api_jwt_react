import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../shared/config/apiconfig';
import './Registration.css';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';
import './Registration.css'
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleRegistration = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        user: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      });
      toastr.success('Success Notification!');
      navigate('/login');
    } catch (error) {
      toastr.error(error.response.data.status);
      console.error('Registration error:', error.response.data);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form className="registration-form">
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="error-message">{errors.email}</div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <div className="error-message">{errors.password}</div>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
        <a className='footer-link' onClick={() => navigate('/')}>Back to Home</a>
      </form>
    </div>
  );
};

export default Registration;

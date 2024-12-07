import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await authService.register(username, password);
      console.log('Registration successful:', response); // Debug log
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register New Account</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;

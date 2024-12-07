import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Special case for admin
      if (username === 'admin@gmail.com' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
        localStorage.setItem('role', 'admin');
        setIsAuthenticated(true);
        navigate('/profile');
        return;
      }

      // Regular user login
      const response = await authService.login(username, password);
      if (response && response.token) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('role', response.user.role);
        setIsAuthenticated(true);
        navigate('/profile');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username/Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username or email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        New user? <a href="/register">Register here</a>
      </p>
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Admin Login:</p>
        <p>Email: admin@gmail.com</p>
        <p>Password: admin123</p>
      </div>
    </div>
  );
};

export default Login;
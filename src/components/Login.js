import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Admin login check
      if (username === 'admin@gmail.com' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
        localStorage.setItem('role', 'admin');
        setIsAuthenticated(true);
        navigate('/profile');
        return;
      }

      // Regular user login - make API call to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username: username, role: 'user' }));
        localStorage.setItem('role', 'user');
        setIsAuthenticated(true);
        navigate('/profile');
      } else {
        // If login fails but we want to allow any user
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ username: username, role: 'user' }));
        localStorage.setItem('role', 'user');
        setIsAuthenticated(true);
        navigate('/profile');
      }
    } catch (error) {
      // If API call fails, still allow login
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ username: username, role: 'user' }));
      localStorage.setItem('role', 'user');
      setIsAuthenticated(true);
      navigate('/profile');
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
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Admin Login:</p>
        <p>Email: admin@gmail.com</p>
        <p>Password: admin123</p>
      </div>
    </div>
  );
};

export default Login;
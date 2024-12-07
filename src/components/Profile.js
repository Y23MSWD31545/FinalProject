import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const username = storedUser ? storedUser.username : 'User';
  const role = storedUser ? storedUser.role : 'user';

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {username}!</h2>
      </div>
      
      <div className="profile-info">
        <div className="info-group">
          <label>Username</label>
          <span>{username}</span>
        </div>
        <div className="info-group">
          <label>Role</label>
          <span>{role}</span>
        </div>
      </div>

      <div className="profile-actions">
        <button className="profile-button" onClick={() => navigate('/events')}>
          View Events
        </button>
        <button className="profile-button logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
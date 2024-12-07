import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';


const Profile = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const username = storedUser ? storedUser.username : 'User';

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
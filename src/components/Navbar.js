import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAuthenticated, setIsAuthenticated, userRole }) {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const username = storedUser ? storedUser.username : '';

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {isAuthenticated && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/upcoming-events">Upcoming Events</Link></li>
            {userRole === 'admin' && (
              <li><Link to="/add-event">Add Event</Link></li>
            )}
            <li className="username">Welcome, {username}!</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
        {!isAuthenticated && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

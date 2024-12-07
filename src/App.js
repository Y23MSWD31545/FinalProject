import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import UpcomingEvents from './components/UpcomingEvents';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isAuthenticated');
    const role = localStorage.getItem('role');
    setIsAuthenticated(!!loggedInStatus);
    setUserRole(role);
  }, []);

  const ProtectedRoute = ({ element, allowedRole }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    if (allowedRole && userRole !== allowedRole) {
      alert('Access denied. This page is only accessible to administrators.');
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <Router>
      <div>
        <Navbar 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
          userRole={userRole} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          
          <Route 
            path="/profile" 
            element={<ProtectedRoute element={<Profile setIsAuthenticated={setIsAuthenticated} />} />} 
          />
          <Route 
            path="/events" 
            element={<ProtectedRoute element={<Events />} />} 
          />
          <Route 
            path="/upcoming-events" 
            element={<ProtectedRoute element={<UpcomingEvents />} />} 
          />
          <Route 
            path="/add-event" 
            element={<ProtectedRoute element={<AddEvent />} allowedRole="admin" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
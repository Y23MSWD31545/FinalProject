import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import Profile from './components/Profile';
import AddEvent from './components/AddEvent';
import Login from './components/Login';
import Register from './components/Register';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userRole = storedUser ? storedUser.role : null;

  return (
    <Router>
      <div className="App">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
          userRole={userRole}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route 
            path="/profile" 
            element={
              <Profile setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route path="/add-event" element={<AddEvent />} />
          <Route 
            path="/login" 
            element={
              <Login setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route path="/register" element={<Register />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
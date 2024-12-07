import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    // Sort events by date
    const sortedSubmissions = existingSubmissions.sort((a, b) => new Date(a.date) - new Date(b.date));
    setSubmissions(sortedSubmissions);
  }, []);

  const handleDelete = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="upcoming-events-container">
      <h1>Upcoming Events</h1>
      {submissions.length === 0 ? (
        <div className="no-events">
          <p>No upcoming events.</p>
          <Link to="/add-event" className="add-event-link">
            Add New Event
          </Link>
        </div>
      ) : (
        <div className="event-list">
          {submissions.map((event, index) => (
            <div key={index} className="event-item">
              <h4>{event.name}</h4>
              <p><strong>Date:</strong> {formatDate(event.date)}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <button 
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                Delete Event
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
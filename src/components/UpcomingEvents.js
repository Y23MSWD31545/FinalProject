import React, { useEffect, useState } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(existingSubmissions);
  }, []);

  const handleDelete = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions)); 
  };

  return (
    <div className="upcoming-events-container">
      <h1>Upcoming Events</h1>
      {submissions.length === 0 ? (
        <p>No upcoming events.</p>
      ) : (
        <div className="event-list">
          {submissions.map((event, index) => (
            <div key={index} className="event-item">
              <h4>Event {index + 1}</h4>
              <p><strong>Event Name:</strong> {event.name}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <button onClick={() => handleDelete(index)}>Delete Event</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
import React, { useState } from 'react';
import './AddEvent.css'; 

const AddEvent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = { name, date, time, venue, description };

    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    
    localStorage.setItem('submissions', JSON.stringify([...existingSubmissions, newSubmission]));

    setName('');
    setDate('');
    setTime('');
    setVenue('');
    setDescription('');
  };

  return (
    <div className="add-event-container">
      <center>
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label htmlFor="name">Event Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="venue">Venue:</label>
            <input
              type="text"
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default AddEvent;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEvent.css';
import { API_BASE_URL } from '../config';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    sportType: '',
    maxParticipants: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(eventData)
      });

      if (response.ok) {
        alert('Event added successfully!');
        navigate('/events');
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to add event');
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Sport Type</label>
          <input
            type="text"
            name="sportType"
            value={eventData.sportType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Maximum Participants</label>
          <input
            type="number"
            name="maxParticipants"
            value={eventData.maxParticipants}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
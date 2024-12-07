import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    venue: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing submissions from localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    
    // Add new submission to the array
    const updatedSubmissions = [...existingSubmissions, formData];
    
    // Save back to localStorage
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    
    // Reset form
    setFormData({
      name: '',
      date: '',
      time: '',
      venue: '',
      description: ''
    });

    // Navigate to upcoming events page
    navigate('/upcoming-events');
  };

  return (
    <div className="add-event-container">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Sports Event Management</h1>
        <p>Track and manage your favorite sports events with ease!</p>
      </section>

      <div className="image-section">
        <img 
          src="https://johancruyffinstitute.com/wp-content/uploads/2014/09/Course-in-Sport-Event-Management.jpg" 
          alt="Sports Event Management"
        />
      </div>

      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <p>
            At Sports Event Management, we are passionate about delivering exceptional sporting experiences. 
            Our platform provides comprehensive solutions for managing and participating in various sports events 
            across the region. From local tournaments to professional competitions, we ensure seamless organization 
            and execution of every event.
          </p>
        </div>
      </section>

      <section className="features-section">
        <Link to="/events" className="feature-card-link">
          <div className="feature-card">
            <h3>Event Registration</h3>
            <p>Easy and quick registration process for all sports events. Register as a player, team, or volunteer.</p>
          </div>
        </Link>

        <a 
          href="https://crex.live/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="feature-card-link"
        >
          <div className="feature-card">
            <h3>Live Updates</h3>
            <p>Stay updated with real-time event schedules, scores, and important announcements.</p>
          </div>
        </a>

        <div className="feature-card">
          <h3>Professional Management</h3>
          <p>Expert event management ensuring smooth operation of all sporting activities.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
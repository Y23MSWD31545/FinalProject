import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Sports Event Management</h1>
        <p>
          Your one-stop platform for managing and participating in sports events.
          Join us to discover upcoming tournaments, register for competitions,
          and connect with fellow sports enthusiasts.
        </p>
      </section>

      <section className="event-section">
        <div className="tin">
          <h1>Featured Events</h1>
        </div>

        <div className="event-card-container">
          <div className="event-card">
            <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" alt="Football" />
            <h2>Football Tournament</h2>
            <p>Join our annual football tournament and compete with the best teams.</p>
            <button>Learn More</button>
          </div>

          <div className="event-card">
            <img src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg" alt="Basketball" />
            <h2>Basketball Championship</h2>
            <p>Experience the thrill of basketball in this championship event.</p>
            <button>Learn More</button>
          </div>

          <div className="event-card">
            <img src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg" alt="Tennis" />
            <h2>Tennis Open</h2>
            <p>Showcase your tennis skills in our open tournament.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <footer>
        <section>
          <div style={{ display: 'flex', justifyContent: 'center', color: 'rgb(0, 0, 0)', paddingBottom: '1rem', paddingTop: '2rem' }}>
            <h1>Contact Us</h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: '3rem' }}>
            <div><ion-icon name="logo-facebook"></ion-icon> Facebook</div>
            <div><ion-icon name="logo-instagram"></ion-icon> Instagram</div>
            <div><ion-icon name="logo-twitter"></ion-icon> Twitter</div>
            <div><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;
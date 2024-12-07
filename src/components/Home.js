import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Sports Event Management</h1>
      <p>Track and manage your favorite sports events!</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          style={{ width: '1100px', height: '600px' }} 
          src="https://johancruyffinstitute.com/wp-content/uploads/2014/09/Course-in-Sport-Event-Management.jpg" 
          alt="Sports Event Management"
        />
      </div>

      <section 
        className="hero" 
        style={{ 
          border: '1px solid black', 
          marginLeft: '15rem', 
          marginRight: '15rem', 
          marginTop: '4rem', 
          padding: '0.5rem', 
          borderRadius: '18px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
          <h1>About Us</h1>
        </div>
        <div style={{ padding: '0.5rem', display: 'flex', justifyContent: 'center', color: 'black' }}>
          At your website, we are experts in sports event management, delivering top-tier experiences for events of all sizes. From local tournaments to large-scale international competitions, we handle every aspect of planning and execution. Our dedicated team ensures smooth logistics, venue coordination, and seamless sponsor engagement, leaving no detail overlooked.
          
          We’re passionate about creating memorable experiences for athletes, fans, and communities. With professionalism, precision, and a love for sports, we bring your event vision to life. Whether it’s managing schedules or coordinating with key partners, we make sure everything runs effortlessly. Let us take care of the details so you can enjoy the game!
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
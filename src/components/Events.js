import React from 'react';
import './Event.css';

function Events() {
  return (
    <section>
      <div className="tin">
        <h1>Our Events</h1>
      </div>

      <div className="event-card-container">
        
        <div className="event-card">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC2ufflR0GGoSvNRZvt_huoc6vwrDRwYiGA&s" 
            alt="Event" 
          />  
          <h2>Yuva Kabbadi Series</h2>
          <p>
          The Yuva Kabaddi Series is a prominent youth-focused kabaddi tournament in India that aims to promote the sport among young athletes. Designed to identify and nurture emerging talent, the series features teams composed of young players from various states, competing at a high level. Through this platform, participants not only showcase their skills but also gain valuable experience in a competitive environment
          </p>
          <a href="https://register-player.yuvakabaddi.com/login">
          
          <button>Register</button>
          </a>
        </div>

        <div className="event-card">
          <img 
            src="https://images.mykhel.com/img/2022/07/apl-logo-1656758264.jpg" 
            alt="Event" 
          />  
          <h2>APL</h2>
          <p>
          The Andhra Premier League (APL) is a professional T20 cricket league in Andhra Pradesh, India, designed to promote local talent and enhance the state's cricketing landscape. Featuring franchise teams from various cities, the APL provides a competitive platform for both established and emerging players. By organizing exciting matches, the league aims to engage fans and foster a love for cricket among the youth in the region.
          </p>
          <a href="https://andhracricket.org/player_reg.php" target="_blank" rel="noopener noreferrer">
            <button>Register</button>
          </a>
         
        </div>

        <div className="event-card">
          <img 
            src="https://s10896.pcdn.co/wp-content/uploads/2023/11/Pembroke-Volleyball-Tournament-Event-Header-Image.jpg" 
            alt="Event" 
          />  
          <h2>Indoor Volleyball Tournaments</h2>
          <p>
          Indoor Volleyball Tournaments are competitive events held in gymnasiums, featuring teams that compete on a standard court. Ranging from local club matches to national and international championships, these tournaments follow the traditional six-player format governed by FIVB rules. They showcase top athletes, promote teamwork, and contribute to the sport's development, engaging fans and fostering a vibrant volleyball community.
          </p>
          <a href="https://www.pdffiller.com/jsfiller-desk20/?traceparent=00-b89bb361e8eb122bc1d038c86fab0cdb-7ae335874817c4c0-01&requestHash=198e259bdcc7c9052b1fca2b90c91005f4d4cbda3195c4912fae3acfa54b9fb9&lang=en&projectId=1653636714&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-redesign-full=true&act-notary-pro-integration=true&jsf-fake-edit-embedded=true&isSkipEditorLoadFrequency=true&jsf-desktop-ux-for-tablets=false&jsf-probability-70=true&jsf-socket-io=false&routeId=3e6e436d11f3a74e90aa5784b6368ab8&mode=force_choice&cs_su=64e7e817-bea6-45cf-b1fd-033a0166012e&cs_uu=a0c2104a-da91-4623-89d9-65e61d71c399#51eb6d8fc1ad45ba88ace96f7b3a3264">
          <button>Register</button>
          </a>
        </div>
      </div>

      <footer>
        <h1>Contact Us</h1>
        <div>
          <div><ion-icon name="logo-facebook"></ion-icon> Facebook</div>
          <div><ion-icon name="logo-instagram"></ion-icon> Instagram</div>
          <div><ion-icon name="logo-twitter"></ion-icon> Twitter</div>
          <div><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</div>
        </div>
      </footer>
    </section>
  );
}

export default Events;
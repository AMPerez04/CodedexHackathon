import React from 'react';
import './home.css';

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #4E598C, rgba(0,0,0,0)), url(${require("../sandp.jpg")})`,
          width: "100vw",
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="container mx-auto p-4"
      >
        <div className="overlay">
          <h1 className="header-title">SIP & PLAY</h1>
        </div>
      </div>

      <nav className="navbar">
        <a href="#hours-location">Hours |</a>
        <a href="#hours-location"> Location |</a>
        <a href="#hours-location"> Reservation |</a>
        <a href="#hours-location"> How it Works |</a>
        <a href="#bloom-burrow"> Bloomburrow Pre-release |</a>
        <a href="#disney-lorcana"> Disney Lorcana Event</a>
      </nav>

      {/* Hours */}
      <div id="hours-location" className="section">
        <div>
          <h1>WHAT ARE OUR HOURS?</h1>
          <p>New opening hours:</p>
          <p>Sunday: 10AM-11PM</p>
          <p>Mon-Thurs: 11AM-11PM</p>
          <p>Fri: 11AM-Midnight</p>
          <p>Sat: 10AM-Midnight</p>
          <p>Our kitchen closes 2.5-3 hours before we close!</p>
        </div>
        <div>
          <h1>Visit Soon!</h1>
        </div>
      </div>

      {/* Where we are */}
      <div className="section">
        <div>
          <h1>WHERE ARE WE LOCATED?</h1>
          <p>471 5th Ave.</p>
          <p>Brooklyn, NY 11215</p>
          <p>Email: sipnplaynyc@mail.com</p>
          <p>Phone: 718-971-1684</p>
        </div>
      </div>

      {/* Reservations */}
      <div className="section">
        <div>
          <h1>RESERVATION</h1>
          <div>
            <h2>Reservations are open for any party size!</h2>
            <p>
              For large parties (9+ or more people), please email us at
              sipnplaynyc@gmail.com to inquire about a reservation.
            </p>
            <button
              onClick={() => window.location.href = 'https://www.exploretock.com/sipnplay/'}
              style={{
                padding: '10px 20px',
                backgroundColor: '#DEE9D3',
                color: '#000',
                border: '1px solid #000',
                cursor: 'pointer',
                height: '100px',
                width: '200px',
                fontSize: '20px',
              }}
            >
              Make a Reservation!
            </button>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="section">
        <div>
          <h1>How it works</h1>
          <p>
            Come on in with your friends and family and play boardgames from
            our collection of over 500+ games! Just $10 a person for 3 hours of
            gameplay. ($12 a person Friday-Sunday and Holidays)
          </p>
          <p>
            Play while enjoying bubble tea, coffee, beer sandwiches or salads
            and have a great time! If you want to guarantee a table, you can
            make a reservation which is $15 a person for 3 hours of gameplay.
          </p>
        </div>
      </div>

      {/* Bloomburron */}
      <div className="section">
        <div>
          <h1>Bloomburrow Pre-release</h1>
          <ul>
            <li>7/26 Bloomburrow Pre-release 6pm - <a href="https://square.link/u/vYewrAQG" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li>7/27 Bloomburrow Pre-release 11am - <a href="https://square.link/u/v0AzfRyj" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li>7/27 Bloomburrow Pre-release 5pm - <a href="https://square.link/u/pIcxnxZO" target="_blank" rel="noopener noreferrer">Register</a></li>
            <li>7/29 Bloomburrow Pre-release 6pm - <a href="https://square.link/u/yXIMpJzp" target="_blank" rel="noopener noreferrer">Register</a></li>
          </ul>
        </div>
        <div
          style={{
            backgroundImage: `url(${require("../bloom.jpg")})`,
            width: "100vw",
            height: "60vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="container mx-auto p-4"
        />
      </div>

      {/* Disney Lorcana */}
      <div className="section">
        <div>
          <h1>Disney Lorcana Event</h1>
          <div
            style={{
              backgroundImage: `url(${require("../dis.jpg")})`,
              width: "50vw",
              height: "60vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="container mx-auto p-4"
          />
          <h2>Disney Lorcana Event</h2>
          <p>
            Want to play the new Disney trading card game? We're hosting a
            Lorcana learn to play event on July 22nd 6pm! Just grab a starter
            deck at Sip & Play and we'll have players on hand to teach you.
          </p>
          <p>Excited to see you there!</p>
        </div>
      </div>

      {/* Footer */}
      <div className="end">
        <p>sipnplaynyc@gmail.com</p>
        <p>718-971-1684</p>
        <p><br /></p>
        <p>©2020 by Sip & Play</p>
      </div>
    </div>
  );
}

export default Home;

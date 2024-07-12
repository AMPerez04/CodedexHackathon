import React from 'react';
import "./Reserve.css";

function Reserve() {
  return (
    <div className="container mx-auto p-4">
      {/* Reservation */}
      <div className='section'>
        <div className="text-center">
          <h1 className='headers'>RESERVATION DETAILS</h1>
          <p className='wor'>We have just started using a new reservation software, Tock!</p>
          <p className='wor'>Reservations are $15 a person for 3 hours of game time.</p>
          <p className='wor'>All reservations can be made on our new site:</p>
          <p className='wor'><a href="https://www.exploretock.com/sipnplay/">https://www.exploretock.com/sipnplay/</a></p>
          <button
            onClick={() => window.location.href = 'https://www.exploretock.com/sipnplay/'}
            className="reserve-button"
          >
            Reserve Now!
          </button>
          <div
            style={{
              backgroundImage: `url(${require("./sips.jpg")})`,
              width: "50vw",
              height: "60vh",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "20px auto",
            }}
            className="reserve-background"
          />
        </div>
      </div>

      {/* Birthday Package */}
      <div className='section'>
        <div className="text-center">
          <h1 className='headers'>BIRTHDAY PACKAGES</h1>
          <p className='wor'>Renting entire backroom:</p>
          <p className='wor'>$350 for 3 hours of game time all to your party!</p>
          <p><br></br></p>
          <p className='wor'>Birthday Backroom Packages:</p>
          <p className='wor'>Phone: 718-971-1684</p>
          <p className='wor'>$550 Birthday basic package. Have the entire backroom to yourselves and get pizza
            and soda for the whole party! For ten people, each additional person is +$30</p>
            <p><br></br></p>
          <p className='wor'>$700 Birthday premium package. Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, 
            unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45</p>
            <p><br></br></p>
          <p className='wor'>For any other large party inquiries, do fill out the form above!</p>
        </div>
      </div>
    </div>
  );
}

export default Reserve;

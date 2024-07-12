import React from 'react';

function Reserve() {
  return (
    <div className="container mx-auto p-4">
      {/* reservation*/}
      <div className='section'>
        <div>
          <h1>RESERVATION DETAILS</h1>
          <p>We have just started using a new reservation software, Tock!</p>
          <p>Reservations are $15 a person for 3 hours of game time.</p>
          <p>All reservations can be made on our new site:</p>
          <p><a href="https://www.exploretock.com/sipnplay/">https://www.exploretock.com/sipnplay/</a></p>
          <button
            onClick={() => window.location.href = 'https://www.exploretock.com/sipnplay/'}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4E598C',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              height: '100px',
              width: '300px',
              fontSize: '24px',
            }}
          >
            Reserve Now!
          </button>
          <div style={{
            backgroundImage: `url(${require("./sips.jpg")})`, width: "50vw",
            height: "60vh", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
          }} className="container mx-auto p-4">
          </div>
        </div>
      </div>

      {/*bday package*/}
      <div className='section'>
        <div>
          <h1>Birthday Packages</h1>
          <p>Renting entire backroom:</p>
          <p>$350 for 3 hours of game time all to your party!</p>
          <p>{ }</p>
          <p>Birthday Backroom Packages:</p>
          <p>Phone: 718-971-1684</p>
          <p>{ }</p>
          <p>$550 Birthday basic package. Have the entire backroom to yourselves and get pizza
            and soda for the whole party! For ten people, each additional person is +$30</p>
          <p>$700 Birthday premium package. Have the entire backroom to yourselves with pizza, soda, unlimited bubble tea, \
            unlimited appetizers and each participant gets a Sip & Play goodie bag! For ten people, each additional person is +$45</p>
          <p>For any other large party inquiries, do fill out the form above!
          </p>

        </div></div>

      {/* Footer */}
      <div className='end'>
        <p>sipnplaynyc@gmail.com</p>
        <p>718-971-1684</p>
        <p><br></br></p>
        <p>©2020 by Sip & Play</p></div>
    </div>
  );
}
export default Reserve;
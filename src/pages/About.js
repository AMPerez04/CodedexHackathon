import React from 'react';

function About() {
  return (
    <div style={styles.container}>

      <div style={styles.verticalFlex}>
        <div style={{backgroundColor: '#E3CC9880'}}>
          <h1 style={{ margin: "8px", fontSize: '2rem', color: "#e3cc98", fontWeight: "bold"}}>Coffee Shop</h1>
        </div>
        <h1 style={styles.heading}>CHAI? BOBA? WE GOT IT ALL</h1>
        <p style={{fontSize: '1.5rem', color: '#ffffffc0'}}>If you’re always thinking about your next cup, 
we’ve got you covered. Our coffee products 
are guaranteed to be 100% natural from gardening 
to processing into coffee beans.</p>
        <div style={{minWidth: '30vw', maxWidth: '30vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF8C42'}}>
          <h1 style={{margin: "16px" ,fontSize: '1.5rem', fontWeight: 'bold'}}>Explore More</h1>
        </div>
      </div>

      <div style={styles.rightDiv}>
        <div></div>
        <image></image>
        <div></div>
        <div></div>
      </div>

    </div>
  );
}

const styles = {
  rightDiv: {
    width: '60vw',
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    width: '40vw',
    gap: '2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#4E598C',
    color: 'white',
    height: '90vh',
  },
  heading: {
    fontSize: '5rem',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '1rem',
  },
}

export default About;
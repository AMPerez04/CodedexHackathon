import React from 'react';
import './Feedback.css';
function Feedback() {
    return (
        <div className="container mx-auto p-4">
          {/* feedback*/}
          <div className='section'>
            <div>
              <h1 className='res'>Feedback</h1>
              <p className='tex'>Submit general questions, suggestions, and boardgame recommendations below!</p>
              <p>{ }</p>
              <form className="feedback-form">
              <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject"></label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="feedback"></label>
                <textarea id="feedback" name="feedback" rows="4" placeholder="How can we improve?" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            </div></div>
            {/* Feedback Form */}
            <div className='section'>
                {/* ...existing code... */}
            </div>

          {/* Footer */}
          <div className='end'>
            <p>sipnplaynyc@gmail.com</p>
            <p>718-971-1684</p>
            <p><br></br></p>
            <p>©2020 by Sip & Play</p></div>
        </div>
      );
    }
    export default Feedback;

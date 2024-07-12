import React from 'react';
import './Feedback.css';

function Feedback() {
  return (
    <div style={{width:"100vw"}} className="container">
      <div className='section'>
        <div className="text-center">
          <h1 className='res'>Feedback</h1>
          <p className='tex'>Submit general questions, suggestions, and boardgame recommendations below!</p>
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
        </div>
      </div>
      <div className='section text-center'>
        {/* ...existing code... */}
      </div>
    </div>
  );
}

export default Feedback;

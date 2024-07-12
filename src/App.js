import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import Menu from './pages/Menu';
import About from './pages/About';
import Library from './pages/Library';
import Reserve from './pages/Reserve';
import Feedback from './pages/Feedback';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      <div className="navbar" style={{ backgroundColor: '#4e598c', height: '10vh', paddingLeft: '5vw', paddingRight: '10vw', zIndex: 1000 }}>
        <div className="logo-container">
          <img src={require('./sipnplay.png')} alt="Logo" className="logo" />
        </div>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ☰
        </button>
        <nav className={`nav-menu ${isDropdownOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={toggleDropdown}>Home</Link>
            </li>
            <li>
              <Link to="/calendar" className="nav-link" onClick={toggleDropdown}>Events</Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link" onClick={toggleDropdown}>Menu</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={toggleDropdown}>About</Link>
            </li>
            <li>
              <Link to="/library" className="nav-link" onClick={toggleDropdown}>3D-Library</Link>
            </li>
            <li>
              <Link to="/reserve" className="nav-link" onClick={toggleDropdown}>Reservation</Link>
            </li>
            <li>
              <Link to="/feedback" className="nav-link" onClick={toggleDropdown}>Feedback</Link>
            </li>
            <li>
              <a href="https://squareup.com/gift/SWP5P3242C38Q/order" className="nav-link" onClick={toggleDropdown}>Giftcard</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
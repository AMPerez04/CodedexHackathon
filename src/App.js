import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import Menu from './pages/Menu';
import Reserve from './pages/Reserve';
import Feedback from './pages/Feedback';


function App() {
  return (
    <Router>
      <div className="flex bg-gray-800" style={{ backgroundColor: '#4E598C', borderBottomWidth: "1px",BorderColor:"white" }}>
        <img src={require('./sipnplay.png')} alt="Logo" className="w-20 h-20" />
        <nav className="p-4 ml-auto">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/calendar" className="text-white hover:text-gray-400">Event Calendar</Link>
            </li>
            <li>
              <Link to="/menu" className="text-white hover:text-gray-400">Menu</Link>
            </li>
            <li>
              <Link to="/reserve" className="text-white hover:text-gray-400">Reserve</Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white hover:text-gray-400">Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </Router>
  );
}

export default App;

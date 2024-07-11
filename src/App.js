import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calendar">Event Calendar</Link>
        <Link to="/menu">Menu</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;

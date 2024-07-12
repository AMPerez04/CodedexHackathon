import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import Menu from './pages/Menu';
import About from './pages/About.js';
import Library from './pages/Library.js';

function App() {
	return (
		<Router>
			<div className="flex items-center bg-gray-800 p-4" style={{ backgroundColor: '#4E598C', height: '10vh', paddingLeft: '5vw', paddingRight: "10vw"}}>
				<div className="bg-white rounded-full w-20 h-20 flex items-center justify-center m-4 shadow-lg">
					<img src={require('./sipnplay.png')} alt="Logo" className="w-20 h-20" />
				</div>
				<nav className="ml-auto">
					<ul className="flex space-x-12">
						<li>
							<Link to="/" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">Home</Link>
						</li>
						<li>
							<Link to="/calendar" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">Events</Link>
						</li>
						<li>
							<Link to="/menu" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">Menu</Link>
						</li>
						<li>
							<Link to="/about" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">About</Link>
						</li>
						<li>
							<Link to="/library" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">3D-Library</Link>
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
			</Routes>
		</Router>


	);
}

const styles = {
	menuItem: {
		fontSize: '2rem',

	}
}

export default App;

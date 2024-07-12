import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventCalendar from './pages/EventCalendar';
import Menu from './pages/Menu';
import About from './pages/About.js';
import Library from './pages/Library.js';
import Reserve from './pages/Reserve';
import Feedback from './pages/Feedback';

import items from './data';

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [activeCategory, setActiveCategory] = useState("");
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
	setActiveCategory(category);
	
	if (category === "all") {
		setMenuItems(items);
		return;
	}

	const newItems = items.filter((item) => item.category === category);
	setMenuItems(newItems);
	};
	return (
		<Router>
			<div className="flex items-center bg-gray-800 p-4" style={{ backgroundColor: '#4E598C', height: '10vh', paddingLeft: '5vw', paddingRight: "10vw", zIndex: 1000}}>
				<div className="bg-white rounded-full w-16 h-16 flex items-center justify-center m-4 shadow-lg">
					<img src={require('./sipnplay.png')} alt="Logo" className="w-16 h-16" />
				</div>
				<nav className="ml-auto">
					<ul className="flex space-x-11">
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
						<li>
							<Link to="/reserve" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">Reserve</Link>
						</li>
						<li>
							<Link to="/feedback" style={styles.menuItem} className="text-white text-lg hover:text-gray-400 transition duration-300">Feedback</Link>
						</li>
					</ul>
				</nav>
			</div>
			
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/calendar" element={<EventCalendar />} />
				<Route path="/menu" element={<Menu items={menuItems} 
					filterItems={filterItems} 
					activeCategory={activeCategory} 
					categories={categories} />} />
				<Route path="/about" element={<About />} />
				<Route path="/library" element={<Library />} />
				<Route path="/reserve" element={<Reserve />} />
				<Route path="/feedback" element={<Feedback/>} />
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

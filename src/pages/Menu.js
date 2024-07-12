import React, { useState, useEffect }  from "react";
import Categories from "../Categories";
import { Canvas } from '@react-three/fiber';
import '../general.css';
import Carousel from '../Carousel';
import { OrbitControls } from '@react-three/drei';

const Menu = ({ items, filterItems, activeCategory, categories }) => {
  return (
    <div className="section-center">
      <div style={{ height: '40vh', width: '100vw' }}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls maxPolarAngle={Math.PI / 2} 
              minPolarAngle={Math.PI / 2}
              maxZoom={0} minZoom={0}
              maxDistance={4.5} minDistance={4.5}/>
            <group position={[0, -0.75, 0]}>  
              <Carousel />
            </group>
        </Canvas>
      </div>
      <section className="menu-section">
        <div className="title">
          <h1 className='menu section-header'>Our Menu</h1>
          <div className="underline"></div>
        </div>
          <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
          />
      </section>
      <div className="menu-items">
      {items.map((item) => {
        const { id, title, category, price, is3D, file } = item;
        return (
          <article key={id} className="menu-item">
            <div className="item-info">
              <header>
                <h2 className=' menu item-name'>{title}</h2>
                <h2 className=" menu price">{price}</h2>
              </header>
            </div>
          </article>
        );
      })}
      </div>
    </div>
  );
};

export default Menu;
import React, { useState, useEffect, useRef }  from "react";
import Categories from "../Categories";
import { Canvas } from '@react-three/fiber';
import '../general.css';
import Carousel from '../Carousel';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';


function Model({ file }) {
  const gltf = useLoader(GLTFLoader, file);
  const modelRef = useRef();
  const box = new THREE.Box3().setFromObject(gltf.scene);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);
  const maxDimension = Math.max(size.x, size.y, size.z);
  const scale = 1 / maxDimension;

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale, scale, scale);
      modelRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    }
  }, [scale, center]);

  return <primitive ref={modelRef} object={gltf.scene} />;
}


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
              maxDistance={3.35} minDistance={3.35}/>
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
              {is3D ? (
                <Canvas style ={{ height: 150, width: 270 }}>
                  <PerspectiveCamera makeDefault fov={60} position={[0, 0.7, 1]} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 5]} />
                  {/* <OrbitControls maxDistance={1.25} minDistance={1.25} /> */}
                  <Suspense fallback={<Html><div>Loading...</div></Html>}>
                    <Model file={file} />
                    <OrbitControls />
                  </Suspense>
                </Canvas>
              ) : (
                <img src={file} alt={title} width={300} height={300}/>
              )}
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
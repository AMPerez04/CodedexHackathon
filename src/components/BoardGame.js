import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BoardGame({ path, position, onClick, name, scale, rotation }) {
  const { scene } = useGLTF(path);
  const [hovered, setHovered] = useState(false);
  const outlineRef = useRef();
  const meshRef = useRef();

  // Clone the scene to use for each instance
  const clonedScene = scene.clone(true);

  // Apply outline effect
  const outline = scene.clone(true);
  outline.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.BackSide });
      child.scale.multiplyScalar(1.2); // Slightly scale up the outline
    }
  });

  useFrame(() => {
    if (outlineRef.current) {
      outlineRef.current.visible = hovered;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material.needsUpdate = true;
        }
      });
    }
  }, [hovered]);

  return (
    <>
      <primitive
        ref={meshRef}
        object={clonedScene}
        position={position}
        scale={hovered ? [0.55, 0.55, 0.55] : [0.5, 0.5, 0.5]}
        rotation={rotation ? rotation : [0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick ? () => onClick(name) : null}
      />

    </>
  );
}

export default BoardGame;

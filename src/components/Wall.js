import React, { useState, useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Wall({ path, position, rotation, scale}) {
  const { scene } = useGLTF(path);
  const meshRef = useRef();

  // Clone the scene to use for each instance
  const clonedScene = scene.clone(true);



  return (
    <>
      <primitive
        object={clonedScene}
        scale={scale}
        position={position}
        rotation={rotation ? rotation : [0, 0, 0]}
      />

    </>
  );
}

export default Wall;

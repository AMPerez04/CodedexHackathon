import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function Menu() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Menu</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]}>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
        <Box position={[1.2, 0, 0]}>
          <meshStandardMaterial attach="material" color="blue" />
        </Box>
      </Canvas>
    </div>
  );
}

export default Menu;

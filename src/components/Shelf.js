import React from 'react';
import { Box } from '@react-three/drei';

function Shelf({ position }) {
  const shelfThickness = 0.1;
  const shelfDepth = 1.0;
  const shelfWidth = 2;
  const shelfHeight = 2;
  const numberOfShelves = 6;

  const totalHeight = 6;
  const halfHeight = totalHeight / 2;

  return (
    <group position={position}>
      {/* Left side */}
      <Box args={[shelfThickness, totalHeight, shelfDepth]} position={[-shelfWidth / 2 + shelfThickness / 2, 0, 0]}>
        <meshStandardMaterial color="saddlebrown" />
      </Box>
      {/* Right side */}
      <Box args={[shelfThickness, totalHeight, shelfDepth]} position={[shelfWidth / 2 - shelfThickness / 2, 0, 0]}>
        <meshStandardMaterial color="saddlebrown" />
      </Box>
      {/* Top */}

      {/* Bottom */}
      <Box args={[shelfWidth, shelfThickness, shelfDepth]} position={[0, -halfHeight + shelfThickness / 2, 0]}>
        <meshStandardMaterial color="saddlebrown" />
      </Box>
      {/* Middle shelves */}
      {Array.from({ length: numberOfShelves }).map((_, index) => (
        <Box
          key={index}
          args={[shelfWidth, shelfThickness, shelfDepth]}
          position={[0, -halfHeight + shelfThickness / 2 + shelfHeight * (index + 1) / 2 , 0]}
        >
          <meshStandardMaterial color="saddlebrown" />
        </Box>
      ))}
      {/* Back panel */}
      <Box args={[shelfWidth, totalHeight, shelfThickness]} position={[0, 0, -shelfDepth / 2 + shelfThickness / 2]}>
        <meshStandardMaterial color="saddlebrown" />
      </Box>
    </group>
  );
}

export default Shelf;

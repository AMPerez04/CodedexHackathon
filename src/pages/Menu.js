import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box,Text} from '@react-three/drei';

function Menu() {
  const menuItems = [
    { name: 'Burger', cost: '$10' },
    { name: 'Pizza', cost: '$12' },
    { name: 'Salad', cost: '$8' },
    { name: 'Pasta', cost: '$9' },
    // Add more items here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Menu</h1>
      <div className="flex justify-center mt-8">
        <div className="w-1/2">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {menuItems.map((item, index) => (
              <Box key={index} position={[-1.2 + index * 1.2, 0, 0]}>
                <meshStandardMaterial attach="material" color="orange" />
                <Text
                  position={[0, 0, 0.5]}
                  fontSize={0.2}
                  anchorX="center"
                  anchorY="middle"
                  outlineColor="black"
                  outlineWidth={0.02}
                  outlineOpacity={1}
                  color="white"
                  textAlign="center"
                >
                  {`${item.name}\n${item.cost}`}
                </Text>
              </Box>
            ))}
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Menu;

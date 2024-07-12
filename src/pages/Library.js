import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shelf from '../components/Shelf';
import BoardGame from '../components/BoardGame';
import "./Library.css";
import * as THREE from 'three';

function Library() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div style={{ height: '90vh', display: 'flex', flexDirection: 'row' }}>
      <Canvas style={{ width: '70vw' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 7.5]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 8}
          minAzimuthAngle={-Math.PI / 8}
        />
        <group position={[-2.1, 0, -1.52]} rotation={[0, 0.45, 0]}>
          <Shelf />
        </group>
        <group position={[0, 0, -2]} rotation={[0, 0, 0]}>
          <Shelf />
        </group>
        <group position={[2.1, 0, -1.52]} rotation={[0, -0.45, 0]}>
          <Shelf />
        </group>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>

        {/* Walls */}
        <mesh position={[0, -1.5, -5]}>
          <boxGeometry args={[10, 25, 0.1]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <mesh position={[0, -1.5, 5]}>
          <boxGeometry args={[10, 25, 0.1]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <mesh position={[-5, -1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[10, 25, 0.1]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <mesh position={[5, -1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[10, 25, 0.1]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>

        {/* middle */}
        <group position={[-0.1, 0.275, -2]} rotation={[0, 0, 0]} scale={[1.0, 1.0, 1.0]}>
          <BoardGame path="/assets/board_game_boxes.glb" onClick={() => { setSelectedGame("Many more games!"); setSelectedModel("/assets/board_game_boxes.glb"); }} />
        </group>
        <group position={[-0.1, -2.55, -1.7]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/scuttle.glb" onClick={() => { setSelectedGame("Scuttle"); setSelectedModel("/assets/scuttle.glb"); }} />
        </group>
        <group position={[-0.1, -1.55, -1.7]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/captain.glb" onClick={() => { setSelectedGame("Captain"); setSelectedModel("/assets/captain.glb"); }} />
        </group>
        <group position={[-0.1, -0.55, -1.7]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/scythe.glb" onClick={() => { setSelectedGame("Scythe"); setSelectedModel("/assets/scythe.glb"); }} />
        </group>
        <group position={[-0.1, 1.45, -1.7]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/epic-kingdoms.glb" onClick={() => { setSelectedGame("Tiny Epic Kingdoms"); setSelectedModel("/assets/epic-kingdoms.glb"); }} />
        </group>
        <group position={[-0.1, 2.45, -1.7]} rotation={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/epic-quest.glb" onClick={() => { setSelectedGame("Tiny Epic Quest"); setSelectedModel("/assets/epic-quest.glb"); }} />
        </group>

        {/* right */}
        <group position={[2.0, 0.5, -1.3]} rotation={[0, -0.45, 0]} scale={[0.25, 0.2, 0.25]}>
          <BoardGame path="/assets/dragonmaster2.glb" onClick={() => { setSelectedGame("Dragonmaster"); setSelectedModel("/assets/dragonmaster2.glb"); }} />
        </group>
        <group position={[1.9, -0.55, -1.30]} rotation={[0, -0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/indonesia.glb" onClick={() => { setSelectedGame("Indonesia"); setSelectedModel("/assets/indonesia.glb"); }} />
        </group>
        <group position={[1.9, 1.45, -1.30]} rotation={[0, -0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/mistfall.glb" onClick={() => { setSelectedGame("Mistfall"); setSelectedModel("/assets/mistfall.glb"); }} />
        </group>
        <group position={[1.9, 2.45, -1.30]} rotation={[0, -0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/unearth.glb" onClick={() => { setSelectedGame("Unearth"); setSelectedModel("/assets/unearth.glb"); }} />
        </group>
        <group position={[1.9, -2.55, -1.30]} rotation={[0, -0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/epic-western.glb" onClick={() => { setSelectedGame("Tiny Epic Western"); setSelectedModel("/assets/epic-western.glb"); }} />
        </group>
        <group position={[1.9, -1.55, -1.30]} rotation={[0, -0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/zeds.glb" onClick={() => { setSelectedGame("Dawn of the Zeds"); setSelectedModel("/assets/zeds.glb"); }} />
        </group>

        {/* left */}
        <group position={[-1.9, 0.45, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/zombicide.glb" onClick={() => { setSelectedGame("Zombicide"); setSelectedModel("/assets/zombicide.glb"); }} />
        </group>
        <group position={[-1.9, 1.45, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/abraca-what.glb" onClick={() => { setSelectedGame("Abraca-What"); setSelectedModel("/assets/abraca-what.glb"); }} />
        </group>
        <group position={[-1.9, 2.45, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/blood-rage.glb" onClick={() => { setSelectedGame("Blood Rage"); setSelectedModel("/assets/blood-rage.glb"); }} />
        </group>
        <group position={[-1.9, -0.55, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/cosmic-encounter.glb" onClick={() => { setSelectedGame("Cosmic Encounter"); setSelectedModel("/assets/cosmic-encounter.glb"); }} />
        </group>
        <group position={[-1.9, -2.55, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/wizard.glb" onClick={() => { setSelectedGame("Wizard Academy"); setSelectedModel("/assets/wizard.glb"); }} />
        </group>
        <group position={[-1.9, -1.55, -1.30]} rotation={[0, 0.45, 0]} scale={[1.5, 1.5, 1.5]}>
          <BoardGame path="/assets/viti.glb" onClick={() => { setSelectedGame("Viticulture"); setSelectedModel("/assets/viti.glb"); }} />
        </group>
      </Canvas>
      <div style={{ width: '30vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#4E598C'}}>
        <h1 style={{textAlign: 'center', color: 'white'}}>{selectedGame}</h1>
        <Canvas style={{ height: '40vh', width: '40vh', backgroundColor: '#b4bad5', borderRadius: "30px" }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 7.5]} intensity={1} />
          {selectedModel && (
            <group position={selectedModel === "/assets/dragonmaster2.glb" ? [-.5, 0, 0] : (selectedModel === "/assets/board_game_boxes.glb" ? [-.5,0,0] :[0, 0, 0])} rotation={[0.3, -0.45, 0]} scale={selectedModel === "/assets/dragonmaster2.glb" ? [1, 0.8, 1] : (selectedModel === "/assets/board_game_boxes.glb" ? [3,3,3] :[8, 8, 8])}>
              <BoardGame path={selectedModel} />
            </group>
          )}
        </Canvas>
      </div>
    </div>
  );
}

export default Library;

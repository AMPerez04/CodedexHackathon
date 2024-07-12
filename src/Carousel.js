import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import useLoadModels from './useLoadModels';
import * as THREE from 'three';

const models = [
    './models/Boba.glb',
    './models/Vroom.glb',
    './models/Latte.glb',
    './models/Boba.glb',
    './models/Vroom.glb',
    './models/Latte.glb',
];

const Carousel = () => {
    const groupRef = useRef();
    const isDragging = useRef(false);
    const radius = 3;
    const numItems = models.length;

    // Load models
    const loadedModels = useLoadModels(models);
    const [mainBounds, setMainBounds] = useState(null);
    const [scaleFactors, setScaleFactors] = useState([]);

    // Create the reference cube and calculate bounds
    useEffect(() => {
        const mat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        const boxGeom = new THREE.BoxGeometry(1, 1, 1);
        const cube = new THREE.Mesh(boxGeom, mat);
        cube.name = 'refCube';
        cube.position.set(3, 1, 0);
        cube.scale.set(1, 1, 1);
        cube.material.fog = false;
        const bounds = new THREE.Box3().setFromObject(cube);
        setMainBounds(bounds);
    }, []);

    // Compute scale factors only when models are loaded and mainBounds are set
    useEffect(() => {
        if (mainBounds && loadedModels.length) {
            const factors = loadedModels.map((gltf) => getScaleFactor(gltf.scene));
            setScaleFactors(factors);
        }
    }, [mainBounds, loadedModels]);

    // Helper function to compute scale factor
    const getScaleFactor = (object) => {
        const bbox = new THREE.Box3().setFromObject(object);

        if (!mainBounds) return 1;

        const lengthSceneBounds = {
            x: Math.abs(mainBounds.max.x - mainBounds.min.x),
            y: Math.abs(mainBounds.max.y - mainBounds.min.y),
            z: Math.abs(mainBounds.max.z - mainBounds.min.z),
        };

        const lengthMeshBounds = {
            x: Math.abs(bbox.max.x - bbox.min.x),
            y: Math.abs(bbox.max.y - bbox.min.y),
            z: Math.abs(bbox.max.z - bbox.min.z),
        };

        const lengthRatios = [
            lengthSceneBounds.x / lengthMeshBounds.x,
            lengthSceneBounds.y / lengthMeshBounds.y,
            lengthSceneBounds.z / lengthMeshBounds.z,
        ];

        let minRatio = Math.min(...lengthRatios);
        const padding = 0; // Adjust if needed
        minRatio -= padding;

        return minRatio;
    };

    // Rotate the carousel
    useFrame(() => {
        if (!isDragging.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    // Handle drag interaction
    const bind = useDrag(({ movement: [mx], down }) => {
        isDragging.current = down;
        groupRef.current.rotation.y += mx * 0.0001; // Adjust sensitivity as needed
    });
    return (
        <group ref={groupRef} {...bind()}>
            {mainBounds && scaleFactors.length === loadedModels.length && loadedModels.map((gltf, index) => {
                const angle = (index / numItems) * Math.PI * 2;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);

                // Use precomputed scale factor
                const scaleFactor = scaleFactors[index];

                return (
                    <primitive
                        key={index}
                        object={gltf.scene}
                        position={[x, 0, z]} // Adjust the height position
                        rotation={[0, angle, 0]} // Ensure the model faces the center
                        scale={[scaleFactor, scaleFactor, scaleFactor]}
                    />
                );
            })}
        </group>
    );
};

export default Carousel;
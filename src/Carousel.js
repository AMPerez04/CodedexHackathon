import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';
import { loadModels, computeScaleFactors } from './modelUtils';

const models = [
    './models/Boba.glb',
    './models/Latte.glb',
    './models/Pizza.glb',
    './models/Boba.glb',
    './models/Latte.glb',
    './models/Pizza.glb',
];

const Carousel = () => {
    const groupRef = useRef();
    const isDragging = useRef(false);
    const radius = 2;
    const numItems = models.length;

    const [loadedModels, setLoadedModels] = useState([]);
    const [mainBounds, setMainBounds] = useState(null);
    const [scaleFactors, setScaleFactors] = useState([]);

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

    useEffect(() => {
        const init = async () => {
            const storedScaleFactors = localStorage.getItem('scaleFactors');
            if (storedScaleFactors) {
                setScaleFactors(JSON.parse(storedScaleFactors));
            } else {
                if (mainBounds) {
                    const factors = await computeScaleFactors(mainBounds);
                    setScaleFactors(factors);
                    localStorage.setItem('scaleFactors', JSON.stringify(factors));
                }
            }
            const models = await loadModels();
            setLoadedModels(models);
        };

        init();
    }, [mainBounds]);

    useFrame(() => {
        if (!isDragging.current) {
            groupRef.current.rotation.y += 0.001;
        }
    });

    const bind = useDrag(({ movement: [mx], down }) => {
        isDragging.current = down;
        groupRef.current.rotation.y += mx * 0.0001;
    });

    return (
        <group ref={groupRef} {...bind()}>
            {mainBounds && scaleFactors.length === loadedModels.length && loadedModels.map((gltf, index) => {
                const angle = (index / numItems) * Math.PI * 2;
                const x = radius * Math.cos(angle);
                const z = radius * Math.sin(angle);

                const scaleFactor = scaleFactors[index];

                return (
                    <primitive
                        key={index}
                        object={gltf.scene}
                        position={[x, 0, z]}
                        rotation={[0, angle, 0]}
                        scale={[scaleFactor, scaleFactor, scaleFactor]}
                    />
                );
            })}
        </group>
    );
};

export default Carousel;
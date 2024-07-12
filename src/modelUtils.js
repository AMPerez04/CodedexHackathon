import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const models = [
    './models/Boba.glb',
    './models/Vroom.glb',
    './models/Latte.glb',
    './models/Boba.glb',
    './models/Vroom.glb',
    './models/Latte.glb',
];

// Function to load GLTF models
export const loadModels = () => {
    const loader = new GLTFLoader();
    return Promise.all(models.map(url => {
        return new Promise((resolve, reject) => {
            loader.load(url, gltf => resolve(gltf), undefined, reject);
        });
    }));
};

// Function to compute the scale factor for each model
const getScaleFactor = (object, mainBounds) => {
    const bbox = new THREE.Box3().setFromObject(object);

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

// Function to compute and store scale factors
export const computeScaleFactors = async (mainBounds) => {
    const models = await loadModels();
    return models.map(gltf => getScaleFactor(gltf.scene, mainBounds));
};

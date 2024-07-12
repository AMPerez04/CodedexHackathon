import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const useLoadModels = (models) => {
  return useLoader(GLTFLoader, models);
};

export default useLoadModels;
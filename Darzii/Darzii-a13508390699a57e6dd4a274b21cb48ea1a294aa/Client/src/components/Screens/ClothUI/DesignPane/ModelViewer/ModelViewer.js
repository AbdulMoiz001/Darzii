import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

const ModelViewer = () => {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, './Models/model.glb');
    const model = gltf.scene;
    return (
      <group scale={[1.2, 1.1, 1]}>
        <primitive object={model} />
      </group>
    );
  };

  return (
    <Canvas
      className="webgl"
      camera={{ position: [0, 1, 2], fov: 75 }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 5]} />
      <Model />
    </Canvas>
  );
};

export default ModelViewer;
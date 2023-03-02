import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = sceneRef.current;

    const loader = new GLTFLoader();
    loader.load("./Models/model.glb", function (glb) {
      console.log(glb)
      const root = glb.scene;
      root.scale.set(1.2,1.1,1.0);
      scene.add(root);
    }, function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + "% loaded")
    }, function (error) {
      console.log("An error occurred");
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    const sizes = {
      width: window.innerWidth * 0.6,
      height: window.innerHeight * 0.65
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 1, 2);
    scene.add(camera);

    const renderer = new THREE.WebGL1Renderer({
        canvas: canvas,
        alpha: true
    });
    
    scene.background = null;

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <canvas className="webgl" ref={canvasRef}></canvas>
  );
};

export default ModelViewer;
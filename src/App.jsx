import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import "./App.css";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/potiontest.glb");
  const modelRef = useRef();

  useFrame(({ clock }) => {
    // Rotate the model around the Y-axis
    modelRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.5;
  });
  return (
    <>
      <primitive object={gltf.scene} ref={modelRef} scale={1} />
    </>
  );
};

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

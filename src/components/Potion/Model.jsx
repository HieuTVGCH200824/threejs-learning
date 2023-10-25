import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState, useEffect } from "react";

const Setup = () => {
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

const Model = (hovered) => {
  //set the model as cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div
      className="fixed rounded-full !pointer-events-none cursor-none h-[400px] "
      style={{
        left: `${cursorPosition.x}px`, // Adjust for the center of the div
        top: `${cursorPosition.y}px`, // Adjust for the center of the div
        transform: "translate(-50%, -50%)",
      }}
    >
      <Canvas className="!pointer-events-none ">
        <ambientLight intensity={1} />
        <Setup />
      </Canvas>
    </div>
  );
};

export default Model;

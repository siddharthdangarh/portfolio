"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Center, Bounds } from "@react-three/drei";
import { useEffect, useState } from "react";

function RobotModel() {
  const { scene } = useGLTF("/3d/robo_wings.glb");
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <primitive object={scene} scale={1.2} />
    </Float>
  );
}

export default function Loader() {
  // Responsive camera settings
  const [camera, setCamera] = useState({ position: [0, 1.5, 6], fov: 50 });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) {
        setCamera({ position: [0, 1.5, 8], fov: 65 });
      } else if (width < 1024) {
        setCamera({ position: [0, 1.5, 7], fov: 55 });
      } else {
        setCamera({ position: [0, 1.5, 6], fov: 50 });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#fff7e6] dark:bg-[#1a1a1a]">
      {/* Fullscreen Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={camera}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <RobotModel />
            </Center>
          </Bounds>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2.5} />
        </Canvas>
      </div>
      {/* Game-style HUD loading message in bottom-left */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="px-5 py-2 rounded-lg bg-black/80 text-[#f9d423] font-mono text-lg shadow-lg border-2 border-[#ff7e5f] animate-pulse">
          Booting up your experience...
        </div>
      </div>
    </div>
  );
}
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";

// Generic model component for reuse
function PeekingModel({ url, position, rotation, scale = 2.5, opacity = 0.6, color = "#ff7e5f" }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  // Make all mesh materials translucent and set to theme color
  useEffect(() => {
    if (ref.current) {
      ref.current.traverse((child) => {
        if (child.isMesh && child.material) {
          // Only set transparent if you really want translucency
          child.material.transparent = true;
          child.material.opacity = 0.85; // Try higher value
          child.material.depthWrite = false; // Helps with z-sorting
          if (child.material.color) {
            child.material.color.set(color);
          }
          if (child.material.emissive) {
            child.material.emissive.set(color);
            child.material.emissiveIntensity = 0.1;
          }
        }
      });
    }
  }, [scene, opacity, color]);

  // Optional: Animate a little for life
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.0} floatIntensity={0.5}>
      <group ref={ref} position={position} rotation={rotation}>
        <primitive object={scene} scale={scale} />
      </group>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Balanced, not overwhelming lighting */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} color="#fffbe6" />
        <directionalLight position={[-5, -5, 5]} intensity={0.7} color="#ffd6e0" />
        <pointLight position={[8, -4, 4]} intensity={1.2} color="#fffbe6" />
        <Environment preset="city" />

        {/* Bottom-right corner */}
        <PeekingModel
          url="/3d/round_futuristic_robot_with_wheels..glb"
          position={[8, -3.5, 0]}
          rotation={[0, Math.PI / 3, 0]}
          scale={0.75}
          opacity={1}
          color="#ff7e5f"
        />
      </Canvas>
    </div>
  );
}
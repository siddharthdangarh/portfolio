"use client";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AnimatedDivider from "./components/AnimatedDivider";
import DidYouKnow from "./components/DidYouKnow";

// Required for GLTF loading
// At the top of your file or in _app.js/_app.tsx
import '@react-three/fiber';
import '@react-three/drei';


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with real data/image loading if needed)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-[#fff7e6] via-[#ffe0ec] to-[#e0f7fa] dark:from-[#1a1a1a] dark:via-[#2d1a2d] dark:to-[#1a2d2d] overflow-x-hidden scroll-smooth">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1440 1200" fill="none">
        <defs>
          <radialGradient id="mesh1" cx="60%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#ff7e5f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="mesh2" cx="20%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#f9d423" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="1440" height="1200" fill="url(#mesh1)" />
        <rect width="1440" height="1200" fill="url(#mesh2)" />
      </svg>
      </div>
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider flip />
      <Experience />
      <AnimatedDivider />
      <Skills />
      <AnimatedDivider flip />
      <Projects />
      <Footer />
      <DidYouKnow />
    </div>
  );
}

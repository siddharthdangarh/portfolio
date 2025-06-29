"use client";
import { useRef, useEffect } from "react";

export default function AnimatedDivider({ flip }) {
  const waveRef1 = useRef();
  const waveRef2 = useRef();

  useEffect(() => {
    let frame;
    let t = 0;
    function animate() {
      t += 0.018;
      // Main wave
      const amplitude1 = 14;
      const frequency1 = 1.7;
      const points1 = [];
      for (let i = 0; i <= 1440; i += 40) {
        const y = 40 + Math.sin((i / 1440) * Math.PI * frequency1 + t) * amplitude1;
        points1.push(`${i},${y}`);
      }
      waveRef1.current.setAttribute(
        "d",
        `M0,40 ${points1.map((p) => `L${p}`).join(" ")} L1440,80 L0,80 Z`
      );
      // Second, lighter wave
      const amplitude2 = 9;
      const frequency2 = 1.2;
      const points2 = [];
      for (let i = 0; i <= 1440; i += 40) {
        const y = 50 + Math.sin((i / 1440) * Math.PI * frequency2 + t * 1.2) * amplitude2;
        points2.push(`${i},${y}`);
      }
      waveRef2.current.setAttribute(
        "d",
        `M0,50 ${points2.map((p) => `L${p}`).join(" ")} L1440,80 L0,80 Z`
      );
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" fill="none" className="w-full h-20">
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff7e5f" />
            <stop offset="0.5" stopColor="#f9d423" />
            <stop offset="1" stopColor="#a259f7" />
          </linearGradient>
        </defs>
        {/* Main wave with a more saturated gradient */}
        <path
          ref={waveRef1}
          d="M0,40 L0,40 L1440,80 L0,80 Z"
          fill="url(#waveGradient)"
          style={{
            opacity: 0.85,
          }}
        />
        {/* Second, lighter wave for depth */}
        <path
          ref={waveRef2}
          d="M0,50 L0,50 L1440,80 L0,80 Z"
          fill="#ffe0ec"
          style={{
            opacity: 0.5,
            filter: "blur(1.5px)",
          }}
        />
      </svg>
    </div>
  );
}
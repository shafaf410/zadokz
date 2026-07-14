"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLButtonElement>(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);

    // Sync AudioPlayer state
    window.dispatchEvent(new Event("enterSite"));

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // 1. Paper flexes (tension) 
    tl.to([leftPanelRef.current, rightPanelRef.current], {
      scale: 1.005,
      filter: "drop-shadow(0px 30px 40px rgba(0,0,0,0.5))",
      duration: 0.4,
      ease: "power1.inOut",
    }, 0)
    // 2. Halves glide completely off-screen gracefully (Power4.inOut, 2s)
    .to(leftPanelRef.current, {
      x: "-60vw",
      rotateY: -10, // slight 3D page turn effect
      duration: 2.0,
      ease: "power4.inOut",
    }, 0.3)
    .to(rightPanelRef.current, {
      x: "60vw",
      rotateY: 10,
      duration: 2.0,
      ease: "power4.inOut",
    }, 0.3)
    .to(containerRef.current, {
      pointerEvents: "none",
      duration: 0.1,
    }, 0.3);
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleEnter}
      className="fixed inset-0 z-[9999] opacity-0 pointer-events-auto cursor-pointer flex items-center justify-center overflow-hidden [perspective:1000px]"
    >
      {/* Wrapper that fills the entire screen */}
      <div className="relative w-screen h-screen flex z-20 pointer-events-auto">
        
        {/* Left Paper Half */}
        <div 
          ref={leftPanelRef} 
          className="w-1/2 h-full overflow-hidden relative pointer-events-auto transform-origin-left drop-shadow-2xl"
        >
          <img 
            src="/paper.webp" 
            alt="Paper Left" 
            className="absolute top-0 left-0 w-[100vw] h-[100vh] object-cover object-center block pointer-events-auto max-w-none" 
          />
        </div>

        {/* Right Paper Half */}
        <div 
          ref={rightPanelRef} 
          className="w-1/2 h-full overflow-hidden relative pointer-events-auto transform-origin-right drop-shadow-2xl"
        >
          <img 
            src="/paper.webp" 
            alt="Paper Right" 
            className="absolute top-0 right-0 w-[100vw] h-[100vh] object-cover object-center block pointer-events-auto max-w-none" 
          />
        </div>

      </div>
    </div>
  );
}

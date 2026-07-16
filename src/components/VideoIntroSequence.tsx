"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface VideoIntroSequenceProps {
  onComplete: () => void;
}

export default function VideoIntroSequence({ onComplete }: VideoIntroSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    if (isVideoFinished) return;
    setIsVideoFinished(true);

    // Fade to black and then disappear
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Fade overlay to black
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    })
    // Hide container
    .to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "+=0.2");
  };

  useEffect(() => {
    // Attempt to autoplay videos
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(e => console.error("Desktop intro video autoplay failed", e));
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(e => console.error("Mobile intro video autoplay failed", e));
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden bg-black"
    >
      <video 
        ref={desktopVideoRef}
        src="/welcome-desktop.mp4"
        muted 
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="hidden md:block w-full h-full object-cover pointer-events-none"
      />
      <video 
        ref={mobileVideoRef}
        src="/welcome-mobile.mp4"
        muted 
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="block md:hidden w-full h-full object-cover pointer-events-none"
      />

      {/* Black overlay for fading effect */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      />

      {/* Skip button for convenience in case video fails to autoplay or user wants to skip */}
      <button 
        onClick={handleVideoEnd}
        className="absolute bottom-8 right-8 text-cream/50 hover:text-cream text-sm tracking-widest uppercase transition-colors z-50"
      >
        Skip Intro
      </button>
    </div>
  );
}

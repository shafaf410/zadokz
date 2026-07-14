"use client";

import { useState, useEffect } from "react";
import IntroSequence from "./IntroSequence";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem("introSeen");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("introSeen", "true");
  };

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      
      {/* 
        The homepage is fully rendered and visible underneath. 
        The IntroSequence handles covering it and revealing it smoothly.
      */}
      <div className={showIntro ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}

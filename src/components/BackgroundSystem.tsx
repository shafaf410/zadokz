"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundSystem() {
  const { scrollY } = useScroll();
  
  // Parallax / Scroll transforms
  const contourY = useTransform(scrollY, [0, 1000], [0, -60]);
  const glowY = useTransform(scrollY, [0, 1000], [0, 120]);
  const mistX = useTransform(scrollY, [0, 1000], [0, 40]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-cream">
      
      {/* LAYER 1: CONTOUR HALO */}
      <motion.div
        style={{ y: contourY }}
        animate={{ scale: [1, 1.03, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.07]"
      >
        <svg viewBox="0 0 1000 1000" className="w-[150vw] h-[150vh] absolute min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          {/* Organic forest contour lines */}
          <path d="M 250 500 C 250 350 650 350 750 500 C 750 650 350 650 250 500 Z" fill="none" stroke="#1B4332" strokeWidth="2" />
          <path d="M 200 500 C 200 300 700 300 800 500 C 800 700 300 700 200 500 Z" fill="none" stroke="#1B4332" strokeWidth="1.5" />
          <path d="M 150 500 C 150 250 750 250 850 500 C 850 750 250 750 150 500 Z" fill="none" stroke="#1B4332" strokeWidth="1.5" />
          <path d="M 100 500 C 100 200 800 200 900 500 C 900 800 200 800 100 500 Z" fill="none" stroke="#1B4332" strokeWidth="1" />
          <path d="M 50 500 C 50 150 850 150 950 500 C 950 850 150 850 50 500 Z" fill="none" stroke="#1B4332" strokeWidth="1" />
          <path d="M 0 500 C 0 100 900 100 1000 500 C 1000 900 100 900 0 500 Z" fill="none" stroke="#1B4332" strokeWidth="0.5" />
          <path d="M -50 500 C -50 50 950 50 1050 500 C 1050 950 50 950 -50 500 Z" fill="none" stroke="#1B4332" strokeWidth="0.5" />
          <path d="M -100 500 C -100 0 1000 0 1100 500 C 1100 1000 0 1000 -100 500 Z" fill="none" stroke="#1B4332" strokeWidth="0.5" />
          <path d="M -150 500 C -150 -50 1050 -50 1150 500 C 1150 1050 -50 1050 -150 500 Z" fill="none" stroke="#1B4332" strokeWidth="0.2" />
        </svg>
      </motion.div>

      {/* LAYER 2: AMBIENT GLOW */}
      <motion.div
        style={{ 
          y: glowY,
          background: "radial-gradient(circle, rgba(82,121,111,0.12) 0%, rgba(82,121,111,0) 70%)" 
        }}
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[10%] right-[5%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] mix-blend-multiply"
      />

      {/* LAYER 3: MIST GRADIENT */}
      <motion.div 
        style={{ x: mistX }}
        animate={{ x: ["-2%", "2%", "-2%"] }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0 opacity-60 mix-blend-multiply"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#52796F]/10 to-transparent w-[150%] h-[150%] -rotate-12 blur-[80px]" />
      </motion.div>

    </div>
  );
}

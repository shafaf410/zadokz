"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(e => console.error("Desktop video autoplay failed", e));
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(e => console.error("Mobile video autoplay failed", e));
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal flex flex-col justify-center md:justify-between">
      
      {/* Background Image with Left-to-Right Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full pointer-events-none">
          {/* Desktop Video */}
          <video 
            ref={desktopVideoRef}
            src="/Laptop.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="hidden md:block w-full h-full object-cover pointer-events-none"
          />
          {/* Mobile Video */}
          <video 
            ref={mobileVideoRef}
            src="/mobile.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="block md:hidden w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row items-start md:items-center pt-24 md:pt-32 pb-16 md:pb-0 flex-1">
        
        {/* LEFT COLUMN (55%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[55%] flex flex-col justify-end md:justify-center h-full max-w-[650px] pr-4 md:pr-8 lg:pr-16"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6 inline-flex items-center space-x-3 mt-4 md:mt-0 drop-shadow-md">
            <div className="w-8 h-[2px] bg-cream"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-cream font-bold">Escape to Nature</span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-cream leading-[1.1] mb-6 max-w-[700px] font-[var(--font-boska)] drop-shadow-2xl"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)" }}
            >
              Where Farm Life <br />
              <span className="italic font-light text-cream/90">Meets the Beauty</span> <br />
              of Wayanad
            </h1>
          </motion.div>



          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }) || window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="px-6 py-3 md:px-8 md:py-4 bg-forest text-cream rounded-full text-xs md:text-sm tracking-widest uppercase hover:bg-moss transition-all duration-300 w-full sm:w-auto text-center"
            >
              Book Your Stay
            </button>
            <button 
              onClick={() => document.getElementById('stay')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 md:px-8 md:py-4 border border-cream/30 text-cream rounded-full text-xs md:text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center space-x-2 group"
            >
              <span>Explore Your Stay</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

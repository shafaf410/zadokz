"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: "01",
    title: "Swimming Pool",
    images: [
      "/IMAGES/pool1.jpeg",
      "/IMAGES/pool2.jpeg",
      "/IMAGES/pool3.jpeg"
    ],
    color: "#1e5a50", // Cool blue-green
    featured: true
  },
  {
    id: "02",
    title: "Plantation Walks",
    images: [
      "/IMAGES/plantation walk.jpeg",
      "/IMAGES/plantation2.jpeg"
    ],
    color: "#2d4229", // Soft green
    featured: false
  },
  {
    id: "03",
    title: "Kids Play Area",
    images: [
      "/IMAGES/kids play area.jpeg",
      "/IMAGES/kids play 2.jpeg",
      "/IMAGES/play3.jpeg"
    ],
    color: "#4a4a2d", // Warm earthy
    featured: false
  },
  {
    id: "04",
    title: "Karaoke & Entertainment",
    images: [
      "/IMAGES/karoke.jpeg"
    ],
    color: "#4a3c2d", // Soft brown
    featured: false
  },
  {
    id: "05",
    title: "Campfire",
    images: [
      "/IMAGES/campfire.jpeg",
      "/IMAGES/campfire2.jpeg"
    ],
    color: "#b45014", // Warm orange
    featured: false
  },
  {
    id: "06",
    title: "Vegie Garden",
    images: [
      "/IMAGES/vegie_garden.png"
    ],
    color: "#3d5a35", // Earthy green
    featured: false
  },
  {
    id: "07",
    title: "Board Games",
    images: [
      "/IMAGES/carrom_board.png"
    ],
    color: "#6b4423", // Wood brown
    featured: false
  },
  {
    id: "08",
    title: "Dining Space",
    images: [
      "/IMAGES/COTTAGE 1/DINING SPACE LOOKING BANSURA.jpeg"
    ],
    color: "#2c3e50", // Dark slate
    featured: false
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
  }
};

export default function ExperiencesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track overall scroll of the section to drive background color
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to background glow colors based on cards
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#1B2A22", "#1e5a50", "#2d4229", "#4a4a2d", "#b45014", "#1B2A22"]
  );

  return (
    <section id="experiences" ref={containerRef} className="relative w-full bg-charcoal overflow-hidden py-32 md:py-48">
      {/* Dynamic Background Glow - Hidden on mobile to prevent scroll lag */}
      <motion.div 
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[150px] opacity-30 pointer-events-none z-0 transform-gpu"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Contour Halo Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
         <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]) }}
            className="w-[120vw] h-[120vw] border-[1px] border-cream rounded-full"
         />
         <motion.div 
            style={{ scale: useTransform(scrollYProgress, [0, 1], [0.9, 1.4]) }}
            className="absolute w-[150vw] h-[150vw] border-[1px] border-cream rounded-full"
         />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section Entry */}
        <div className="max-w-3xl mx-auto text-center mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center justify-center space-x-3 w-full"
          >
            <div className="w-8 h-[1px] bg-cream/50"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-cream/70 font-semibold">Experiences & Comforts</span>
            <div className="w-8 h-[1px] bg-cream/50"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-boska)] text-cream leading-[1.1] font-light"
          >
            Every Moment Has <br /> Something Special
          </motion.h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">
          {experiences.map((exp, index) => {
            const isFeatured = exp.featured;
            const colSpan = isFeatured ? "col-span-12 lg:col-span-8" : "col-span-6 lg:col-span-4";
            const height = "h-[60vh] lg:h-[80vh]";
            
            return (
              <DesktopExperienceCard 
                key={exp.id} 
                exp={exp} 
                index={index} 
                className={`${colSpan} ${height}`} 
              />
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Layout */}
      <div className="md:hidden relative z-10 w-full pl-6 mt-12 pb-24">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-4 pr-6 pb-8">
          {experiences.map((exp, index) => (
            <MobileExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Final Section Exit */}
      <div className="relative z-10 container mx-auto px-6 mt-32 md:mt-48 mb-24 text-center">
        <ExitText />
      </div>
    </section>
  );
}

// ----------------------------------------------------
// Desktop Card Component
// ----------------------------------------------------
function DesktopExperienceCard({ exp, index, className }: { exp: any, index: number, className: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Local scroll progress for parallax image inside the card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group overflow-hidden rounded-[32px] cursor-pointer ${className}`}
      whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
    >
      {/* Image Parallax Container */}
      <motion.div className="absolute inset-0 w-full h-[130%]" style={{ y: yParallax, top: "-15%" }}>
        <ImageCrossfade images={exp.images} />
      </motion.div>
      
      {/* Subtle Bottom Gradient for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-70 pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-3xl lg:text-4xl text-cream font-[var(--font-boska)]">{exp.title}</h3>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Hover Drop Shadow increase is handled automatically by CSS if we added shadow classes, but let's add an explicit glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.1)]" />
    </motion.div>
  );
}

// ----------------------------------------------------
// Mobile Card Component
// ----------------------------------------------------
function MobileExperienceCard({ exp, index }: { exp: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={cardRef}
      animate={{ 
        scale: isInView ? 1 : 0.92,
        opacity: isInView ? 1 : 0.7
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="snap-center shrink-0 w-[80%] aspect-[4/5] rounded-[24px] overflow-hidden relative shadow-2xl bg-charcoal"
    >
      <ImageCrossfade images={exp.images} />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-70 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl text-cream font-medium font-[var(--font-boska)]">{exp.title}</h3>
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------
// Exit Text Component
// ----------------------------------------------------
function ExitText() {
  const words = ["Slow Down.", "Reconnect.", "Experience Zadokz."];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-boska)] text-cream mb-12 space-y-4 flex flex-col">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden block">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      <motion.button 
        onClick={() => document.getElementById('nearby')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="px-10 py-5 border border-cream/30 text-cream rounded-full text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-500"
      >
        Explore Wayanad
      </motion.button>
    </div>
  );
}

// ----------------------------------------------------
// Image Crossfade Component
// ----------------------------------------------------
function ImageCrossfade({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src={images[currentIndex]} 
          alt="Experience" 
          fill 
          className="object-cover transition-transform duration-[4000ms] ease-linear scale-100 group-hover:scale-[1.08]" 
        />
      </motion.div>
    </AnimatePresence>
  );
}

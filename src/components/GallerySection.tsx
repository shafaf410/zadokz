"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// The full pool of images
const GALLERY_IMAGES = [
  { src: "/IMAGES/pool1.jpeg", category: "Farm Pool", title: "Morning Dip" },
  { src: "/IMAGES/pool2.jpeg", category: "Farm Pool", title: "Infinity Views" },
  { src: "/IMAGES/pool3.jpeg", category: "Farm Pool", title: "Sunset Reflections" },
  { src: "/IMAGES/campfire.jpeg", category: "Campfire Night", title: "Warm Gatherings" },
  { src: "/IMAGES/campfire2.jpeg", category: "Campfire Night", title: "Stories & Stars" },
  { src: "/IMAGES/kids play area.jpeg", category: "Kids Play Area", title: "Endless Fun" },
  { src: "/IMAGES/kids play 2.jpeg", category: "Kids Play Area", title: "Adventure Awaits" },
  { src: "/IMAGES/play3.jpeg", category: "Kids Play Area", title: "Joyful Moments" },
  { src: "/IMAGES/karoke.jpeg", category: "Entertainment", title: "Musical Evenings" },
  { src: "/IMAGES/plantation walk.jpeg", category: "Plantation Walk", title: "Misty Trails" },
  { src: "/IMAGES/plantation2.jpeg", category: "Plantation Walk", title: "Lush Greens" },
  { src: "/IMAGES/banasura bg.png", category: "Nearby Views", title: "Banasura Hills" },
  { src: "/IMAGES/COTTAGE 1/COTTAGE FRONT.jpeg", category: "Cottages", title: "Heritage Villa" },
  { src: "/IMAGES/COTTAGE 1/DINING SPACE LOOKING BANSURA.jpeg", category: "Cottages", title: "Dining with a View" },
  { src: "/IMAGES/COTTAGE 1/ROOM4.jpeg", category: "Cottages", title: "Cozy Interiors" },
  { src: "/IMAGES/COTTAGE 1/POOL.jpeg", category: "Cottages", title: "Private Pool View" },
  { src: "/IMAGES/COTTAGE 1/STAIR WAY.jpeg", category: "Cottages", title: "Elegant Pathways" },
  { src: "/IMAGES/COTTAGE 1/R.jpeg", category: "Cottages", title: "Serene Spaces" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (1).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (2).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (3).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (4).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (5).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (6).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (7).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (8).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (9).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (10).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (11).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (12).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (13).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (14).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (15).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (16).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (17).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (18).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (19).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (20).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (21).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (22).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (23).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (24).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (25).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (26).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (27).jpg", category: "Farmstay", title: "Farmstay View" },
  { src: "/IMAGES/gallery/zadokz farmstay wayanad (28).jpg", category: "Farmstay", title: "Farmstay View" },
];

// Helper to deterministically shuffle but we'll do it on mount to avoid hydration mismatch
const shuffleArray = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// Sizes for the masonry grid
const SIZES = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[16/9]"];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll tracking for background reactive effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const bgGlowY = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
  const contourRotate = useTransform(smoothProgress, [0, 1], [0, 15]);

  useEffect(() => {
    // Shuffle and assign sizes and floating configs on client mount
    const shuffled = shuffleArray(GALLERY_IMAGES).map((img, index) => {
      const isFeatured = (index + 1) % 5 === 0;
      const sizeClass = isFeatured ? "aspect-[16/9] md:aspect-[4/3]" : SIZES[index % SIZES.length];
      
      return {
        ...img,
        id: index,
        sizeClass,
        isFeatured,
        floatDuration: 6 + Math.random() * 6, // 6 to 12s
        floatDelay: Math.random() * 2,
        parallaxOffset: isFeatured ? 120 : SIZES[index % SIZES.length] === "aspect-square" ? 60 : 90,
      };
    });
    setImages(shuffled);
    setIsClient(true);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxIndex]);

  // Handle Lightbox Navigation
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  // Split images into 3 columns for desktop masonry
  const cols = [[], [], []] as any[][];
  images.forEach((img, i) => {
    cols[i % 3].push(img);
  });

  return (
    <section id="gallery" ref={containerRef} className="relative w-full bg-[#F5F2EA] overflow-hidden py-32 md:py-48">
      
      {/* Scroll Reactive Background Elements */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(45,66,41,0.08) 0%, rgba(45,66,41,0) 70%)", y: bgGlowY }}
      />
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
         <motion.div style={{ rotate: contourRotate, scale: 0.8 }} className="w-[120vw] h-[120vw] border-[1px] border-charcoal rounded-full" />
         <motion.div style={{ rotate: contourRotate, scale: 1.2 }} className="absolute w-[150vw] h-[150vw] border-[1px] border-charcoal rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section Intro */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center space-x-3"
          >
            <div className="w-8 h-[1px] bg-charcoal/30"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-charcoal/60 font-semibold">Gallery</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-boska)] text-charcoal leading-[1.1] font-light mb-8"
          >
            Discover The Beauty <br className="hidden md:block" /> Of Zadokz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-charcoal/70 max-w-xl text-lg font-light leading-relaxed"
          >
            Every corner of Zadokz tells a story—from misty mornings and peaceful plantation walks to cozy cottages, poolside moments, and unforgettable evenings beneath the stars.
          </motion.p>
        </div>

        {/* Desktop & Mobile Masonry Layout */}
        {isClient && (
          <div className="columns-1 md:columns-3 gap-6 lg:gap-10 space-y-6 lg:space-y-10">
            {images.map((img) => (
              <div key={img.id} className="break-inside-avoid mb-6 lg:mb-10">
                <GalleryCard image={img} onClick={() => setLightboxIndex(img.id)} isMobile={false} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox 
            images={images} 
            currentIndex={lightboxIndex} 
            onClose={() => setLightboxIndex(null)} 
            onNext={handleNext} 
            onPrev={handlePrev} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// --------------------------------------------------------------------------------
// Gallery Card Component (Handles Parallax, Reveal, Floating, Hover)
// --------------------------------------------------------------------------------
function GalleryCard({ image, onClick, isMobile = false }: { image: any, onClick: () => void, isMobile?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-image.parallaxOffset, image.parallaxOffset]);

  // Cinematic Reveal Animation - Simplified for performance
  const revealVariants = {
    hidden: { opacity: 0, scale: 1.05, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, delay: (image.id % 3) * 0.1 } 
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative w-full overflow-hidden cursor-pointer group ${image.sizeClass} ${
        image.isFeatured && !isMobile ? "scale-105 shadow-2xl z-10 rounded-[32px] border border-charcoal/10" : "rounded-2xl md:rounded-3xl"
      }`}
      onClick={onClick}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Floating Ambient Animation */}
      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ duration: image.floatDuration, repeat: Infinity, ease: "easeInOut", delay: image.floatDelay }}
        className="w-full h-full"
      >
        {/* Parallax Container */}
        <motion.div className="absolute inset-[-15%] w-[130%] h-[130%]" style={{ y: isMobile ? 0 : yParallax }}>
           <Image 
             src={image.src} 
             alt={image.title} 
             fill 
             className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
           />
        </motion.div>
      </motion.div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Featured Overlay Glow */}
      {image.isFeatured && (
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.4)] pointer-events-none rounded-[32px]" />
      )}

      {/* Hover Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <span className="text-xs uppercase tracking-[0.2em] text-cream/70 block mb-2">{image.category}</span>
        <div className="flex items-center justify-between">
           <h3 className="text-2xl font-[var(--font-boska)] text-cream">{image.title}</h3>
           <div className="w-8 h-8 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center text-cream">
              →
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------------------------------
// Lightbox Modal Component
// --------------------------------------------------------------------------------
function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: { images: any[], currentIndex: number, onClose: () => void, onNext: (e?: React.MouseEvent) => void, onPrev: (e?: React.MouseEvent) => void }) {
  const currentImage = images.find(img => img.id === currentIndex);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between z-50">
        <span className="text-cream/50 tracking-[0.2em] text-sm uppercase">Gallery • {currentIndex + 1} / {images.length}</span>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-cream/70 hover:text-cream transition-colors p-2">
          <X size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Image Viewer */}
      <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -1000) onNext();
              else if (swipe > 1000) onPrev();
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={currentImage.src} 
              alt={currentImage.title} 
              fill 
              className="object-contain" 
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-8 z-50">
        <button 
          onClick={onPrev} 
          className="w-14 h-14 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-cream hover:text-charcoal transition-all duration-300"
        >
          <ChevronLeft strokeWidth={1} />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-cream font-[var(--font-boska)] text-2xl">{currentImage.title}</span>
          <span className="text-cream/50 text-xs uppercase tracking-[0.2em] mt-1">{currentImage.category}</span>
        </div>
        <button 
          onClick={onNext} 
          className="w-14 h-14 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:bg-cream hover:text-charcoal transition-all duration-300"
        >
          <ChevronRight strokeWidth={1} />
        </button>
      </div>
    </motion.div>
  );
}

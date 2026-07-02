"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, Bed, Utensils, Maximize2, TreePine, Coffee, Wind } from "lucide-react";

interface Props {
  onClose: () => void;
}

const HIGHLIGHTS = [
  { icon: Bed, title: "2 Spacious Bedrooms", desc: "With luxurious attached bathrooms" },
  { icon: Utensils, title: "Fully Equipped Kitchen", desc: "Cook your own farm-fresh meals" },
  { icon: Maximize2, title: "Spacious Private Veranda", desc: "Perfect for morning tea and lounging" },
  { icon: Coffee, title: "Living & Dining Spaces", desc: "Comfortable areas for family gathering" },
  { icon: Wind, title: "Misty Morning Views", desc: "Wake up to breathtaking natural beauty" },
  { icon: TreePine, title: "Peaceful Surroundings", desc: "Immersed in the heart of the farm" },
];

const GALLERY_IMAGES = [
  "/Heritage Cottage Villa/1.jpeg",
  "/Heritage Cottage Villa/2.jpeg",
  "/Heritage Cottage Villa/3.jpeg"
];

export default function HeritageCottagePage({ onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Parallax transforms
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Reset scroll on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, []);

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <motion.div 
      data-lenis-prevent="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] bg-[#F5F2EA] text-charcoal font-[var(--font-inter)] overflow-y-auto overflow-x-hidden hide-scrollbar"
      ref={containerRef}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-forest origin-left z-[110]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 rounded-full bg-cream/20 backdrop-blur-md border border-cream/30 flex items-center justify-center text-cream hover:bg-cream hover:text-charcoal transition-all duration-300"
      >
        <X size={24} />
      </button>

      {/* HERO SECTION */}
      <section className="relative w-full h-[100svh] overflow-hidden bg-charcoal">
        <motion.div 
          layoutId="heritage-cottage-image"
          style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 origin-center"
        >
          <Image 
            src="/Heritage Cottage Villa COVER.JPEG"
            alt="Heritage Cottage Villa"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-charcoal/80" />
          
          {/* Atmospheric Mist Effect */}
          <motion.div 
            animate={{ x: ["-5%", "5%", "-5%"] }}
            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-t from-cream/10 to-transparent mix-blend-overlay blur-3xl opacity-50 pointer-events-none"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-20 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-cream/80 font-semibold mb-6 block">
              Escape to Heritage Living
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] text-cream mb-4 drop-shadow-lg">
              Heritage Cottage Villa
            </h1>
            <p className="text-xl md:text-3xl font-[var(--font-playfair)] italic text-cream/90 mb-6 drop-shadow-md">
              A Timeless Farm Retreat for Slow Living
            </p>
            <p className="text-base md:text-lg text-cream/80 max-w-2xl leading-relaxed mb-10 font-light">
              Tucked away in the heart of Zadokz Farms, a peaceful retreat to reconnect with nature and yourself.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-8 py-4 bg-cream/10 backdrop-blur-md border border-cream/30 text-cream rounded-full text-sm tracking-widest uppercase hover:bg-cream hover:text-forest transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Book Your Stay
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPLIT LAYOUT INTRODUCTION */}
      <section id="explore-cottage" className="py-24 md:py-40 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] leading-tight text-forest mb-8">
              Wake to mist covered mornings and birdsong in our welcoming 2 BHK Heritage Cottage, a place to slow down and feel at home.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-start lg:items-center"
          >
            <div className="w-48 h-48 rounded-full border border-forest/20 flex flex-col items-center justify-center bg-white shadow-xl">
              <span className="text-4xl font-[var(--font-playfair)] text-forest mb-2">6</span>
              <span className="text-xs tracking-widest uppercase text-charcoal/60 font-semibold text-center px-4">Up to<br/>Guests</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-[#EEEBE1] border-y border-charcoal/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-forest font-semibold">Amenities</span>
            <h3 className="text-4xl font-[var(--font-playfair)] text-charcoal mt-4">Cottage Highlights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
                  <highlight.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-[var(--font-playfair)] text-charcoal mb-3">{highlight.title}</h4>
                <p className="text-charcoal/70 font-light leading-relaxed">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LUXURY IMAGE GALLERY */}
      <section className="py-24 md:py-40 container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-forest font-semibold">Gallery</span>
          <h3 className="text-4xl font-[var(--font-playfair)] text-charcoal mt-4">Step Inside</h3>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setLightboxImg(src)}
            >
              <Image 
                src={src} 
                alt={`Heritage Cottage Image ${idx + 1}`} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-75 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARALLAX FOOTER SECTION */}
      <section className="relative h-[70svh] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: useTransform(scrollYProgress, [0.7, 1], [-100, 100]) }}
        >
          <Image 
            src={GALLERY_IMAGES[0]}
            alt="Parallax Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply" />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] text-cream drop-shadow-2xl italic">
            Live slow. Breathe deep. Stay present.
          </h2>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-cream/70 transition-colors z-[210]"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={lightboxImg}
                alt="Lightbox Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

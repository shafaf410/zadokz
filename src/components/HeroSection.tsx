"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    title: "Heritage Cottage Villa",
    tagline: "A spacious retreat crafted for families and unforgettable gatherings.",
    image: "/IMAGES/COTTAGE 1/COTTAGE FRONT.jpeg",
  },
  {
    id: 2,
    title: "Private Glass Room",
    tagline: "Wake up surrounded by panoramic views of nature.",
    image: "/IMAGES/COTTAGE 1/POOL.jpeg", 
  },
  {
    id: 3,
    title: "Ginger Poolside Room",
    tagline: "Steps away from the pool and designed for complete relaxation.",
    image: "/IMAGES/COTTAGE 1/DINING SPACE LOOKING BANSURA.jpeg",
  },
  {
    id: 4,
    title: "Forest View Suite",
    tagline: "Immerse yourself in the tranquility of the surrounding woods.",
    image: "/IMAGES/COTTAGE 1/ROOM4.jpeg",
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % cards.length;
        
        // Auto-scroll the mobile carousel
        if (mobileCarouselRef.current) {
          const container = mobileCarouselRef.current;
          const cardNode = container.children[nextIndex] as HTMLElement;
          if (cardNode) {
            const scrollPos = cardNode.offsetLeft - (container.clientWidth / 2) + (cardNode.clientWidth / 2);
            container.scrollTo({
              left: scrollPos,
              behavior: "smooth"
            });
          }
        }
        
        return nextIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal flex flex-col justify-center md:justify-between">
      
      {/* Background Image with Left-to-Right Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video 
            src="/hero-video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>

      {/* Main Content Area */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 h-auto md:h-full flex flex-col md:flex-row items-center pt-32 md:pt-32 pb-4 md:py-0 flex-1">
        
        {/* LEFT COLUMN (55%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[55%] flex flex-col justify-start md:justify-center h-full max-w-[650px] pr-4 md:pr-8 lg:pr-16"
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

        {/* RIGHT COLUMN (45%) - DESKTOP ONLY */}
        <div className="hidden md:flex w-[45%] h-full relative items-center justify-center pt-10 translate-x-8 lg:translate-x-16">
          <div className="relative w-full max-w-[400px] h-[60vh] flex items-center justify-center">
            {cards.map((card, index) => {
              // Calculate stacked position based on active index
              let offset = index - activeIndex;
              if (offset < 0) offset += cards.length;
              
              const isFront = offset === 0;

              return (
                <motion.div
                  key={card.id}
                  initial={false}
                  animate={{ 
                    x: offset * 40, 
                    y: offset * 40,
                    scale: 1 - (offset * 0.05),
                    opacity: offset > 2 ? 0 : 1,
                    zIndex: cards.length - offset
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-[300px] lg:w-[340px] aspect-[3/4] rounded-[32px] overflow-hidden glass shadow-2xl origin-bottom-right ${isFront ? 'cursor-pointer group' : 'pointer-events-none'}`}
                  whileHover={isFront ? { 
                    y: -10, 
                    transition: { duration: 0.4, ease: "easeOut" } 
                  } : {}}
                >
                  <Image src={card.image} alt={card.title} fill className={`object-cover transition-transform duration-700 ${isFront ? 'group-hover:scale-110' : ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent" />
                  
                  {isFront && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end"
                    >
                      <div className="pr-4">
                        <h3 className="text-2xl text-cream font-medium mb-2">{card.title}</h3>
                        <p className="text-sm text-cream/70 line-clamp-2">{card.tagline}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight size={20} className="text-cream" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DESKTOP SLIDER CONTROLS (BOTTOM CENTER & RIGHT) */}
      <div className="hidden md:flex absolute bottom-12 left-0 right-0 container mx-auto px-6 md:px-12 justify-between items-center z-30 pointer-events-none">
        <div className="w-[55%]" /> {/* Spacer to align with right column */}
        <div className="w-[45%] flex justify-between items-center px-4 pointer-events-auto">
          {/* Navigation Arrows (Bottom Center-ish) */}
          <div className="flex space-x-4">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream hover:text-charcoal transition-colors">
              <ArrowLeft size={18} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream hover:text-charcoal transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Slide Counter (Bottom Right) */}
          <div className="text-cream font-light tracking-widest text-sm flex items-center">
            <span className="text-lg font-medium">0{activeIndex + 1}</span>
            <span className="mx-2 text-cream/40">/</span>
            <span className="text-cream/60">0{cards.length}</span>
          </div>
        </div>
      </div>

      {/* MOBILE COTTAGE CAROUSEL */}
      <div className="md:hidden relative w-full z-20 pl-6 mt-8 pb-12">
        <motion.div 
          ref={mobileCarouselRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-4 pb-4 pr-6"
        >
          {cards.map((card) => (
            <div key={card.id} className="snap-center shrink-0 w-[75%] sm:w-[320px] aspect-[4/3] rounded-[20px] overflow-hidden glass relative shadow-2xl">
              <Image src={card.image} alt={card.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg text-cream font-medium mb-1">{card.title}</h3>
                <p className="text-xs text-cream/70 line-clamp-2">{card.tagline}</p>
              </div>
            </div>
          ))}
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

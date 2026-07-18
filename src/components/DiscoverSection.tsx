"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import MasonryGallery from "./MasonryGallery";

const slideImages = [
  "/GALLERY1/zadokz farmstay wayanad (3).jpg",
  "/GALLERY1/zadokz farmstay wayanad (6).jpg",
  "/GALLERY1/zadokz farmstay wayanad (8).jpg",
  "/GALLERY1/zadokz farmstay wayanad (9).jpg",
  "/GALLERY1/zadokz farmstay wayanad (13).jpg",
  "/GALLERY1/zadokz farmstay wayanad (16).jpg"
];

export default function DiscoverSection() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="discover" className="pt-16 pb-4 md:pt-20 md:pb-8 text-charcoal relative z-10 flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start relative pt-4">
          
          {/* Content: Top Section */}
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center mb-12 md:mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="flex flex-col items-center"
            >
              <motion.div variants={textVariants} className="mb-6 inline-flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-forest"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-forest font-semibold">Discover Zadokz</span>
                <div className="w-8 h-[1px] bg-forest"></div>
              </motion.div>

              <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-[1.1] mb-8 text-balance">
                Where Our Story Became a Stay
              </motion.h2>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-4 font-light max-w-3xl">
                Zadokz began as our family's weekend home, a quiet escape to slow down, gather, and enjoy nature away from city life. Over time, friends and family who visited felt the same calm, and we began welcoming guests seeking that experience too. Today, Zadokz Farmstay is a warm countryside retreat for families, couples, and weekend travellers.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-8 font-light max-w-3xl">
                The setting has grown, but the essence hasn't, comfort, nature, and a homely feel. We believe in simple living, genuine hospitality, and giving guests space to reconnect and make memories.
              </motion.p>

              <motion.div variants={textVariants}>
                <button 
                  onClick={() => window.open(`https://wa.me/919605575281?text=${encodeURIComponent("Hello, I'd like to book a stay at Zadokz Farm Stay!")}`, '_blank')}
                  className="relative overflow-hidden group px-8 py-4 border border-forest/30 text-forest rounded-full text-sm tracking-widest uppercase hover:text-cream transition-colors duration-500"
                >
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-forest transform scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Full Width Image Gallery */}
          <div className="col-span-1 md:col-span-12 relative w-full mt-4 md:mt-8">
            <MasonryGallery images={slideImages} />
          </div>

        </div>
      </div>
    </section>
  );
}

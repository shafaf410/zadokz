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
          
          {/* Left Side: Images Gallery */}
          <div className="md:col-span-7 relative w-full mb-8 md:mb-0">
            <MasonryGallery images={slideImages} />
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-5 flex flex-col justify-center md:pl-8 lg:pl-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div variants={textVariants} className="mb-6 inline-flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-forest"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-forest font-semibold">Discover Zadokz</span>
              </motion.div>

              <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-light text-forest leading-[1.1] mb-8 text-balance">
                Where Our Story Became a Stay
              </motion.h2>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-4 font-light">
                Zadokz began as our family's weekend home &mdash; a quiet escape to slow down, gather, and enjoy nature away from city life. Over time, friends and family who visited felt the same calm, and we began welcoming guests seeking that experience too. Today, Zadokz Farmstay is a warm countryside retreat for families, couples, and weekend travellers.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6 font-light">
                The setting has grown, but the essence hasn't &mdash; comfort, nature, and a homely feel. We believe in simple living, genuine hospitality, and giving guests space to reconnect and make memories.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8 font-medium italic">
                Every stay is an invitation to experience the peace that made this place special to us. We look forward to welcoming you into our story.
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

        </div>
      </div>
    </section>
  );
}

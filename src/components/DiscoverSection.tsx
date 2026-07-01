"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
    <section id="discover" className="py-32 md:py-48 text-charcoal relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start relative">
          
          {/* Left Side: Images */}
          <div className="md:col-span-6 relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center md:sticky md:top-40 mb-10 md:mb-0">
            {/* Primary Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 w-[80%] h-[80%] md:h-full rounded-[32px] overflow-hidden shadow-2xl z-10"
              style={{ willChange: "transform, opacity" }}
            >
              <Image 
                src="/IMAGES/COTTAGE 1/WhatsApp Image 2026-06-22 at 5.10.21 PM.jpeg" // Using actual image path
                alt="Nature surrounds Zadokz Farm Stay"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Secondary Floating Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 bottom-10 w-[50%] md:w-[60%] aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl z-20 border-4 border-cream"
              style={{ willChange: "transform, opacity" }}
            >
              <Image 
                src="/IMAGES/COTTAGE 1/STAIR WAY.jpeg" // Using actual image path
                alt="Architecture detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
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
                Where Our Story <br className="hidden md:block" /> Became a Stay
              </motion.h2>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-5 font-light">
                Zadokz began as our family’s weekend home, a quiet escape where we would gather, slow down, and enjoy the simple beauty of nature. Surrounded by greenery and open skies, it was a place filled with laughter, shared meals, and peaceful moments away from busy city life.
              </motion.p>
              
              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-5 font-light">
                Over time, what started as a private retreat naturally evolved. Friends and extended family who visited often felt the same sense of calm and connection, and soon we opened our doors to welcome guests who were looking for a similar experience.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-5 font-light">
                Today, Zadokz Farmstay is a warm countryside escape designed for families, couples, and weekend travellers from Bangalore and nearby cities. While the setting has grown to host more people, the essence remains the same comfort, nature, and a homely atmosphere.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-5 font-light">
                We believe in simple living, genuine hospitality, and creating a space where guests can slow down, reconnect, and make meaningful memories. Every stay here is an invitation to experience the peace that first made this place special to us.
              </motion.p>

              <motion.p variants={textVariants} className="text-charcoal/80 text-lg leading-relaxed mb-10 font-medium italic">
                We look forward to welcoming you into our story.
              </motion.p>

              <motion.div variants={textVariants}>
                <button 
                  onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })}
                  className="relative overflow-hidden group px-8 py-4 border border-forest/30 text-forest rounded-full text-sm tracking-widest uppercase hover:text-cream transition-colors duration-500"
                >
                  <span className="relative z-10">Our Story</span>
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

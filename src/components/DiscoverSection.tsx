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
    <section id="discover" className="pt-16 pb-4 md:pt-20 md:pb-8 text-charcoal relative z-10 flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start relative pt-4">
          
          {/* Left Side: Images */}
          <div className="md:col-span-5 relative h-[50vh] md:h-[65vh] w-full mb-6 md:mb-0">
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
                src="/IMAGES/COTTAGE 1/WhatsApp Image 2026-06-22 at 5.10.21 PM.jpeg"
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
                src="/IMAGES/COTTAGE 1/STAIR WAY.jpeg"
                alt="Architecture detail"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-start">
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

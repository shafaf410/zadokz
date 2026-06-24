"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const ATTRACTIONS = [
  {
    id: "01",
    title: "Tea Museum",
    distance: "Nearby",
    description: "Discover the rich heritage of Wayanad tea plantations and explore the fascinating journey from fresh tea leaves to a perfectly brewed cup. Experience the aroma, flavors, and traditions that make Wayanad tea truly special.",
    image: "/IMAGES/tea-museum.jpg",
    cta: "Explore Attraction"
  },
  {
    id: "02",
    title: "Zip Line Adventure",
    distance: "Nearby",
    description: "Experience the thrill of soaring above scenic landscapes and lush greenery. Perfect for adventure seekers looking to create unforgettable memories with family and friends.",
    image: "/IMAGES/zipline.jpg",
    cta: "Explore Attraction"
  },
  {
    id: "03",
    title: "Meenmutty Waterfalls",
    distance: "Nearby",
    description: "Witness one of Wayanad's most beautiful waterfalls surrounded by dense forests. Enjoy trekking trails, breathtaking viewpoints, and the peaceful sounds of cascading water.",
    image: "/IMAGES/meenmutty falls.jpg",
    cta: "Explore Attraction"
  },
  {
    id: "04",
    title: "Banasura Sagar Dam",
    distance: "2 KM",
    description: "Visit Asia's second-largest earth dam and admire spectacular views of the surrounding hills and reservoir. Enjoy boating, scenic viewpoints, and unforgettable sunsets just minutes from Zadokz Farm Stay.",
    image: "/IMAGES/dam.jpg",
    cta: "Explore Attraction"
  },
  {
    id: "05",
    title: "Banasura Mountain Trekking",
    distance: "Nearby",
    description: "Embark on an exhilarating trek up the lush green slopes of the Banasura hills. Perfect for adventure enthusiasts, this trail offers breathtaking panoramic views of the entire Wayanad landscape.",
    image: "/IMAGES/banasura_trekking.png",
    cta: "Explore Trail"
  },
  {
    id: "06",
    title: "Offroad Jeep Adventure",
    distance: "Nearby",
    description: "Hold on tight for a thrilling 4x4 offroad jeep ride through the muddy, rugged trails of the dense Wayanad forests. An adrenaline-pumping experience you won't easily forget.",
    image: "/IMAGES/offroad_adventure.png",
    cta: "Book Adventure"
  },
  {
    id: "07",
    title: "Banasura Dam Boat Ride",
    distance: "2 KM",
    description: "Drift peacefully along the vast, serene waters of the Banasura Sagar Dam. Surrounded by majestic green hills, this scenic boat ride is the perfect way to relax and soak in nature's beauty.",
    image: "/IMAGES/boat_ride_dam.png",
    cta: "Explore Attraction"
  }
];

export default function NearbySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="nearby" className="relative w-full bg-charcoal overflow-hidden py-32 md:py-48 text-cream">
      
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[60vw] h-[60vw] bg-[#3a4f36] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#2a3c27] rounded-full blur-[150px] opacity-20" />
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
            <div className="w-8 h-[1px] bg-cream/30"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-cream/60 font-semibold">Explore Wayanad</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-boska)] text-cream leading-[1.1] font-light mb-8"
          >
            Discover Experiences <br className="hidden md:block" /> Beyond Zadokz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-cream/70 max-w-xl text-lg font-light leading-relaxed"
          >
            Located near some of Wayanad's most iconic attractions, Zadokz Farm Stay offers the perfect base to explore nature, adventure, and breathtaking landscapes.
          </motion.p>
        </div>

        {/* Desktop Alternating Layout */}
        <div className="hidden lg:flex flex-col space-y-32 mt-12">
          {ATTRACTIONS.map((attraction, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={attraction.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-12 gap-16 items-center"
              >
                <div className={`col-span-6 relative h-[65vh] w-full rounded-[32px] overflow-hidden shadow-2xl group ${isEven ? 'order-first' : 'order-last'}`}>
                  <Image 
                    src={attraction.image} 
                    alt={attraction.title} 
                    fill 
                    className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/10" />
                </div>
                
                <div className="col-span-6 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-2xl font-[var(--font-boska)] text-cream/50">{attraction.id}</span>
                    <div className="w-16 h-[1px] bg-cream/20"></div>
                    <span className="text-xs tracking-widest uppercase text-cream/60 bg-cream/10 px-3 py-1 rounded-full">{attraction.distance}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-boska)] text-cream mb-6">{attraction.title}</h3>
                  <p className="text-cream/70 text-lg font-light leading-relaxed mb-8 max-w-lg">{attraction.description}</p>
                  <button 
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.title + ' Wayanad')}`, '_blank')}
                    className="self-start text-sm tracking-widest uppercase text-cream border-b border-cream pb-1 hover:text-cream/70 hover:border-cream/70 transition-colors"
                  >
                    {attraction.cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden flex flex-col space-y-24">
          {ATTRACTIONS.map((attraction, index) => (
            <motion.div 
              key={attraction.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden mb-8 shadow-xl">
                 <Image 
                   src={attraction.image} 
                   alt={attraction.title} 
                   fill 
                   className="object-cover"
                 />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-xl font-[var(--font-boska)] text-cream/50">{attraction.id}</span>
                <div className="h-[1px] flex-grow bg-cream/20"></div>
                <span className="text-xs tracking-widest uppercase text-cream/60 bg-cream/10 px-3 py-1 rounded-full">{attraction.distance}</span>
              </div>
              <h3 className="text-3xl font-[var(--font-boska)] text-cream mb-4">{attraction.title}</h3>
              <p className="text-cream/70 font-light leading-relaxed mb-6">{attraction.description}</p>
              <button 
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.title + ' Wayanad')}`, '_blank')}
                className="self-start text-xs tracking-widest uppercase text-cream border-b border-cream pb-1 hover:text-cream/70 hover:border-cream/70 transition-colors"
              >
                {attraction.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-32 md:mt-48 text-center flex flex-col items-center border-t border-cream/10 pt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-[var(--font-boska)] text-cream font-light mb-10 max-w-2xl leading-relaxed"
          >
            Adventure, nature, and unforgettable memories are all within reach.
          </motion.h3>
          <motion.button 
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }) || window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="px-10 py-5 bg-cream text-charcoal rounded-full text-sm tracking-widest uppercase hover:bg-cream/90 transition-all duration-500 font-semibold"
          >
            Plan Your Stay
          </motion.button>
        </div>

      </div>
    </section>
  );
}

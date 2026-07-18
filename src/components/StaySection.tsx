"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, ArrowUpRight, Maximize2, Users, Scaling, Bath } from "lucide-react";

// Placeholder data - using existing cottage images as high-quality placeholders
const ACCOMMODATIONS = [
  {
    id: "stay-01",
    title: "Heritage Cottage Villa",
    tagline: "A majestic retreat blending history with modern luxury.",
    description: "Step into a world of timeless elegance. Our Heritage Cottage Villa offers expansive living spaces, antique wooden architecture, and panoramic views of the Banasura hills. Perfect for families seeking ultimate privacy and comfort.",
    features: ["Private Veranda", "Antique Furnishings", "Panoramic Views", "Premium Bath Amenities"],
    capacity: "Up to 4 Guests",
    size: "850 sq ft",
    image: "/IMAGES/cover/Heritage Cottage Villa COVER.JPEG",
    link: "/heritage-cottage"
  },
  {
    id: "stay-02",
    title: "The Block",
    tagline: "Wake to Misty Mornings & Panoramic Hill Views",
    description: "The Block is designed for togetherness. Whether it's a family getaway, a weekend with friends, or an office retreat, its four private rooms and open common space create the perfect setting to connect, unwind, and make lasting memories against the backdrop of the Banasura hills.",
    features: ["4 Spacious Bedrooms with Attached Bathrooms", "Open Dining space with panoramic view", "Spacious Private balconies", "Misty Morning Views", "Peaceful Farm Surroundings"],
    capacity: "Upto 6 guest",
    size: "1500 sq ft",
    image: "/IMAGES/cottages/the-block/famstay in wayanad (1).jpg",
    link: "/the-block"
  },
  {
    id: "stay-03",
    title: "The Glass room",
    tagline: "Intimate luxury for couples and solo travellers",
    description: "Refined comfort designed for couples and solo travellers seeking a private, intimate escape in a glass room with 360° views of the farm and the majestic Banasura mountains.",
    features: ["King size bed with Attached Bathroom", "Private balcony", "360 degree view", "Misty Morning Views", "Peaceful Farm Surroundings"],
    capacity: "Upto 3 guests",
    size: "450 sq ft",
    image: "/IMAGES/cover/glass room cover new.jpg",
    link: "/private-glass-room"
  },
  {
    id: "stay-04",
    title: "Ginger - The pool side room",
    tagline: "Start your day with the water at your doorstep.",
    description: "A private standalone room right next to the farm pool with an attached bathroom for complete comfort and privacy.",
    features: ["King size bed Bedrooms with Attached Bathroom", "Private porch", "Misty Morning Views", "Peaceful Farm Surroundings"],
    capacity: "Upto 3 guests",
    size: "350 sq ft",
    image: "/IMAGES/cover/ginger cover.jpg",
    link: "/ginger-poolside"
  },
  {
    id: "stay-05",
    title: "Driver's Room",
    tagline: "Comfortable resting spaces for your travel companions.",
    description: "We ensure everyone travels comfortably. Our dedicated driver accommodations provide clean, comfortable resting spaces with essential amenities.",
    features: ["Essential Amenities", "Comfortable Bedding", "Attached Bath", "Dining Access"],
    capacity: "1 Guest",
    size: "150 sq ft",
    image: "/IMAGES/COTTAGE 1/STAIR WAY.jpeg"
  }
];

// Reusable card animation variants
const cardVariants: any = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

export default function StaySection() {
  const [selectedStay, setSelectedStay] = useState<any | null>(null);
  const router = useRouter();

  // Lock body scroll when modal is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = selectedStay ? "hidden" : "auto";
  }

  return (
    <section id="stay" className="relative w-full overflow-hidden pt-4 pb-32 md:pt-8 md:pb-48 text-charcoal">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30">
         <motion.div 
           animate={{ rotate: 360 }} 
           transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
           className="absolute w-[150vw] h-[150vw] border-[1px] border-charcoal/20 rounded-full" 
           style={{ willChange: "transform" }}
         />
         <div className="absolute top-1/3 right-0 w-[50vw] h-[50vw] bg-[#2d4229] rounded-full blur-[200px] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        
        {/* Section Intro */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center space-x-3"
          >
            <div className="w-8 h-[1px] bg-charcoal/30"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-charcoal/60 font-semibold">Stay Collection</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-[var(--font-boska)] text-charcoal leading-[1.1] font-light mb-8"
          >
            Find Your Perfect <br className="hidden md:block" /> Retreat
          </motion.h2>


        </div>

        {/* ========================================== */}
        {/* DESKTOP ASYMMETRICAL LAYOUT */}
        {/* ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="hidden lg:flex flex-col space-y-10"
        >
          {/* Featured Accommodation (60/40) */}
          <motion.div variants={cardVariants} className="w-full" style={{ willChange: "transform, opacity" }}>
             <StayCard 
                stay={ACCOMMODATIONS[0]} 
                onClick={() => ACCOMMODATIONS[0].link ? router.push(ACCOMMODATIONS[0].link) : setSelectedStay(ACCOMMODATIONS[0])}
                className="grid grid-cols-12 h-[70vh]"
                imageClass="col-span-7 h-full"
                contentClass="col-span-5 h-full p-16 flex flex-col justify-center"
             />
          </motion.div>

          {/* Two-Column Portrait Accommodations */}
          <div className="grid grid-cols-2 gap-10 items-stretch">
            <motion.div variants={cardVariants} style={{ willChange: "transform, opacity" }} className="h-full">
               <StayCard 
                  stay={ACCOMMODATIONS[1]} 
                  onClick={() => ACCOMMODATIONS[1].link ? router.push(ACCOMMODATIONS[1].link) : setSelectedStay(ACCOMMODATIONS[1])}
                  className="flex flex-col h-full min-h-[85vh]"
                  imageClass="flex-1 min-h-[40vh]"
                  contentClass="h-auto p-8 lg:p-10 flex flex-col justify-between shrink-0"
               />
            </motion.div>
            <motion.div variants={cardVariants} style={{ willChange: "transform, opacity" }} className="h-full">
               <StayCard 
                  stay={ACCOMMODATIONS[2]} 
                  onClick={() => ACCOMMODATIONS[2].link ? router.push(ACCOMMODATIONS[2].link) : setSelectedStay(ACCOMMODATIONS[2])}
                  className="flex flex-col h-full min-h-[85vh]"
                  imageClass="flex-1 min-h-[40vh]"
                  contentClass="h-auto p-8 lg:p-10 flex flex-col justify-between shrink-0"
               />
            </motion.div>
          </div>

          {/* Compact Accommodations */}
          <div className="grid grid-cols-2 gap-10">
            <motion.div variants={cardVariants} style={{ willChange: "transform, opacity" }}>
               <StayCard 
                  stay={ACCOMMODATIONS[3]} 
                  onClick={() => ACCOMMODATIONS[3].link ? router.push(ACCOMMODATIONS[3].link) : setSelectedStay(ACCOMMODATIONS[3])}
                  className="flex flex-row h-[40vh] items-center"
                  imageClass="w-1/2 h-full"
                  contentClass="w-1/2 p-10"
               />
            </motion.div>
            <motion.div variants={cardVariants} style={{ willChange: "transform, opacity" }}>
               <StayCard 
                  stay={ACCOMMODATIONS[4]} 
                  onClick={() => ACCOMMODATIONS[4].link ? router.push(ACCOMMODATIONS[4].link) : setSelectedStay(ACCOMMODATIONS[4])}
                  className="flex flex-row h-[40vh] items-center"
                  imageClass="w-1/2 h-full"
                  contentClass="w-1/2 p-10"
               />
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================== */}
        {/* MOBILE HORIZONTAL SNAP CAROUSEL */}
        {/* ========================================== */}
        <div className="lg:hidden w-full relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-6 pb-12 -mx-6 px-6">
            {ACCOMMODATIONS.map((stay, index) => (
              <motion.div 
                key={stay.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="w-[85vw] max-w-[340px] sm:w-[60vw] snap-center shrink-0 flex"
              >
                <StayCard 
                  stay={stay} 
                  onClick={() => stay.link ? router.push(stay.link) : setSelectedStay(stay)}
                  className="flex flex-col w-full h-auto min-h-[420px]"
                  imageClass="h-[240px] shrink-0"
                  contentClass="p-6 flex flex-col flex-1 justify-between gap-2"
                />
              </motion.div>
            ))}
          </div>
          {/* Scroll Hint */}
          <div className="flex justify-center mt-2 space-x-2">
            <div className="w-2 h-2 rounded-full bg-charcoal/40"></div>
            <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
            <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
          </div>
        </div>

      </div>



      {/* ========================================== */}
      {/* LUXURY DETAIL MODAL / BOTTOM SHEET */}
      {/* ========================================== */}
      <AnimatePresence>
        {selectedStay && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center bg-charcoal/60 backdrop-blur-md p-0 lg:p-12"
            onClick={() => setSelectedStay(null)}
          >
            <motion.div 
              initial={{ y: "100%", scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F5F2EA] w-full lg:w-11/12 lg:max-w-6xl h-[90vh] lg:h-[85vh] rounded-t-[32px] lg:rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedStay(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-charcoal/10 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full lg:w-1/2 h-[40vh] lg:h-full relative">
                <Image src={selectedStay.image} alt={selectedStay.title} fill className="object-cover" />
              </div>

              {/* Modal Content */}
              <div className="w-full lg:w-1/2 h-[50vh] lg:h-full overflow-y-auto p-8 lg:p-16 flex flex-col">
                <div className="mb-8">
                  <span className="text-xs tracking-widest uppercase text-charcoal/60 font-semibold">{selectedStay.tagline}</span>
                  <h3 className="text-3xl lg:text-5xl font-[var(--font-boska)] text-charcoal mt-2 mb-6">{selectedStay.title}</h3>
                  <p className="text-charcoal/70 text-lg font-light leading-relaxed">{selectedStay.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center space-x-3 text-charcoal/80">
                    <Users size={20} strokeWidth={1.5} />
                    <span className="text-sm tracking-wide">{selectedStay.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-charcoal/80">
                    <Scaling size={20} strokeWidth={1.5} />
                    <span className="text-sm tracking-wide">{selectedStay.size}</span>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm tracking-widest uppercase text-charcoal mb-6 font-bold">Premium Features</h4>
                  <ul className="space-y-4">
                    {selectedStay.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-3 text-charcoal/80 text-lg font-light border-b border-charcoal/10 pb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-charcoal/10">
                  <button 
                    onClick={() => {
                      setSelectedStay(null);
                      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }) || window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="w-full py-5 bg-charcoal text-cream rounded-xl text-sm tracking-widest uppercase hover:bg-forest transition-colors font-bold flex items-center justify-center space-x-2"
                  >
                    <span>Check Availability</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

// --------------------------------------------------------------------------------
// Reusable Card Component
// --------------------------------------------------------------------------------
interface StayCardProps {
  stay: any;
  onClick: () => void;
  className?: string;
  imageClass?: string;
  contentClass?: string;
}

function StayCard({ stay, onClick, className = "", imageClass = "", contentClass = "" }: StayCardProps) {
  const content = (
    <div 
      onClick={!stay.link ? onClick : undefined}
      className={`group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${className}`}
    >
      <div className={`relative overflow-hidden ${imageClass}`}>
        <Image 
          src={stay.image} 
          alt={stay.title} 
          fill 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Glassmorphism gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
        
        {/* Expand Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/90 backdrop-blur-md flex items-center justify-center text-charcoal opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Maximize2 size={20} strokeWidth={1.5} />
        </div>
      </div>

      <div className={`bg-white ${contentClass}`}>
        <div>
          <h3 className="text-2xl md:text-3xl font-[var(--font-boska)] text-charcoal mb-2 group-hover:text-forest transition-colors">{stay.title}</h3>
          <p className="text-xs tracking-widest uppercase text-charcoal/50 mb-4">{stay.tagline}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm font-light text-charcoal/70 line-clamp-2 pr-4">{stay.description}</span>
          <div className="w-10 h-10 rounded-full border border-charcoal/20 flex shrink-0 items-center justify-center text-charcoal group-hover:bg-forest group-hover:text-cream group-hover:border-forest transition-colors">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );

  return stay.link ? (
    <Link href={stay.link} className="block h-full">
      {content}
    </Link>
  ) : content;
}

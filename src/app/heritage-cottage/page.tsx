"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, BedDouble, Bath, Coffee, Sun, TreePine, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function HeritageCottagePage() {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    { icon: <BedDouble size={24} className="text-forest/70" />, title: "2 Spacious Bedrooms", desc: "Antique furnishings and premium bedding." },
    { icon: <Bath size={24} className="text-forest/70" />, title: "Attached Bathrooms", desc: "Modern amenities with hot water." },
    { icon: <Coffee size={24} className="text-forest/70" />, title: "Living & Dining Spaces", desc: "Perfect for family gatherings." },
    { icon: <Sun size={24} className="text-forest/70" />, title: "Spacious Private Veranda", desc: "Relax and enjoy the misty mornings." },
    { icon: <TreePine size={24} className="text-forest/70" />, title: "Peaceful Farm Surroundings", desc: "Surrounded by a lush green farm." },
  ];

  return (
    <main className="relative min-h-screen text-charcoal bg-[#F8F6F0] selection:bg-forest selection:text-cream font-sans">
      <Navbar />

      <div className="pt-32 pb-16 px-6 md:px-12 container mx-auto max-w-7xl">
        
        {/* Back Button */}
        <Link href="/#stay" className="inline-flex items-center space-x-2 text-charcoal/60 hover:text-forest transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase">Back to Stays</span>
        </Link>

        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-boska)] text-charcoal mb-4">Heritage Cottage Villa</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 text-charcoal/70 text-sm md:text-base font-light space-y-2 sm:space-y-0">
            <span className="flex items-center space-x-2"><Users size={18} /> <span>Up to 6 guests</span></span>
            <span className="hidden sm:inline">•</span>
            <span>A Timeless Farm Retreat for Slow Living</span>
          </div>
        </motion.div>

        {/* Airbnb Style Image Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] md:h-[65vh] mb-16 rounded-[24px] md:rounded-[32px] overflow-hidden"
        >
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 relative h-full group overflow-hidden">
            <Image 
              src="/IMAGES/heritage-cottage/cover.jpeg" 
              alt="Heritage Cottage Villa Exterior" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              priority
            />
          </div>
          {/* Top Right Image */}
          <div className="hidden md:block relative h-full group overflow-hidden">
            <Image 
              src="/IMAGES/heritage-cottage/1.jpeg" 
              alt="Heritage Cottage Detail" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          {/* Top Right Far Image */}
          <div className="hidden md:block relative h-full group overflow-hidden">
            <Image 
              src="/IMAGES/heritage-cottage/2.jpeg" 
              alt="Heritage Cottage Interior" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
          {/* Bottom Right Span 2 Image */}
          <div className="hidden md:block md:col-span-2 relative h-full group overflow-hidden">
            <Image 
              src="/IMAGES/heritage-cottage/3.jpeg" 
              alt="Heritage Cottage View" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column - Details */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pb-12 border-b border-charcoal/10"
            >
              <h2 className="text-2xl md:text-3xl font-[var(--font-boska)] mb-6">About the Cottage</h2>
              <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                Wake to mist covered mornings and birdsong in our welcoming 2 BHK Heritage Cottage, a place to slow down and feel at home.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="py-12 border-b border-charcoal/10 lg:border-b-0"
            >
              <h2 className="text-2xl md:text-3xl font-[var(--font-boska)] mb-8">Cottage Highlights</h2>
              <div className="flex flex-col space-y-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                      <p className="text-charcoal/60 font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sticky Booking Card */}
          <div className="w-full lg:w-[35%] relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="sticky top-32 bg-white rounded-[32px] p-8 shadow-2xl border border-charcoal/5 mb-16 lg:mb-0"
            >
              <h3 className="text-2xl font-[var(--font-boska)] text-charcoal mb-2">Book Your Stay</h3>
              <p className="text-charcoal/60 text-sm mb-8 font-light">Contact us to check availability for the Heritage Cottage Villa.</p>
              
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-charcoal/10">
                <span className="font-bold">Capacity</span>
                <span className="text-charcoal/80">Up to 6 guests</span>
              </div>
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-charcoal/10">
                <span className="font-bold">Bedrooms</span>
                <span className="text-charcoal/80">2 BHK</span>
              </div>

              <Link href="/#contact">
                <button className="w-full py-4 bg-forest text-cream rounded-full font-bold tracking-widest uppercase text-sm hover:bg-moss transition-colors flex items-center justify-center space-x-2 group">
                  <span>Contact to Book</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

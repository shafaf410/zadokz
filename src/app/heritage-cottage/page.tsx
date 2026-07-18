"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Fraunces, Karla, IBM_Plex_Mono } from "next/font/google";
import { BedDouble, Bath, Coffee, Sun, TreePine, ArrowUpRight, Menu, X, MapPin, Phone, Mail, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

// Font configurations
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: 'swap',
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: 'swap',
});

export default function HeritageCottagePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const mistOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlights = [
    { icon: <BedDouble size={20} strokeWidth={1.5} />, title: "2 Spacious Bedrooms", desc: "Antique furnishings, premium bedding." },
    { icon: <Bath size={20} strokeWidth={1.5} />, title: "Attached Bathrooms", desc: "Modern amenities, hot water." },
    { icon: <Coffee size={20} strokeWidth={1.5} />, title: "Living & Dining Spaces", desc: "Perfect for family gatherings." },
    { icon: <Sun size={20} strokeWidth={1.5} />, title: "Spacious Private Veranda", desc: "Relax and enjoy the misty mornings." },
    { icon: <TreePine size={20} strokeWidth={1.5} />, title: "Peaceful Farm Surroundings", desc: "Surrounded by a lush green farm." },
  ];


  return (
    <div className={`heritage-theme ${fraunces.variable} ${karla.variable} ${plexMono.variable} min-h-screen bg-[var(--ivory)] text-[var(--forest)] font-body selection:bg-[var(--forest)] selection:text-[var(--ivory)] overflow-x-hidden`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .heritage-theme {
          --ivory: #F6F2E9;
          --forest: #1F2E1C;
          --terracotta: #B5502E;
          --charcoal-ink: #2B2B28;
          --gold-mist: #D9A548;
          --sage-muted: #6E7A5E;
          font-family: var(--font-karla), sans-serif;
        }
        
        .font-display { font-family: var(--font-fraunces), serif; }
        .font-body { font-family: var(--font-karla), sans-serif; }
        .font-mono { font-family: var(--font-plex-mono), monospace; }
        
        /* Base spacing & utility */
        .base-spacing { padding-left: max(1.5rem, 5vw); padding-right: max(1.5rem, 5vw); }
        .hairline-divider { border-color: color-mix(in srgb, var(--sage-muted) 25%, transparent); }
        
        /* Mist Animation */
        @keyframes drift {
          0% { transform: translateX(-5%); opacity: 0.6; }
          50% { transform: translateX(5%); opacity: 0.8; }
          100% { transform: translateX(-5%); opacity: 0.6; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .mist-layer { animation: none !important; opacity: 0.5 !important; }
        }
        
        .mist-layer {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--ivory) 80%, transparent) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, color-mix(in srgb, var(--gold-mist) 40%, transparent) 0%, transparent 50%);
          filter: blur(40px);
          mix-blend-mode: screen;
          animation: drift 40s ease-in-out infinite;
          pointer-events: none;
        }
        
        /* Hide scrollbar for filmstrip */
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* 1. Nav */}
      <Navbar />

      {/* 2. Hero */}
      <section className="relative w-full h-[70vh] bg-neutral-900 overflow-hidden">
        <Image 
          src="/IMAGES/heritage-cottage/cover.jpeg"
          alt="The misty veranda of the Heritage Cottage Villa at dawn, showing terracotta tiles and Warli art"
          fill
          priority
          className="object-cover"
        />
        
        {/* Mist Layer */}
        <motion.div style={{ opacity: mistOpacity }} className="absolute inset-0 z-10 pointer-events-none">
          <div className="mist-layer"></div>
        </motion.div>

        {/* Text Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end base-spacing pb-12 md:pb-16 pointer-events-none">
          <span className="font-mono text-xs md:text-xs tracking-[0.08em] uppercase text-white/80 mb-4 drop-shadow-md">A Timeless Farm Retreat for Slow Living</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] text-[var(--ivory)] leading-[1.05] tracking-tight mb-6 drop-shadow-lg max-w-4xl">
            Heritage Cottage Villa
          </h1>
          
          <div className="flex items-center space-x-3 font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--ivory)]/80">
            <Users size={14} />
            <span>Up to 6 guests</span>
            <span className="opacity-50">·</span>
            <span>2 BHK</span>
          </div>
        </div>
      </section>

      {/* 3. Gallery Grid */}
      <section className="py-16 md:py-24 base-spacing bg-[var(--ivory)]">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--forest)] mb-10">Glimpses of the Cottage</h2>
        
        {/* Mobile: Simple stack or horizontal scroll, Desktop: Airbnb style grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 md:grid-rows-2 gap-4 h-[400px] md:h-[60vh] min-h-[400px] snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          
          {/* Main Large Image */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto h-full md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-r-none md:rounded-l-2xl overflow-hidden group">
            <Image 
              src="/IMAGES/heritage-cottage/cover.jpeg" 
              alt="The quiet exterior" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </div>
          
          {/* Top Right Image */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto h-full md:col-span-2 md:row-span-1 relative rounded-2xl md:rounded-none md:rounded-tr-2xl overflow-hidden group">
            <Image 
              src="/IMAGES/heritage-cottage/1.jpeg" 
              alt="Where the family gathers" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </div>
          
          {/* Bottom Right - Left Image */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto h-full md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-none overflow-hidden group">
            <Image 
              src="/IMAGES/heritage-cottage/2.jpeg" 
              alt="Teak & heritage furniture" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </div>
          
          {/* Bottom Right - Right Image */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto h-full md:col-span-1 md:row-span-1 relative rounded-2xl md:rounded-none md:rounded-br-2xl overflow-hidden group">
            <Image 
              src="/IMAGES/heritage-cottage/3.jpeg" 
              alt="Misty morning views" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
            />
          </div>
          
        </div>
      </section>

      {/* 4 & 5. About and Booking Card */}
      <section className="base-spacing pb-24 md:pb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column - About */}
          <div className="flex-1 lg:max-w-[55%]">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--forest)] mb-4">About the Cottage</h2>
            <div className="w-12 h-[2px] bg-[var(--terracotta)] mb-8" />
            
            <p className="font-body text-lg md:text-xl leading-[1.7] text-[var(--forest)]/90 mb-8">
              Wake to mist-covered mornings and birdsong in our welcoming 2BHK Heritage Cottage — a place to slow down and feel at home.
            </p>
            
            <ul className="flex flex-col space-y-0">
              {highlights.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start space-x-6 py-6 border-b hairline-divider group transition-colors"
                  tabIndex={0}
                >
                  <div className="mt-1 text-[var(--forest)]">{item.icon}</div>
                  <div>
                    <h4 className="font-body font-semibold text-lg text-[var(--forest)]">{item.title}</h4>
                    <p className="font-body text-[var(--sage-muted)] mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Booking Card */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-[var(--forest)] text-[var(--ivory)] rounded-[8px] p-8 md:p-10 shadow-[0_12px_40px_rgba(31,46,28,0.15)] relative overflow-hidden">
              {/* Terracotta Top Edge */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--terracotta)]" />
              
              <h3 className="font-display text-3xl md:text-4xl mb-2 mt-2">Book Your Stay</h3>
              <p className="font-body text-[var(--sage-muted)] text-base mb-10 pb-8 border-b border-[var(--ivory)]/15">
                Contact us to check availability for the Heritage Cottage Villa.
              </p>
              
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-[var(--ivory)]/15">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--sage-muted)]">Capacity</span>
                <span className="font-body text-[var(--ivory)]">Up to 6 guests</span>
              </div>
              
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-[var(--ivory)]/15">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--sage-muted)]">Bedrooms</span>
                <span className="font-body text-[var(--ivory)]">2 BHK</span>
              </div>

              <a 
                href="https://wa.me/919605575281?text=Hello,%20I'd%20like%20to%20book%20a%20stay%20at%20Zadokz%20Farm%20Stay!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[var(--terracotta)] text-[var(--ivory)] rounded-[6px] font-body font-medium text-lg flex items-center justify-center space-x-2 group hover:bg-[#A34322] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--forest)]"
              >
                <span>Contact to Book</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[var(--forest)] text-[var(--ivory)] relative mt-auto">
        {/* Warli Divider Strip */}
        <div className="absolute top-0 left-0 right-0 h-12 border-b border-[var(--ivory)]/10 overflow-hidden flex items-center opacity-10 pointer-events-none">
           {/* Simple repeating svg pattern */}
           <svg width="100%" height="24" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="warli-pattern" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
                 <path d="M12 4L8 10L12 16L16 10L12 4Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round"/>
                 <circle cx="12" cy="4" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                 <path d="M8 10L4 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                 <path d="M16 10L20 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                 <path d="M12 16L9 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                 <path d="M12 16L15 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
               </pattern>
             </defs>
             <rect x="0" y="0" width="100%" height="24" fill="url(#warli-pattern)" />
           </svg>
        </div>

        <div className="base-spacing py-16 md:py-24 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            
            {/* Brand / Explore */}
            <div>
              <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)] rounded-sm">
                <div className="font-display text-2xl tracking-wide mb-1 text-[var(--ivory)]">ZADOKZ</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--sage-muted)]">FARMS</div>
              </Link>
              <div className="mt-8 flex flex-col space-y-4 font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--sage-muted)]">
                <Link href="/#stay" className="hover:text-[var(--ivory)] transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">Stay</Link>
                <Link href="/#experiences" className="hover:text-[var(--ivory)] transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">Experiences</Link>
                <Link href="/gallery" className="hover:text-[var(--ivory)] transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">Gallery</Link>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--sage-muted)] mb-6">Location</h4>
              <p className="font-body text-[var(--ivory)] leading-relaxed mb-6">
                Kappumkunnu, near Banasura Sagar Dam<br />
                Padinjarathara, Kerala 673575<br />
                India
              </p>
              <a 
                href="https://maps.app.goo.gl/3516sE2fHNDW8sE28" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 border border-[var(--sage-muted)] rounded-full px-5 py-2 hover:bg-[var(--ivory)] hover:text-[var(--forest)] transition-colors font-mono text-[11px] tracking-[0.08em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
              >
                <MapPin size={14} />
                <span>Open in Maps</span>
              </a>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase text-[var(--sage-muted)] mb-6">Get in Touch</h4>
              <div className="flex flex-col space-y-4 font-body mb-8">
                <a href="tel:+919605575281" className="flex items-center space-x-3 hover:text-[var(--terracotta)] transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">
                  <Phone size={16} className="text-[var(--sage-muted)]" />
                  <span>+91 96055 75281</span>
                </a>
                <a href="mailto:zadokzfarmstay@gmail.com" className="flex items-center space-x-3 hover:text-[var(--terracotta)] transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">
                  <Mail size={16} className="text-[var(--sage-muted)]" />
                  <span>zadokzfarmstay@gmail.com</span>
                </a>
              </div>
              
              <Link 
                href="/#contact"
                className="inline-block bg-[var(--terracotta)] text-[var(--ivory)] font-mono text-[11px] tracking-[0.08em] uppercase rounded-[6px] px-6 py-3 hover:bg-[#A34322] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book Your Stay
              </Link>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-[var(--sage-muted)]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--sage-muted)]">
            <p>&copy; {new Date().getFullYear()} Zadokz Farms.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[var(--ivory)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">Privacy</a>
              <a href="#" className="hover:text-[var(--ivory)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--terracotta)]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

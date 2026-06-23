"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (!element) {
      console.warn(`Element with id ${targetId} not found`);
      return;
    }

    // Use requestAnimationFrame to ensure the mobile menu closing render has started
    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 bg-cream/95 backdrop-blur-md shadow-sm" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="/icon of logo.jpeg" alt="Zadokz Icon" className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8' : 'h-12'}`} />
            <div className="flex flex-col">
              <span className={`tracking-[0.2em] font-light uppercase leading-none transition-all duration-500 text-forest ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Zadokz</span>
              <span className={`tracking-[0.4em] font-bold uppercase mt-1 pl-1 transition-all duration-500 text-forest/80 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>Farms</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#stay" onClick={(e) => handleNavClick(e, 'stay')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Stay</a>
            <a href="#experiences" onClick={(e) => handleNavClick(e, 'experiences')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Experiences</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Gallery</a>
            <a href="#nearby" onClick={(e) => handleNavClick(e, 'nearby')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Nearby</a>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a href="#book" onClick={(e) => handleNavClick(e, 'book')} className="px-6 py-2 border border-forest/60 rounded-full text-sm tracking-widest uppercase text-forest hover:bg-forest hover:text-cream transition-all duration-300 font-bold cursor-pointer">
              Book Stay
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative text-forest transition-colors duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            <a href="#stay" onClick={(e) => handleNavClick(e, 'stay')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Stay</a>
            <a href="#experiences" onClick={(e) => handleNavClick(e, 'experiences')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Experiences</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Gallery</a>
            <a href="#nearby" onClick={(e) => handleNavClick(e, 'nearby')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Nearby</a>
            <a href="#book" onClick={(e) => handleNavClick(e, 'book')} className="mt-8 px-8 py-4 bg-forest text-cream rounded-full text-lg tracking-widest uppercase cursor-pointer">
              Book Your Stay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

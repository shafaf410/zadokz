"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link href="#stay" className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold">Stay</Link>
            <Link href="#experiences" className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold">Experiences</Link>
            <Link href="#gallery" className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold">Gallery</Link>
            <Link href="#nearby" className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold">Nearby</Link>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link href="#book" className="px-6 py-2 border border-forest/60 rounded-full text-sm tracking-widest uppercase text-forest hover:bg-forest hover:text-cream transition-all duration-300 font-bold">
              Book Stay
            </Link>
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
            <Link href="#stay" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl tracking-widest uppercase text-cream">Stay</Link>
            <Link href="#experiences" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl tracking-widest uppercase text-cream">Experiences</Link>
            <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl tracking-widest uppercase text-cream">Gallery</Link>
            <Link href="#nearby" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl tracking-widest uppercase text-cream">Nearby</Link>
            <Link href="#book" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 px-8 py-4 bg-forest text-cream rounded-full text-lg tracking-widest uppercase">
              Book Your Stay
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

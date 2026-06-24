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
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 border border-forest/60 rounded-full text-sm tracking-widest uppercase text-forest hover:bg-forest hover:text-cream transition-all duration-300 font-bold cursor-pointer flex items-center space-x-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>Contact Us</span>
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
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 px-8 py-4 bg-forest text-cream rounded-full text-lg tracking-widest uppercase cursor-pointer flex items-center space-x-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>Contact Us</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

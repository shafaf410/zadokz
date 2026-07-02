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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, path?: string) => {
    // If it's a completely different page path, let Next.js Link handle the navigation natively
    if (path === '/gallery' || path === '/nearby') {
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) {
      // If element isn't found (e.g. we are not on the homepage), let Link handle it natively to /#targetId
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);

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
            <img src="/logo.png" alt="Zadokz Logo" className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-10' : 'h-14'}`} />
            <div className="flex flex-col">
              <span className={`tracking-[0.2em] font-light uppercase leading-none transition-all duration-500 text-forest ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Zadokz</span>
              <span className={`tracking-[0.4em] font-bold uppercase mt-1 pl-1 transition-all duration-500 text-forest/80 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>Farms</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/#stay" onClick={(e) => handleNavClick(e as any, 'stay', '/#stay')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Stay</Link>
            <Link href="/#experiences" onClick={(e) => handleNavClick(e as any, 'experiences', '/#experiences')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Experiences</Link>
            <Link href="/gallery" onClick={(e) => handleNavClick(e as any, 'gallery', '/gallery')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Gallery</Link>
            <Link href="/nearby" onClick={(e) => handleNavClick(e as any, 'nearby', '/nearby')} className="text-sm tracking-widest uppercase transition-colors duration-500 text-forest hover:text-forest/70 font-bold cursor-pointer">Nearby</Link>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={(e) => handleNavClick(e as any, 'contact')}
              className="px-6 py-2 border border-forest/60 rounded-full text-sm tracking-widest uppercase text-forest hover:bg-forest hover:text-cream transition-all duration-300 font-bold cursor-pointer flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </button>
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
            <Link href="/#stay" onClick={(e) => handleNavClick(e as any, 'stay', '/#stay')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Stay</Link>
            <Link href="/#experiences" onClick={(e) => handleNavClick(e as any, 'experiences', '/#experiences')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Experiences</Link>
            <Link href="/gallery" onClick={(e) => handleNavClick(e as any, 'gallery', '/gallery')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Gallery</Link>
            <Link href="/nearby" onClick={(e) => handleNavClick(e as any, 'nearby', '/nearby')} className="text-2xl tracking-widest uppercase text-cream cursor-pointer">Nearby</Link>
            <button 
              onClick={(e) => handleNavClick(e as any, 'contact')}
              className="mt-8 px-8 py-4 bg-forest text-cream rounded-full text-lg tracking-widest uppercase hover:bg-moss transition-colors flex items-center space-x-3 group"
            >
              <span>Contact Us</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

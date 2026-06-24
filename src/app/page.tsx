"use client";

import { useState, useEffect } from "react";
import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import StaySection from "@/components/StaySection";
import ExperiencesSection from "@/components/ExperiencesSection";
import GallerySection from "@/components/GallerySection";
import NearbySection from "@/components/NearbySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [showNearby, setShowNearby] = useState(false);

  useEffect(() => {
    const handleShowSection = (e: any) => {
      if (e.detail === 'gallery') setShowGallery(true);
      if (e.detail === 'nearby') setShowNearby(true);
    };
    window.addEventListener('showSection', handleShowSection);
    return () => window.removeEventListener('showSection', handleShowSection);
  }, []);

  return (
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream">
      <BackgroundSystem />
      <Navbar />
      
      <HeroSection />
      <DiscoverSection />
      <StaySection />
      <ExperiencesSection />
      {showGallery && <GallerySection />}
      {showNearby && <NearbySection />}
      <TestimonialsSection />



      <Footer />
    </main>
  );
}

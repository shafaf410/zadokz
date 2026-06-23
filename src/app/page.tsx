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
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-charcoal font-sans selection:bg-forest selection:text-cream">
      <BackgroundSystem />
      <Navbar />
      
      <HeroSection />
      <DiscoverSection />
      <StaySection />
      <ExperiencesSection />
      <GallerySection />
      <NearbySection />
      <TestimonialsSection />



      <Footer />
    </main>
  );
}

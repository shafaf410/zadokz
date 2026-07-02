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
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream">
      <Navbar />
      
      {/* Sticky Hero Container */}
      <div className="relative h-[100svh] w-full">
        <div className="sticky top-0 h-[100svh] w-full z-0">
          <HeroSection />
        </div>
      </div>

      {/* Solid Curtain Content */}
      <div className="relative z-10 shadow-2xl bg-cream">
        <BackgroundSystem />
        <div className="relative z-10">
          <DiscoverSection />
          <StaySection />
          <ExperiencesSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}

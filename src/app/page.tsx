import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import StaySection from "@/components/StaySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream bg-cream">
      <Navbar />
      
      <HeroSection />
      
      <div className="relative z-10 bg-cream">
        <BackgroundSystem />
        <DiscoverSection />
        <StaySection />
        <TestimonialsSection />
        <FeedbackSection />
        <Footer />
      </div>
    </main>
  );
}

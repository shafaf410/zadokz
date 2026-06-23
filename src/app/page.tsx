import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiscoverSection from "@/components/DiscoverSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundSystem />
      <Navbar />
      
      <HeroSection />
      <DiscoverSection />
      <ExperiencesSection />
      <TestimonialsSection />



      <Footer />
    </main>
  );
}

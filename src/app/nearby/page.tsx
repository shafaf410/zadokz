import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import NearbySection from "@/components/NearbySection";
import Footer from "@/components/Footer";

export default function NearbyPage() {
  return (
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream">
      <BackgroundSystem />
      <Navbar />
      <NearbySection />
      <Footer />
    </main>
  );
}

import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream">
      <BackgroundSystem />
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </main>
  );
}

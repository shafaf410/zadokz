import BackgroundSystem from "@/components/BackgroundSystem";
import Navbar from "@/components/Navbar";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";

export default function ExperiencesPage() {
  return (
    <main className="relative min-h-screen text-charcoal font-sans selection:bg-forest selection:text-cream">
      <BackgroundSystem />
      <Navbar />
      <div className="pt-10 bg-charcoal">
        <ExperiencesSection />
      </div>
      <Footer />
    </main>
  );
}

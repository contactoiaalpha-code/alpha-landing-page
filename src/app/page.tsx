import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VideoSection from "@/components/sections/VideoSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <PackagesSection />
      <ContactSection />
      <Footer />
      <ExitIntentPopup />
    </main>
  );
}

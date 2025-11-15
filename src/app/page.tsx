import WhatsappButton from "./components/WhatsappButton";
import ReviewsSection from "./components/ReviewsSection";
import HighlightsSection from "./components/HighlightsSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-[#2A2218]">
      {/* Seção 1 - Hero */}
      <HeroSection />

      {/* Seção 2 - Sobre */}
      <AboutSection />

      {/* Seção 3 - Destaques */}
      <HighlightsSection />

      {/* Seção 4 - Depoimentos */}
      <ReviewsSection />

      {/* Seção 5 - Localização */}
      <LocationSection />

      <WhatsappButton />
    </div>
  );
}

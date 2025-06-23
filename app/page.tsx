
"use client";


// Import all components
import HeroSection from "./components/hersoSection";
import AboutSection from "./components/aboutSection";
import LocationSection from "./components/locationSection";
import AmenitiesSection from "./components/amenitiesSection";
import QuickFactsSection from "./components/quickFactsSection";
import BuildersSection from "./components/buildersSection";
import ContactSection from "./components/contactSection";
import ExploreSection from "./components/explore";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-800">
      <HeroSection />
      <div className="bg-[#FBF9F6]">
        <AboutSection />
        <LocationSection />
        <AmenitiesSection />
        <QuickFactsSection />
        <ExploreSection />
        <BuildersSection />
      </div>
      <ContactSection />
    </main>
  );
}

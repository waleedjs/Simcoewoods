import type { Metadata } from "next";

//  Page metadata
export const metadata: Metadata = {
  title: "Simcoe Woods – Modern Living in Nature",
  description:
    "Discover Simcoe Woods, a serene and modern residential community nestled in nature with top-notch amenities and ideal location.",
  keywords: ["Simcoe Woods", "Real Estate", "Modern Homes", "Nature Living", "Amenities", "New Development"],
};

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

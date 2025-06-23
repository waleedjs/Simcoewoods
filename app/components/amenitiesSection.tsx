// components/AmenitiesSection.tsx
import Image from "next/image";
import { Home, Leaf, Waves } from "lucide-react";

const AmenitiesSection = () => (
  <section id="amenities" className="xl:pt-14 pt-10">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Luxurious Community Features</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Simcoe Woods sets a new standard for luxury living with an impressive array of features designed to enhance your lifestyle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Home className="h-8 w-8 mx-auto mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Premium Finishes</h3>
          <p className="text-sm text-gray-500">High-end finishes and modern amenities in every home.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Leaf className="h-8 w-8 mx-auto mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Prime Location</h3>
          <p className="text-sm text-gray-500">Minutes from Lake Simcoe and major urban amenities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
          <Waves className="h-8 w-8 mx-auto mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Recreation Nearby</h3>
          <p className="text-sm text-gray-500">Enjoy beaches, boating, trails, and parks year-round.</p>
        </div>
      </div>
      <div className="mt-12">
        <Image
          src="/images/ammenties.jpg"
          width={1200}
          height={500}
          alt="Lifestyle shot of community amenities"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  </section>
);

export default AmenitiesSection;

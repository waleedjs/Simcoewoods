// components/LocationSection.tsx
import Image from "next/image";

const LocationSection = () => (
  <section id="location" className="xl:pt-14 pt-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/lake.jpg"
            width={600}
            height={400}
            alt="Aerial view of the Innisfil community and lake"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">An Unbeatable Location</h2>
          <p className="text-gray-600 leading-relaxed">
            Simcoe Woods offers residents exceptional convenience, with Friday Harbour and the beautiful shores of
            Lake Simcoe just a 5-minute drive away. Major highways like the 400 and the planned Innisfil GO Station
            ensure seamless connectivity. The development is surrounded by top-tier schools, shopping, and healthcare
            facilities, providing peace of mind for all residents.
          </p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;

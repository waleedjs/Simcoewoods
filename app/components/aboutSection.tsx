// components/AboutSection.tsx
import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="xl:pt-14 pt-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6">About Simcoe Woods</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Simcoe Woods, a premium collection of singles and townhomes at Benson Street and Webster
            Boulevard. Discover your perfect home crafted by award-winning builders in the heart of Innisfil. This new
            community combines luxury, accessibility, and natural beauty, making it a standout development for families,
            professionals, and investors.
          </p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Register Your Interest
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Image
            src="/images/hero2.jpg"
            width={600}
            height={450}
            alt="Exterior rendering of a Simcoe Woods home"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

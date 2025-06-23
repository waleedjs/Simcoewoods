import Image from "next/image";
import RegistrationForm from "./registrationform";

const HeroSection = () => (
  <section className="relative bg-black">
    {/* Background Image with Dark Overlay */}
    <div className="absolute inset-0">
      <Image
        src="/images/hero.png"
        alt="Architectural rendering of Simcoe Woods"
        fill
        className="object-cover opacity-70"
      />
    </div>

    <div className="relative container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-white text-center lg:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          SIMCOE WOODS
        </h1>
        <p className="text-xl font-light tracking-widest drop-shadow-sm">PREMIUM LIVING IN INNISFIL</p>
        <p className="text-3xl md:text-4xl font-semibold drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
          5 MINUTES TO LAKE SIMCOE
        </p>
        <div className="inline-block border-2 border-white px-8 py-3 mt-4 text-xl tracking-widest drop-shadow-md">
          PRICES STARTING FROM THE $900S
        </div>
        <div className="mt-8">
          <a
            href="#facts"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-xl"
          >
            Explore Homes
          </a>
        </div>
      </div>

      {/* Right Form with adjusted alignment */}
      <div className="w-full max-w-md justify-self-end order-1 lg:order-2">
        <RegistrationForm />
      </div>
    </div>
  </section>
);

export default HeroSection;
// components/BuildersSection.tsx
import Image from "next/image";
const BuildersSection = () => (
  <section id="builders" className="xl:py-14 py-10">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">The Builder</h2>
      <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-center gap-10">
        {/* Rosehaven Homes */}
        <div className="text-center flex flex-col items-center justify-center">
          <Image
            src="/images/rosehaven-Homes.webp"
            width={200}
            height={100}
            alt="Rosehaven Homes Logo"
            className="mx-auto mb-4"
          />
          <p className="text-sm tracking-widest text-gray-500">THE MARK OF EXCELLENCE</p>
          <p className="mt-4 text-gray-600 text-center leading-relaxed max-w-5xl">
            Since 1987, Rosehaven Homes has crafted over 9,000 exceptional residences, each built to the unparalleled
            Rosehaven standard. Renowned for their innovative approach to community design, superior home construction,
            and outstanding customer service, Rosehaven creates living spaces that blend quality, comfort, and
            distinction.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BuildersSection;

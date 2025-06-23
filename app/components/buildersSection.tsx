/* eslint-disable react/no-unescaped-entities */
// components/BuildersSection.tsx
const BuildersSection = () => (
  <section id="builders" className="xl:py-14 py-10">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">The Builders</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Rosehaven Homes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold">ROSEHAVEN HOMES</h3>
          <p className="text-sm tracking-widest text-gray-500">THE MARK OF EXCELLENCE</p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Since 1987, Rosehaven's portfolio has grown to include over 9,000 homes. They are built to the highest
            standard – the Rosehaven standard, distinguishing themselves with a different approach to communities,
            homes, and customer service.
          </p>
        </div>
        {/* inDesign Homes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold">inDesign HOMES</h3>
          <p className="text-sm tracking-widest text-gray-500">LUXURY BOUTIQUE BUILDER</p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            As luxury boutique builders, inDesign focuses on creating a select number of communities each year.
            Their reputation is built on quality materials, workmanship, and service, with care given to every
            part of the home building process.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BuildersSection;

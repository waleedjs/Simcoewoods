// components/QuickFactsSection.tsx
import {
  CheckCircle,
  MapPin,
  Building,
  Home,
  Users,
  Calendar,
  BarChart,
  TrendingUp,
} from "lucide-react";

const QuickFactsSection = () => (
  <section id="facts" className="xl:py-14 py-10">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-semibold text-center mb-12">Quick Facts</h2>
      <div className="bg-white p-8 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              Project Name:
            </span>
            <span className="font-semibold">Simcoe Woods</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <Building className="h-4 w-4 mr-2 text-green-600" />
              Number of Homes:
            </span>
            <span className="font-semibold">150+</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-green-600" />
              Property Status:
            </span>
            <span className="font-semibold">Now Selling</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-green-600" />
              Area:
            </span>
            <span className="font-semibold">Innisfil, Ontario</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <Home className="h-4 w-4 mr-2 text-green-600" />
              Property Type:
            </span>
            <span className="font-semibold">Singles & Townhomes</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-600" />
              Developers:
            </span>
            <span className="font-semibold">Rosehaven & inDesign</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <BarChart className="h-4 w-4 mr-2 text-green-600" />
              Lot Sizes:
            </span>
            <span className="font-semibold">`33` & `39`, `39` & Townhomes</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
              Pricing:
            </span>
            <span className="font-semibold">Starting from the $900s</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Full Price List
        </a>
      </div>
    </div>
  </section>
);

export default QuickFactsSection;

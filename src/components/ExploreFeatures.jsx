
// import { CheckSquare } from "./icons/CheckSquare";
// import { QrCode } from "./icons/QrCode";

import { PRIMARY_COLOR } from "../constants/colors";
import CheckSquare from "./icons/CheckSquare";
import MapPin from "./icons/MapPin";
import QrCode from "./icons/QrCode";


const ExploreFeatures = () => {

  const features = [
    {
      icon: MapPin,
      title: "Category Browsing",
      description: "Browse venues by interests like Hospitality, Wellness, and Nightlife.",
    },
    {
      icon: CheckSquare,
      title: "Book & Review",
      description: "Reserve your spot instantly and leave reviews with ease.",
    },
    {
      icon: MapPin,
      title: "Map Exploration",
      description: "Visualize nearby venues on an interactive map instantly.",
    },
    {
      icon: QrCode,
      title: "QR Instant Access",
      description: "Scan a venue's QR code for quick booking or info.",
    },
  ];

  return (
    <section id="explorer-features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          For the Explorer: Discovery Made Easy
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          We connect you with unique experiences around Mauritius.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-md border-t-4 transform hover:scale-[1.02] transition duration-300"
              style={{ borderTopColor: PRIMARY_COLOR }}
            >
              <feature.icon className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreFeatures;

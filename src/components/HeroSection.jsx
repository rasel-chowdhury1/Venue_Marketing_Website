import React from "react";
import { PRIMARY_COLOR, PRIMARY_HOVER, ACCENT_COLOR } from "../constants/colors";

const HeroSection = () => {
  const BACKGROUND_IMAGE_URL = "/HeroSectionVenue.png"; // make sure this image is inside /public

  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-32 lg:pt-40 overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-12">
          <div className="lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Explore. Book. <span style={{ color: ACCENT_COLOR }}>Experience.</span>
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              Your Ultimate Guide to the Best Venues in Mauritius. Discover hidden gems, reserve your spot, and make lasting memories.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.mauritius.venue"
                className="px-6 py-3 text-white text-lg font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
                style={{ backgroundColor: PRIMARY_COLOR }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
              >
                Download the App
              </a>
              <a
                href="#creator-tools"
                className="px-6 py-3 border border-white text-white text-lg font-semibold rounded-xl transition duration-300"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                For Venue Creators
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">Available on iOS & Android.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

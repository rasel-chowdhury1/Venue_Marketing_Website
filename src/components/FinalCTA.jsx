// import { ACCENT_COLOR, PRIMARY_COLOR } from "../constants/colors";
// import PrimaryButton from "./buttons/PrimaryButton";


// const FinalCTA = () => (
//   <section id="final-cta" className="py-16" style={{ backgroundColor: PRIMARY_COLOR }}>
//     <div className="container mx-auto px-4 max-w-7xl text-center">
//       <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Ready to Discover Your Next Experience?</h2>
//       <p className="mt-4 text-xl" style={{ color: ACCENT_COLOR }}>Join thousands of explorers and venue creators in the ultimate platform for discovery and growth.</p>
//       <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <a href="https://play.google.com/store/apps/details?id=com.mauritius.venue" target="_blank" rel="noopener noreferrer">
//             <PrimaryButton className="px-8 py-4 text-xl font-bold">
//                 Download on App Store
//             </PrimaryButton>
//             </a>
//         {/* <PrimaryButton className="px-8 py-4 text-xl font-bold" href="https://play.google.com/store/apps/details?id=com.mauritius.venue">Download on App Store</PrimaryButton> */}
//         <button className="px-8 py-4 border-2 text-white text-xl font-bold rounded-xl transition duration-300 transform hover:scale-105" style={{ borderColor: 'white', backgroundColor: 'transparent' }}>Get it on Google Play</button>
//       </div>
//     </div>
//   </section>
// );

// export default FinalCTA;


import { ACCENT_COLOR, PRIMARY_COLOR } from "../constants/colors";
import PrimaryButton from "./buttons/PrimaryButton";

const FinalCTA = () => (
  <section
    id="final-cta"
    className="py-16"
    style={{ backgroundColor: PRIMARY_COLOR }}
  >
    <div className="container mx-auto px-4 max-w-7xl text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
        Ready to Discover Your Next Experience?
      </h2>
      <p className="mt-4 text-xl" style={{ color: ACCENT_COLOR }}>
        Join thousands of explorers and venue creators in the ultimate platform
        for discovery and growth.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

        {/* Keep button without link or remove completely */}
        <PrimaryButton className="px-8 py-4 text-xl font-bold">
          Download on App Store
        </PrimaryButton>

        {/* Google Play Button with link */}
        <a
          href="https://play.google.com/store/apps/details?id=com.mauritius.venue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-8 py-4 border-2 text-white text-xl font-bold rounded-xl transition duration-300 transform hover:scale-105"
            style={{ borderColor: "white", backgroundColor: "transparent" }}
          >
            Get it on Google Play
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;

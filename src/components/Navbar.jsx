
// import { PRIMARY_COLOR, PRIMARY_HOVER } from '../constants/colors';

// const Navbar = () => (
//   <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
//     <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//       <a href="#hero" className="text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
//         This is Mauritius
//       </a>
//       <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
//         <a href="#explorer-features" className="hover:text-teal-700">Explorer</a>
//         <a href="#creator-tools" className="hover:text-teal-700">Creators</a>
//         <a href="#testimonials" className="hover:text-teal-700">Testimonials</a>
//       </div>
//       <a href="#final-cta" className="px-4 py-2 text-white font-semibold rounded-lg transition duration-300"
//          style={{ backgroundColor: PRIMARY_COLOR }}
//          onMouseEnter={e => e.target.style.backgroundColor = PRIMARY_HOVER}
//          onMouseLeave={e => e.target.style.backgroundColor = PRIMARY_COLOR}>
//         Get the App
//       </a>
//     </nav>
//   </header>
// );

// export default Navbar;



import { PRIMARY_COLOR, PRIMARY_HOVER } from '../constants/colors';
import VenueLogo from '../assets/VenueLogo.png'; // <-- Importing your logo

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

      {/* Logo + Title */}
      <a href="#hero" className="flex items-center space-x-2">
        <img
          src={VenueLogo}
          alt="Logo"
          className="h-8 w-auto"
        />
        <span
          className="text-2xl font-bold"
          style={{ color: PRIMARY_COLOR }}
        >
          This is Mauritius
        </span>
      </a>

      <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#explorer-features" className="hover:text-teal-700">Explorer</a>
        <a href="#creator-tools" className="hover:text-teal-700">Creators</a>
        <a href="#testimonials" className="hover:text-teal-700">Testimonials</a>
      </div>

      <a
        href="#final-cta"
        className="px-4 py-2 text-white font-semibold rounded-lg transition duration-300"
        style={{ backgroundColor: PRIMARY_COLOR }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = PRIMARY_HOVER)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = PRIMARY_COLOR)}
      >
        Get the App
      </a>
    </nav>
  </header>
);

export default Navbar;

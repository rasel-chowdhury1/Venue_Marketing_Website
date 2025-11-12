import React from "react";
import { ACCENT_COLOR } from '../constants/colors';
// Import social icons from react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-gray-400">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">This is Mauritious</h4>
            <p className="text-sm">Explore. Book. Experience.</p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Home</a></li>
              <li><a href="#explorer-features" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Explorer Features</a></li>
              <li><a href="#creator-tools" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Creator Tools</a></li>
              <li><a href="#testimonials" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="https://api.thismauritius.com/api/v1/settings/privacy-policy" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Privacy Policy</a></li>
              <li><a href="https://api.thismauritius.com/api/v1/settings/privacy-policy" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Terms of Service</a></li>
              <li><a href="https://api.thismauritius.com/api/v1/settings/support" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Connect</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition duration-150" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color = ACCENT_COLOR} onMouseLeave={e => e.target.style.color = 'inherit'}>
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; {currentYear} This is Mauritious. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

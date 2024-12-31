import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 mt-5 text-gray-400 py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Logo and Description */}
        <div className="text-center">
          <h2 className="text-white text-xl font-semibold">Hotel Grand</h2>
          <p className="text-sm mt-2 text-white">
            Indulge in an unforgettable escape at Hotel Grand, where luxury meets elegance in a setting that redefines modern comfort. Experience unparalleled sophistication, impeccable style, and the ultimate in relaxation for a stay you'll never forget!
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>

        {/* Links */}
      

        {/* Contact Info */}
        <div className="mt-10 text-center text-sm">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 flex justify-center items-center gap-2 text-white">
            <FaPhoneAlt /> 
            <a href="tel:+9102186242245" className="hover:underline">
              +91 02186242245
            </a>
            <FaPhoneAlt /> 
            <a href="tel:+919923233345" className="hover:underline">
              +91 9850233345
            </a>
            <FaPhoneAlt /> 
            <a href="tel:+919923233345" className="hover:underline">
              +91 9850233345
            </a>
            <FaPhoneAlt /> 
            <a href="tel:+919637233345" className="hover:underline">
              +91 9637233345
            </a>
            <FaPhoneAlt /> 
            <a href="tel:+919673233345" className="hover:underline">
              +91 9673233345
            </a>
           
          </p>
          <p className="mt-2 flex justify-center items-center gap-2 text-white">
            <FaEnvelope />
            <a href="mailto:amit@codeseed.in" className="hover:underline">
              booking@grandhotelpandharpur.vip
            </a>
          </p>
          <p className="mt-2 flex justify-center items-center gap-2 text-white">
            <FaMapMarkerAlt />
            276/1 पंढरपूर टेभूर्णी  पुणे रस्ता करकंब तालुका पंढरपूर

          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <Link to="/about" className="hover:text-white text-white">
            About
          </Link>
          <Link to="/jobs" className="hover:text-white text-white">
            Jobs
          </Link>
          <Link to="/blog" className="hover:text-white text-white">
            Blog
          </Link>
          <Link to="/press" className="hover:text-white text-white">
            Press
          </Link>
          <Link to="/careers" className="hover:text-white text-white">
            Careers
          </Link>
          <Link to="/terms-of-use" className="hover:text-white text-white">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="hover:text-white text-white">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-white text-white">
            Contact
          </Link>
        </div>
      {/* Footer Bottom */}
      <div className="text-center text-white mt-6 text-sm">
        Made with <span className="text-red-500">❤️</span> by
        <a
          href="https://www.instagram.com/swe.amit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline ml-1"
        >
          Amit Kasabe
        </a>
        &nbsp;
        from
        <a
          href="https://codeseed.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline ml-1"
        >
          CODESEED
        </a>.
      </div>
    </footer>
  );
};

export default Footer;

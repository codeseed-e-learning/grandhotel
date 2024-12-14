import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-5 text-gray-400 py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Logo and Description */}
        <div className="text-center">
          <h2 className="text-white text-xl font-semibold">Hotel Grand</h2>
          <p className="text-sm mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit exercitation veniam.
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
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/jobs" className="hover:text-white">
            Jobs
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link to="/press" className="hover:text-white">
            Press
          </Link>
          <Link to="/careers" className="hover:text-white">
            Careers
          </Link>
          <Link to="/terms-of-use" className="hover:text-white">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Contact Info */}
       

      </div>
      <div className="text-center text-gray-600 mt-6 text-sm">
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

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b relative w-full z-40">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          {/* Logo Section */}
          <div
            className="text-2xl font-bold text-orange-400"
            style={{ fontFamily: "Playwrite MX Guides" }}
          >
            HotelGrand
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Explore Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } z-30 md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4 space-y-4">
          <Link to="/" className="block text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="block text-gray-800 hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" className="block text-gray-800 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if the tab is active

  return (
    <nav className="bg-white border-b relative w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center">
          {/* Logo Section */}
          <h2 className="text-3xl italic font-semibold text-orange-500">HotelGrand</h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-gray-800 hover:text-blue-500 focus:outline-none ${isActive("/") ? "border-b-2 border-orange-400" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`text-gray-800 hover:text-blue-500 focus:outline-none ${isActive("/about") ? "border-b-2 border-orange-400" : ""}`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-gray-800 hover:text-blue-500 focus:outline-none ${isActive("/services") ? "border-b-2 border-orange-400" : ""}`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-gray-800 hover:text-blue-500 focus:outline-none ${isActive("/contact") ? "border-b-2 border-orange-400" : ""}`}
          >
            Contact
          </Link>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-transform duration-300 focus:outline-none">
            Explore Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
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
        className={`fixed inset-0 bg-white transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30 md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          aria-label="Close Menu"
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

        <div className="p-8 space-y-6">
          <Link
            to="/"
            className={`block text-gray-800 hover:text-blue-500 text-lg focus:outline-none ${isActive("/") ? "border-b-2 border-orange-400" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`block text-gray-800 hover:text-blue-500 text-lg focus:outline-none ${isActive("/about") ? "border-b-2 border-orange-400" : ""}`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`block text-gray-800 hover:text-blue-500 text-lg focus:outline-none ${isActive("/services") ? "border-b-2 border-orange-400" : ""}`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`block text-gray-800 hover:text-blue-500 text-lg focus:outline-none ${isActive("/contact") ? "border-b-2 border-orange-400" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-20"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

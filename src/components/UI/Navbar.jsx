import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b relative w-full z-40  md:px-32">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-2xl  font-bold text-orange-400" style={{fontFamily: "Playwrite MX Guides"}}>HotelGrand</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
          <button className='btn bg-orange-600 rounded-lg text-white p-2'>Explore Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-800 hover:text-blue-500">Home</a>
            <a href="#" className="block text-gray-800 hover:text-blue-500">About</a>
            <a href="#" className="block text-gray-800 hover:text-blue-500">Services</a>
            <a href="#" className="block text-gray-800 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleInquiry = () => {
    const message = `Hello, I would like to inquire about availability. Check-In: ${
      checkIn ? checkIn.toLocaleDateString() : "Not selected"
    }, Check-Out: ${
      checkOut ? checkOut.toLocaleDateString() : "Not selected"
    }, Number of Guests: ${guests}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919923233345&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/rooms/room-main.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Enjoy Holidays, Vacations & Family Time with Us
        </h1>
        <p className="text-base md:text-lg mb-8">
          Discover luxurious stays and unforgettable experiences tailored just
          for you.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Check-in Date */}
            <div className="relative">
              <label
                htmlFor="checkin"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Check-In
              </label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  style={{ zIndex: 2 }}
                />
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  placeholderText="Select date"
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label
                htmlFor="checkout"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Check-Out
              </label>
              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  style={{ zIndex: 2 }}
                />
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  placeholderText="Select date"
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-semibold mb-2 text-gray-700"
              >
                Guests
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleInquiry}
            >
              Send Inquiry on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

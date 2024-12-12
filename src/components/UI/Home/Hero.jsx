import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/rooms/room-main.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="mt-10 inset-0 bg-black bg-opacity-40 "></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center mt-32 px-4 md:px-10">
        <h1 className="text-4xl md:text-4xl font-bold mb-6">
          Enjoy Holidays, Vacations & Family Time with Us
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover luxurious stays and unforgettable experiences tailored just for you.
        </p>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Check-in Date */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="checkin">
                Check-In
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="checkout">
                Check-Out
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="guests">
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
                    {num} Guest{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105">
              Search Available Rooms
            </button>
          </div>
        </div>
        <p className="mt-5 mx-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt non laudantium quae quasi adipisci sequi perferendis! Tempore nemo inventore deserunt sequi aliquid?</p>
      </div>
    </div>
  );
};

export default Hero;
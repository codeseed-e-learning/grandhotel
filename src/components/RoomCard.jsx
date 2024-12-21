import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ imageSrc, date, category, comments, title, price , to }) => {
  return (
    <Link to={to}>
      <div className="max-w-full sm:max-w-sm lg:max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-48 sm:h-56 object-cover transform transition-transform duration-300 hover:scale-105"
            src={imageSrc}
            alt="Room"
          />
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {date}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3 gap-2">
            <span className="flex items-center">
              <i className="fas fa-tag mr-2 text-blue-500"></i> {category}
            </span>
            <span className="flex items-center">
              <i className="fas fa-comments mr-2 text-green-500"></i> {comments} Comments
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Price Section */}
          <div className="text-xl font-semibold text-gray-900 mb-4">
            <span className="text-orange-600">Price:</span>
            <span>₹{price}</span>
          </div>

          <button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg 
            hover:from-orange-600 hover:to-orange-700 transition-all duration-300 
            transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Explore Room
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;

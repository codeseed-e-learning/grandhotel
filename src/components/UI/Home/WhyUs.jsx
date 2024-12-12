import React from 'react';
import { FaThumbsUp, FaRegStar, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-blue-50">
      <h2 className="text-3xl font-semibold mb-6">Why book our hotels?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {/* Hassle Free Booking */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border">
          <FaThumbsUp className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-medium mb-2">Hassle Free Booking</h3>
          <p className="text-gray-600 text-center">Book your hotel from our website without any hassle.</p>
        </div>

        {/* 28K Reviews */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border">
          <FaRegStar className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-medium mb-2">28K Reviews</h3>
          <p className="text-gray-600 text-center">Book your hotel from our website without any hassle.</p>
        </div>

        {/* Free Cancellation */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border">
          <FaCalendarAlt className="text-green-500 text-4xl mb-4" />
          <h3 className="text-xl font-medium mb-2">Free Cancellation</h3>
          <p className="text-gray-600 text-center">Book your hotel from our website without any hassle.</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border">
          <FaHeadset className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-center">Book your hotel from our website without any hassle.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

import React from "react";
import { FaWifi, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaSpa, FaParking, FaUtensils, FaDog, FaUser } from 'react-icons/fa';

const VideoComponent = () => {
    const amenities = [
        { name: "Free WiFi", icon: <FaWifi className="text-orange-500" /> },
        { name: "Swimming Pool", icon: <FaSwimmingPool className="text-blue-500" /> },
        { name: "Gym Access", icon: <FaDumbbell className="text-green-500" /> },
        { name: "24/7 Room Service", icon: <FaConciergeBell className="text-yellow-500" /> },
        { name: "Spa and Wellness Center", icon: <FaSpa className="text-purple-500" /> },
        { name: "On-site Parking", icon: <FaParking className="text-gray-500" /> },
        { name: "Restaurant and Bar", icon: <FaUtensils className="text-red-500" /> },
        { name: "Pet-Friendly Rooms", icon: <FaDog className="text-pink-500" /> },
        { name: "Safe to live", icon: <FaUser className="text-pink-500" /> },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border">
            {/* Video Section */}
            <div className="w-full mb-6 md:mb-0">
                <video
                    className="w-full rounded-2xl border-4 border-gray-300 hover:scale-105 transition-transform duration-500"
                    poster="/images/hotel/2.JPG"
                    controls
                >
                    <source src="/videos/vdo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-white to-gray-100 p-10 rounded-2xl border border-gray-300">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                        Luxurious Amenities
                    </span>
                </h2>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border hover:border-orange-400 transform hover:scale-105 transition-transform duration-300"
                        >
                            {/* Icon */}
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 shrink-0">
                                {amenity.icon}
                            </div>
                            {/* Text */}
                            <span className="text-gray-800 font-medium text-sm sm:text-xs truncate">
                                {amenity.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default VideoComponent;

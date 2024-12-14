import React from "react";
import { FaWifi, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaSpa, FaParking, FaUtensils, FaDog } from 'react-icons/fa';

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
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl border">
            {/* Video Section */}
            <div className="w-full mb-6 md:mb-0">
                <video className="w-full rounded-lg border" poster="/images/hotel/2.JPG" controls>
                    <source src="/videos/vdo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl border">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-6 text-center">
                    Luxurious Amenities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border transform hover:-translate-y-1 transition duration-300"
                        >
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 font-bold text-xl">
                                {amenity.icon}
                            </div>
                            <span className="text-gray-800 font-medium text-xs sm:text-base ">
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

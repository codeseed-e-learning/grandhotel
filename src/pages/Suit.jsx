import React, { useState } from "react";

import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../components/UI/Home/Footer";
import Navbar from "../components/UI/Navbar";

const HotelSingle = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Array of image sources with more detailed information
    const images = [
        {
            src: "/images/rooms/room-main.jpg",
            alt: "Main Suite View",
            description: "Panoramic Ocean View"
        },
        {
            src: "/images/rooms/room-1.jpg",
            alt: "Bedroom Interior",
            description: "Luxurious Bedroom"
        },
        {
            src: "/images/rooms/room-2.jpg",
            alt: "Bathroom",
            description: "Elegant Bathroom"
        },
        {
            src: "/images/rooms/room-3.jpg",
            alt: "Balcony",
            description: "Private Balcony"
        }
    ];

    // Handler for next and previous buttons
    const handlePrev = () => {
        setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Hotel information
    const hotelDetails = {
        title: "Suite Rooms",
        price: 3500, // Updated price
        description: "A spacious, oceanfront luxury suite with breathtaking views. Experience ultimate relaxation with modern amenities and stunning sea panoramas.",
        rating: 4.8,
        amenities: [
            "Ocean View",
            "King Size Bed",
            "Private Balcony",
            "Free WiFi",
            "24/7 Room Service"
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8 lg:px-16">
                <div className="grid md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden">
                    {/* Image Carousel */}
                    <div className="relative group">
                        <div className="relative h-96 overflow-hidden">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
                                        {image.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
                        >
                            <FaChevronLeft className="text-white" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
                        >
                            <FaChevronRight className="text-white" />
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-blue-500" : "bg-white/50 hover:bg-white/75"}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Hotel Details */}
                    <div className="p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                {hotelDetails.title}
                            </h1>

                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-500 mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < Math.floor(hotelDetails.rating) ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 ml-2">
                                    {hotelDetails.rating} / 5
                                </span>
                            </div>

                            <p className="text-gray-600 mb-6">
                                {hotelDetails.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {hotelDetails.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center text-gray-700">
                                            <span className="mr-2 text-blue-500">✓</span>
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="md:text-3xl text-xl font-bold text-green-600">
                                    ₹{hotelDetails.price} {/* Updated price with rupee symbol */}
                                    <span className="text-lg text-gray-500 ml-1">/ night</span>
                                </span>

                            </div>
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
                                onClick={() => alert("Booking functionality coming soon!")}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HotelSingle;

import React from "react";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Home/Footer";

const services = [
  {
    title: "Room Service",
    description: "Enjoy in-room dining with a variety of cuisines available.",
    icon: "🏨",
  },
  {
    title: "Spa & Wellness",
    description: "Relax and rejuvenate with our luxurious spa treatments.",
    icon: "💆‍♀️",
  },
  {
    title: "Business Center",
    description: "Fully equipped space for meetings and conferences.",
    icon: "💼",
  },
  {
    title: "Free WiFi",
    description: "Stay connected with high-speed internet access throughout the hotel.",
    icon: "📶",
  },
  {
    title: "Bar",
    description: "Enjoy a variety of drinks at our well-stocked bar.",
    icon: "🍸",
  },
  {
    title: "Restaurant",
    description: "Indulge in gourmet meals prepared by expert chefs.",
    icon: "🍽️",
  },
  {
    title: "Pool",
    description: "Relax at our beautiful outdoor pool with a poolside bar.",
    icon: "🏊‍♂️",
  },
  {
    title: "Parking",
    description: "Secure and spacious parking available for all our guests.",
    icon: "🚗",
  },
];

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Our Services
        </h2>
        {/* Grid Layout for Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;

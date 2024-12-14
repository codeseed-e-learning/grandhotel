import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Home/Footer";
import { FaHeadphones } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+918830231066";
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 border rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="flex-1">
            <div className="bg-white p-8 border rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h3>
              <p className="text-gray-700 mb-2">
              <FaHeadphones /> Phone: <a href="tel:+918830231066" className="text-blue-500 hover:underline">+91 8830231066</a>
              </p>
              <p className="text-gray-700 mb-2">
                Working Hours: <a href="tel:+918830231066" className="text-blue-500 hover:underline">24 Hours</a>
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:amit@codeseed.in" className="text-blue-500 hover:underline">amit@codeseed.in</a>
              </p>
            </div>

            {/* Map */}
            <div className="bg-white p-8 border rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
              <div className="relative w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60822.76583678027!2d75.27740359850624!3d17.677473114355138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4181b8db52943%3A0x1ab147f5432da578!2sPandharpur%2C%20Maharashtra%20413304!5e0!3m2!1sen!2sin!4v1734008885131!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with us</h3> */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Home/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+918830231066"; // Your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
   <>
   <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 border rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div className="flex-1">
          <div className="bg-white p-6 border rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-gray-700">Phone: <a href="tel:+918830231066" className="text-blue-500">+91 8830231066</a></p>
            <p className="text-gray-700">Email: <a href="mailto:amit@codeseed.in" className="text-blue-500">amit@codeseed.in</a></p>
          </div>

          {/* Map */}
          <div className="bg-white p-6 border rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
            <div className="relative w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279914981!2d-74.25986519999999!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzI2LjAiTiA3NMKwMjcnMTcuNiJXJ!5e0!3m2!1sen!2sin!4v1675375875376!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 text-center">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mx-2">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mx-2">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mx-2">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 mx-2">
          LinkedIn
        </a>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Contact;

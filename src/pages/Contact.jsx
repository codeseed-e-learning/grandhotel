import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Home/Footer";
import { FaHeadphones } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePostRequest = async () => {
    try {
      const resp = await axios.post(`http://localhost:1337/api/inquiries`, {
        data: {
          message,
          full_name: name,
          phone_number: "9923233345", // Replace with dynamic data if required
        },
      });
      console.log("Response:", resp.data);
    } catch (error) {
      console.error("Error in POST request:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+919923233345";

    // Open WhatsApp with the message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    // Trigger POST request to server
    handlePostRequest();
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
                Phone: <a href="tel:+919923233345" className="text-blue-500 hover:underline">+91 9923233345</a>
              </p>
              <p className="text-gray-700 mb-2">
                Working Hours: 24 Hours
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:amit@codeseed.in" className="text-blue-500 hover:underline">amit@codeseed.in</a>
              </p>
            </div>

            {/* Map */}
            <div className="bg-white p-8 border rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3797.9422918231767!2d75.29659727517543!3d17.841339983125312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDUwJzI4LjgiTiA3NcKwMTcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1735278173914!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <div className="relative w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3797.9422918231767!2d75.29659727517543!3d17.841339983125312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDUwJzI4LjgiTiA3NcKwMTcnNTcuMCJF!5e0!3m2!1sen!2sin!4v1735278173914!5m2!1sen!2sin"
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
          <div className="flex justify-center space-x-6">
            {/* Example: Add meaningful icons with accessible labels */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

import React from 'react';

const testimonials =  [
    {
      name: "Amit Sharma",
      role: "CEO of Bright Minds",
      feedback: "The Grand Hotel offers an exceptional experience! From check-in to check-out, everything was flawless.",
      rating: 5,
      image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
    },
    {
      name: "Priya Kapoor",
      role: "Founder of Elite Travels",
      feedback: "Staying at The Grand Hotel was a delight. Their hospitality and amenities exceeded all expectations.",
      rating: 5,
      image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
    },
    {
      name: "Rohit Verma",
      role: "Manager at TechNext",
      feedback: "The Grand Hotel truly understands customer service. Every detail was taken care of with perfection.",
      rating: 5,
      image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
    },
    {
      name: "Sneha Joshi",
      role: "Designer at Creative Studio",
      feedback: "An outstanding experience at The Grand Hotel! The ambiance and service were top-notch.",
      rating: 5,
      image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      feedback: "The Grand Hotel redefines luxury. Their attention to detail and excellent service won me over.",
      rating: 5,
      image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
    }
  ];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold uppercase text-sm">What Our Customers Says</h2>
        <h3 className="text-3xl font-bold">Customer said about <span className="italic">Saturn</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mb-4"
            />
            <h4 className="text-lg font-medium mb-1">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
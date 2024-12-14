import React from 'react';

const testimonials = [
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
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    feedback: "The Grand Hotel redefines luxury. Their attention to detail and excellent service won me over.",
    rating: 5,
    image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
  }
];

const Review = () => {
  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;

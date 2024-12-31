import React from 'react';

const testimonials = [
  {
    name: "अमित देशमुख",
    role: "ब्राइट माइंड्सचे CEO",
    feedback: "द ग्रँड हॉटेलमधील अनुभव अप्रतिम होता! चेक-इन पासून चेक-आउटपर्यंत सगळंच परिपूर्ण होतं.",
    rating: 5,
    image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
  },
  {
    name: "प्रिया काळे",
    role: "एलिट ट्रॅव्हल्सची संस्थापक",
    feedback: "द ग्रँड हॉटेलमध्ये राहणे खूप आनंददायक होतं. त्यांची आदरातिथ्य आणि सोयीसुविधा माझ्या अपेक्षेपेक्षा अधिक होत्या.",
    rating: 5,
    image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
  },
  {
    name: "रोहित वर्मा",
    role: "टेकनेक्स्टमध्ये व्यवस्थापक",
    feedback: "द ग्रँड हॉटेलने खऱ्या अर्थाने ग्राहक सेवा दाखवली. प्रत्येक गोष्ट परिपूर्णतेने हाताळण्यात आली.",
    rating: 5,
    image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
  },
  {
    name: "स्नेहा जोशी",
    role: "क्रिएटिव्ह स्टुडिओमध्ये डिझायनर",
    feedback: "द ग्रँड हॉटेलमध्ये उत्कृष्ट अनुभव मिळाला! वातावरण आणि सेवा अप्रतिम होती.",
    rating: 5,
    image: "https://shenvi.in/wp-content/uploads/2022/10/profile-1.jpg"
  },
  {
    name: "विक्रम पाटील",
    role: "उद्योजक",
    feedback: "द ग्रँड हॉटेलने लक्झरीची नवी व्याख्या तयार केली आहे. त्यांची सविस्तर लक्ष देण्याची पद्धत आणि उत्कृष्ट सेवा माझं मन जिंकलं.",
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

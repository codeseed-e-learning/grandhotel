import React, { useState } from 'react';
import Footer from '../components/UI/Home/Footer';
import Navbar from '../components/UI/Navbar';

const AboutUs = () => {
  const [language, setLanguage] = useState('en'); // 'en' for English, 'mr' for Marathi

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  const content = {
    en: {
      heading: "About Us",
      paragraph1: "Welcome to our company! We are dedicated to delivering the best services and products that help our customers achieve their goals. Our team is passionate about innovation, excellence, and making a positive impact on the world. Every step we take is aimed at driving forward success for both our clients and our company.",
      paragraph2: "Founded in [Year], we have become a leading provider in our industry. With a team of dedicated professionals, we strive to exceed expectations. Our mission is not only to meet the needs of our clients but also to build long-lasting relationships, providing top-notch solutions to complex challenges.",
      paragraph3: "Our values are centered around integrity, trust, and dedication. We believe in constant growth and development, for both our employees and clients. Join us as we work towards creating impactful solutions that drive success and innovation."
    },
    mr: {
      heading: "आमच्याबद्दल",
      paragraph1: "आमच्या कंपनीमध्ये आपले स्वागत आहे! आम्ही आमच्या ग्राहकांना त्यांच्या उद्दिष्टे साध्य करण्यात मदत करणारी सर्वोत्तम सेवा आणि उत्पादने प्रदान करण्यासाठी वचनबद्ध आहोत. आमची टीम नवोन्मेष, उत्कृष्टता आणि जगावर सकारात्मक प्रभाव टाकण्यास समर्पित आहे. आम्ही जे काही करतो ते आमच्या ग्राहकांसाठी आणि आमच्या कंपनीसाठी यश मिळविण्यावर लक्ष केंद्रित करते.",
      paragraph2: "स्थापना [वर्ष] मध्ये झाल्यापासून, आम्ही आमच्या उद्योगातील एक अग्रगण्य प्रदाता बनलो आहोत. समर्पित व्यावसायिकांची एक टीम असलेली, आम्ही अपेक्षा ओलांडण्याचा प्रयत्न करतो. आमचा मिशन फक्त आमच्या ग्राहकांच्या गरजा पूर्ण करणे नाही तर दीर्घकालीन संबंध निर्माण करणे आणि जटिल आव्हानांना सर्वोत्तम उपाय देणे आहे.",
      paragraph3: "आमचे मूल्ये प्रामाणिकपण, विश्वास आणि समर्पण याभोवती केंद्रित आहेत. आम्ही सतत वाढ आणि विकासावर विश्वास ठेवतो, आमच्या कर्मचार्‍यांसाठी आणि ग्राहकांसाठी. आमच्याबरोबर सामील व्हा, कारण आम्ही यश आणि नवोन्मेष आणणार्या प्रभावी उपायांसाठी काम करत आहोत."
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-100 flex flex-col items-center justify-center py-12 px-6">
        <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl p-8">
          <div className="mb-8 flex justify-center">
            <img
              src="/images/owner.jpg"
              alt="About Us"
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
          <button
            onClick={toggleLanguage}
            className="bg-orange-600 text-white py-2 px-6 rounded-md mb-6 mx-auto block"
          >
            Read in to {language === 'en' ? 'Marathi' : 'English'}
          </button>
          <article className="text-gray-700 space-y-6">
            <h1 className="text-5xl font-bold text-center text-orange-600 mb-6">{content[language].heading}</h1>
            <p className="text-lg leading-relaxed">{content[language].paragraph1}</p>
            <p className="text-lg leading-relaxed">{content[language].paragraph2}</p>
            <p className="text-lg leading-relaxed">{content[language].paragraph3}</p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

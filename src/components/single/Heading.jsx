import React from 'react';

const Heading = ({ title, subtitle, paragraph }) => {
  return (
    <div className="text-center mb-12 p-5">
      {/* Title */}
      <h2 className="text-orange-600 font-semibold uppercase tracking-wide text-sm mb-3">
        {title}
      </h2>

      {/* Subtitle with a bold, gradient text effect */}
      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-6">
        {subtitle}
      </h3>

      {/* Paragraph with inviting language and clear communication */}
     

      {/* Call to Action (CTA) - More compelling content */}
      <p className="text-lg font-semibold text-gray-800">
       {paragraph}
      </p>

      {/* Decorative Line */}
      <div className="flex justify-center mt-8">
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full" />
      </div>
    </div>
  );
};

export default Heading;

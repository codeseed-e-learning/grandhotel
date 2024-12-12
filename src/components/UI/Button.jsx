import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none flex justify-center items-center"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;

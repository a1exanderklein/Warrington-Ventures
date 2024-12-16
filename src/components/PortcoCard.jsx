import React from 'react';

const PortcoCard = ({ name, imageUrl, onClick }) => {
  return (
    <div
      className="relative lg:w-[25vw] lg:h-[25vw] flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Centered logo */}
      <img
        src={imageUrl}
        alt={name}
        className="w-4/6 h-4/6 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"></div>
    </div>
  );
};

export default PortcoCard;

import React from 'react';

const PortcoModal = ({ portco, onClose }) => {
  const { name, industry, about } = portco;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-20">

      {/* Modal Content */}
      <div 
        className="relative z-10 bg-white/95  text-gray-800 rounded-lg shadow-lg size-full p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex flex-col w-1/2 p-20">
          {/* Industry */}
          <p className="text-md uppercase font-semibold text-gray-500 mb-2">
            {industry}
          </p>

          {/* Name */}
          <h2 className="text-5xl font-bold mb-6">{name}</h2>

          {/* About */}
          <p className="text-lg leading-relaxed text-gray-700">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default PortcoModal;

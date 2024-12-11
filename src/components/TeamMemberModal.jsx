import React from 'react';

const TeamMemberModal = ({ member, onClose }) => {
  const { name, year, major, focus, about, imageUrl } = member;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 bg-gray-700 text-gray-100 rounded-lg shadow-lg w-[90%] h-[90%] p-8 flex space-x-8 overflow-auto">
        {/* Left Section */}
        <div className="grid grid-flow-col grid-rows-6 w-2/6 flex-shrink-0">
          <div className="bg-gray-600 rounded-md p-4 mb-4 row-span-2">
            <h2 className="text-4xl font-light mb-6">{name}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs uppercase font-medium tracking-wider mb-1">Year</p>
                <p className="text-sm">{year}</p>
              </div>
              <div>
                <p className="text-xs uppercase font-medium tracking-wider mb-1">Major</p>
                <p className="text-sm">{major}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs uppercase font-medium tracking-wider mb-1">Focus</p>
              <p className="text-sm whitespace-pre-line">{focus}</p>
            </div>
          </div>

          <img
            src={imageUrl}
            alt={name}
            className="row-span-4 w-full h-full rounded-md object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="bg-gray-600 rounded-md p-4 w-4/6 flex-grow overflow-auto">
          <h3 className="text-3xl font-light mb-4">About {name.split(' ')[0]}</h3>
          <p className="text-sm leading-relaxed mb-8">
            {about}
          </p>

          <h3 className="text-3xl font-light mb-4">Get to know {name.split(' ')[0]}</h3>
          <h3 className="text-lg font-light mb-2">What do you do for fun?</h3>
          <p className="text-sm leading-relaxed mb-8">
            {about}
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button 
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full text-white hover:bg-gray-500"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default TeamMemberModal;

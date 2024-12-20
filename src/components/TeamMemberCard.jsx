import React from 'react';

const TeamMemberCard = ({
  name,
  year,
  major,
  focus,
  imageUrl,
  onClick, // Handles Modal opening
}) => {
  return (
    <div
      className="group block text-left relative w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col text-left">
        {/* Container for image and overlay */}
        <div className="w-full h-full relative overflow-hidden rounded-md bg-gray-200">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-70 text-[#244174] 
                          opacity-0 group-hover:opacity-100 transition-opacity 
                          duration-300 ease-in-out p-8 flex flex-col justify-start">
            {/* Name at the top */}
            <h2 className="text-2xl lg:text-3xl font-semibold mb-auto">
              {name}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Year Section */}
              <div>
                <p className="text-xs md:text-lg uppercase font-medium text-[#244174] tracking-wider mb-1">Year</p>
                <p className="text-sm md:text-lg text-[#244174]">{year}</p>
              </div>
              
              {/* Major Section */}
              <div>
                <p className="text-xs md:text-lg uppercase font-medium text-[#244174] tracking-wider mb-1">Major</p>
                <p className="text-sm md:text-lg text-[#244174]">{major}</p>
              </div>
            </div>

            {/* Focus Section */}
            <div className="mb-12">
              <p className="text-xs md:text-lg uppercase font-medium text-[#244174] tracking-wider mb-1">Focus</p>
              {focus && (
                <p className="text-sm md:text-lg text-[#244174] whitespace-pre-line">
                  {focus}
                </p>
              )}
            </div>

            {/* Arrow Button at Bottom-Left */}
            <div className="absolute bottom-4 left-4">
              <button className="w-10 h-10 bg-[#244174] rounded-full flex items-center justify-center text-white">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Name underneath */}
        <h3 className="text-xl text-[#244174] mb-4 leading-normal">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TeamMemberCard;

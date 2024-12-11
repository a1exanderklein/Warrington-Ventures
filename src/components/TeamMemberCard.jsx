import React from 'react';

const TeamMemberCard = ({
  name,
  year,       // e.g. "Freshman", "Sophomore", "Junior", "Senior"
  major,      // e.g. "Computer Science", "Finance"
  focus,      // e.g. "Artificial Intelligence/ML" or "Life Sciences"
  imageUrl,
  href = '#',
  onClick     // onClick is in the arrow, handles Modal opening
}) => {
  return (
    <a href={href} className="group block text-left relative w-full">
      <div className="flex flex-col text-left">
        {/* Container for image and overlay */}
        <div className="w-full h-full relative overflow-hidden rounded-md bg-gray-200">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-70 text-gray-900 
                          opacity-0 group-hover:opacity-100 transition-opacity 
                          duration-300 ease-in-out p-8 flex flex-col justify-start">
            {/* Name at the top */}
            <h2 className="text-3xl font-semibold mb-auto">
              {name}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Year Section */}
              <div>
                <p className="text-xs uppercase font-medium text-gray-700 tracking-wider mb-1">Year</p>
                <p className="text-sm text-gray-800">{year}</p>
              </div>
              
              {/* Major Section */}
              <div>
                <p className="text-xs uppercase font-medium text-gray-700 tracking-wider mb-1">Major</p>
                <p className="text-sm text-gray-800">{major}</p>
              </div>
            </div>

            {/* Focus Section */}
            <div className="mb-12">
              <p className="text-xs uppercase font-medium text-gray-700 tracking-wider mb-1">Focus</p>
              {focus && (
                <p className="text-sm text-gray-800 whitespace-pre-line">
                  {focus}
                </p>
              )}
            </div>

            {/* Arrow Button at Bottom-Left */}
            <div onClick={onClick} className="absolute bottom-4 left-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Name underneath if desired (you can remove this if you only want name in overlay) */}
        <h3 className="text-xl text-gray-900 mb-4 leading-normal">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default TeamMemberCard;

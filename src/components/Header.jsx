import React from "react";

const Header = ({ photo, title, headline }) => {
  return (
    <div
      className="relative w-full h-[70vh] flex items-end text-white"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-[#244174] bg-opacity-70"></div>

      {/* Text Content */}
      <div className="relative z-2 px-8 md:px-16 py-32">
        <h3 className="text-lg md:text-xl font-light tracking-wider mb-12">
          {title}
        </h3>
        <h1 className="text-5xl md:text-8xl  leading-tight">
          {headline}
        </h1>
      </div>

      {/* Blue line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-500"></div>
    </div>
  );
};

export default Header;

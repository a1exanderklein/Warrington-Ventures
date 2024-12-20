import React from 'react';

export default function Home() {
  return (
    <div className="home-container relative h-screen w-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./assets/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 w-3/5 text-white p-8">
        <h1 className="text-7xl mb-10">
          Empowering tomorrow’s entrepreneurs, today
          {/* Empowering <span className='text-gray-700'>tomorrow’s</span> entrepreneurs, <span className='text-[#244174]'>today</span> */}
        </h1>
        <h2 className="text-2xl leading-10">
          Fostering groundbreaking innovation and shaping University of Florida
          students into the next generation of early-stage investors and
          entrepreneurs
        </h2>
      </div>

      {/* Overlay to enhance text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}

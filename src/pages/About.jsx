import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("wv-believes");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-24">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">
          About Warrington Ventures
        </h1>
      </div>

      {/* Confined Box */}
      <div className="mx-auto max-w-7xl flex flex-row relative p-10 py-20 overflow-hidden">
        {/* Flex container */}
        <div className="bg-gray-100 shadow-lg w-[90%] relative p-10 py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Title & Text */}
          <div className="md:w-1/2 pl-12">
            <h2 className="text-6xl font-bold text-gray-800 mb-12">A Market Leader</h2>
            <p className="text-m text-gray-600 leading ml-28">
              Ares Management Corporation (NYSE: ARES) is a leading global alternative
              investment manager offering clients complementary primary and secondary
              investment solutions across the credit, real estate, private equity, and
              infrastructure asset classes. We seek to provide flexible capital to
              support businesses and create value for our stakeholders and within our
              communities. By collaborating across our investment groups, we aim to
              deliver consistent and attractive investment returns throughout market
              cycles.
            </p>
          </div>
          </div>
          </div>
          {/* Right Side: Video */}
          <div className="absolute top-1/2 right-[-2vw] transform -translate-y-[7vw] w-[40vw] h-[20vw] rounded-lg overflow-visible shadow-lg z-1">
            <video
              src="/assets/promo.mp4"
              className="w-full h-full object-cover"
              controls
              poster="/assets/backgroundGatorGlobe.jpg"
            />
          </div>
              
    </div>

      {/* Profile Section */}
    <div className="mt-24 mx-auto max-w-6xl">
      <h2 className="text-5xl font-bold text-gray-800 mb-12 text-left ml-8">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800 ml-20">
        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300 w-72">
            Founded
          </h3>
          <p className="text-4xl font-bold">1997</p>
        </div>
        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300  w-72">
            AUM
          </h3>
          <p className="text-4xl font-bold">$464bn</p>
        </div>
        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300  w-72">
            Market Capitalization
          </h3>
          <p className="text-4xl font-bold">$53bn</p>
        </div>

        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300  w-72">
            Employees
          </h3>
          <p className="text-4xl font-bold">~3,100</p>
        </div>
        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300  w-72">
            Global Offices
          </h3>
          <p className="text-4xl font-bold">35+</p>
        </div>
        <div className="text-left">
          <h3 className="font-semibold uppercase text-sm mb-2 border-b border-gray-300  w-72">
            Direct Institutional Relationships
          </h3>
          <p className="text-4xl font-bold">~2,600</p>
        </div>
      </div>
    </div>
    <div className="mt-24">
      <div id="wv-believes" className="relative mx-auto max-w-6xl overflow-visible">

        <motion.div
          className="relative w-full h-[400px] z-0"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/assets/backgroundGatorGlobe.jpg"
            alt="Skyline"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          className="relative bg-white -mt-24 w-[85%] h-[50vw] p-10 z-10 mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Warrington Ventures Believes</h2>
          <div className="flex items-start gap-4">
            <p className="font-bold text-gray-600">We Believe</p>
            <p className="text-lg text-gray-800 leading-relaxed">
              As a catalyst for shared prosperity and a better future, we seek to lead
              the alternative investment industry, both in terms of generating returns
              and making a lasting positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
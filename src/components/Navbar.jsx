import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event listener to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full p-4 px-8 z-10 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-[#C8D6EE] shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="h-12 mt-2">
          <img
            className={`h-full object-contain transition duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
            }`}
            src="./assets/logos/wvLogo.png"
            alt="Logo"
          />
        </NavLink>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className={`focus:outline-none transition-colors duration-300 ${
            isScrolled ? "text-[#244174]" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {/* Hamburger SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed text-4xl top-0 right-0 h-full w-full sm:w-1/2 md:w-1/3 bg-gray-100 shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-4 text-[#244174] focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-8 p-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
            onClick={toggleMenu}
          >
            Team
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
            onClick={toggleMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
        ></div>
      )}
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#C8D6EE] py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-[#244174]">
        {/* Left Section */}
        <div className="space-y-4 md:col-span-3">
          <h2 className="text-2xl font-semibold">Warrington Ventures</h2>
          <p className="text-sm">
            Warrington College of Business <br />
            1384 Union Road Bryan, Hall 100, Gainesville, FL 32611
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to="/about" className="hover:underline">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="hover:underline">
                Meet The Team
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Pitch</h3>
          <ul className="space-y-1">
            <li>
              <NavLink to="/portfolio" className="hover:underline">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
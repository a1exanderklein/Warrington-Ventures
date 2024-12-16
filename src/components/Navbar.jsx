import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-[#C8D6EE] shadow-md z-50">
      <div className="flex items-center justify-between px-4">
        {/* Logo Side */}
        <div className="h-12">
          <img
            className="h-full object-contain"
            src="./assets/logos/wvLogo.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Links Side */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#93ADDC] font-bold" : "text-[#244174]"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

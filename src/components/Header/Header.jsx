import React from "react";
import { Link, NavLink } from "react-router-dom";
import "animate.css";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white shadow-lg sticky z-50 top-0">
      <nav className="px-6 py-4 lg:px-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Branding */}
          <Link
            to="/"
            className="flex items-center text-3xl font-bold animate__animated animate__fadeIn animate__delay-1s"
            aria-label="Smart Bin Home"
          >
            <span className="text-lime-400 hover:text-lime-500 transition-colors glow-effect">
              Smart Bin
            </span>
          </Link>

          {/* Navigation Menu */}
          <div
            className="hidden lg:flex lg:w-auto animate__animated animate__fadeIn animate__delay-2s"
            id="mobile-menu-2"
          >
            <ul className="flex space-x-6 text-lg font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-lime-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } animate__animated animate__fadeIn`
                  }
                  aria-label="Home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-lime-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } animate__animated animate__fadeIn`
                  }
                  aria-label="About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-lime-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } animate__animated animate__fadeIn`
                  }
                  aria-label="Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Login and Register Buttons */}
          <div className="hidden lg:flex items-center space-x-6 animate__animated animate__fadeIn">
            <NavLink
              to="/login"
              className="text-white bg-lime-500 hover:bg-lime-600 font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Login"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-white bg-lime-600 hover:bg-lime-700 font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              aria-label="Register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Add CSS for glow effect */}
      <style jsx>{`
        .glow-effect {
          text-shadow: 0 0 5px rgba(50, 255, 50, 0.7),
            0 0 10px rgba(50, 255, 50, 0.5), 0 0 15px rgba(50, 255, 50, 0.3);
        }
      `}</style>
    </header>
  );
}

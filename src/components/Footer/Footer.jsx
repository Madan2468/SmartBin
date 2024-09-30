import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* Add your logo or site name here */}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Madan2468"
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="mailto:madanjha2468@gmail.com"
                  className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <span className="text-sm text-gray-300">
            © 2024
            <a
              href="/"
              className="hover:underline hover:text-yellow-300 transition-colors duration-300"
            >
              SmartBin
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 md:mt-0">
            <a
              href="https://github.com/Madan2468"
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:madanjha2468@gmail.com"
              className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

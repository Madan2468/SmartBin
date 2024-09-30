import React from "react";
import "animate.css";

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h1 className="text-4xl font-extrabold mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
          Get in Touch
        </h1>
        <p className="text-lg mb-8 text-center animate__animated animate__fadeIn animate__delay-2s">
          Fill in the form below to start a conversation. I'd love to hear from
          you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col bg-gray-700 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex items-center mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-4 text-md font-semibold">Noida , Delhi</span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="ml-4 text-md font-semibold">get in touch </span>
            </div>
            <div className="flex items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-4 text-md font-semibold">
                madanjha2468@gmail.com
              </span>
            </div>
          </div>

          <form className="flex flex-col bg-gray-700 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-4s">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full mb-4 py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
            />

            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full mb-4 py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
            />

            <label htmlFor="tel" className="hidden">
              Telephone Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="w-full mb-4 py-3 px-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mt-4 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

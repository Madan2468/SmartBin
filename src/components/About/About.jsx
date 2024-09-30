import React from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init(); // Initialize AOS

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Introduction Section */}
      <header className="flex flex-col md:flex-row items-center justify-between mt-10 animate__animated animate__fadeIn">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="https://source.unsplash.com/featured/?technology" // Replace with an image related to smart bins
            alt="Smart Bin"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Smart Waste Management
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto md:mx-0 animate__animated animate__fadeIn animate__delay-2s">
            Revolutionizing waste management with our cutting-edge{" "}
            <span className="text-green-500">Smart Bin System</span>. Our
            project leverages IoT sensors, real-time mapping, and cloud
            integration to optimize waste collection and reduce pollution.
          </p>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto md:mx-0 animate__animated animate__fadeIn animate__delay-3s">
            Key features of the Smart Bin system:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300 animate__animated animate__fadeIn animate__delay-4s">
            <li>IoT Integration for real-time data</li>
            <li>Ultrasonic sensors for waste level detection</li>
            <li>Real-time map for monitoring waste collection</li>
            <li>Cloud-based analytics for data-driven decisions</li>
            <li>Smart routing for waste collection vehicles</li>
          </ul>
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Project Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">IoT Sensors</h3>
              <p>
                Our Smart Bin system uses advanced IoT sensors to monitor waste
                levels, ensuring timely waste collection and reducing
                overflow-related issues.
              </p>
            </div>
            <div
              className="bg-green-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">Real-time Mapping</h3>
              <p>
                The system provides a real-time map for waste collection trucks,
                ensuring efficient routing and reducing fuel consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-r from-orange-500 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">
                Smart India Hackathon
              </h3>
              <p>
                Developed an IoT-based waste management system, winning
                accolades for innovation and environmental impact.
              </p>
            </div>
            <div
              className="bg-gradient-to-r from-green-500 to-lime-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">
                Sustainability Award
              </h3>
              <p>
                Recognized for implementing green technologies to reduce
                environmental impact and promote sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

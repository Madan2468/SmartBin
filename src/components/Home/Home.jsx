import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faTruck } from "@fortawesome/free-solid-svg-icons"; // Import truck icon
import "animate.css";
import "./SmartBin.css"; // Import the new CSS file

export default function SmartBin() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Smart Bin System",
        "Innovative Waste Management",
        "Real-Time Monitoring",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-500 to-cyan-500 text-white min-h-screen flex flex-col items-center py-10 transition-all duration-700 ease-in-out relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute w-20 h-20 animate-leaf"
          style={{ top: "20%", left: "5%" }}
        >
          <div className="leaf" />
        </div>
        <div
          className="absolute w-20 h-20 animate-leaf"
          style={{ bottom: "20%", right: "5%" }}
        >
          <div className="leaf" />
        </div>
      </div>

      <h2
        ref={typedRef}
        className="text-6xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 shadow-lg glitter-text animate__animated animate__bounceIn"
      />

      <p className="text-xl sm:text-2xl max-w-3xl text-center mb-10 animate__animated animate__fadeIn animate__delay-1s transition-opacity duration-500 hover:opacity-80">
        A Smart Bin system utilizing IoT technology to monitor waste levels,
        allowing for efficient waste management and real-time data updates. This
        project integrates sensors, cloud services, and a responsive web
        interface for waste collectors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft transform transition-transform duration-300 hover:scale-105 hover:bg-green-600">
          <h3 className="text-3xl font-semibold mb-2 text-center text-yellow-300 hover:underline">
            Real-Time Monitoring
          </h3>
          <p className="text-lg text-white">
            <span className="inline-block mr-2">🕒</span> Track waste levels in
            real-time, ensuring timely pickups and reducing overflow.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight transform transition-transform duration-300 hover:scale-105 hover:bg-green-600">
          <h3 className="text-3xl font-semibold mb-2 text-center text-yellow-300 hover:underline">
            User-Friendly Interface
          </h3>
          <p className="text-lg text-white">
            <span className="inline-block mr-2">📊</span> A web interface that
            provides insights and analytics for effective waste management.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-0.5s text-yellow-300 relative before:absolute before:content-[''] before:bg-white before:h-1 before:w-20 before:left-0 before:-bottom-2 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
          Real-Time Monitoring
        </h2>
        <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-1s text-white">
          Experience the Smart Bin in action and see how it can revolutionize
          waste management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate__animated animate__fadeIn animate__delay-2s">
          <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform transition-transform duration-300 hover:scale-105 hover:bg-green-600">
            <h3 className="text-3xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-1s text-center text-yellow-300 hover:underline">
              Dustbin Status
            </h3>
            <p className="animate__animated animate__fadeIn animate__delay-1s text-white">
              <FontAwesomeIcon icon={faTruck} className="mr-2" /> Check the
              current status of dustbins in your area.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            >
              View Status
            </a>
          </div>
          <div className="bg-gradient-to-r from-green-700 to-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform transition-transform duration-300 hover:scale-105 hover:bg-green-600">
            <h3 className="text-3xl font-semibold mb-2 animate__animated animate__fadeIn animate__delay-1s text-center text-yellow-300 hover:underline">
              Collection Vehicles
            </h3>
            <p className="animate__animated animate__fadeIn animate__delay-1s text-white">
              <FontAwesomeIcon icon={faTruck} className="mr-2" /> Track garbage
              collection vehicles on their routes.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            >
              Track Vehicles
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-10 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-4xl font-bold mb-4 text-yellow-300 relative before:absolute before:content-[''] before:bg-white before:h-1 before:w-20 before:left-0 before:-bottom-2 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">
          Live Demonstration
        </h2>
        <p className="text-lg mb-4 text-white">
          Experience the Smart Bin in action and see how it can revolutionize
          waste management.
        </p>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-110 animate__animated animate__rubberBand"
        >
          Watch Live Demo
        </a>
      </div>
    </section>
  );
}

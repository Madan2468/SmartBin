import React from "react";
import { Link } from "react-router-dom";
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
            src="https://media.licdn.com/dms/image/v2/D5603AQG8n5MliEYSWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725038080640?e=1731542400&v=beta&t=HcY6l7bBuqogHHlX8vtIAk_A2lQAmvXdrX3Cu9owi4A" // Replace with your photo URL
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
            About Me
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto md:mx-0 animate__animated animate__fadeIn animate__delay-2s">
            I am a passionate and results-driven{" "}
            <span className="text-orange-500">Full Stack Web Developer</span>{" "}
            currently pursuing a BTech + MTech from Jaypee Institute of
            Information Technology, Noida (2022-2027). I excel at transforming
            complex ideas into intuitive, user-friendly solutions.
          </p>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto md:mx-0 animate__animated animate__fadeIn animate__delay-3s">
            My skills include:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300 animate__animated animate__fadeIn animate__delay-4s">
            <li>MERN Stack</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>JSON Web Tokens</li>
            <li>Socket.IO</li>
            <li>C++</li>
            <li>Python</li>
            <li>Appwrite</li>
            <li>Multer</li>
            <li>Postman API</li>
            <li>FFmpeg</li>
          </ul>
        </div>
      </header>

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
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">Hackathons</h3>
              <p>
                Participated in various hackathons, demonstrating my
                problem-solving skills and innovative approach.
              </p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">
                Cinematics Competition
              </h3>
              <p>
                Won the first prize at a cinematics competition, showcasing my
                creativity and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

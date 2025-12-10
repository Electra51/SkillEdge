import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = {
      students: 50000 / steps,
      courses: 500 / steps,
      instructors: 200 / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setStats((prev) => ({
          students: Math.min(
            Math.floor(prev.students + increment.students),
            50000
          ),
          courses: Math.min(Math.floor(prev.courses + increment.courses), 500),
          instructors: Math.min(
            Math.floor(prev.instructors + increment.instructors),
            200
          ),
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            🎓 Start Your Learning Journey Today
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Learn from Anywhere &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Build Your Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Master in-demand skills with expert-led courses. Join thousands of
            learners achieving their goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/courses"
              className="group px-8 py-4 bg-yellow-400 rounded-lg font-semibold text-lg hover:bg-white text-black hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
              Explore Courses
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
              <FaPlay className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.students.toLocaleString()}+
              </div>
              <div className="text-blue-200">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.courses}+
              </div>
              <div className="text-blue-200">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.instructors}+
              </div>
              <div className="text-blue-200">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="dark:fill-gray-900"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

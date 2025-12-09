import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="lg:py-36 py-20 bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join our community of learners and take the first step towards
          achieving your goals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-4 bg-yellow-400 text-black rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Get Started Free
          </Link>
          <Link
            to="/courses"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

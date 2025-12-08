import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-blue-100">
              Get the latest courses and updates delivered to your inbox
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500
                           focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                                 font-semibold rounded-lg transition-colors duration-300 
                                 flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";
import { testimonials } from "../../Shared/data";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="lg:py-36 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real stories from real learners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 
                         dark:from-gray-800 dark:to-gray-850 border border-blue-100 
                         dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <FaQuoteLeft className="text-4xl text-[#3E3E5E] mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-[#3E3E5E]"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

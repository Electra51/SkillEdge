import React from "react";
import { features } from "../../Shared/data";

const Features = () => {
  return (
    <section className="lg:py-36 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl text-start font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-start dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

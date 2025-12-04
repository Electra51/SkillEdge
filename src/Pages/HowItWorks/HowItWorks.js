import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserPlus,
  FaBookOpen,
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";
// How It Works Component
export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaSearch className="w-8 h-8" />,
      title: "Browse Courses",
      description:
        "Explore our extensive library of courses across various domains. Filter by category, difficulty level, or instructor to find the perfect match for your learning goals.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: <FaUserPlus className="w-8 h-8" />,
      title: "Enroll & Start",
      description:
        "Create your free account and enroll in your chosen courses. Get instant access to all course materials, videos, and resources.",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "Learn & Practice",
      description:
        "Follow structured lessons at your own pace. Complete hands-on projects, take quizzes, and engage with the community to reinforce your learning.",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Get Certified",
      description:
        "Successfully complete the course and earn a professional certificate. Showcase your achievements on LinkedIn and advance your career.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 
                        rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start your learning journey in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r 
                        from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-20 
                        -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 
                              shadow-lg hover:shadow-2xl transition-all duration-300 
                              hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  {/* Step Number */}
                  <div
                    className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br ${step.color} 
                                rounded-xl flex items-center justify-center text-white font-bold 
                                text-xl shadow-lg transform group-hover:rotate-12 transition-transform 
                                duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl 
                                flex items-center justify-center text-white mb-6 
                                group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except last item on desktop) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 
                                  text-gray-400 dark:text-gray-600">
                      <FaArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
                     from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                     text-white rounded-lg font-semibold text-lg transition-all duration-300 
                     hover:scale-105 shadow-lg hover:shadow-xl">
            Start Learning Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

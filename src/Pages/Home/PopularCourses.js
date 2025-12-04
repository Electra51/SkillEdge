import React from "react";
import { popularCourses } from "../../Shared/data";
import { FaArrowRight, FaClock, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularCourses = () => {
  return (
    <section className="lg:py-36 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start learning with our most-loved courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden 
                         shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 
                                rounded-full text-sm font-bold flex items-center gap-1">
                  <FaStar /> {course.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {course.name}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FaUsers />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <Link
                  to={`/category/${course.id}`}
                  className="block w-full py-3 bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 hover:bg-blue-700 text-white text-center rounded-lg font-semibold transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 text-blue-500 rounded-lg font-medium text-base underline">
            View All Courses
            <FaArrowRight className="font-thin" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;

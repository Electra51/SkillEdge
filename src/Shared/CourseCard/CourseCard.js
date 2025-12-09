import React from "react";
import { FaClock, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course, onclick }) => {
  return (
    <div
      className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={() => onclick(course)}>
      <div className="relative overflow-hidden h-48">
        <img
          src={course.img}
          alt={course?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
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
          to={`/course/${course._id}`}
          className="block w-full py-3 bg-gray-900 dark:bg-gray-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 group-hover:shadow-md">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

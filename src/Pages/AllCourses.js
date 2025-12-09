import React from "react";
import { FaUsers, FaClock, FaStar } from "react-icons/fa";

const AllCourses = (props) => {
  const { name, img, rating, video, duration } = props.course;

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 cursor-pointer"
      onClick={() => props.handleClick(props.course)}>
      <div className="relative overflow-hidden h-52">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={img}
          alt={name}
        />

        <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
          <FaStar className="w-4 h-4" />
          {rating}
        </div>
      </div>

      <div className="p-5">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
          {name}
        </h5>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-5 pb-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1.5">
            <FaUsers className="w-4 h-4" />
            <span>{video || "2.5k"} students</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaClock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <button className="w-full py-3 bg-gray-900 dark:bg-gray-700 hover:bg-yellow-600 dark:hover:bg-yellow-600 text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllCourses;

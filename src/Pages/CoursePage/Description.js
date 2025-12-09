import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaArrowRight,
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaQuestionCircle,
  FaCertificate,
  FaVideo,
} from "react-icons/fa";

const Description = ({ description }) => {
  let name,
    author,
    author_img,
    rating,
    id,
    video,
    duration,
    language,
    question,
    certificate;
  console.log("description", description);

  if (description.length > 0) {
    const course = description[0];
    name = course.name;
    author = course.author;
    author_img = course.author_img;
    rating = course.rating;
    id = course.id;
    video = course.video;
    duration = course.duration;
    language = course.language;
    question = course.question;
    certificate = course.certificate;
  }
  console.log("id", id);

  if (description.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaBookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Select a Course
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Click on any course to view its details
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 p-3">
          <h5 className="text-2xl font-bold text-white mb-2 text-start">
            {name}
          </h5>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="w-5 h-5 text-yellow-300" />
              ))}
            </div>
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
              {rating}
            </span>
          </div>
        </div>

        <div className="px-4 py-3 space-y-6">
          <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <img
              src={author_img}
              alt={author}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-black"
            />
            <div>
              <h6 className="text-xl font-bold text-gray-900 dark:text-white text-start">
                {author}
              </h6>{" "}
              <p className="text-start text-sm text-gray-600 dark:text-gray-400">
                Instructor
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaVideo className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-start">
                  Videos
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white text-start">
                  {video}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 justify-start p-2 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-900/50">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <FaClock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-start">
                  Duration
                </p>
                <p
                  className="font-bold text-gray-900 dark:text-white text-start"
                  style={{
                    textWrap: "nowrap",
                  }}>
                  {duration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/50">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <FaGlobe className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-start">
                  Language
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white text-start">
                  {language}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-900/50">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <FaQuestionCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 text-start">
                  Questions
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white text-start">
                  {question}
                </p>
              </div>
            </div>
          </div>

          {certificate === "Yes" && (
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border-2 border-yellow-400 dark:border-yellow-600">
              <FaCertificate className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Certificate Included
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Earn a certificate upon completion
                </p>
              </div>
            </div>
          )}

          <Link
            to={`/course/${description[0]._id}`}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            View Full Details
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;

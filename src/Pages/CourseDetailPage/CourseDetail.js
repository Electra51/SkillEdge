import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaQuestionCircle,
  FaChartBar,
  FaDownload,
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaVideo,
  FaCertificate,
  FaLanguage,
  FaTools,
  FaGraduationCap,
  FaTag,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseDetail = () => {
  const course = useLoaderData();
  const [activeTab, setActiveTab] = useState("overview");

  const handleDownloadSyllabus = () => {
    const syllabusContent = `
COURSE SYLLABUS
================

Course Name: ${course?.name || "N/A"}
Level: ${course?.level || "N/A"}
Duration: ${course?.duration || "N/A"}
Instructor: ${course?.author || "N/A"}
Language: ${course?.language || "N/A"}
Category: ${course?.category_name || "N/A"}

DESCRIPTION:
${course?.detail || "No description available"}

LEARNING OUTCOMES:
${
  course?.learning_outcomes
    ?.map((outcome, i) => `${i + 1}. ${outcome}`)
    .join("\n") || "No learning outcomes listed"
}

CURRICULUM:
${
  course?.curriculum
    ?.map(
      (section) => `
Module ${section.module}: ${section.title}
- Lectures: ${section.lectures}
- Duration: ${section.duration}
`
    )
    .join("\n") || "No curriculum information available"
}

PREREQUISITES:
${
  course?.prerequisites?.map((prereq, i) => `${i + 1}. ${prereq}`).join("\n") ||
  "No prerequisites required"
}

TOOLS COVERED:
${course?.tools_covered?.join(", ") || "N/A"}

COURSE INCLUDES:
- ${course?.video || "N/A"} video lectures
- ${course?.duration || "N/A"} on-demand content
- ${course?.question || "N/A"} practice quizzes
- Certificate of completion
- Downloadable resources

For more information, visit our website.
    `.trim();

    const blob = new Blob([syllabusContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${course?.name?.replace(/[^a-z0-9]/gi, "_")}_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
          <Link
            to="/courses"
            className="text-blue-600 hover:underline mt-4 inline-block">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/courses"
            className="flex items-center justify-start gap-2 text-blue-100 hover:text-white mb-6 transition mt-10">
            <FaArrowLeft />
            <span>Back to Courses</span>
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-start w-fit ml-0 bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full text-sm mb-4">
                {course?.level} Level
              </div>
              <h1 className="text-start text-4xl md:text-5xl font-bold mb-4">
                {course?.name}
              </h1>
              <p className="text-start text-lg text-blue-100 mb-6 leading-relaxed">
                {course?.detail?.substring(0, 200)}...
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{course?.rating}</span>
                  <span className="text-blue-200">
                    ({course?.reviews_count?.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{course?.students} students</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-200">
                <span>Created by {course?.author}</span>
                <span>•</span>
                <span>Last updated {course?.last_updated}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:mt-0 -mb-20 md:-mb-32">
              <div className="relative">
                <img
                  src={course?.img}
                  alt={course?.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <FaPlay className="text-blue-600 ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                {course?.discount_price && (
                  <div className="mb-6 flex justify-between items-start">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${course?.discount_price}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        ${course?.price}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                      <FaTag />
                      {Math.round(
                        ((course?.price - course?.discount_price) /
                          course?.price) *
                          100
                      )}
                      % OFF
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaVideo className="text-blue-600 mt-1 flex-shrink-0" />

                    <div className="font-semibold text-gray-900">
                      {course?.video}
                    </div>
                    <div className="text-sm text-gray-500">Lectures</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-blue-600 mt-1 flex-shrink-0" />

                    <div className="font-semibold text-gray-900">
                      {course?.duration}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-blue-600 mt-1 flex-shrink-0" />

                    <div className="font-semibold text-gray-900">
                      {course?.question}
                    </div>
                    <div className="text-sm text-gray-500">Quizzes</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCertificate className="text-blue-600 mt-1 flex-shrink-0" />

                    <div className="font-semibold text-gray-900">
                      {course?.certificate}
                    </div>
                    <div className="text-sm text-gray-500">Certificate</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition shadow-lg hover:shadow-xl mb-3">
                  Enroll Now - ${course?.discount_price || course?.price}
                </button>

                <button
                  onClick={handleDownloadSyllabus}
                  className="w-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 mb-3">
                  <FaDownload />
                  Download Syllabus
                </button>

                <Link
                  to={`/category/${course?.category_id}/checkout`}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <FaStar />
                  Get Premium Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-40">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {["overview", "curriculum", "outcomes", "prerequisites"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-6 py-4 font-semibold transition whitespace-nowrap ${
                        activeTab === tab
                          ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </div>

              <div className="p-8">
                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Course Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {course?.detail}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FaGlobe className="text-blue-600" />
                        Course Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-start">
                          <span className="text-gray-500">Language:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {course?.language}
                          </span>
                        </div>
                        <div className="text-start">
                          <span className="text-gray-500">Skill Level:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {course?.level}
                          </span>
                        </div>
                        <div className="text-start">
                          <span className="text-gray-500">Category:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {course?.category_name}
                          </span>
                        </div>
                        <div className="text-start">
                          <span className="text-gray-500">Students:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {course?.students}
                          </span>
                        </div>
                      </div>
                    </div>

                    {course?.tools_covered &&
                      course.tools_covered.length > 0 && (
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <FaTools className="text-purple-600" />
                            Tools & Software Covered
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {course.tools_covered.map((tool, index) => (
                              <span
                                key={index}
                                className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-purple-200">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="mt-6 flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={course?.author_img}
                        alt={course?.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-start">
                        <h4 className="font-semibold text-gray-900">
                          {course?.author}
                        </h4>
                        <p className="text-sm text-gray-600 w-[240px]">
                          {course?.author_bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Course Curriculum
                    </h2>
                    {course?.curriculum && course.curriculum.length > 0 ? (
                      <div className="space-y-4">
                        {course.curriculum.map((section, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                                    Module {section.module}
                                  </span>
                                </div>
                                <h3 className="text-start font-semibold text-gray-900 mb-2">
                                  {section.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBookOpen />
                                    {section.lectures} lectures
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaClock />
                                    {section.duration}
                                  </span>
                                </div>
                              </div>
                              <FaChartBar className="text-gray-400 mt-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No curriculum information available.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "outcomes" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      What You'll Learn
                    </h2>
                    {course?.learning_outcomes &&
                    course.learning_outcomes.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.learning_outcomes.map((outcome, index) => (
                          <div
                            key={index}
                            className="flex items-start justify-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                            <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-start">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No learning outcomes available.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "prerequisites" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Prerequisites
                    </h2>
                    {course?.prerequisites &&
                    course.prerequisites.length > 0 ? (
                      <div className="space-y-3">
                        {course.prerequisites.map((prereq, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                            <FaGraduationCap className="text-amber-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{prereq}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No prerequisites required.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                This Course Includes:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <FaVideo className="text-blue-600 flex-shrink-0" />
                  <span>{course?.video} video lectures</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-blue-600 flex-shrink-0" />
                  <span>{course?.duration} on-demand content</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaDownload className="text-blue-600 flex-shrink-0" />
                  <span>Downloadable resources</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaCertificate className="text-blue-600 flex-shrink-0" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaQuestionCircle className="text-blue-600 flex-shrink-0" />
                  <span>{course?.question} practice quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaLanguage className="text-blue-600 flex-shrink-0" />
                  <span>{course?.language} language</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-xl mb-2">
                Ready to Start Learning?
              </h3>
              <p className="text-blue-100 mb-4">
                Join {course?.students} students transforming their careers
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition shadow-md">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

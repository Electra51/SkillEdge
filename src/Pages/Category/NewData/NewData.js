// import React from "react";
// import {
//   FaDownload,
//   FaCertificate,
//   FaLanguage,
//   FaLevelDownAlt,
//   FaQuestion,
//   FaStopwatch,
//   FaVideo,
// } from "react-icons/fa";
// import { Link, useLoaderData } from "react-router-dom";
// import AllData from "../../AllData/AllData";
// import CheckOut from "../../CheckOut/CheckOut";

// const NewData = () => {
//   // console.log(data);
//   const data = useLoaderData();
//   console.log("mmmmkkkks", data);
//   const { author } = data;

//   let id;
//   for (const news of data) {
//     id = news.id;
//   }

//   const handleButton = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       {<AllData data={data} handleButton={handleButton}></AllData>}

//       <div className="detail-course px-10">
//         <div className="subject mt-8">
//           {/* <img src={data[0].img} alt="" className='w-full p-9'/> */}

//           <div className="rounded overflow-hidden shadow-lg border px-5">
//             <div className="px-6 pt-4 pb-2 flex justify-between">
//               <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
//                 {data[0].name}
//               </div>
//               <div>
//                 <FaDownload />
//               </div>
//             </div>
//             <img
//               className="w-full border rounded-md"
//               src={data[0].img}
//               alt={data[0].name}
//             />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2">Course Description</div>
//               <p className="text-gray-400 text-base">{data[0].detail}</p>
//             </div>
//           </div>
//         </div>
//         <div className="extra mt-8">
//           <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//             <ul role="list" className="my-7 space-y-5">
//               <li className="flex space-x-3">
//                 <FaVideo />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Total Lecture : {data[0].video}
//                 </span>
//               </li>
//               <li className="flex space-x-3">
//                 <FaStopwatch />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Total Duration : {data[0].duration}
//                 </span>
//               </li>
//               <li className="flex space-x-3">
//                 <FaLanguage />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Language : English
//                 </span>
//               </li>

//               <li className="flex space-x-3">
//                 <FaQuestion />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Total Question : {data[0].question}
//                 </span>
//               </li>
//               <li className="flex space-x-3">
//                 <FaLevelDownAlt />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Level : {data[0].level}
//                 </span>
//               </li>

//               <li className="flex space-x-3">
//                 <FaCertificate />
//                 <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
//                   Certificate : Yes
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewData;
import React, { useState } from "react";
import {
  FaBookOpen,
  FaClock,
  FaAward,
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
  FaLevelDownAlt,
} from "react-icons/fa";

const NewData = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data - replace with useLoaderData() in your actual implementation
  const data = [
    {
      id: 1,
      name: "UI/UX Design Specialization",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
      detail:
        "The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective, rather than one focused on marketing or programming alone. To become a UX Designer, you will need to learn and develop a number of technical skills crucial to the role, including user research and strategy (which involves data collection), wire framing and prototyping, user interface design, and responsive web design, among others.",
      video: 20,
      duration: "05 hr 10 min",
      question: 80,
      level: "Secondary",
      rating: 4.8,
      students: 12500,
      author: "John Doe",
      lastUpdated: "December 2024",
    },
  ];

  const course = data[0];

  const learningOutcomes = [
    "Master the fundamentals of user interface design principles",
    "Conduct comprehensive user research and usability testing",
    "Create wireframes and interactive prototypes using industry tools",
    "Design responsive interfaces for web and mobile platforms",
    "Understand color theory, typography, and visual hierarchy",
    "Build a professional portfolio showcasing your design projects",
  ];

  const courseContent = [
    {
      title: "Introduction to UI/UX Design",
      lectures: 4,
      duration: "45 min",
    },
    {
      title: "User Research & Analysis",
      lectures: 5,
      duration: "1 hr 20 min",
    },
    {
      title: "Wireframing & Prototyping",
      lectures: 6,
      duration: "1 hr 45 min",
    },
    {
      title: "Visual Design Principles",
      lectures: 5,
      duration: "1 hr 30 min",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="inline-block bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full text-sm mb-4">
                {course.level} Level
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.name}
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Transform your career with hands-on UI/UX design training. Learn
                from industry experts and build real-world projects.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-blue-200">(2,450 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-200">
                <span>Created by {course.author}</span>
                <span>•</span>
                <span>Last updated {course.lastUpdated}</span>
              </div>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:mt-0 -mb-20 md:-mb-32">
              <div className="relative">
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <FaPlay className="text-blue-600 ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaVideo className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {course.video}
                      </div>
                      <div className="text-sm text-gray-500">Lectures</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {course.duration}
                      </div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaQuestionCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {course.question}
                      </div>
                      <div className="text-sm text-gray-500">Quizzes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCertificate className="text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Yes</div>
                      <div className="text-sm text-gray-500">Certificate</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>

                <button className="w-full mt-3 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2">
                  <FaDownload />
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-40">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {["overview", "curriculum", "outcomes"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 font-semibold transition ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Course Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {course.detail}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <FaGlobe className="text-blue-600" />
                        Course Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Language:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            English
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Skill Level:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Course Curriculum
                    </h2>
                    <div className="space-y-4">
                      {courseContent.map((section, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">
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
                            <FaChartBar className="text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "outcomes" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      What You'll Learn
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {learningOutcomes.map((outcome, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                          <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                This Course Includes:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <FaVideo className="text-blue-600 flex-shrink-0" />
                  <span>{course.video} video lectures</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-blue-600 flex-shrink-0" />
                  <span>{course.duration} on-demand content</span>
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
                  <span>{course.question} practice quizzes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FaLanguage className="text-blue-600 flex-shrink-0" />
                  <span>English language</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-xl mb-2">
                Ready to Start Learning?
              </h3>
              <p className="text-blue-100 mb-4">
                Join thousands of students transforming their careers
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

export default NewData;

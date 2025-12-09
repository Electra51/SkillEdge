import React from "react";

import { useLoaderData } from "react-router-dom";

import "./Category.css";

import NewData from "../CourseDetailPage/CourseDetail";

const Category = () => {
  const datas = useLoaderData();
  console.log("datas...", datas);

  return (
    <div>
      {<NewData data={datas}></NewData>}

      <div></div>
    </div>
  );
};

export default Category;

// // import React, { useState } from "react";
// // import { useLoaderData, Link } from "react-router-dom";
// // import {
// //   FaStar,
// //   FaUsers,
// //   FaClock,
// //   FaVideo,
// //   FaTag,
// //   FaFilter,
// //   FaThLarge,
// //   FaList,
// //   FaCertificate,
// //   FaArrowLeft,
// //   FaBookOpen,
// // } from "react-icons/fa";

// // const Category = () => {
// //   const courses = useLoaderData();
// //   const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
// //   const [sortBy, setSortBy] = useState("popular");
// //   const [filterLevel, setFilterLevel] = useState("all");

// //   // Get category name from first course
// //   const categoryName = courses?.[0]?.category_name || "All Courses";

// //   // Filter courses by level
// //   const filteredCourses = courses?.filter((course) => {
// //     if (filterLevel === "all") return true;
// //     return course.level.toLowerCase() === filterLevel.toLowerCase();
// //   });

// //   // Sort courses
// //   const sortedCourses = [...filteredCourses]?.sort((a, b) => {
// //     if (sortBy === "popular") {
// //       return parseInt(b.students) - parseInt(a.students);
// //     } else if (sortBy === "rating") {
// //       return parseFloat(b.rating) - parseFloat(a.rating);
// //     } else if (sortBy === "price-low") {
// //       return (a.discount_price || a.price) - (b.discount_price || b.price);
// //     } else if (sortBy === "price-high") {
// //       return (b.discount_price || b.price) - (a.discount_price || a.price);
// //     }
// //     return 0;
// //   });

// //   // Calculate stats
// //   const totalStudents = courses.reduce(
// //     (sum, course) => sum + parseFloat(course.students.replace("k", "")) * 1000,
// //     0
// //   );
// //   const avgRating = (
// //     courses.reduce((sum, course) => sum + parseFloat(course.rating), 0) /
// //     courses.length
// //   ).toFixed(2);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       {/* Hero Section */}
// //       <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white py-16">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <Link
// //             to="/"
// //             className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-6 group">
// //             <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
// //             <span>Back to Home</span>
// //           </Link>

// //           <div className="flex items-center gap-4 mb-6">
// //             <div className="bg-blue-500 bg-opacity-20 p-4 rounded-2xl">
// //               <FaBookOpen className="text-4xl text-blue-300" />
// //             </div>
// //             <div>
// //               <h1 className="text-4xl md:text-5xl font-bold mb-2">
// //                 {categoryName} Courses
// //               </h1>
// //               <p className="text-blue-200 text-lg">
// //                 {courses.length} courses available
// //               </p>
// //             </div>
// //           </div>

// //           {/* Stats */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
// //             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
// //               <div className="flex items-center gap-3">
// //                 <FaBookOpen className="text-2xl text-blue-300" />
// //                 <div>
// //                   <p className="text-2xl font-bold">{courses.length}</p>
// //                   <p className="text-sm text-blue-200">Total Courses</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
// //               <div className="flex items-center gap-3">
// //                 <FaUsers className="text-2xl text-green-300" />
// //                 <div>
// //                   <p className="text-2xl font-bold">
// //                     {(totalStudents / 1000).toFixed(1)}k+
// //                   </p>
// //                   <p className="text-sm text-blue-200">Students</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
// //               <div className="flex items-center gap-3">
// //                 <FaStar className="text-2xl text-yellow-300" />
// //                 <div>
// //                   <p className="text-2xl font-bold">{avgRating}</p>
// //                   <p className="text-sm text-blue-200">Avg Rating</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
// //               <div className="flex items-center gap-3">
// //                 <FaCertificate className="text-2xl text-purple-300" />
// //                 <div>
// //                   <p className="text-2xl font-bold">
// //                     {courses.filter((c) => c.certificate === "Yes").length}
// //                   </p>
// //                   <p className="text-sm text-blue-200">Certified</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         {/* Filters and Controls */}
// //         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
// //           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// //             {/* Left: Filters */}
// //             <div className="flex flex-wrap gap-3 items-center">
// //               <div className="flex items-center gap-2">
// //                 <FaFilter className="text-gray-500" />
// //                 <span className="font-semibold text-gray-700">Filter:</span>
// //               </div>

// //               {/* Level Filter */}
// //               <select
// //                 value={filterLevel}
// //                 onChange={(e) => setFilterLevel(e.target.value)}
// //                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
// //                 <option value="all">All Levels</option>
// //                 <option value="beginner">Beginner</option>
// //                 <option value="secondary">Intermediate</option>
// //                 <option value="higher">Advanced</option>
// //                 <option value="expert">Expert</option>
// //               </select>

// //               {/* Sort By */}
// //               <select
// //                 value={sortBy}
// //                 onChange={(e) => setSortBy(e.target.value)}
// //                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
// //                 <option value="popular">Most Popular</option>
// //                 <option value="rating">Highest Rated</option>
// //                 <option value="price-low">Price: Low to High</option>
// //                 <option value="price-high">Price: High to Low</option>
// //               </select>
// //             </div>

// //             {/* Right: View Mode */}
// //             <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
// //               <button
// //                 onClick={() => setViewMode("grid")}
// //                 className={`p-2 rounded-lg transition ${
// //                   viewMode === "grid"
// //                     ? "bg-white shadow text-blue-600"
// //                     : "text-gray-500 hover:text-gray-700"
// //                 }`}>
// //                 <FaThLarge />
// //               </button>
// //               <button
// //                 onClick={() => setViewMode("list")}
// //                 className={`p-2 rounded-lg transition ${
// //                   viewMode === "list"
// //                     ? "bg-white shadow text-blue-600"
// //                     : "text-gray-500 hover:text-gray-700"
// //                 }`}>
// //                 <FaList />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Results Count */}
// //         <div className="mb-6">
// //           <p className="text-gray-600">
// //             Showing{" "}
// //             <span className="font-semibold">{sortedCourses.length}</span>{" "}
// //             courses
// //           </p>
// //         </div>

// //         {/* Courses Grid/List */}
// //         {viewMode === "grid" ? (
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {sortedCourses.map((course) => (
// //               <Link
// //                 key={course._id}
// //                 to={`/course/${course._id}`}
// //                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition group">
// //                 <div className="relative">
// //                   <img
// //                     src={course.img}
// //                     alt={course.name}
// //                     className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
// //                   />
// //                   {course.discount_price && (
// //                     <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
// //                       <FaTag className="text-xs" />
// //                       {Math.round(
// //                         ((course.price - course.discount_price) /
// //                           course.price) *
// //                           100
// //                       )}
// //                       % OFF
// //                     </div>
// //                   )}
// //                   <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
// //                     {course.level}
// //                   </div>
// //                 </div>

// //                 <div className="p-5">
// //                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
// //                     {course.name}
// //                   </h3>
// //                   <p className="text-sm text-gray-600 mb-3 line-clamp-2">
// //                     {course.detail}
// //                   </p>

// //                   <div className="flex items-center gap-2 mb-4">
// //                     <img
// //                       src={course.author_img}
// //                       alt={course.author}
// //                       className="w-8 h-8 rounded-full object-cover"
// //                     />
// //                     <span className="text-sm text-gray-700">
// //                       {course.author}
// //                     </span>
// //                   </div>

// //                   <div className="flex items-center justify-between mb-4 text-sm">
// //                     <div className="flex items-center gap-1 text-yellow-500">
// //                       <FaStar />
// //                       <span className="font-semibold text-gray-900">
// //                         {course.rating}
// //                       </span>
// //                       <span className="text-gray-500">
// //                         ({course.reviews_count})
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center gap-1 text-gray-600">
// //                       <FaUsers />
// //                       <span>{course.students}</span>
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
// //                     <div className="flex items-center gap-2">
// //                       <FaVideo className="text-blue-600" />
// //                       <span>{course.video} lectures</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <FaClock className="text-blue-600" />
// //                       <span>{course.duration}</span>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center justify-between pt-4 border-t border-gray-200">
// //                     <div className="flex items-baseline gap-2">
// //                       <span className="text-2xl font-bold text-gray-900">
// //                         ${course.discount_price || course.price}
// //                       </span>
// //                       {course.discount_price && (
// //                         <span className="text-sm text-gray-400 line-through">
// //                           ${course.price}
// //                         </span>
// //                       )}
// //                     </div>
// //                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
// //                       Enroll Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="space-y-4">
// //             {sortedCourses.map((course) => (
// //               <Link
// //                 key={course._id}
// //                 to={`/course/${course._id}`}
// //                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition group flex">
// //                 <img
// //                   src={course.img}
// //                   alt={course.name}
// //                   className="w-64 h-48 object-cover group-hover:scale-105 transition duration-300"
// //                 />
// //                 <div className="flex-1 p-6">
// //                   <div className="flex items-start justify-between mb-3">
// //                     <div>
// //                       <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
// //                         {course.name}
// //                       </h3>
// //                       <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
// //                         <div className="flex items-center gap-1">
// //                           <FaStar className="text-yellow-500" />
// //                           <span className="font-semibold text-gray-900">
// //                             {course.rating}
// //                           </span>
// //                           <span>({course.reviews_count})</span>
// //                         </div>
// //                         <div className="flex items-center gap-1">
// //                           <FaUsers />
// //                           <span>{course.students} students</span>
// //                         </div>
// //                         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                           {course.level}
// //                         </span>
// //                       </div>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="text-3xl font-bold text-gray-900 mb-1">
// //                         ${course.discount_price || course.price}
// //                       </div>
// //                       {course.discount_price && (
// //                         <div className="text-gray-400 line-through">
// //                           ${course.price}
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <p className="text-gray-600 mb-4 line-clamp-2">
// //                     {course.detail}
// //                   </p>

// //                   <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
// //                     <div className="flex items-center gap-2">
// //                       <FaVideo className="text-blue-600" />
// //                       <span>{course.video} lectures</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <FaClock className="text-blue-600" />
// //                       <span>{course.duration}</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <FaCertificate className="text-blue-600" />
// //                       <span>Certificate: {course.certificate}</span>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-2">
// //                       <img
// //                         src={course.author_img}
// //                         alt={course.author}
// //                         className="w-10 h-10 rounded-full object-cover"
// //                       />
// //                       <span className="text-sm font-medium text-gray-700">
// //                         {course.author}
// //                       </span>
// //                     </div>
// //                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
// //                       Enroll Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         )}

// //         {/* Empty State */}
// //         {sortedCourses.length === 0 && (
// //           <div className="text-center py-16">
// //             <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
// //               <FaBookOpen className="text-4xl text-gray-400" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900 mb-2">
// //               No courses found
// //             </h3>
// //             <p className="text-gray-600 mb-6">
// //               Try adjusting your filters to see more results
// //             </p>
// //             <button
// //               onClick={() => {
// //                 setFilterLevel("all");
// //                 setSortBy("popular");
// //               }}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
// //               Clear Filters
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Category;

// import React, { useEffect, useState } from "react";
// import { useLoaderData, Link } from "react-router-dom";
// import {
//   FaStar,
//   FaUsers,
//   FaClock,
//   FaVideo,
//   FaTag,
//   FaFilter,
//   FaThLarge,
//   FaList,
//   FaCertificate,
//   FaArrowLeft,
//   FaBookOpen,
// } from "react-icons/fa";

// const Category = () => {
//   const [loading, setLoading] = useState(false);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     setLoading(true);
//     fetch(" http://localhost:5001/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("first", data);
//         setCategories(data.slice(0, 3));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching courses:", error);
//         setLoading(false);
//       });
//   }, []);
//   console.log("categories", categories);

//   const data = useLoaderData();
//   console.log("datas...", data);
//   const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
//   const [sortBy, setSortBy] = useState("popular");
//   const [filterLevel, setFilterLevel] = useState("all");

//   // Ensure courses is always an array
//   const courses = Array.isArray(data) ? data : [];

//   // Get category name from first course
//   const categoryName = courses?.[0]?.category_name || "All Courses";

//   // Filter courses by level
//   const filteredCourses = courses.filter((course) => {
//     if (filterLevel === "all") return true;
//     return course.level.toLowerCase() === filterLevel.toLowerCase();
//   });

//   // Sort courses
//   const sortedCourses = [...filteredCourses].sort((a, b) => {
//     if (sortBy === "popular") {
//       return parseInt(b.students) - parseInt(a.students);
//     } else if (sortBy === "rating") {
//       return parseFloat(b.rating) - parseFloat(a.rating);
//     } else if (sortBy === "price-low") {
//       return (a.discount_price || a.price) - (b.discount_price || b.price);
//     } else if (sortBy === "price-high") {
//       return (b.discount_price || b.price) - (a.discount_price || a.price);
//     }
//     return 0;
//   });

//   // Calculate stats
//   const totalStudents =
//     courses.length > 0
//       ? courses.reduce((sum, course) => {
//           const students = parseFloat(course.students?.replace("k", "") || 0);
//           return sum + students * 1000;
//         }, 0)
//       : 0;

//   const avgRating =
//     courses.length > 0
//       ? (
//           courses.reduce(
//             (sum, course) => sum + parseFloat(course.rating || 0),
//             0
//           ) / courses.length
//         ).toFixed(2)
//       : "0.00";

//   // Loading state
//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading courses...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-6 group">
//             <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
//             <span>Back to Home</span>
//           </Link>

//           <div className="flex items-center gap-4 mb-6">
//             <div className="bg-blue-500 bg-opacity-20 p-4 rounded-2xl">
//               <FaBookOpen className="text-4xl text-blue-300" />
//             </div>
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-2">
//                 {categoryName} Courses
//               </h1>
//               <p className="text-blue-200 text-lg">
//                 {courses.length} courses available
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
//               <div className="flex items-center gap-3">
//                 <FaBookOpen className="text-2xl text-blue-300" />
//                 <div>
//                   <p className="text-2xl font-bold">{courses.length}</p>
//                   <p className="text-sm text-blue-200">Total Courses</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
//               <div className="flex items-center gap-3">
//                 <FaUsers className="text-2xl text-green-300" />
//                 <div>
//                   <p className="text-2xl font-bold">
//                     {(totalStudents / 1000).toFixed(1)}k+
//                   </p>
//                   <p className="text-sm text-blue-200">Students</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
//               <div className="flex items-center gap-3">
//                 <FaStar className="text-2xl text-yellow-300" />
//                 <div>
//                   <p className="text-2xl font-bold">{avgRating}</p>
//                   <p className="text-sm text-blue-200">Avg Rating</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
//               <div className="flex items-center gap-3">
//                 <FaCertificate className="text-2xl text-purple-300" />
//                 <div>
//                   <p className="text-2xl font-bold">
//                     {courses.filter((c) => c.certificate === "Yes").length}
//                   </p>
//                   <p className="text-sm text-blue-200">Certified</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Filters and Controls */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             {/* Left: Filters */}
//             <div className="flex flex-wrap gap-3 items-center">
//               <div className="flex items-center gap-2">
//                 <FaFilter className="text-gray-500" />
//                 <span className="font-semibold text-gray-700">Filter:</span>
//               </div>

//               {/* Level Filter */}
//               <select
//                 value={filterLevel}
//                 onChange={(e) => setFilterLevel(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="all">All Levels</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="secondary">Intermediate</option>
//                 <option value="higher">Advanced</option>
//                 <option value="expert">Expert</option>
//               </select>

//               {/* Sort By */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="popular">Most Popular</option>
//                 <option value="rating">Highest Rated</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//               </select>
//             </div>

//             {/* Right: View Mode */}
//             <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition ${
//                   viewMode === "grid"
//                     ? "bg-white shadow text-blue-600"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}>
//                 <FaThLarge />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition ${
//                   viewMode === "list"
//                     ? "bg-white shadow text-blue-600"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}>
//                 <FaList />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-gray-600">
//             Showing{" "}
//             <span className="font-semibold">{sortedCourses.length}</span>{" "}
//             courses
//           </p>
//         </div>

//         {/* Courses Grid/List */}
//         {viewMode === "grid" ? (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedCourses.map((course) => (
//               <Link
//                 key={course._id}
//                 to={`/course/${course._id}`}
//                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition group">
//                 <div className="relative">
//                   <img
//                     src={course.img}
//                     alt={course.name}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
//                   />
//                   {course.discount_price && (
//                     <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                       <FaTag className="text-xs" />
//                       {Math.round(
//                         ((course.price - course.discount_price) /
//                           course.price) *
//                           100
//                       )}
//                       % OFF
//                     </div>
//                   )}
//                   <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
//                     {course.level}
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
//                     {course.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                     {course.detail}
//                   </p>

//                   <div className="flex items-center gap-2 mb-4">
//                     <img
//                       src={course.author_img}
//                       alt={course.author}
//                       className="w-8 h-8 rounded-full object-cover"
//                     />
//                     <span className="text-sm text-gray-700">
//                       {course.author}
//                     </span>
//                   </div>

//                   <div className="flex items-center justify-between mb-4 text-sm">
//                     <div className="flex items-center gap-1 text-yellow-500">
//                       <FaStar />
//                       <span className="font-semibold text-gray-900">
//                         {course.rating}
//                       </span>
//                       <span className="text-gray-500">
//                         ({course.reviews_count})
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-600">
//                       <FaUsers />
//                       <span>{course.students}</span>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
//                     <div className="flex items-center gap-2">
//                       <FaVideo className="text-blue-600" />
//                       <span>{course.video} lectures</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FaClock className="text-blue-600" />
//                       <span>{course.duration}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//                     <div className="flex items-baseline gap-2">
//                       <span className="text-2xl font-bold text-gray-900">
//                         ${course.discount_price || course.price}
//                       </span>
//                       {course.discount_price && (
//                         <span className="text-sm text-gray-400 line-through">
//                           ${course.price}
//                         </span>
//                       )}
//                     </div>
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {sortedCourses.map((course) => (
//               <Link
//                 key={course._id}
//                 to={`/course/${course._id}`}
//                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition group flex">
//                 <img
//                   src={course.img}
//                   alt={course.name}
//                   className="w-64 h-48 object-cover group-hover:scale-105 transition duration-300"
//                 />
//                 <div className="flex-1 p-6">
//                   <div className="flex items-start justify-between mb-3">
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
//                         {course.name}
//                       </h3>
//                       <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                         <div className="flex items-center gap-1">
//                           <FaStar className="text-yellow-500" />
//                           <span className="font-semibold text-gray-900">
//                             {course.rating}
//                           </span>
//                           <span>({course.reviews_count})</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <FaUsers />
//                           <span>{course.students} students</span>
//                         </div>
//                         <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
//                           {course.level}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-3xl font-bold text-gray-900 mb-1">
//                         ${course.discount_price || course.price}
//                       </div>
//                       {course.discount_price && (
//                         <div className="text-gray-400 line-through">
//                           ${course.price}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 line-clamp-2">
//                     {course.detail}
//                   </p>

//                   <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
//                     <div className="flex items-center gap-2">
//                       <FaVideo className="text-blue-600" />
//                       <span>{course.video} lectures</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FaClock className="text-blue-600" />
//                       <span>{course.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FaCertificate className="text-blue-600" />
//                       <span>Certificate: {course.certificate}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={course.author_img}
//                         alt={course.author}
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                       <span className="text-sm font-medium text-gray-700">
//                         {course.author}
//                       </span>
//                     </div>
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {sortedCourses.length === 0 && (
//           <div className="text-center py-16">
//             <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
//               <FaBookOpen className="text-4xl text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               No courses found
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Try adjusting your filters to see more results
//             </p>
//             <button
//               onClick={() => {
//                 setFilterLevel("all");
//                 setSortBy("popular");
//               }}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
//               Clear Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Category;

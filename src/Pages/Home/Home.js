// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/overhead-view-on-business-people-around-desk-picture-id1138843871?b=1&k=20&m=1138843871&s=170667a&w=0&h=YgcZA0BHvA7YEPI6o4yRpnCQyeIvl8IxvOOZdqw3mVQ=` }}>
//                 <div className="hero-overlay bg-opacity-70"></div>
//                 <div className="hero-content text-center text-neutral-content">
//                     <div className="max-w-md">
//                         <p>Start your favourite courses</p>
//                         <h1 className="mb-5 text-5xl font-bold">Learn from anywhere & build your future</h1>

//                         <label htmlFor="my-modal-3" className="btn btn-outline">Learn More</label>

//                         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
//                         <div className="modal">
//                             <div className="modal-box relative">
//                                 <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

//                                 <p className="py-4">We envision a world where anyone, anywhere has the power to transform their lives through learning. Take the next step in your learning journey by exploring these popular topics.We offer fresh courses on emerging topics that keep your employees ahead of the curve</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaCertificate,
  FaClock,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";
import { MdOndemandVideo, MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = {
      students: 50000 / steps,
      courses: 500 / steps,
      instructors: 200 / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setStats((prev) => ({
          students: Math.min(
            Math.floor(prev.students + increment.students),
            50000
          ),
          courses: Math.min(Math.floor(prev.courses + increment.courses), 500),
          instructors: Math.min(
            Math.floor(prev.instructors + increment.instructors),
            200
          ),
        }));
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <MdOndemandVideo className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals with real-world experience",
    },
    {
      icon: <FaCertificate className="w-8 h-8" />,
      title: "Certified Learning",
      description: "Earn recognized certificates upon course completion",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Learn at Your Pace",
      description: "Flexible learning schedule that fits your lifestyle",
    },
    {
      icon: <HiAcademicCap className="w-8 h-8" />,
      title: "Career Support",
      description: "Get guidance to advance your professional journey",
    },
  ];

  const popularCourses = [
    {
      id: "03",
      name: "JAVASCRIPT",
      image:
        "https://media.istockphoto.com/photos/paper-width-word-javascript-and-laptop-glasses-and-coffee-on-wooden-picture-id1272412780?k=20&m=1272412780&s=612x612&w=0&h=j9v_8NrxAASxKPdJD0eDFqXwoNjBq-ijRKWMzalmWOk=",
      rating: 5.0,
      students: "2.5k",
      duration: "8h 15m",
    },
    {
      id: "01",
      name: "UI/UX DESIGN",
      image:
        "https://media.istockphoto.com/photos/website-designer-creative-planning-application-developer-development-picture-id1206638576?b=1&k=20&m=1206638576&s=170667a&w=0&h=NxHnlT5fVqBEVAPmM8Me77cC6JCLZrTFYlnI6VYyeXE=",
      rating: 5.0,
      students: "1.8k",
      duration: "5h 10m",
    },
    {
      id: "02",
      name: "COMPUTER NETWORK",
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg",
      rating: 4.89,
      students: "3.2k",
      duration: "20h",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The JavaScript course transformed my career. The instructor's teaching style made complex concepts easy to understand.",
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Best investment in my professional development. The hands-on projects helped me build a strong portfolio.",
    },
    {
      name: "Emily Rodriguez",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "The quality of content and support from instructors exceeded my expectations. Highly recommend!",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🎓 Start Your Learning Journey Today
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Learn from Anywhere &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Build Your Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Master in-demand skills with expert-led courses. Join thousands of
              learners achieving their goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/courses"
                className="group px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg
                         hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 
                         shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                Explore Courses
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                className="group px-8 py-4 bg-transparent border-2 border-white text-white 
                               rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 
                               transition-all duration-300 flex items-center gap-2">
                <FaPlay className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.students.toLocaleString()}+
                </div>
                <div className="text-blue-200">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.courses}+
                </div>
                <div className="text-blue-200">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stats.instructors}+
                </div>
                <div className="text-blue-200">Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="dark:fill-gray-900"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 
                         dark:from-gray-800 dark:to-gray-850 hover:shadow-2xl transition-all 
                         duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div
                  className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center 
                              justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 
                              transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white 
                             text-center rounded-lg font-semibold transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg font-semibold text-lg transition-all duration-300 
                       hover:scale-105 shadow-lg hover:shadow-xl">
              View All Courses
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <FaQuoteLeft className="text-4xl text-blue-600 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-600"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards
            achieving your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg
                       hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 
                       shadow-xl hover:shadow-2xl hover:scale-105">
              Get Started Free
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg 
                       font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import logo from "../../Assets/logo-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/home", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/FAQ", label: "FAQ" },
    { to: "/Blogs", label: "Blogs" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const popularCourses = [
    { to: "/category/03", label: "JavaScript" },
    { to: "/category/01", label: "UI/UX Design" },
    { to: "/category/02", label: "Computer Network" },
    { to: "/category/05", label: "Node.js" },
    { to: "/category/06", label: "Machine Learning" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-gradient-to-r from-gray-600 to-gray-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-blue-100">
                Get the latest courses and updates delivered to your inbox
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500
                           focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <button
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 
                                 font-semibold rounded-lg transition-colors duration-300 
                                 flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logo}
                alt="SE Learning Logo"
                className="w-40 transition-transform group-hover:scale-110"
              />
            </Link>
            <p className="text-gray-400 text-start leading-relaxed">
              Empowering learners worldwide with quality education. Transform
              your career with our expert-led courses.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Learning Street, Education City, BD 1234
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500 flex-shrink-0" />
                <span className="text-sm">+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 flex-shrink-0" />
                <span className="text-sm">info@skiledgelearning.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-start ml-2 font-bold text-white mb-6">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <Link
                    to={course.to}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200
                             flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-start ml-2 text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200
                             flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="ml-2 text-xl font-bold text-white text-start mb-6">
              Support & Legal
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200
                                              flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200
                                            flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200
                                             flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                  Refund Policy
                </Link>
              </li>
            </ul>

            <div className="ml-2">
              <h4 className="text-lg text-start font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg bg-gray-800 ${social.color} text-white 
                              flex items-center justify-center transition-all duration-300 
                              hover:scale-110 hover:-translate-y-1`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} SkillEdge Learning. All rights reserved. Made with
              ❤️ for learners worldwide by Safayet.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white 
                 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                 flex items-center justify-center group hover:scale-110 z-50"
        aria-label="Scroll to top">
        <FaArrowRight className="rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;

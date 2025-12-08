import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../../Assets/logo.svg";
import logoWhite from "../../Assets/logo-white.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useDarkMode } from "../../Contexts/AuthProvider/DarkModeContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToFAQ = (e) => {
    e.preventDefault();

    if (location.pathname === "/home" || location.pathname === "/") {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/home");
      setTimeout(() => {
        const faqSection = document.getElementById("faq-section");
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const navLinks = [
    { to: "/home", label: "Home", isNormal: true },
    { to: "/courses", label: "Courses", isNormal: true },
    { to: "/home#faq", label: "FAQ", isNormal: false, onClick: scrollToFAQ },
    { to: "/Blogs", label: "Blogs", isNormal: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md py-2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {isDarkMode ? (
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logoWhite}
                alt="SE Learning Logo"
                className="w-32 transition-transform"
              />
            </Link>
          ) : (
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logo}
                alt="SE Learning Logo"
                className="w-32 transition-transform"
              />
            </Link>
          )}

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.isNormal ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 
                           rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 
                           font-medium">
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.to}
                  onClick={link.onClick}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 
                           rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 
                           font-medium">
                  {link.label}
                </button>
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                       dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle dark mode">
              {isDarkMode ? (
                <MdLightMode className="w-5 h-5 text-yellow-500" />
              ) : (
                <MdDarkMode className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {user?.uid ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user?.displayName}
                </span>
                <Link to="/profile">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-yellow-500 
                               hover:ring-4 transition-all cursor-pointer"
                    />
                  ) : (
                    <div
                      className="h-9 w-9 rounded-full bg-yellow-500 flex items-center justify-center 
                                hover:bg-yellow-600 transition-colors cursor-pointer">
                      <FaUser className="text-white text-sm" />
                    </div>
                  )}
                </Link>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg 
                           font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium transition-colors">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 bg-yellow-500 hover:bg-white text-black rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-md">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu">
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) =>
              link.isNormal ? (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={toggleMobileMenu}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                           dark:hover:bg-gray-800 rounded-lg transition-colors text-center">
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.to}
                  onClick={(e) => {
                    link.onClick(e);
                    toggleMobileMenu();
                  }}
                  className="block w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 text-center dark:hover:bg-gray-800 rounded-lg transition-colors">
                  {link.label}
                </button>
              )
            )}

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                {isDarkMode ? (
                  <MdLightMode className="w-5 h-5 text-yellow-500" />
                ) : (
                  <MdDarkMode className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            <div className="px-4 py-2 space-y-2">
              {user?.uid ? (
                <>
                  <div className="flex items-center space-x-3 py-2">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-yellow-500"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <FaUser className="text-white" />
                      </div>
                    )}
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {user?.displayName}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogOut();
                      toggleMobileMenu();
                    }}
                    className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    onClick={toggleMobileMenu}
                    className="block w-full px-4 py-2 text-center border border-yellow-600 text-yellow-600 dark:text-yellow-400 rounded-lg font-medium hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors">
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={toggleMobileMenu}
                    className="block w-full px-4 py-2 text-center bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

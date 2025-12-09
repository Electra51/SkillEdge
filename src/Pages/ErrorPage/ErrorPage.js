import React from "react";
import { useRouteError, Link } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaHome,
  FaArrowLeft,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();

  const getErrorDetails = () => {
    if (error?.status === 404) {
      return {
        title: "404 - Page Not Found",
        message: "Oops! The page you're looking for doesn't exist.",
        suggestion: "It might have been moved or deleted.",
        icon: "🔍",
      };
    } else if (error?.status === 500) {
      return {
        title: "500 - Server Error",
        message: "Something went wrong on our end.",
        suggestion: "Our team has been notified and is working on it.",
        icon: "🛠️",
      };
    } else {
      return {
        title: "Oops! An Error Occurred",
        message:
          error?.statusText ||
          error?.message ||
          "Something unexpected happened.",
        suggestion:
          "Don't worry, it's not your fault. Let's get you back on track.",
        icon: "⚠️",
      };
    }
  };

  const errorDetails = getErrorDetails();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full mt-10">
        <div className="rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white px-8 py-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-500 bg-opacity-20 p-6 rounded-full">
                <FaExclamationTriangle className="text-6xl text-red-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {errorDetails.icon} {errorDetails.title}
            </h1>
            <p className="text-xl text-blue-100">{errorDetails.message}</p>
          </div>

          <div className="p-8 md:p-12">
            {error && (
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="text-red-500 text-xl mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Error Details
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {errorDetails.suggestion}
                    </p>
                    {error.status && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                          Status Code: {error.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link
                to="/"
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                    <FaHome className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Go Home</h3>
                  <p className="text-sm text-gray-600">
                    Return to the homepage
                  </p>
                </div>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                    <FaArrowLeft className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Go Back</h3>
                  <p className="text-sm text-gray-600">
                    Return to previous page
                  </p>
                </div>
              </button>

              <Link
                to="/contact"
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                    <FaHeadset className="text-2xl text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-sm text-gray-600">Get help from support</p>
                </div>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <FaTools className="text-gray-600 text-xl mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    What You Can Do
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Check the URL for typos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Clear your browser cache and cookies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Try refreshing the page
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      Contact our support team if the problem persists
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <FaHome />
                Back to Homepage
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reload Page
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: {error?.status || "Unknown"} | If this problem
            continues, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

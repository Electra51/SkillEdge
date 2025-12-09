import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaFileContract,
  FaUserShield,
  FaGavel,
  FaExclamationTriangle,
} from "react-icons/fa";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: "acceptance",
      icon: <FaCheckCircle className="text-blue-500" />,
      title: "1. Acceptance of Terms",
      content: `By accessing and using this learning platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      id: "user-accounts",
      icon: <FaUserShield className="text-green-500" />,
      title: "2. User Accounts",
      content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`,
    },
    {
      id: "course-access",
      icon: <FaFileContract className="text-purple-500" />,
      title: "3. Course Access and Content",
      content: `Upon enrollment, you will receive access to course materials for the duration specified. Course content is protected by intellectual property laws and is provided for your personal, non-commercial use only. Redistribution or sharing of course materials is strictly prohibited.`,
    },
    {
      id: "payment",
      icon: <FaShieldAlt className="text-indigo-500" />,
      title: "4. Payment and Refunds",
      content: `All payments are processed securely through our payment partners. We offer a 30-day money-back guarantee for most courses. Refund requests must be submitted within the specified period with valid reasons. Digital certificates are non-refundable once issued.`,
    },
    {
      id: "conduct",
      icon: <FaGavel className="text-orange-500" />,
      title: "5. User Conduct",
      content: `You agree not to use the platform to: upload malicious code, harass other users, violate any laws or regulations, infringe on intellectual property rights, or engage in any activity that disrupts the service. Violation may result in account suspension or termination.`,
    },
    {
      id: "privacy",
      icon: <FaUserShield className="text-teal-500" />,
      title: "6. Privacy and Data Protection",
      content: `We are committed to protecting your privacy. Personal information collected is used solely for providing and improving our services. We do not sell or share your data with third parties except as required by law or with your explicit consent. Please review our Privacy Policy for more details.`,
    },
    {
      id: "intellectual-property",
      icon: <FaFileContract className="text-red-500" />,
      title: "7. Intellectual Property Rights",
      content: `All course content, including but not limited to text, graphics, videos, logos, and software, is the property of our platform or our content partners and is protected by copyright laws. Unauthorized use, reproduction, or distribution is strictly prohibited.`,
    },
    {
      id: "disclaimer",
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      title: "8. Disclaimer of Warranties",
      content: `The platform and all courses are provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. Your use of the platform is at your own risk.`,
    },
    {
      id: "limitation",
      icon: <FaGavel className="text-gray-500" />,
      title: "9. Limitation of Liability",
      content: `In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the platform. Our total liability shall not exceed the amount you paid for the course in question.`,
    },
    {
      id: "modifications",
      icon: <FaFileContract className="text-blue-600" />,
      title: "10. Modifications to Terms",
      content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform after changes constitutes acceptance of the modified terms. We recommend reviewing these terms periodically.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-6 group">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Register</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-500 bg-opacity-20 p-4 rounded-2xl">
              <FaFileContract className="text-4xl text-blue-300" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Terms & Conditions
              </h1>
              <p className="text-blue-200 text-lg">
                Last updated: December 2025
              </p>
            </div>
          </div>

          <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
            Please read these terms and conditions carefully before using our
            platform. By creating an account, you agree to be bound by these
            terms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions constitute a legally binding
                agreement between you and our platform. Please ensure you
                understand all sections before proceeding with registration.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{section.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    activeSection === section.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeSection === section.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-5 border-l-4 border-blue-400">
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt />
              Questions About Our Terms?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              don't hesitate to contact us. Our legal team is here to help
              clarify any concerns you may have.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:legal@yourplatform.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
                Contact Legal Team
              </a>
              <Link
                to="/register"
                className="bg-blue-500 bg-opacity-30 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-40 transition">
                I Accept - Continue to Register
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            By clicking "Continue to Register" or creating an account, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

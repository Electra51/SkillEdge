import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { faqs } from "../../Shared/data";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="lg:py-36 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our courses and platform
          </p>
        </div>

        <div className="">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md 
                         hover:shadow-lg transition-all duration-300 overflow-hidden 
                         border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between 
                           text-left dark:hover:bg-gray-850 
                           transition-colors duration-200">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 
                                flex items-center justify-center text-blue-600 dark:text-blue-400 
                                transition-transform duration-300 ${
                                  openIndex === index ? "rotate-180" : ""
                                }`}>
                    {openIndex === index ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                            ${
                              openIndex === index
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}>
                  <div className="px-6 pb-5 text-start text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white w-full dark:bg-gray-700 rounded-2xl p-8 shadow-lg 
                        border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 dark:bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Contact Support
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

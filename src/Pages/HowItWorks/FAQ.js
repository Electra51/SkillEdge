import React, { useState } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

// FAQ Component
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Enrolling is simple! Just browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Create a free account if you haven't already, and you'll get instant access to all course materials.",
    },
    {
      question: "Are the certificates recognized?",
      answer:
        "Yes! Our certificates are industry-recognized and can be shared on LinkedIn, added to your resume, or included in your portfolio. Each certificate includes a unique verification code that employers can use to verify your achievement.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Absolutely! All our courses are self-paced, meaning you can learn whenever and wherever suits you best. Once enrolled, you have lifetime access to the course materials, so you can revisit lessons anytime.",
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer:
        "We offer a 30-day money-back guarantee on all paid courses. If you're not completely satisfied within the first 30 days, simply contact our support team, and we'll process a full refund—no questions asked.",
    },
    {
      question: "Do I need prior experience to start?",
      answer:
        "Not at all! We offer courses for all skill levels—from complete beginners to advanced professionals. Each course clearly indicates its difficulty level and prerequisites, so you can choose the right starting point for your journey.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "Once you enroll in a course, you get lifetime access! You can learn at your own pace and revisit the materials as many times as you need. All future updates to the course content are also included at no extra cost.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees whatsoever! The price you see is the price you pay. Many of our courses are completely free, and for paid courses, the one-time payment gives you full access to all materials, including any future updates.",
    },
    {
      question: "Can I get help if I'm stuck?",
      answer:
        "Yes! Every course includes access to our student community forum where you can ask questions, share insights, and get help from instructors and fellow students. Premium courses also include direct instructor support.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 
                        rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our courses and platform
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md 
                         hover:shadow-lg transition-all duration-300 overflow-hidden 
                         border border-gray-200 dark:border-gray-700">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between 
                           text-left hover:bg-gray-50 dark:hover:bg-gray-850 
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

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                            ${
                              openIndex === index
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}>
                  <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg 
                        border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg font-semibold transition-all duration-300 
                       hover:scale-105 shadow-md hover:shadow-lg">
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

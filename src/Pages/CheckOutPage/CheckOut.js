import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const courseData = useLoaderData();
  const course = courseData[0];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const defaultPricingPlans = [
    {
      id: "basic",
      name: "Basic",
      price: 59,
      period: "year",
      description: "Perfect for learning the basics",
      features: [
        "Full lecture access",
        "Full question solve",
        "No lifetime access",
        "Free updates",
        "Use at once",
        "3 Months support",
      ],
      highlighted: false,
    },
    {
      id: "standard",
      name: "Standard",
      price: 199,
      period: "year",
      description: "Perfect for expanding your knowledge",
      features: [
        "Full lecture access",
        "Full Recording",
        "No lifetime access",
        "Free updates",
        "2 weeks per month usage",
        "4 Months support",
      ],
      highlighted: true,
      badge: "POPULAR",
    },
    {
      id: "professional",
      name: "Professional",
      price: 256,
      period: "year",
      description: "Perfect for professional development",
      features: [
        "Unlimited Users",
        "All lecture access",
        "Lifetime access",
        "Free updates",
        "Unlimited Q&A",
        "12 Months support",
      ],
      highlighted: false,
    },
  ];

  const pricingPlans = course.pricing_plans || defaultPricingPlans;

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-700">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-fit ml-0 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {course.category_name} • {course.level}
              </div>
              <h1 className="text-4xl text-start md:text-5xl font-bold text-white mb-6">
                {course.name}
              </h1>
              <p className="text-xl text-start text-gray-300 mb-6">
                {course.detail.substring(0, 200)}...
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-bold">
                      {course.rating}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm text-start">
                    {course.reviews_count} reviews
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-white font-bold">
                      {course.students}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm text-start">
                    Students enrolled
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">
                    {course.video} lectures
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                  <svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">Certificate</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {Math.round(
                    ((course.price - course.discount_price) / course.price) *
                      100
                  )}
                  % OFF
                </div>
                <div className="p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-white">
                      ${course.discount_price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${course.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-black dark:text-white  mb-8">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.learning_outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Flexible pricing designed for learners at every stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.highlighted
                  ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "border-white/10 hover:border-purple-500/30"
              }`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8">
            Course Curriculum
          </h2>
          <div className="space-y-4">
            {course.curriculum.map((module) => (
              <div
                key={module.module}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Module {module.module}: {module.title}
                    </h3>
                    <p className="text-gray-400">
                      {module.lectures} lectures • {module.duration}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Congratulations! 🎉
              </h3>
              <p className="text-gray-300 mb-2">
                You've selected the{" "}
                <span className="text-purple-400 font-semibold">
                  {selectedPlan?.name}
                </span>{" "}
                plan
              </p>
              <p className="text-gray-400 mb-2">
                for{" "}
                <span className="text-blue-400 font-semibold">
                  {course.name}
                </span>
              </p>
              <p className="text-gray-400 mb-8">
                Your learning journey begins now!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;

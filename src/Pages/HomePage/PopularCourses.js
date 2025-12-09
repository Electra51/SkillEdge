import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5001/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setPopularCourses(data.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="lg:py-36 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start learning with our most-loved courses
          </p>
        </div>

        {loading ? (
          "loading.."
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularCourses.map((course) => (
              <CourseCard course={course} key={course.category_id} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 text-blue-500 rounded-lg font-medium text-base underline">
            View All Courses
            <FaArrowRight className="font-thin" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;

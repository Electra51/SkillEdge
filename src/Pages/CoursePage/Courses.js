import React, { useEffect, useState } from "react";
import Description from "./Description";
import CourseCard from "../../Shared/CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/categories")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleClick = (course) => {
    const newCourse = [course];
    setDescription(newCourse);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mr-auto">
            Choose from our wide range of courses to advance your career
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {courses.map((course) => {
                return (
                  <CourseCard
                    course={course}
                    key={course.category_id}
                    onclick={handleClick}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Description description={description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

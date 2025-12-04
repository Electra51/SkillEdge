import React, { useState, useEffect } from "react";

import { HowItWorks } from "./HowItWorks";
import FAQ from "./FAQ";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Hero from "./Hero";

const Home = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
  });

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

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero stats={stats} />
      <Features />
      <PopularCourses />
      <Testimonials />
      <CTA />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default Home;

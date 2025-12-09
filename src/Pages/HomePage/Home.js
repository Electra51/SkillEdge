import React from "react";

import { HowItWorks } from "./HowItWorks";
import FAQ from "./FAQ";
import Features from "./Features";
import PopularCourses from "./PopularCourses";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Hero from "./Hero";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <Hero />
      <Features />
      <PopularCourses />
      <Testimonials />
      <CTA />
      <HowItWorks />
      <FAQ />
      <Subscribe />
    </div>
  );
};

export default Home;

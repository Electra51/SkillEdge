import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div class="antialiased text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-700">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

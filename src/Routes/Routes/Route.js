import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blogs from "../../Pages/BlogsPage/Blogs";
import Courses from "../../Pages/CoursePage/Courses";
import CheckOut from "../../Pages/CheckOutPage/CheckOut";

import Login from "../../Shared/Login/Login";
import Signup from "../../Shared/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/TermsPage/TermsAndConditions";
import Profile from "../../Pages/ProfilePage/Profile";
import NewData from "../../Pages/CourseDetailPage/CourseDetail";
import Home from "../../Pages/HomePage/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "category/:id/checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://learning-site-server-phi.vercel.app/category/${params.id}`
          );
        },
      },

      {
        path: "/course/:id",
        element: <NewData />,
        loader: async ({ params }) => {
          return fetch(
            `https://learning-site-server-phi.vercel.app/course/${params.id}`
          );
        },
      },

      {
        path: "/Blogs",
        element: <Blogs />,
      },

      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

// import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import toast from 'react-hot-toast';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

// const Login = () => {
//     const githubProvider = new GithubAuthProvider();
//     const [error, setError] = useState('');
//     const { signIn, setLoading } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/checkout';

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 form.reset();
//                 setError('');
//                 if(user.emailVerified){
//                     navigate(from, {replace: true});
//                 }
//                 else{
//                     toast.error('Your email is not verified. Please verify your email address.')
//                 }
//             })
//             .catch(error => {
//                 console.error(error)
//                 setError(error.message);
//             })
//             .finally(() => {
//                 setLoading(false);
//             })
//     }
//     const handleGithubSignIn = () => {
//         signInWithPopup(githubProvider)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//         })
//         .catch(error => console.error(error))

// }
//     const { providerLogin } = useContext(AuthContext);

//     const googleProvider = new GoogleAuthProvider()

//     const handleGoogleSignIn = () => {
//         providerLogin(googleProvider)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => console.error(error))
//     }

//     return (
//         <div >

//             <div>
//             <div class="w-2/4">
//   <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//       Email address
//       </label>
//       <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter email" required/>
//     </div>
//     <div class="mb-6">
//       <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//       Password
//       </label>
//       <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" required />

//     </div>
//     <div class="flex items-center justify-between">
//       <button variant="primary" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//         Log In
//                         </button>
//                             <p className="text-danger"> {error}</p>

//                         </div>
//                         <button onClick={handleGoogleSignIn} variant="primary" type="submit" className='btn btn-outline'>
//         <FaGoogle/>  <span className='ml-2'>Google Log In</span>
//                         </button>
//                         <button onClick={handleGithubSignIn} variant="primary" type="submit" className='btn btn-outline ml-3'>
//         <FaGithub/>  <span className='ml-2'>Github Log In</span>
//                         </button>
//                         <p>
//           Don't have an account? <Link className='text-primary' to="/signup">Sign up</Link>
//         </p>
//   </form>

// </div>
//             </div>

//         </div>

//   );
// };

// export default Login;

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  FaGithub,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, providerLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setIsLoading(true);
    setError("");

    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log(user);
      form.reset();

      if (user.emailVerified) {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      } else {
        toast.error(
          "Your email is not verified. Please verify your email address."
        );
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await providerLogin(googleProvider);
      const user = result.user;
      console.log(user);
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setError(error.message);
      toast.error("Google login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(githubProvider);
      const user = result.user;
      console.log(user);
      toast.success("GitHub login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setError(error.message);
      toast.error("GitHub login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-start">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-start">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-400 dark:placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           transition duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg
                       text-sm font-semibold text-white bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 hover:to-indigo-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 
                       rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              <FaGoogle className="h-5 w-5 text-red-500" />
              <span className="ml-2">Google</span>
            </button>

            <button
              onClick={handleGithubSignIn}
              disabled={isLoading}
              className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 
                       rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              <FaGithub className="h-5 w-5 text-gray-900 dark:text-white" />
              <span className="ml-2">GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Sign up now
            </Link>
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          By signing in, you agree to our{" "}
          <Link
            to="/terms"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

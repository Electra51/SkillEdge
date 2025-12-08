// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

// const Signup = () => {
//     const [error, setError] = useState('');
//     const [accepted, setAccepted] = useState(false);
//     const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const photoURL = form.photoURL.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(name, photoURL, email, password);

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 setError('');
//                 form.reset();
//                 handleUpdateUserProfile(name, photoURL);
//                 handleEmailVerification();
//                 toast.success('Please verify your email address.')
//             })
//             .catch(e => {
//                 console.error(e);
//                 setError(e.message);
//             });
//     }

//     const handleUpdateUserProfile = (name, photoURL) => {
//         const profile = {
//             displayName: name,
//             photoURL: photoURL
//         }

//         updateUserProfile(profile)
//             .then(() => { })
//             .catch(error => console.error(error));
//     }

//     const handleEmailVerification  = () => {
//         verifyEmail()
//         .then(() =>{})
//         .catch(error => console.error(error));
//     }

//     const handleAccepted = event => {
//         setAccepted(event.target.checked)
//     }
//     return (
//         <div class="w-2/4">
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Your Name
//             </label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"name="name" type="text" placeholder="Your Name"/>
//                 </div>
//                 <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Photo URL
//             </label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="photoURL" type="text" placeholder="Phot URL" />
//                 </div>
//                 <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Email address
//             </label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter email" required/>
//           </div>
//           <div class="mb-6">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//             </label>
//             <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Password" required />

//                 </div>
//                 <Form.Check
//                     type="checkbox"
//                     onClick={handleAccepted}
//                     label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
//           <div class="flex items-center justify-between">
//             <button variant="primary" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Sign Up
//                               </button>
//                                   <p className="text-danger"> {error}</p>

//                               </div>

//         </form>

//       </div>

//     );
// };

// export default Signup;

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!accepted) {
      setError("Please accept the terms and conditions");
      return;
    }

    const form = event.target;
    const name = form.name.value.trim();
    const photoURL = form.photoURL.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Validation
    if (!name) {
      setError("Please enter your name");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Create user
      const result = await createUser(email, password);
      console.log("User created:", result.user);

      // Update profile
      await handleUpdateUserProfile(name, photoURL);

      // Send verification email
      await handleEmailVerification();

      toast.success(
        "Account created! Please check your email for verification."
      );
      form.reset();

      // Redirect to login or home page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      console.error("Signup error:", e);

      // Handle specific Firebase errors
      switch (e.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/weak-password":
          setError("Password is too weak");
          break;
        default:
          setError(e.message || "Failed to create account");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUserProfile = async (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL || null,
    };

    try {
      await updateUserProfile(profile);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Profile update error:", error);
      throw error;
    }
  };

  const handleEmailVerification = async () => {
    try {
      await verifyEmail();
      console.log("Verification email sent");
    } catch (error) {
      console.error("Email verification error:", error);
      toast.error("Failed to send verification email");
    }
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
    if (
      event.target.checked &&
      error === "Please accept the terms and conditions"
    ) {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow-2xl rounded-lg px-8 pt-8 pb-8 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                placeholder="Enter your full name"
              />
            </div>

            {/* Photo URL Field */}
            <div className="mb-6">
              <label
                htmlFor="photoURL"
                className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL{" "}
                <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Must be at least 6 characters with uppercase and number
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={accepted}
                  onChange={handleAccepted}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-blue-600 hover:text-blue-500 font-medium">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white transition-all duration-200 ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] active:scale-[0.98]"
                }`}>
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Creating Account...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500">
          By signing up, you agree to our privacy policy and terms of service
        </p>
      </div>
    </div>
  );
};

export default Signup;

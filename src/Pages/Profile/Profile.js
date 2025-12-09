// import React, { useContext, useRef, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

// const Profile = () => {
//     const {user} = useContext(AuthContext);
//     const [name, setName] = useState(user.displayName);
//     const photoURLRef = useRef(user.photoURL);

//     const handleSubmit = event => {
//         event.preventDefault();
//         console.log(photoURLRef.current.value);
//     }

//     const handleNameChange = event =>{
//         setName(event.target.value)
//     }

//     return (
//           <div class="w-2/4">
//   <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div class="mb-4">
//       <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//       Email address
//       </label>
//       <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly defaultValue={user?.email} type="email" placeholder="Enter email"/>
//     </div>
//     <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Your Name
//             </label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name"/>
//                 </div>
//                 <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//             Photo URL
//             </label>
//                     <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />

//                 </div>
//                 <Form.Check type="checkbox" label="Check me out" />
//                 <button className='btn btn-outline' variant="primary" type="submit">
//                 Submit
//             </button>

//   </form>

// </div>

//     );
// };

// export default Profile;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaUser, FaEnvelope, FaCamera, FaSave, FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });
      setSuccess(true);
      setIsEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhotoURLChange = (event) => {
    setPhotoURL(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          <div className="relative px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-6">
              <div className="relative group">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <FaUser className="text-white text-5xl" />
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-yellow-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-yellow-600 transition-colors">
                  <FaCamera className="text-white text-sm" />
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user?.displayName || "User Name"}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {user?.email}
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-4 sm:mt-0 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
                <FaEdit className="text-sm" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                  ✓ Profile updated successfully!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Profile Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <FaEnvelope className="inline mr-2 text-yellow-500" />
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all cursor-not-allowed"
                readOnly
                value={user?.email || ""}
                type="email"
                placeholder="Enter email"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Email cannot be changed
              </p>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <FaUser className="inline mr-2 text-yellow-500" />
                Full Name
              </label>
              <input
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all ${
                  isEditing
                    ? "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                }`}
                onChange={handleNameChange}
                value={name}
                type="text"
                placeholder="Enter your name"
                disabled={!isEditing}
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <FaCamera className="inline mr-2 text-yellow-500" />
                Profile Photo URL
              </label>
              <input
                className={`w-full px-4 py-3 border rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all ${
                  isEditing
                    ? "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                }`}
                onChange={handlePhotoURLChange}
                value={photoURL}
                type="text"
                placeholder="Enter photo URL"
                disabled={!isEditing}
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Paste a URL to your profile picture
              </p>
            </div>

            {/* Submit Button */}
            {isEditing && (
              <div className="pt-4">
                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  }`}
                  type="submit"
                  disabled={loading}>
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <FaSave />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Account Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                0
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Courses Enrolled
              </p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                0
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Certificates Earned
              </p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                0%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Profile Completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

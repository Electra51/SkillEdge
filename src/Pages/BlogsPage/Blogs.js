import React from "react";
import {
  FaNodeJs,
  FaRoute,
  FaFire,
  FaGlobe,
  FaArrowRight,
  FaBookOpen,
  FaClock,
  FaUser,
  FaCalendar,
  FaChevronRight,
} from "react-icons/fa";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Node.js: A Beginner's Guide",
      excerpt:
        "Learn the fundamentals of Node.js and understand how it revolutionizes backend development with its non-blocking, event-driven architecture.",
      category: "Backend Development",
      author: "Sarah Johnson",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      icon: <FaNodeJs className="text-green-500" />,
      content:
        "Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a 'non-blocking' approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. This makes it incredibly efficient for building scalable network applications.",
    },
    {
      id: 2,
      title: "Implementing Private Routes in React Applications",
      excerpt:
        "Secure your React applications by implementing private routes that protect sensitive pages from unauthorized access.",
      category: "React Development",
      author: "Mike Chen",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      icon: <FaRoute className="text-blue-500" />,
      content:
        "The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes if he is authenticated (Logged in).",
    },
    {
      id: 3,
      title: "Understanding CORS: Cross-Origin Resource Sharing",
      excerpt:
        "Dive deep into CORS and learn how it enables secure communication between different origins in web applications.",
      category: "Web Security",
      author: "Emily Rodriguez",
      date: "Dec 1, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      icon: <FaGlobe className="text-purple-500" />,
      content:
        "CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.",
    },
    {
      id: 4,
      title: "Firebase Authentication: A Complete Guide",
      excerpt:
        "Explore Firebase Authentication and discover alternative authentication solutions for modern web applications.",
      category: "Authentication",
      author: "David Park",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      icon: <FaFire className="text-orange-500" />,
      content:
        "Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. It is Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. We use STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg etc for implement authentication.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-gradient-to-br from-[#3E3E5E] via-[#0F0E17] to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full mb-6">
              <FaBookOpen />
              <span className="text-sm font-semibold">Learning Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore tutorials, guides, and insights to enhance your learning
              journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{blogs[0].icon}</span>
                <span className="text-blue-600 font-semibold text-sm">
                  {blogs[0].category}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {blogs[0].title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {blogs[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-2">
                  <FaUser />
                  {blogs[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  {blogs[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock />
                  {blogs[0].readTime}
                </span>
              </div>
              <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                Read Full Article
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Latest Articles
          </h2>
          <p className="text-gray-600">
            Stay updated with the latest in web development and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{blog.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaUser />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {blog.readTime}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
                    Read More
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Explore our comprehensive courses and start your learning journey
            today
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

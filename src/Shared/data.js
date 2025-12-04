import {
  FaBookOpen,
  FaCertificate,
  FaClock,
  FaSearch,
  FaUserPlus,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { MdOndemandVideo } from "react-icons/md";

export const features = [
  {
    icon: <MdOndemandVideo className="w-8 h-8" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with real-world experience",
  },
  {
    icon: <FaCertificate className="w-8 h-8" />,
    title: "Certified Learning",
    description: "Earn recognized certificates upon course completion",
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "Learn at Your Pace",
    description: "Flexible learning schedule that fits your lifestyle",
  },
  {
    icon: <HiAcademicCap className="w-8 h-8" />,
    title: "Career Support",
    description: "Get guidance to advance your professional journey",
  },
];

export const popularCourses = [
  {
    id: "03",
    name: "JAVASCRIPT",
    image:
      "https://media.istockphoto.com/photos/paper-width-word-javascript-and-laptop-glasses-and-coffee-on-wooden-picture-id1272412780?k=20&m=1272412780&s=612x612&w=0&h=j9v_8NrxAASxKPdJD0eDFqXwoNjBq-ijRKWMzalmWOk=",
    rating: 5.0,
    students: "2.5k",
    duration: "8h 15m",
  },
  {
    id: "01",
    name: "UI/UX DESIGN",
    image:
      "https://media.istockphoto.com/photos/website-designer-creative-planning-application-developer-development-picture-id1206638576?b=1&k=20&m=1206638576&s=170667a&w=0&h=NxHnlT5fVqBEVAPmM8Me77cC6JCLZrTFYlnI6VYyeXE=",
    rating: 5.0,
    students: "1.8k",
    duration: "5h 10m",
  },
  {
    id: "02",
    name: "COMPUTER NETWORK",
    image:
      "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg",
    rating: 4.89,
    students: "3.2k",
    duration: "20h",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The JavaScript course transformed my career. The instructor's teaching style made complex concepts easy to understand.",
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Best investment in my professional development. The hands-on projects helped me build a strong portfolio.",
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The quality of content and support from instructors exceeded my expectations. Highly recommend!",
  },
];

export const steps = [
  {
    number: "01",
    icon: <FaSearch className="w-8 h-8" />,
    title: "Browse Courses",
    description:
      "Explore our extensive library of courses across various domains. instructor to find the perfect match for your learning goals.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: <FaUserPlus className="w-8 h-8" />,
    title: "Enroll & Start",
    description:
      "Create your free account and enroll in your chosen courses. Get instant access to all course materials, videos, and resources.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: <FaBookOpen className="w-8 h-8" />,
    title: "Learn & Practice",
    description:
      "Follow structured lessons at your own pace. Complete hands-on projects, take quizzes, and engage with reinforce your learning.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    icon: <FaCertificate className="w-8 h-8" />,
    title: "Get Certified",
    description:
      "Successfully complete the course certificate. Showcase your achievements on LinkedIn and advance your career.",
    color: "from-green-500 to-teal-500",
  },
];
export const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Enrolling is simple! Just browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Create a free account if you haven't already, and you'll get instant access to all course materials.",
  },
  {
    question: "Are the certificates recognized?",
    answer:
      "Yes! Our certificates are industry-recognized and can be shared on LinkedIn, added to your resume, or included in your portfolio. Each certificate includes a unique verification code that employers can use to verify your achievement.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely! All our courses are self-paced, meaning you can learn whenever and wherever suits you best. Once enrolled, you have lifetime access to the course materials, so you can revisit lessons anytime.",
  },
  {
    question: "What if I'm not satisfied with a course?",
    answer:
      "We offer a 30-day money-back guarantee on all paid courses. If you're not completely satisfied within the first 30 days, simply contact our support team, and we'll process a full refund—no questions asked.",
  },
  {
    question: "Do I need prior experience to start?",
    answer:
      "Not at all! We offer courses for all skill levels—from complete beginners to advanced professionals. Each course clearly indicates its difficulty level and prerequisites, so you can choose the right starting point for your journey.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Once you enroll in a course, you get lifetime access! You can learn at your own pace and revisit the materials as many times as you need. All future updates to the course content are also included at no extra cost.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees whatsoever! The price you see is the price you pay. Many of our courses are completely free, and for paid courses, the one-time payment gives you full access to all materials, including any future updates.",
  },
  {
    question: "Can I get help if I'm stuck?",
    answer:
      "Yes! Every course includes access to our student community forum where you can ask questions, share insights, and get help from instructors and fellow students. Premium courses also include direct instructor support.",
  },
];

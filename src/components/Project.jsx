// Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "E-Commerce Frontend Application",
    description:
      "Built a responsive ecommerce frontend using React.js and Context API. Implemented product listing, cart functionality, and dynamic routing with reusable components.",
    link: "https://github.com/JoshiNirdesh/ecommerce-frontend",
  },
  {
    name: "Hotel Booking System",
    description:
      "Developed a full-stack hotel booking web application for browsing rooms. Designed responsive UI and focused on clean, scalable structure for future features.",
    link: "https://github.com/JoshiNirdesh/hotel-booking-system",
  },
  {
    name: "MERN Social Networking",
    description:
      "Full-stack social networking app using React.js, Node.js, Express.js, and MongoDB. Features JWT authentication, protected routes, post CRUD, likes, comments, and role-based access.",
    link: "https://github.com/JoshiNirdesh/mern-social-network",
  },
  {
    name: "Education Website – Frontend Application",
    description:
      "Responsive education website frontend built with React.js and Vite. Reusable components, page navigation, and responsive layout for mobile, tablet, and desktop.",
    link: "https://github.com/JoshiNirdesh/education-frontend",
  },
];

const Projects = () => {
  return (
    <div className="dark:bg-[#121212] px-12 md:px-24 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

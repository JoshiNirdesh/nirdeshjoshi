// Education.jsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Information Technology",
    institution: "Prime College, Kathmandu, Nepal",
    duration: "2022 – Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science & IT, focusing on web development, programming, and modern software practices.",
  },
  // You can add more education entries here if needed
];

const Education = () => {
  return (
    <div className="dark:bg-[#121212] px-12 md:px-24 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
              {edu.degree}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              {edu.institution}
            </p>
            <span className="text-gray-500 dark:text-gray-400">
              {edu.duration}
            </span>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

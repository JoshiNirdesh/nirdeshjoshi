import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaMagic,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const Skills = () => {
  const languagesFrameworks = [
    { icon: <FaHtml5 size={50} />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt size={50} />, name: "CSS", color: "#1572B6" },
    { icon: <FaJs size={50} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact size={50} />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss size={50} />, name: "Tailwind", color: "#38B2AC" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress size={50} />, name: "Express", color: "#000000" },
  ];

  const technologiesTools = [
    { icon: <FaMagic size={50} />, name: "GSAP", color: "#88CE02" },
    { icon: <SiMongodb size={50} />, name: "MongoDB", color: "#47A248" },
    { icon: <FaGitAlt size={50} />, name: "Git", color: "#F05032" },
    { icon: <FaGithub size={50} />, name: "GitHub", color: "#181717" },
    { icon: <SiPostman size={50} />, name: "Postman", color: "#FF6C37" },
  ];

  const renderSection = (title, items) => (
    <motion.div
      className="mb-16 mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 ">
          {title}
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {items.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {React.cloneElement(tech.icon, { color: tech.color })}
              <span
                className="mt-1 font-semibold text-lg"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="dark:bg-[#121212]">
      <div className="px-12 md:px-30 py-16 ">
        {renderSection("Languages & Frameworks", languagesFrameworks)}
        {renderSection("Technologies & Tools", technologiesTools)}
      </div>
    </div>
  );
};

export default Skills;

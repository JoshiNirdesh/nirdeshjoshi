import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md";
import CV from "../assets/nirdesh.pdf";
const Hero = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="dark:bg-[#121212]">
      {" "}
      <nav className="bg-white text-black px-12 md:px-24 py-10 shadow-md dark:bg-[#121212] dark:text-white">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <h1 className="text-3xl md:text-4xl font-bold text-red-500 animate-pulse">
            {" "}
            <span className="text-black dark:text-white">{"{"}</span>NJ{" "}
            <span className="text-black dark:text-white">{"}"}</span>{" "}
          </h1>{" "}
          <div
            className="cursor-pointer text-[#222222] dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {" "}
            {darkMode ? (
              <MdOutlineLightMode size={28} />
            ) : (
              <MdOutlineModeNight size={28} />
            )}{" "}
          </div>{" "}
        </div>{" "}
        <div className="border-b mt-10 border-gray-300 dark:border-gray-700"></div>{" "}
      </nav>{" "}
      <section className="h-[70vh] bg-white dark:bg-[#121212] flex flex-col justify-start items-center text-center px-6 sm:px-12 md:px-24 pt-24">
        {" "}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-2 tracking-wide text-gray-700 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          Hi, I am{" "}
        </motion.p>{" "}
        <motion.h1
          className="flex items-end text-4xl sm:text-6xl md:text-7xl lg:text-[120px] font-extrabold text-[#222222] dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {" "}
          Nirdesh Joshi{" "}
          <span className="inline-block w-5 h-5 bg-red-500 ml-3 rounded-sm animate-pulse"></span>{" "}
        </motion.h1>{" "}
        <motion.p
          className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          Frontend Developer crafting modern, scalable, and responsive web
          applications with clean and elegant designs.{" "}
        </motion.p>{" "}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          {" "}
          <a
            href={CV}
            download="Nirdesh_Joshi_CV.pdf"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-sm hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black hover:border transition"
            target="_blank"
          >
            {" "}
            Download CV{" "}
          </a>{" "}
          <a
            href="https://github.com/JoshiNirdesh?tab=repositories"
            className="px-6 py-3 border border-black dark:border-white dark:bg-white rounded-sm hover:bg-black hover:text-white dark:text-black transition"
          >
            {" "}
            My Projects{" "}
          </a>{" "}
        </motion.div>{" "}
        <motion.div
          className="flex gap-6 mt-10 items-center justify-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <a
            href="https://www.facebook.com/nirdesh.joshi.10/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1877F2] transition-colors"
          >
            {" "}
            <FaFacebook size={28} />{" "}
          </a>{" "}
          <a
            href="https://www.instagram.com/nirdesh_joshi_/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E4405F] transition-colors"
          >
            {" "}
            <FaInstagram size={28} />{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/nirdesh-joshi/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0A66C2] transition-colors"
          >
            {" "}
            <FaLinkedin size={28} />{" "}
          </a>{" "}
          <a
            href="https://github.com/JoshiNirdesh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#181717] transition-colors"
          >
            {" "}
            <FaGithub size={28} />{" "}
          </a>{" "}
        </motion.div>{" "}
      </section>{" "}
      <motion.div
        className="px-12 md:px-24 mt-20 text-4xl md:text-5xl leading-relaxed text-gray-700 dark:text-white dark:bg-[#121212] text-left"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.5 }}
      >
        {" "}
        Web Developer focused on building scalable and user-friendly web
        applications. Passionate about clean code, performance, and continuous
        learning.{" "}
      </motion.div>{" "}
    </div>
  );
};
export default Hero;

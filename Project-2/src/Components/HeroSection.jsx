import React from "react";
import { HERO_CONTENT, BRAND_LOGOS } from "../constants";
import heroimage from "../assets/hero.jpg";
import { motion, stagger } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
const HeroSection = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center  box-border px-4 border-b border-neutral-800 lg:pb-24 md:pb-20 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={fadeInUp}
        className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-sm border text-center"
      >
        {HERO_CONTENT.badgeText}
      </motion.div>
      <motion.h1
        variants={fadeInUp}
        className="text-5xl lg:text-8xl my-4  font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-900 bg-clip-text text-transparent text-center"
      >
        {HERO_CONTENT.mainHeading.split("\n").map((word, index) => (
          <span key={index}>
            {word} <br />
          </span>
        ))}
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="mt-6 text-neutral-400   text-center"
      >
        {HERO_CONTENT.subHeading}
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mt-6"
        >
          {HERO_CONTENT.callToAction.primary}
        </a>
        <a
          href="#"
          className="inline-block border border-gray-50  hover:border-gray-400 text-white font-bold py-3 px-6 rounded-md mt-6"
        >
          {HERO_CONTENT.callToAction.secondary}
        </a>
      </motion.div>

      <motion.div variants={fadeIn} className="py-10">
        <p className="text-gray-400 text-center mb-8">
          {HERO_CONTENT.trustedByText}
        </p>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="flex flex-wrap justify-center gap-8 "
      >
        {BRAND_LOGOS.map((logo, index) => (
          <img className="w-24 " key={index} src={logo.src} alt={logo.alt} />
        ))}
      </motion.div>
      <motion.div variants={fadeIn} className="mt-12">
        <img
          src={heroimage}
          className="w-full h-full rounded-3xl shadow-2xl border border-neutral-800 shadow-neutral-800 "
          alt="hero image"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; // Icon for closing
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [hidden, setNav] = useState(true);
  const { scrollY } = useScroll(); // use scrollY instead of scrollYProgress

  // Scroll Event Listener
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = Math.round(scrollY.getPrevious());
    if (latest > 150 && latest > prev) {
      setNav(true);
    } else {
      setNav(false);
    }
  });

  const toggleMobileView = () => {
    setMobileView(!mobileView);
  };

  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={hidden ? { y: -200 } : { y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Slowing down the transition
      className="sticky top-10 z-50 border border-neutral-800 lg:px-8 lg:py-3 sm:px-6 py-3 my-9 rounded-lg backdrop-blur-lg lg:mx-auto md:mx-8 mx-3 px-3 max-w-7xl flex justify-between items-center gap-1"
    >
      {/* Logo */}
      <img className="lg:w-36 md:w-28 w-24" src={logo} alt="logo" />

      {/* Desktop Menu */}
      <div className="lg:flex items-center hidden gap-6">
        <HashLink smooth to="#HowItWorks" className="hover:text-neutral-200  hover:scale-[102%] transition-all">
          How it works
        </HashLink>
        <HashLink smooth to="#KeyFeatures" className="hover:text-neutral-200  hover:scale-[102%] transition-all">
          Key Features
        </HashLink>
        <HashLink smooth to="#Pricing" className="hover:text-neutral-200  hover:scale-[102%] transition-all">
          Pricing
        </HashLink>
        <HashLink smooth to="#Testimonials" className="hover:text-neutral-200  hover:scale-[102%] transition-all">
          Testimonials
        </HashLink>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-3">
        <a
          href="#"
          className="text-white bg-neutral-800 px-4 py-2 rounded-md bg-gradient-to-r from-neutral-800 to-neutral-700"
        >
          Get Started
        </a>
        <a href="#" className="text-white px-4 py-2 rounded-md bg-blue-600">
          Log In
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMobileView}>
        {mobileView ? (
          <AiOutlineClose size={30} className="text-white" /> // Close icon
        ) : (
          <CiMenuBurger size={30} className="text-white" /> // Burger menu icon
        )}
      </div>

      {/* Mobile Menu */}
      {mobileView && (
        <div
          // Slowing down the mobile menu transition
          className="lg:hidden fixed top-16 left-0 w-full bg-neutral-900 text-white flex flex-col items-center gap-6 py-4 transition-transform duration-300 ease-in-out"
        >
          <a href="#" className="hover:text-neutral-300">
            How it works
          </a>
          <a href="#" className="hover:text-neutral-300">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-300">
            Testimonials
          </a>
          <a
            href="#"
            className="text-white bg-neutral-800 px-4 py-2 rounded-md bg-gradient-to-r from-neutral-800 to-neutral-700"
          >
            Get Started
          </a>
          <a href="#" className="text-white px-4 py-2 rounded-md bg-blue-600">
            Log In
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

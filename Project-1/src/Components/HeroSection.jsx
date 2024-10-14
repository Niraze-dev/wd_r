import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:mt-20 box-border w-full max-w-screen-lg mx-auto px-4 border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">
          for developers
        </span>
      </h1>
      <h1 className="text-center mt-10 text-lg text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </h1>
      <div className="flex flex-col gap-6 sm:gap-0 tablet:flex-row justify-center my-6 lg:my-10 text-center">
        <Link
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md "
        >
          Start for free
        </Link>
        <Link
          href="#"
          className="border-2 border-neutral-500 py-3 px-4 mx-3 rounded-md"
        >
          Documentation
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 lg:mt-10 justify-center box-border gap-4 w-full">
        <video
          autoPlay
          muted
          loop
          className="rounded-md w-full lg:w-1/2 max-w-full border-2 border-orange-700 shadow-orange-800 object-cover"
        >
          <source src={video1} />
          Your browser doesn't support the video tag.
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-md w-full lg:w-1/2 max-w-full border-2 border-orange-700 shadow-orange-800 object-cover"
        >
          <source src={video2} />
          Your browser doesn't support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection;

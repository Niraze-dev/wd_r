import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";

const Testimoials = () => {
  const basicAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay:  0.2,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="Testimonials" className="flex flex-col justify-center items-center box-border px-4 border-b border-neutral-800 lg:pb-24 md:pb-20 pb-12 lg:mt-24 md:mt-20 mt-12">
      <motion.div
        variants={basicAnimations}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <h1 className="text-3xl lg:text-5xl  font-semibold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {TESTIMONIALS_CONTENT.sectionTitle}
        </h1>
        <h1 className="text-neutral-400 text-lg mt-4 ">
          {TESTIMONIALS_CONTENT.sectionDescription}
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            key={index}
            className="flex flex-col  justify-center items-center border border-neutral-800 p-4 rounded-lg mt-6"
          >
            <p className="text-neutral-400 mt-2 text-center mb-6">
              {review.review}
            </p>
            <div className="flex gap-6 justify-start items-center">
              <img
                className="size-20 md:size-24 lg:size-28 rounded-full "
                src={review.image}
                alt={review.name}
              />
              <div className="flex flex-col ">
                <h1 className="text-lg md:text-xl lg:text-3xl mt-4 font-semibold">
                  {review.name}
                </h1>
                <h1 className="text-neutral-400 ">{review.title}</h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimoials;

import React from "react";
import { HOW_IT_WORKS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // This ensures each child appears after a delay
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="HowItWorks" className="flex flex-col justify-center items-center box-border px-4 border-b border-neutral-800 lg:pb-24 md:pb-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
        className="lg:mb-20 md:mb-16 mb-12"
      >
        <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-center bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent mt-20">
          {HOW_IT_WORKS_CONTENT.sectionTitle}
        </h1>
        <p className="mt-4 text-neutral-400 text-center">
          {HOW_IT_WORKS_CONTENT.sectionDescription}
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {HOW_IT_WORKS_CONTENT.steps.map((feature,i) => (
          <motion.div
            className="flex flex-col justify-between box-border px-4 border border-neutral-800 lg:p-11 md:p-9 p-8 rounded-xl shadow-lg bg-gradient-to-b to-neutral-900  from-neutral-950"
            key={i}
            variants={stepVariants}
            initial="hidden"
            whileInView={"visible"}
          >
            <h1 className="text-3xl lg:text-4xl my-4 font-semibold tracking-tighter  text-neutral-200 text-center">
              {feature.title}
            </h1>
            <h1 className="text-sm lg:text-xl my-4 font-semibold tracking-tighter text-neutral-500 text-center">
              {feature.description}
            </h1>
            <div className="flex justify-center">
              <img
                src={feature.imageSrc}
                className="mt-8 border-neutral-800 rounded-lg text-sm border w-full overflow-hidden"
                alt={feature.title}
              />
            </div>
            {feature.users && (
              <div className="flex flex-col sm:gap-0 sm:flex-row  gap-4 justify-between px-1 items-center mt-4 ">
                <div className="flex items-center -space-x-2">
                  {feature.users.map((user, ind) => (
                    <img
                      className="size-11 sm:size-11 lg:size-12 rounded-full"
                      key={ind}
                      src={user}
                      alt={`User ${ind}`}
                    />
                  ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-5 rounded-lg">
                  Connect
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;

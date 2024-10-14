import React from "react";
import { KEY_FEATURES_CONTENT } from "../constants";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Each child will appear with a 0.3s delay
      },
    },
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="KeyFeatures" className="flex flex-col justify-center items-center box-border px-4 border-neutral-800 lg:pb-24 md:pb-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
        className="text-center mb-12 px-4"
      >
        <h1 className="text-3xl lg:text-5xl mt-20 font-semibold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {KEY_FEATURES_CONTENT.sectionTitle}
        </h1>
        <p className="text-neutral-400 text-lg mt-4">
          {KEY_FEATURES_CONTENT.sectionDescription}
        </p>
      </motion.div>

      {/* Parent container controlling the stagger effect */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-evenly items-center gap-y-8"
      >
        {KEY_FEATURES_CONTENT.features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={featureVariants} // Each child will use these variants
            className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 px-4 py-4"
          >
            <div className="flex justify-center items-center mb-4">
              {feature.icon}
            </div>
            <h1 className="text-2xl font-semibold mt-4">{feature.title}</h1>
            <p className="text-neutral-400 mt-4">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KeyFeatures;

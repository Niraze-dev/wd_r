import React from "react";
import { PLANS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Pricing = () => {
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
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };
  //   can implement same animation to other section when dont need continous animtion

  return (
    <section id="Pricing" className="flex flex-col justify-center items-center box-border px-4 border-b border-neutral-800 lg:pb-24 md:pb-20 pb-12 lg:mt-24 md:mt-20 mt-12">
      <motion.div
        variants={basicAnimations}
        initial="hidden"
        animate="visible"
        className="text-center "
      >
        <h1 className="text-3xl lg:text-5xl  font-semibold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {PLANS_CONTENT.sectionTitle}
        </h1>
        <h1 className="text-neutral-400 text-lg mt-4">
          {PLANS_CONTENT.sectionDescription}
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center items-start mt-12 gap-8">
        {PLANS_CONTENT.plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`w-full md:w-1/2 lg:w-1/3 p-8 border border-neutral-800 rounded-lg shadow-lg bg-gradient-to-tl to-neutral-900  from-neutral-950 ${
              plan.popular ? "border-blue-500" : ""
            }`}
            variants={childVariants}
            custom={index} // Staggering effect with index
          >
            {plan.popular && (
              <h3 className="text-xs mb-3 w-fit  text-blue-500 border border-blue-500 p-1 rounded-md">
                POPULAR
              </h3>
            )}

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight uppercase mb-4">
              {plan.name}
            </h1>

            <p className="text-neutral-400 my-4">{plan.description}</p>
            <h2 className=" text-lg md:text-xl lg:text-2lg text-neutral-300 mb-6">
              {plan.price}
            </h2>

            <ul className="mt-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-neutral-400 flex items-center">
                  <span className="bg-neutral-600 size-2 rounded-full inline-block mr-2" ></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md mt-6 hover:bg-blue-600 w-full ">Subscribe Now</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

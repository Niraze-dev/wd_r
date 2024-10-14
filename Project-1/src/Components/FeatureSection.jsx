import React from "react";
import { features } from "../constants";

function FeatureSection() {
  return (
    <div id="Features" className=" flex flex-col justify-centre items-center mt-8 md:mt-12 lg:mt-20 space-y-10 border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
      <div className="text-center">
        <h1 className=" bg-neutral-900 text-orange-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase w-fit mx-auto">
          Features
        </h1>
        <h1 className=" text-3xl lg:text-6xl sm:text-5xl text-center mt-10 md:mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text tracking-wide">
            your code
          </span>
        </h1>
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-8 mt-10 lg:mt-20 justify-items-center">
          {features.map((ele, ind) => (
            <div
              className="rounded-lg bg-neutral-900 overflow-hidden flex justify-center  px-4 py-3 md:max-w-sm tablet:max-w-sm"
              key={ind}
            >
              <div className="bg-neutral-800 text-orange-800 p-1 mr-4 size-7 flex justify-center items-center rounded-full  ">
                {ele.icon}
              </div>
              <div className="text-left">
                <div className="mb-6 text-xl">{ele.text}</div>
                <div className="text-neutral-500 ">{ele.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;

import React from "react";
import { testimonials } from "../constants";

function Testimonial() {
  return (
    <div  id="Testimonials" className="flex flex-col justify-center items-center border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
      <h1 className="text-3xl lg:text-6xl sm:text-5xl text-center mt-10 lg:mt-20 tracking-wide ">
        What People are
      </h1>
      <h1 className=" text-3xl lg:text-6xl sm:text-5xl text-center tracking-wide pb-8  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 ">
        Saying
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-center justify-items-center">
        {testimonials.map((ele, ind) => (
          <div key={ind} className="flex flex-col px-4 py-3 rounded-md bg-neutral-800 space-y-6 justify-between lg:w1/3 md:w-full tablet:w-1/2 w-full">
            <h1 className="text-sm text-neutral-400">{ele.text}</h1>
            <div className="flex gap-3 items-center">
              <img className="size-8 rounded-full" src={ele.image} alt="" />
              <div>
                <h1 className="text-sm">{ele.user}</h1>
                <h1 className=" text-sm text-neutral-500">{ele.company}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;

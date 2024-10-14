import React from "react";
import codeImg from '../assets/code.jpg'
import { checklistItems } from '/src/constants/index.jsx';
import { CheckCircle } from "lucide-react";

function WorkflowSection() {
  return (
    <div  id="Workflow" className="flex flex-col justify-center items-center border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
      <h1 className=" text-3xl lg:text-6xl sm:text-5xl text-center mt-10 lg:mt-20 tracking-wide mb-8 ">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text tracking-wide ">
          Coding Workflow
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row  px-4 gap-3 ">
        <img className="w-1/2" src={codeImg} alt="" />
        <div className="flex flex-col  justify-center space-y-10">
        {
            checklistItems.map((ele,ind)=>(
                <div key={ind} className="flex gap-6 ">
                    {/* <div className="rounded-full bg-neutral-700s">{CheckCircle}</div> */}
                   <div className="text-green-500"> <CheckCircle></CheckCircle></div>
                    <div>
                        <h1 className="text-lg  mb-2">{ele.title}</h1>
                        <p className="text-neutral-500">{ele.description}</p>
                    </div>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default WorkflowSection;

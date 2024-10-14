// import React from "react";
// import { pricingOptions } from "../constants";
// import { CheckCircle } from "lucide-react";
// function Pricing() {
//   return (
//     <div className="flex flex-col justify-center items-center border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
//       <h1 className=" text-3xl lg:text-6xl sm:text-5xl text-center mt-10 lg:mt-20 tracking-wide pb-8  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 z-10 ">
//         Pricing
//       </h1>
      
//       <div className="flex flex-col md:flex-row gap-6  w-full justify-center items-center">
//         {/*flex flex-col md:flex-row */}
//         {pricingOptions.map((ele, ind) => (
//           <div
//             className="border px-6 rounded-md border-neutral-800 py-6 w-full sm:w-1/2 lg:h-1/3  hover:shadow-orange-950 hover:shadow-lg shadow-none transition-all "
//             key={ind}
//           >
//             <div className="flex flex-col space-y-6">
//               <h1 className="text-3xl flex items-end gap-2">
//                 {ele.title}
//                 {ele.title === "Pro" && <div className="text-sm text-orange-600">(Most Popular)</div>}
//               </h1>
//               <h1 className="text-4xl flex  items-end gap-2">
//                 {ele.price}
//                 <div className="text-sm text-neutral-700">/Month</div>
//               </h1>
//               {ele.features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex  gap-2 text-sm text-neutral-300"
//                 >
//                   <CheckCircle />
//                   {feature}
//                 </div>
//               ))}
//               <button className="px-3 py-2 border rounded-md w-full border-orange-800 hover:bg-orange-700">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pricing;


import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle } from "lucide-react";

function Pricing() {
  return (
    <div  id="Pricing" className="flex flex-col justify-center items-center border-neutral-800 border-b pb-8 md:pb-12 lg:pb-20">
      <h1 className="text-3xl lg:text-6xl sm:text-5xl text-center mt-10 lg:mt-20 tracking-wide pb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 z-10">
        Pricing
      </h1>

      {/* Grid layout for pricing options */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center ">
        {pricingOptions.map((ele, ind) => (
          <div
            className="border px-6 py-6 rounded-md border-neutral-800 hover:shadow-orange-950 hover:shadow-lg shadow-none transition-all flex flex-col justify-between h-full"
            key={ind}
          >
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl flex items-end gap-2">
                {ele.title}
                {ele.title === "Pro" && (
                  <div className="text-sm text-orange-600">
                    (Most Popular)
                  </div>
                )}
              </h1>
              <h1 className="text-4xl flex items-end gap-2">
                {ele.price}
                <div className="text-sm text-neutral-700">/Month</div>
              </h1>
              <div className="space-y-2">
                {ele.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 text-sm text-neutral-300">
                    <CheckCircle />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe Button */}
            <button className="px-3 py-2 border rounded-md w-full border-orange-800 hover:bg-orange-700 mt-6">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

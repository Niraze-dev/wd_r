import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
  const infoArr = {
    Resources: resourcesLinks,
    Platform: platformLinks,
    Community: communityLinks,
  };
  const infoKey = Object.keys(infoArr);

  return (
    <div className="lg:mt-20 md:mt-14 mt-10 flex flex-col md:flex-row justify-evenly pb-10 gap-10 items-start">
      {infoKey.map((ky) => (
        <div className="flex flex-col space-y-4 " key={ky}>
          <h3 className="text-lg font-bold text-neutral-200">{ky}</h3>
          {infoArr[ky].map((ele, ind) => (
            <a
              className="text-neutral-500 hover:text-orange-600 transition-colors"
              href={ele.href}
              key={ind}
            >
              {ele.text}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;

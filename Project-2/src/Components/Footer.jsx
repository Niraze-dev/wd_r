import React from "react";
import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center box-border px-8 mb-5 border-b border-neutral-800 lg:pb-24 md:pb-20 pb-12 lg:mt-24 md:mt-20 mt-12 bg-neutral-900 rounded-xl py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FOOTER_CONTENT.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h1 className="text-xl my-4">{section.title}</h1>
            {section.links?.map((link, linkIndex) => (
              <a href={link.url} key={linkIndex} className="text-neutral-400">
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      <h1 className="text-neutral-400 text-center mt-12 mb-4">{FOOTER_CONTENT.platformsText}</h1>
      <h1 className="text-neutral-400 text-center ">{FOOTER_CONTENT.copyrightText}</h1>
    </section>
  );
};

export default Footer;

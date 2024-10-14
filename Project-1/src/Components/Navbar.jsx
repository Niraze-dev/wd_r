import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

import { HashLink as HLink } from "react-router-hash-link";
const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toogleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };
  const navLinkList=['#Features','#Workflow',
    '#Pricing',
    '#Testimonials']
  return (
    <nav className=" sticky top-0  backdrop-blur-lg  py-3 border-b-2 border-neutral-700">
      <header className="flex justify-between items-center mx-auto px-9">
        <div className="flex gap-3 items-center">
          <img className="size-10" src={logo} alt="" />
          <h1>VirutalR</h1>
        </div>
        <div>
          <ul className="hidden lg:flex gap-5">
            {navItems.map((ele, index) => {
              return (
                <HLink smooth to={navLinkList[index]} key={index}>
                  {ele.label}
                </HLink>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex justify-center space-x-12 items-center ">
          <a className="px-3 py-2 border rounded-md">Sign In</a>
          <a className=" bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md ">
            Create an Account
          </a>
        </div>
        <div className="lg:hidden  md:flex  flex-col justify-end">
          <button onClick={toogleNavbar}>
            {mobileDrawer ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {mobileDrawer && (
        <div className="fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((ele, ind) => (
              <li key={ind} className="py-3">
                <a href={ele.href}>{ele.label}</a>
              </li>
            ))}
          </ul>
          <div className="space-x-4 mt-6">
            <a className="px-3 py-2 border rounded-md">Sign In</a>
            <a className=" bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md ">
              Create an Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";
import WorkflowSection from "./Components/WorkflowSection";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto md:pt-14 lg:pt-20 px-6">
        <HeroSection/>
        <FeatureSection/>
        <WorkflowSection/>
        <Pricing/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

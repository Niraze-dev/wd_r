import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HowItWorks from "./Components/HowItWorks";
import KeyFeatures from "./Components/KeyFeatures";
import Pricing from "./Components/Pricing";
import Testimoials from "./Components/Testimoials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center  box-border px-4 max-w-7xl mx-auto"> 
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <KeyFeatures></KeyFeatures>
      <Pricing></Pricing>
      <Testimoials></Testimoials>
      <Footer></Footer>
      </div>
        
    </>
  );
}

export default App;

import React, { useState, useRef } from "react";
import Sidebar from "../sidebar";
import HeroSection from "./HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./InfoSection/Data";
import InfoSection from "./InfoSection/Info";
import Services from "./Services/service";
import Footer from "../Footer/footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const aboutRef = useRef();

  function handleBackClick() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection id="about" ref={aboutRef} {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

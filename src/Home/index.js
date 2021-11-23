import React, { useState } from "react";
import Navs from "../nav";
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

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

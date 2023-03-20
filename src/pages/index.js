import React, { useState, useRef } from "react";
import useScrollSnap from 'react-use-scroll-snap';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import HeroSection1 from "../components/HeroSection1";
import HeroSection2 from "../components/HeroSection2";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 100 });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <section ref={scrollRef}>
      <HeroSection />
      <HeroSection1 />
      <HeroSection2 />
        </section>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "./ScrollContent.css";
import Home from "../ContentPages/Home";
import Contact from "../ContentPages/Contact";
import AboutUs from "../ContentPages/AboutUs";
import Team from "../ContentPages/Team";
import Highlights from "../ContentPages/Highlights";
import JudgingPanel from "../ContentPages/JudgingPanel";
import Prize from "../ContentPages/Prize.tsx";
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";
import Cross from "../SVGs/Cross.svg";

const ScrollContent = ({ totalIndexes, onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const threshold = 850; // Scroll distance threshold for changing index

  const pages = [
    <Home />,
    <AboutUs />,
    <Prize />,
    <Highlights />,
    <JudgingPanel />,
    <Team />,
    <Contact />,
  ];

  const handleScroll = (e) => {
    const delta = e.deltaY; // Get scroll direction and distance
    const newScrollDistance = scrollDistance + delta;

    if (newScrollDistance >= threshold) {
      if (currentIndex < totalIndexes - 1 && currentIndex < 6) {
        setCurrentIndex(currentIndex + 1);
        onIndexChange(currentIndex + 1); // Notify parent
      }
      setScrollDistance(0);
    } else if (newScrollDistance <= -threshold) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        onIndexChange(currentIndex - 1); // Notify parent
      }
      setScrollDistance(0);
    } else {
      setScrollDistance(newScrollDistance);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalIndexes - 1 && currentIndex < 6) {
      setCurrentIndex(currentIndex + 1);
      onIndexChange(currentIndex + 1); // Notify parent
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onIndexChange(currentIndex - 1); // Notify parent
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollDistance, currentIndex]);

  return (
    <div className="flex flex-col justify-center items-center md:items-start md:ml-[calc(10%-10px)] h-screen w-screen">
      <div className="hidden absolute top-[4vh] md:flex flex-row  items-center justify-between px-2 py-2 w-3/5 rounded-full bg-[#2a2a2a]">
        <div className="flex flex-row items-center justify-center gap-2 bg-[#242323] rounded-full px-2">
          <img src={PearLogo} alt="PearsLogo" className="w-12 h-12" />
          <img src={Cross} alt="Cross" className="w-8 h-18" />
          <img src={GRLogo} alt="GRLogo" className="w-16 h-16" />
        </div>
        <div className="flex text-white text-3xl font-semibold flex-1 items-center justify-center ">
          {[
            "HOME",
            "ABOUT US",
            "PRIZES",
            "HIGHLIGHTS",
            "JUDGING PANEL",
            "TEAM",
            "CONTACT US",
          ][currentIndex]}
        </div>
      </div>
      <div className="md:hidden absolute top-[2vh] flex flex-row items-center justify-between gap-2 px-3 py-2 w-5/6 rounded-full bg-[#2a2a2a]">
        <img src={PearLogo} alt="PearsLogo" className="w-10 h-10" />
        <div className="text-white text-xl font-semibold flex flex-1 items-center justify-center">
          {[
            "HOME",
            "ABOUT US",
            "PRIZES",
            "HIGHLIGHTS",
            "JUDGING PANEL",
            "TEAM",
            "CONTACT US",
          ][currentIndex]}
        </div>
        <img src={GRLogo} alt="GRLogo" className="w-10 h-10" />
      </div>
      <div className="relative text-white text-center">
        <button
          className="md:hidden fixed top-1/2 right-0 transform -translate-y-1/2 bg-black/5 text-white mx-1 px-4 py-2 rounded-full z-20 cursor-pointer text-2xl font-bold hover:bg-white hover:text-black"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          &#9654;
        </button>
        {pages[currentIndex]} {/* Dynamically render the page component */}
        <button
          className="md:hidden fixed top-1/2 left-0 transform -translate-y-1/2 bg-black/5 text-white mx-1 px-4 py-2 rounded-full z-20 cursor-pointer text-2xl font-bold hover:bg-white hover:text-black"
          onClick={handleNext}
          disabled={currentIndex === pages.length - 1}
        >
          &#9664;
        </button>
      </div>
    </div>
  );
};

export default ScrollContent;

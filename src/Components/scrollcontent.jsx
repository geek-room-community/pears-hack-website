import React, { useEffect, useState } from "react";
import "./ScrollContent.css";
import Home from "../ContentPages/Home";
import Contact from "../ContentPages/Contact";
import AboutUs from "../ContentPages/AboutUs";
import Team from "../ContentPages/Team";
import Highlights from "../ContentPages/Highlights";
import JudgingPanel from "../ContentPages/JudgingPanel";
import Prize from "../ContentPages/Prize";
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";
import Cross from "../SVGs/Cross.svg";

const ScrollContent = ({ totalIndexes, onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const threshold = 600; // Scroll distance threshold for changing index

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
    <>
      <div className="top-logo-pagenm">
        <div className="logos">
          <img src={PearLogo} alt="PearsLogo" />
          <img src={Cross} alt="Cross" id="cross" />
          <img src={GRLogo} alt="GRLogo" />
        </div>
        <div className="pagenm">
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
      <div className="top-logo-pagenm-mobile">
        <img src={PearLogo} alt="PearsLogo" id="pears-logo-m"/>
        <div className="pagenm-mobile">
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
        <img src={GRLogo} alt="GRLogo" />
      </div>
      <div style={{ position: "relative", textAlign: "center", color: "#fff" }}>
        <button
          className="nav-button nav-button-left"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          &#9664;
        </button>
        {pages[currentIndex]} {/* Dynamically render the page component */}
        <button
          className="nav-button nav-button-right"
          onClick={handleNext}
          disabled={currentIndex === pages.length - 1}
        >
          &#9654;
        </button>
      </div>
    </>
  );
};

export default ScrollContent;

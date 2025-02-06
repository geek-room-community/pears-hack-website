import React from "react";
import "./ScrollContent.css";
import Home from "../ContentPages/Home";
import Contact from "../ContentPages/Contact";
import AboutUs from "../ContentPages/AboutUs";
import Team from "../ContentPages/Team";
import Highlights from "../ContentPages/Highlights";
import JudgingPanel from "../ContentPages/JudgingPanel";
import Prize from "../ContentPages/Prize.tsx";
import Timeline from "../ContentPages/Timeline.jsx";
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";
import Tracks from "../ContentPages/Tracks.jsx";
import FAQ from "../ContentPages/FAQ.jsx";

const ScrollContent = ({ currentIndex, handleNext, handlePrevious }) => {
  const pages = [
    <Home />,
    <AboutUs />,
    <Prize />,
    <Highlights />,
    <JudgingPanel />,
    <Team />,
    <Contact />,
    <Tracks />,
    <FAQ />,
    <Timeline />,
  ];

  return (
    <div className="mt-[12vh] xl:mt-[10vh] flex flex-col gap-2 justify-between items-center md:items-start md:ml-[calc(10%-10px)] h-screen w-screen">
      <div className="hidden md:flex z-50 flex-row items-center justify-between px-2 py-2 w-3/5 rounded-full bg-[#2a2a2a]">
        <div className="flex flex-row items-center justify-center gap-2 bg-[#242323] rounded-full px-2">
          <img src={PearLogo} alt="PearsLogo" className="w-12 h-12" />
          <img src={GRLogo} alt="GRLogo" className="w-16 h-16" />
        </div>
        <div className="flex text-white text-3xl font-semibold flex-1 items-center justify-center ">
          {
            [
              "HOME",
              "ABOUT US",
              "PRIZES",
              "HIGHLIGHTS",
              "JUDGING PANEL",
              "TEAM",
              "CONTACT US",
              "TRACKS",
              "FAQS",
              "TIMELINE",
            ][currentIndex]
          }
        </div>
      </div>
      <div className="md:hidden z-50 mt-12 flex flex-row items-center justify-between gap-2 px-3 py-2 w-5/6 rounded-full bg-[#2a2a2a]">
        <img src={PearLogo} alt="PearsLogo" className="w-10 h-10" />
        <div className="text-white text-xl font-semibold flex flex-1 items-center justify-center">
          {
            [
              "HOME",
              "ABOUT US",
              "PRIZES",
              "HIGHLIGHTS",
              "JUDGING PANEL",
              "TEAM",
              "CONTACT US",
              "TRACKS",
              "FAQS",
              "TIMELINE",
            ][currentIndex]
          }
        </div>
        <img src={GRLogo} alt="GRLogo" className="w-10 h-10" />
      </div>
      <div className="mb-10 text-white text-center">
        {pages[currentIndex]}
      </div>
    </div>
  );
};

export default ScrollContent;

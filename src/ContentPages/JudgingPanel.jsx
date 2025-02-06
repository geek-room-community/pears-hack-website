import React, { useState } from "react";
import Judges from "./Judges.jsx";
import Mentors from "./Mentors.jsx";
import "../styles/JudgingPanel.css";
import Frame from "../SVGs/Frame.svg";
import Vector from "../SVGs/Vector.svg";
import pearss from "../SVGs/pears-logo.svg";

const JudgingPanel = () => {
  const [activePanel, setActivePanel] = useState("judgingPanel");

  // Function to render content based on activePanel
  const renderContent = () => {
    if (activePanel === "judges") {
      return (
        <div className="judge-component">
          <button
            className="back-button back-buttonn"
            onClick={() => setActivePanel("judgingPanel")}
          >
            <img
              src={Frame}
              alt="Back-Arrow"
              className="back-arrow w-[18px] h-8 mr-2"
            />
          </button>
          <Judges />
        </div>
      );
    }

    if (activePanel === "mentors") {
      return (
        <div className="mentor-component">
          <button
            className="back-button back-buttonn"
            onClick={() => setActivePanel("judgingPanel")}
          >
            <img
              src={Frame}
              alt="Back-Arrow"
              className="back-arrow w-[18px] h-8 mr-2"
            />
          </button>
          <Mentors />
        </div>
      );
    }

    // Default view for Judging Panel
    return (
      <div className="mb-[30vh] md:mb-0 xl:mb-40 mx-auto md:mx-0 text-white h-auto flex flex-col items-center justify-center">
        <div className="buttons flex flex-col items-center gap-12">
          <div
            className="button flex items-center justify-start bg-[#222] rounded-[4.8rem] px-8 py-6 w-full h-32 gap-[25px]"
            onClick={() => setActivePanel("judges")}
          >
            <span className="logo-judge flex justify-center items-center bg-[#818181] mr-12 w-[90px] h-[90px] rounded-full flex-shrink-0">
              <img src={pearss} alt="pears" className="md:h-16 h-10" />
            </span>
            <div className="judge-title-panel-info">
              <span>JUDGES</span>
              <div className="panel-info bg-transparent border-none px-6 py-2 rounded-[4.8rem] text-[#B6DD48] cursor-pointer flex justify-center items-center gap-2 text-base text-center">
                <span className="panel-span-title">Panel Info</span>
                <img src={Vector} alt="forward-Arrow" size={11} />
              </div>
            </div>
          </div>

          <div
            className="button flex items-center justify-start bg-[#222] rounded-[4.8rem] px-8 py-6 w-full h-32 gap-[25px]"
            onClick={() => setActivePanel("mentors")}
          >
            <div className="logo-judge flex justify-center items-center bg-[#818181] mr-12 w-[90px] h-[90px] rounded-full flex-shrink-0">
              <img src={pearss} alt="pears" className="md:h-16 h-10" />
            </div>
            <div className="judge-title-panel-info">
              <span>MENTORS</span>
              <div className="panel-info bg-transparent border-none px-6 py-2 rounded-[4.8rem] text-[#B6DD48] cursor-pointer flex justify-center items-center gap-2 text-base text-center">
                <span className="panel-span-title">Panel Info</span>
                <img src={Vector} alt="forward-Arrow" size={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderContent()}</div>;
};

export default JudgingPanel;

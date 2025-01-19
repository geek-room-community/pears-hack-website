import React, { useState } from "react";
import Judges from "./Judges.jsx";
import Mentors from "./Mentors.jsx";
import "../styles/JudgingPanel.css";
import Frame from "../SVGs/Frame.svg";
import Vector from "../SVGs/Vector.svg";

const JudgingPanel = () => {
  const [activePanel, setActivePanel] = useState("judgingPanel");

  // Function to render content based on activePanel
  const renderContent = () => {
    if (activePanel === "judges") {
      return (
        <div className="judge-component">
          <button
            className="back-button"
            onClick={() => setActivePanel("judgingPanel")}
            style={{ marginTop: "50px" }}
          >
            <img src={Frame} alt="Back-Arrow" className="back-arrow" />
          </button>
          <Judges />
        </div>
      );
    }

    if (activePanel === "mentors") {
      return (
        <div className="mentor-component">
          <button
            className="back-button"
            onClick={() => setActivePanel("judgingPanel")}
            style={{ marginTop: "50px" }}
          >
            <img src={Frame} alt="Back-Arrow" className="back-arrow" />
          </button>
          <Mentors />
        </div>
      );
    }

    // Default view for Judging Panel
    return (
      <div className="main-panel">
        <div className="buttons">
          <div className="button" onClick={() => setActivePanel("judges")}>
            <span className="logo-judge"></span>
            <div className="judge-title-panel-info">
              <span>JUDGES</span>
              <div className="panel-info">
                <span className="panel-span-title">Panel Info</span>
                <img src={Vector} alt="forward-Arrow" size={11} />
              </div>
            </div>
          </div>

          <div className="button" onClick={() => setActivePanel("mentors")}>
            <div className="logo-judge"></div>
            <div className="judge-title-panel-info">
              <span>MENTORS</span>
              <div className="panel-info">
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

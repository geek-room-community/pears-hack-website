import React from "react";
import "../styles/JudgesMentors.css";
import linkedin from "../SVGs/linkedin.svg";
import GitHub from "../SVGs/GitHub.svg";
const Mentors = () => {
  return (
    <div className="main-panels">
      <div className="buttonss">
        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Mentor 1</span>
            <div className="social-icons">
              <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              <img src={GitHub} className="icon github" alt="Github" />
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Mentor 2</span>
            <div className="social-icons">
              <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              <img src={GitHub} className="icon github" alt="Github" />
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Mentor 3</span>
            <div className="social-icons">
              <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              <img src={GitHub} className="icon github" alt="Github" />
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Mentor 4</span>
            <div className="social-icons">
              <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              <img src={GitHub} className="icon github" alt="Github" />
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Mentor 5</span>
            <div className="social-icons">
              <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              <img src={GitHub} className="icon github" alt="Github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;

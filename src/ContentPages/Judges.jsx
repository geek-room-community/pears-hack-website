import React from "react";
import "../styles/JudgesMentors.css";
import linkedin from "../SVGs/linkedin.svg";
import GitHub from "../SVGs/GitHub.svg";
const Judges = () => {
  return (
    <div className="main-panels">
      <div className="buttonss">
        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Judge 1</span>
            <div className="social-icons">
              <span>
                <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              </span>
              <span>
                <img src={GitHub} className="icon github" alt="Github" />
              </span>
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Judge 2</span>
            <div className="social-icons">
              <span>
                <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              </span>
              <span>
                <img src={GitHub} className="icon github" alt="Github" />
              </span>
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Judge 3</span>
            <div className="social-icons">
              <span>
                <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              </span>
              <span>
                <img src={GitHub} className="icon github" alt="Github" />
              </span>
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Judge 4</span>
            <div className="social-icons">
              <span>
                <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              </span>
              <span>
                <img src={GitHub} className="icon github" alt="Github" />
              </span>
            </div>
          </div>
        </div>

        <div className="buttonsss">
          <span className="logo-judges"></span>
          <div className="judge-title-panel-infos">
            <span className="titles">Judge 5</span>
            <div className="social-icons">
              <span>
                <img src={linkedin} className="icon linkedin" alt="Linkedin" />
              </span>
              <span>
                <img src={GitHub} className="icon github" alt="Github" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;

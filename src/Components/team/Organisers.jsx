import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import "./TeamMembers.css";
import Frame from "../../SVGs/Frame.svg";
import { Link } from "react-router-dom";
import linkedin from "../../SVGs/linkedin.svg";
import GitHub from "../../SVGs/GitHub.svg";

function Organisers() {
  return (
    <>
      <Link to="/">
        <button className="back-button">
          <img src={Frame} alt="Back-Arrow" className="back-arrow" />
        </button>
      </Link>
      <div className="main-panels">
        <div className="buttonss">
          <div className="buttonsss">
            <span className="logo-judges"></span>
            <div className="judge-title-panel-infos">
              <span className="titles">Team Member 1</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={linkedin}
                    className="icon linkedin"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img src={GitHub} className="icon github" alt="Github" />
                </a>
              </div>
            </div>
          </div>

          <div className="buttonsss">
            <span className="logo-judges"></span>
            <div className="judge-title-panel-infos">
              <span className="titles">Team Member 2</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={linkedin}
                    className="icon linkedin"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img src={GitHub} className="icon github" alt="Github" />
                </a>
              </div>
            </div>
          </div>

          <div className="buttonsss">
            <span className="logo-judges"></span>
            <div className="judge-title-panel-infos">
              <span className="titles">Team Member 3</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={linkedin}
                    className="icon linkedin"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img src={GitHub} className="icon github" alt="Github" />
                </a>
              </div>
            </div>
          </div>

          <div className="buttonsss">
            <span className="logo-judges"></span>
            <div className="judge-title-panel-infos">
              <span className="titles">Team Member 4</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={linkedin}
                    className="icon linkedin"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img src={GitHub} className="icon github" alt="Github" />
                </a>
              </div>
            </div>
          </div>

          <div className="buttonsss">
            <span className="logo-judges"></span>
            <div className="judge-title-panel-infos">
              <span className="titles">Team Member 5</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img
                    src={linkedin}
                    className="icon linkedin"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img src={GitHub} className="icon github" alt="Github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisers;

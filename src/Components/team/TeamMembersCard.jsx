import React from "react";
import "./TeamMembersCard.css";
import LinkedinIcon from "../../SVGs/LinkedIn.svg";
import GithubIcon from "../../SVGs/GitHub.svg";

function TeamMembersCard({ name, github, linkedin, size }) {
  return (
    <div
      className="member-card"
      style={
        size === 1
          ? {
              border: "1px solid white",
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
            }
          : null
      }
    >
      <div className="circle"></div>
      <div className="member-name">
        <div>{name}</div>
        {size === 1 ? (
          <div className="socials">
            <a href={github} className="social-links">
              <img src={GithubIcon} height={20} width={20} alt="" />{" "}
              <div>Github</div>
            </a>
            <a href={linkedin} className="social-links">
              <img src={LinkedinIcon} height={20} width={20} alt="" />{" "}
              <div>Linkedin</div>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TeamMembersCard;

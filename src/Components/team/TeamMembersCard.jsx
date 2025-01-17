import React from "react";
import "./TeamMembersCard.css";
import LinkedinIcon from "../../SVGs/LinkedIn.svg";
import GithubIcon from "../../SVGs/GitHub.svg";

function TeamMembersCard({ name, github, linkedin, size }) {
  let cardstyling = {};
  switch (size) {
    case 3:
      cardstyling = {
        marginLeft: "50%",
      };
      break;
    case 2:
      cardstyling = {
        marginLeft: "25%",
      };
      break;
    case 1:
      cardstyling = {
        border: "1px solid white",
        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
        width: "400px",
        height: "",
      };
    default:
      break;
  }
  return (
    <div className="member-card" style={cardstyling}>
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

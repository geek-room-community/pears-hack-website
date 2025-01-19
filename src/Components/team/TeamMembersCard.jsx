import React from "react";
import "./TeamMembersCard.css";
import LinkedinIcon from "../../SVGs/LinkedIn.svg";
import GithubIcon from "../../SVGs/GitHub.svg";

function TeamMembersCard({ name, github, linkedin, size }) {
  let TeamMemberCardClass = "member-card ";
  let TeamMemberCircleClass = "member-card-circle ";
  let TeamMemberNameClass = "";
  switch (size) {
    case 3:
      TeamMemberCardClass += "team-member-card-3";
      TeamMemberCircleClass += "team-member-circle-3";
      TeamMemberNameClass += "team-member-name-3";
      break;
    case 2:
      TeamMemberCardClass += "team-member-card-2";
      TeamMemberCircleClass += "team-member-circle-2";
      TeamMemberNameClass += "team-member-name-2";
      break;
    case 1:
      TeamMemberCardClass += "team-member-card-1";
      TeamMemberCircleClass += "team-member-circle-1";
      TeamMemberNameClass += "team-member-name-1";
      break;
    default:
      break;
  }
  return (
    <div className={TeamMemberCardClass}>
      <div className={TeamMemberCircleClass}></div>
      <div className="member-name">
        <div className={TeamMemberNameClass}>{name}</div>
        {size === 1 ? (
          <div className="socials">
            <a href={github} className="social-links">
              <img src={GithubIcon} className="team-member-link-logo" alt="" />{" "}
              <div>Github</div>
            </a>
            <a href={linkedin} className="social-links">
              <img
                src={LinkedinIcon}
                className="team-member-link-logo"
                alt=""
              />{" "}
              <div>Linkedin</div>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TeamMembersCard;

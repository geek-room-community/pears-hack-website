import React from "react";
import "./Card.css";
import ButtonIcon from "../../SVGs/Button.svg";
import { Link } from "react-router-dom";
import pears from "../../SVGs/pears-logo.svg";

function Card({ title, route, version }) {
  if (version === 1) {
    return (
      <div className="card">
        <div className="circle">
          <img src={pears} alt="pears" className="md:h-16 h-8" />
        </div>
        <div className="card-text">{title}</div>
        <Link to={route} className="team-card-v1">
          <img src={ButtonIcon} alt="arrow" className="team-card-arrow" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card">
        <Link to={route} className="team-card-v2">
          <img
            src={ButtonIcon}
            alt="arrow"
            className="team-card-arrow team-card-arrow-inverted"
          />
        </Link>
        <div className="card-text">{title}</div>
        <div className="circle">
          <img src={pears} alt="pears" className="md:h-16 h-8" />
        </div>
      </div>
    );
  }
}

export default Card;

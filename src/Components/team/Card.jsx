import React from "react";
import "./Card.css";
import ButtonIcon from "../../SVGs/Button.svg";
import { Link } from "react-router-dom";

function Card({ title, version }) {
  if (version === 1) {
    return (
      <div className="card">
        <div className="circle"></div>
        <div className="card-text">{title}</div>
        <Link to={"/lead-organisers"} style={{ paddingRight: "30px" }}>
          <img src={ButtonIcon} alt="arrow" height={30} width={30} />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card" style={{ position: "relative", left: "10%" }}>
        <Link to={"/lead-organisers"} style={{ paddingLeft: "30px" }}>
          <img src={ButtonIcon} alt="arrow" height={30} width={30} />
        </Link>
        <div className="card-text">{title}</div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default Card;

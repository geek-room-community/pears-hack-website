import React from "react";
import "./Card.css";

function Card({ title, version }) {
  if (version === 1) {
    return (
      <div className="card">
        <div className="circle"></div>
        <div className="card-text">{title}</div>
        <div style={{ paddingRight: "30px" }}>
          <img src="./button.svg" alt="arrow" height={30} width={30} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" style={{ position: "relative", left: "10%" }}>
        <div style={{ paddingLeft: "30px" }}>
          <img src="./button.svg" alt="arrow" height={30} width={30} />
        </div>
        <div className="card-text">{title}</div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default Card;

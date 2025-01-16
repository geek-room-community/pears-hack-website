import React from "react";
import Card from "./Card";
import "./Main.css";

function Main() {
  return (
    <div className="team">
      <Card title={"LEAD ORGANIZERS"} version={1} />
      <Card title={"ORGANIZERS"} version={0} />
      <Card title={"DESIGN"} version={1} />
      <Card title={"WEB"} version={0} />
      <Card title={"PR"} version={1} />
    </div>
  );
}

export default Main;

import React from "react";
import Card from "./Card";
import "./Main.css";

function Main() {
  return (
    <div className="team">
      <Card title={"LEAD ORGANIZERS"} route={"/lead-organisers"} version={1} />
      <Card title={"WEBSITE"} route={"/web"} version={0} />
      <Card title={"DESIGN"} route={"/design"} version={1} />
      <Card title={"PROMOTION"} route={"/promotion"} version={0} />
      <Card title={"PR"} route={"/pr"} version={1} />
    </div>
  );
}

export default Main;

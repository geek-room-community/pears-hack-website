import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import "./TeamMembers.css";

function Organisers() {
  return (
    <div className="team-members">
      <TeamMembersCard
        name={"Darsh Jain"}
        github={"sparky0520"}
        linkedin={"123"}
        size={3}
      />
      <TeamMembersCard
        name={"Darsh Jain"}
        github={"sparky0520"}
        linkedin={"123"}
        size={2}
      />
      <TeamMembersCard
        name={"Darsh Jain"}
        github={"sparky0520"}
        linkedin={"123"}
        size={1}
      />
      <TeamMembersCard
        name={"Darsh Jain"}
        github={"sparky0520"}
        linkedin={"123"}
        size={2}
      />
      <TeamMembersCard
        name={"Darsh Jain"}
        github={"sparky0520"}
        linkedin={"123"}
        size={3}
      />
    </div>
  );
}

export default Organisers;

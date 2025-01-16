import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/team/Main";
import TeamMembers from "../Components/team/TeamMembers";

const Team = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamMembers />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default Team;

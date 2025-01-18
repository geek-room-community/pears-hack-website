import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Components/team/Main";
import LeadOrganisers from "../Components/team/LeadOrganisers";
import Organisers from "../Components/team/Organisers";
import Design from "../Components/team/Design";
import Web from "../Components/team/Web";
import Pr from "../Components/team/Pr";

const Team = () => {
  return (
    <Routes>
      <Route path="/lead-organisers" element={<LeadOrganisers />} />
      <Route path="/organisers" element={<Organisers />} />
      <Route path="/design" element={<Design />} />
      <Route path="/web" element={<Web />} />
      <Route path="/pr" element={<Pr />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Team;

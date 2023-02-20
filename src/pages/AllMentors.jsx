import React from "react";
import MentorList from "../components/Mentor/MentorList";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import { Pagination } from "@mui/material";

const AllMentors = () => {
  let Findbtn = "find >";
  return (
    <div className="mentors-list">
      <Navbar />
      <Sidebar />
      <h1 className="mentors-list-title">MENTORS</h1>
      <div className="mentors-list_filter">
        <input type="text" className="filter-input" placeholder="skills  >" />
        <input
          type="text"
          className="filter-input"
          placeholder="experience  >"
        />
        <button className="filter-btn">{Findbtn}</button>
      </div>
      <div className="mentors-cards">
        <MentorList />
      </div>
      <div className="pagination">
        <Pagination
          sx={{
            color: "white",
            marginBottom: "60px",
          }}
          count={3}
          color="primary"
        />
      </div>
    </div>
  );
};

export default AllMentors;

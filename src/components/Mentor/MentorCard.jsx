import React from "react";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import mentorPhoto from "../../asstets/sanzhar-main.jpg";
import { Link } from "react-router-dom";

const MentorCard = () => {
  let backBtn = "< back";

  return (
    <div className="mentor-details mentors-list">
      <Sidebar />
      <Navbar />
      <div className="ml-80">
        <h1 className="mentors-list-title ">MENTOR</h1>
        <Link to="/allMentors">
          <button className="filter-btn back-btn">{backBtn}</button>
        </Link>

        <div className="short-info-wrapper">
          <div className="short-info_img">
            <img className="mentor-img" src={mentorPhoto} alt="" />
          </div>
          <div className="short-info_text">
            <h2 className="short-info_title">KADYRKULOV SANZHAR</h2>
            <span className="short-info_price">from 60$</span>
            <div className="stackWrapperList">
              <div className="stackWrapperItem">
                <span className="stackWrapperItem-text">react</span>{" "}
              </div>
              <div className="stackWrapperItem">
                <span className="stackWrapperItem-text">js</span>
              </div>
              <div className="stackWrapperItem">
                <span className="stackWrapperItem-text">html</span>
              </div>
              <div className="stackWrapperItem">
                <span className="stackWrapperItem-text">css</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mentor-schedule">SCHEDULE</h2>
        <div className="mentor-times">
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
          <div className="mentor-times_wrapper">
            <span className="mentor-time">day 15:50</span>
          </div>
        </div>
        <div className="mentor-about">
          <h2 className="mentor-about_title mentor-schedule">ABOUT</h2>
          <p className="mentor-about_text">
            My name is Petr. I graduated from university with a degree in
            engineering, after which I began to study English. I have been
            teaching since 2017. I wanted to radically change the nature of my
            professional activity and work for sales. However, the study of
            English continued. In June 2016 English course: Advanced (CAE).
            Future plans: obtaining a certificate of proficiency in English
            (CPE). While studying English, studying the methodology of teaching
            the language, she also formulated for herself the main points on
            which to focus in order to quickly master the necessary language
            skills. Who wants to take an exam like FCE and CAE??
          </p>
        </div>
        <div style={{ height: "80px" }} className="empty"></div>
      </div>
    </div>
  );
};

export default MentorCard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeDesriptionMentor from "../../asstets/aiana3.png";
import { fetchMentors } from "../../store/mentorsSlice";

const HomeDescription = () => {
  const { mentorsArr } = useSelector((store) => store.mentors);
  console.log(mentorsArr, "arr");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);
  let mentors = "Our Mentors >";

  return (
    <div className="description">
      <div className="home-description">
        <div className="home-description-col-1">
          <h2 className="home-description-name">WE CAN</h2>
          <div className="home-description-title">
            <p className="home-description-item">
              Transform your future with individual programming lessons! Improve
              your skills and achieve your goals with personalized one-on-one
              instruction. Start your journey to success now!
            </p>
          </div>
          <button className="desc-header-button">{mentors}</button>
        </div>
        <div className="home-description-col-2">
          <img src={HomeDesriptionMentor} alt="" />
        </div>
      </div>
      <div className="courses">
        <div className="courses-title">
          <span className="language-name">JavaScript</span>
          <span className="mentors-count">10 mentors</span>
        </div>
        <div className="courses-title">
          <span className="language-name">Python</span>
          <span className="mentors-count">10 mentors</span>
        </div>
        <div className="courses-title">
          <span className="language-name">PHP</span>
          <span className="mentors-count">10 mentors</span>
        </div>
        <div className="courses-title">
          <span className="language-name">NODE JS</span>
          <span className="mentors-count">10 mentors</span>
        </div>
        <div className="courses-title">
          <span className="language-name">JAVA</span>
          <span className="mentors-count">10 mentors</span>
        </div>
        <div className="courses-title">
          <span className="language-name">React Native</span>
          <span //! ???????????? ????????????
            className="mentors-count"
            onClick={() => dispatch(fetchMentors())}
          >
            10 mentors
          </span>
        </div>
      </div>
    </div>
  );
export default HomeDescription;

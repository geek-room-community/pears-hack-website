import React, { useRef, useEffect, useState } from 'react';
import "../styles/home.css"
import PearLogo from "../SVGs/pears-logo.svg";
import Timer from '../Components/Timer';
// import Email from "../SVGs/email.svg";
// import Web from "../SVGs/website.svg";
// import Instagram from "../SVGs/instagram.svg";
// import LinkedIn from "../SVGs/linkedin.svg";

const Home = () => {

  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="home-container">
      <div className="lineptitle">
        <div className="leftline"
        >
        </div>
        <div className="title">
          <div className="mobtoimg">
            <img src={PearLogo} alt="" />
            <div id='pears'>PEARS</div>
          </div>
          <div className="topimg">
            <img src={PearLogo} alt="" />
            <div>PEARS</div>
          </div>
          <div id='gleen'>GLOBAL</div>
          <div>HACKATHON</div>
        </div>
      </div>
      <div className="timer-container">
        <Timer />
      </div>


      {/* <div className="registerbttn">
        <button className="registerbtn">REGISTER NOW</button>
      </div> */}
    </div>
  );
};

export default Home;
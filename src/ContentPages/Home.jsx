import React, { useRef, useEffect, useState } from "react";
// import PearLogo from "../SVGs/pears-logo.svg";
import PearLogo1 from "../SVGs/PearsLogo1.png";
import Arrow from "../SVGs/Frame (1).png";

import Timer from "../Components/Timer";

const Home = () => {
  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);
  const font = "Bebas Neue";

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.offsetHeight);
    }
  }, []);
  return (
    <div className="md:mt-[12vh] mt-10 flex flex-col items-center justify-center gap-5">
      <div className="lineptitle flex flex-row justify-start items-center md:gap-9 -ml-[5vw] gap-5">
        <div className="leftline bg-white h-[180px] md:h-[290px] w-2 rounded-full"></div>
        <div
          className="title flex flex-col items-start justify-center text-[55px] leading-[1.2em] tracking-[4px] md:text-[85px] md:leading-[1.3em] md:tracking-[7px]"
          style={{ fontFamily: font }}
        >
          <div className="topimg flex flex-row items-center justify-center gap-4">
            <img src={PearLogo1} alt="" className="h-12 mb-4 md:h-20" />
            {/* <div>PEARS</div> */}
          </div>
          <div id="gleen" className="text-[#b6dd48] ">
            GLOBAL
          </div>
          <div>HACKATHON</div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
        <button
          className="flex flex-row items-center justify-center h-14 w-60 md:h-16 md:w-60 gap-2 md:gap-4 mx-2 md:mx-0 z-10 font-bold text-[#B6DD48] bg-[linear-gradient(180deg,#000,#333)] px-3 py-1 md:py-2 rounded-full border-4 border-[#B6DD48] hover:bg-[linear-gradient(180deg,#333,#000)] hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() =>
            window.open(
              "https://lu.ma/9mqll98a",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <span className="text-sm md:text-lg">REGISTER NOW</span>
          <img src={Arrow} alt="Arrow" className="w-4 h-4 md:w-7 md:h-7" />
        </button>
        <button
          className="flex flex-row items-center justify-center h-14 w-60 md:h-16 md:w-60 gap-2 md:gap-4 mx-2 md:mx-0 z-10 font-bold text-[#B6DD48] bg-[linear-gradient(180deg,#000,#333)] px-3 py-1 md:py-2 rounded-full border-4 border-[#B6DD48] hover:bg-[linear-gradient(180deg,#333,#000)] hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() =>
            window.open(
              "https://lu.ma/9mqll98a",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <span className="text-sm md:text-lg">KNOW MORE</span>
          <img src={Arrow} alt="Arrow" className="w-4 h-4 md:w-7 md:h-7" />
        </button>
      </div>

      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
};

export default Home;

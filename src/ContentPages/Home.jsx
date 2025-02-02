import React, { useRef, useEffect, useState } from "react";
// import PearLogo from "../SVGs/pears-logo.svg";
import PearLogo1 from "../SVGs/PearsLogo1.png";

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
    <div className="md:mt-[10vh] flex flex-col items-center justify-center gap-5">
      <div className="lineptitle flex flex-row justify-start items-center md:gap-9 ml-[1vw] gap-5">
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
      <div className="timer-container">
        <Timer />
      </div>
    </div>
  );
};

export default Home;

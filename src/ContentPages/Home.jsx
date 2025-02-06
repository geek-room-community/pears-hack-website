import React, { useRef, useEffect, useState } from "react";
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";
import PearLogo1 from "../SVGs/PearsLogo1.png";
import Arrow from "../SVGs/Frame (1).png";

import Timer from "../Components/Timer";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const font = "Bebas Neue";

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setShowModal(true), 50);
    } else {
      setShowModal(false);
    }
  }, [isModalOpen]);

  return (
    <div className="mb-[27vh] md:mb-[18vh] lg:mb-[14vh] xl:mb-[6vh] flex flex-col items-center justify-center gap-3">
      <div className="lineptitle flex flex-row justify-start items-center md:gap-9 ml-[1vw] gap-5">
        <div className="leftline bg-white h-[180px] xl:h-[290px] w-2 rounded-full"></div>
        <div
          className="title flex flex-col items-start justify-center text-[55px] leading-[1.2em] tracking-[4px] xl:text-[85px] xl:leading-[1.2em] md:tracking-[7px]"
          style={{ fontFamily: font }}
        >
          <div className="topimg flex flex-row items-center justify-center gap-4">
            <img src={PearLogo1} alt="" className="h-12 mb-4 md:h-20" />
          </div>
          <div id="gleen" className="text-[#b6dd48]">
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
          onClick={() => setIsModalOpen(true)}
        >
          <span className="text-sm md:text-lg">KNOW MORE</span>
          <img src={Arrow} alt="Arrow" className="w-4 h-4 md:w-7 md:h-7" />
        </button>
      </div>

      <div className="timer-container">
        <Timer />
      </div>

      {isModalOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-all duration-500 ${showModal ? "opacity-100" : "opacity-0"
            }`}
          style={{ transition: "opacity 0.4s ease-in-out" }}
        >
          <div
            className={`bg-[#000] border-2 border-[#B6DD48] text-[#B6DD48] p-6 md:p-10 rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 relative transition-all duration-500 ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            style={{
              transform: showModal ? "scale(1)" : "scale(0.9)",
              transition:
                "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
            }}
          >
            <div className="flex justify-center gap-6 mb-4">
              <img src={PearLogo} alt="Logo1" className="h-16 md:h-16" />
              <img src={GRLogo} alt="Logo2" className="h-16 md:h-16" />
            </div>
            <p className="text-center text-lg md:text-xl">
              Welcome to the Pears Hackathon 2025, hosted in collaboration
              with Geek Room! This online global-level hackathon invites
              participants from all over the world to innovate, collaborate, and
              build cutting-edge projects using Pear Runtime, an open source
              platform for building unstoppable P2P applications.  Whether
              you're a student, professional, or coding enthusiast, this is your
              chance to showcase your creativity, solve real-world problems, and
              compete for exciting rewards. With expert mentorship, challenging
              problem statements, and collaborative innovation, we aim to
              provide an unforgettable hackathon experience.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setTimeout(() => setIsModalOpen(false), 400);
              }}
              className="absolute bottom-4 right-4 bg-[#B6DD48] text-black p-3 md:p-4 rounded-full hover:scale-110 transition-all duration-300"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

import React from "react";
import DataTransfer from "../SVGs/datatransfer.svg";
import PearLogo from "../SVGs/PearsLogo1.png";
import video from "../assets/tracks/video.mp4";

const Tracks = () => {
  return (
    <div className="px-12 py-6 mb-52 md:mb-16 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 md:gap-6">
        <div className="bg-gray-600 rounded-[24px] md:rounded-[34px] p-10 sm:p-16 md:p-32 h-[230px] md:h-[420px] flex items-center justify-center border-2 border-white relative overflow-hidden">
          <a
            href="https://x.com/Pears_p2p/status/1757764429825864161"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[10rem] h-full flex items-center justify-center"
          >
            <video
              src={video}
              autoPlay
              loop
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']">
            <h2 className="text-[#B6DD48] text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              HOW TO BUILD ON
            </h2>
            <img
              src={PearLogo}
              alt="Pear logo"
              className="w-4/5 sm:w-3/4 md:w-3/4 h-auto sm:h-14 md:h-16"
            />
          </div>
          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']">
            <h2 className="text-[#B6DD48] text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              MORE ON P2P
            </h2>
            <img
              src={DataTransfer}
              alt="P2P arrows"
              className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;

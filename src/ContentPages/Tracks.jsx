/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import DataTransfer from "../SVGs/datatransfer.svg";
import PearLogo from "../SVGs/PearsLogo1.png";
import Video from "../SVGs/videobutton.svg";

const Tracks = () => {
  return (
    <div className="mt-2 md:mt-32 p-12 md:px-0">
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4 md:gap-6">
        <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-2">
          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']">
            <h2 className="text-[#B6DD48] text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              HOW TO BUILD ON
            </h2>
            <img
              src={PearLogo}
              alt="Pear logo"
              className="w-4/5 sm:w-3/4 md:w-3/4 h-auto sm:h-14 md:h-16"
            />
          </div>

          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']">
            <h2 className="text-[#B6DD48] text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 mt-1">
              MORE ON P2P
            </h2>
            <div className="flex gap-4">
              <img
                src={DataTransfer}
                alt="P2P arrows"
                className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-600 rounded-[24px] md:rounded-[34px] p-12 sm:p-16 md:p-32 h-[312px] md:h-[420px] aspect-none flex items-center justify-center border-2 border-white order-1 md:order-1">
          <button className="rounded-full flex items-center justify-center">
            <a
              href="https://x.com/Pears_p2p/status/1757764429825864161"
              target="_blank"
              rel="noopener nonreferrer"
            >
              <img
                src={Video}
                alt="Play button"
                className="w-12 sm:w-16 md:w-auto"
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracks;

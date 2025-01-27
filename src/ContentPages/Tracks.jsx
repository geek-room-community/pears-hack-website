import React from 'react';
import DataTransfer from "../SVGs/datatransfer.svg"
import PearLogo from "../SVGs/PearsLogo1.png";
import Video from "../SVGs/videobutton.svg";

const Tracks = () => {
  return (
    <div className="mt-8 md:mt-32 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
        {/* Video Box */}
        <div className="bg-gray-600 rounded-[24px] md:rounded-[34px] p-16 md:p-32 h-[300px] md:h-[420px] aspect-none flex items-center justify-center border-2 border-white">
          <button className="rounded-full flex items-center justify-center">
            <img 
              src={Video}
              alt="Play button"
              className="w-16 md:w-auto"
            />
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']">
            <h2 className="text-[#B6DD48] text-2xl md:text-3xl font-bold mb-2 md:mb-4">HOW TO BUILD ON</h2>
            <img 
              src={PearLogo}
              alt="Pear logo" 
              className="w-24 md:w-28 h-14 md:h-16"
            />
          </div>

          {/* P2P Box */}
          <div className="bg-[#272727] rounded-[24px] md:rounded-[34px] p-4 md:p-6 border-2 border-white flex flex-col items-center justify-center min-h-[150px] md:min-h-[200px] font-['Bebas_Neue']"> 
            <h2 className="text-[#B6DD48] text-2xl md:text-3xl font-bold mb-2 md:mb-4 mt-1">MORE ON P2P</h2>
            <div className="flex gap-4">
              <img 
                src={DataTransfer}
                alt="P2P arrows" 
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
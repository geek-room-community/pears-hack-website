import React, { useState, useEffect } from "react";
import "./Timer.css";
import Arrow from "../SVGs/Frame (1).png";

const Timer = () => {
  const targetDate = new Date("2025-03-02T00:00:00"); // Set your target date here

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // If time is up
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-fit md:w-full bg-[#333] border-2 border-white rounded-[35px] font-black">
      <button
        className="flex flex-row items-center justify-center -mt-1 gap-3 md:gap-6 mx-3 md:mx-0 w-full z-10 font-bold text-[#B6DD48] bg-[linear-gradient(180deg,#000,#333)] px-4 py-2 md:py-4 rounded-full border-4 border-[#B6DD48] hover:bg-[linear-gradient(180deg,#333,#000)] hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={() =>
          window.open("https://lu.ma/9mqll98a", "_blank", "noopener noreferrer")
        }
      >
        <span className="text-lg md:text-3xl">REGISTER NOW</span>
        <img src={Arrow} alt="Arrow" className="w-7 h-7 md:w-10 md:h-10" />
      </button>
      <div className="flex flex-row items-center justify-center gap-1 my-5 mx-6 md:mx-10 md:my-7 w-full text-xl md:text-2xl font-bold">
        <span>{String(timeLeft.days).padStart(2, "0")}</span> :
        <span>{String(timeLeft.hours).padStart(2, "0")}</span> :
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span> :
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default Timer;

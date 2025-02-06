import React, { useState, useEffect } from "react";
import "./Timer.css";

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
    <div className="flex flex-col items-center justify-center h-16 w-fit md:w-full bg-[#333] border-2 border-white rounded-[35px] font-black">

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

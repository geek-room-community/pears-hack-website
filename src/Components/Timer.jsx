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
    <div className="countdown-container">
      <button
        className="register-now"
        onClick={() =>
          window.open("https://lu.ma/9mqll98a", "_blank", "noopener noreferrer")
        }
      >
        <span>REGISTER NOW</span>
        <img src={Arrow} alt="Arrow" className="arrow" />
      </button>
      <div className="timer">
        <span>{String(timeLeft.days).padStart(2, "0")}</span> :
        <span>{String(timeLeft.hours).padStart(2, "0")}</span> :
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span> :
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default Timer;

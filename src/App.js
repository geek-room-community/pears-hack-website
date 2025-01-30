import React, { useState, useEffect } from "react";
import ScrollContent from "./Components/scrollcontent";
import PieChart from "./Components/circulardiv";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // For animation
  const totalIndexes = 10;
  const threshold = 850; // Scroll threshold for changing index
  let scrollDistance = 0;

  const handleScroll = (e) => {
    const delta = e.deltaY;
    scrollDistance += delta;

    if (scrollDistance >= threshold && activeIndex < totalIndexes - 1) {
      setActiveIndex((prev) => prev + 1);
      scrollDistance = 0;
    } else if (scrollDistance <= -threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      scrollDistance = 0;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && activeIndex < totalIndexes - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < totalIndexes - 1) {
      setIsAnimating(true); // Trigger animation
      setActiveIndex((prev) => prev + 1);

      // Remove animation class after 1 second (duration of animation)
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown); // Add keydown listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown); // Clean up listener
    };
  }, [activeIndex]);

  return (
    <div className="app-container">
      <div className="scroll-content-container">
        <ScrollContent
          currentIndex={activeIndex}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>

      <div className="cirdiv">
        <PieChart
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex} // Pass callback function to PieChart
        />
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button
          className="nav-button up"
          onClick={handlePrevious}
          disabled={activeIndex === 0} // Disable when at the first page
        >
          <FaChevronUp />
        </button>
        <button
          className={`nav-button down ${activeIndex === 0 ? "animate" : ""}`} // Add animation class conditionally
          onClick={handleNext}
          disabled={activeIndex === totalIndexes - 1}
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}

export default App;

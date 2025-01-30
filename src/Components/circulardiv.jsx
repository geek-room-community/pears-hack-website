/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import centreImage from "./center-gif.gif";
import "./PieChart.css";
import logo1 from "../SVGs/Group 295.svg";
import logo2 from "../SVGs/Info.svg";
import logo3 from "../SVGs/Trophy.svg";
import logo4 from "../SVGs/Clip Appearance.svg";
import logo5 from "../SVGs/Management.svg";
import logo6 from "../SVGs/User Groups.svg";
import logo7 from "../SVGs/Phone Message.svg";
import logo8 from "../SVGs/Clip Appearance(1).svg";
import logo9 from "../SVGs/Ask Question.svg";
import logo10 from "../SVGs/Timeline.svg";

const PieChart = ({ activeIndex, setActiveIndex }) => {
  const [dimensions, setDimensions] = useState({
    radius: 290,
    outerRadius: 370,
    isMobile: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const smallestDimension = Math.min(width, height);

      if (width < 768) {
        setDimensions({
          radius: smallestDimension * 0.45,
          outerRadius: smallestDimension * 0.45,
          isMobile: true,
        });
      } else if (width >= 768 && width < 1024) {
        setDimensions({
          radius: smallestDimension * 0.4,
          outerRadius: smallestDimension * 0.4,
          isMobile: false,
        });
      } else {
        setDimensions({
          radius: smallestDimension * 0.4,
          outerRadius: smallestDimension * 0.4 * 1.2,
          isMobile: false,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const numberOfElements = 10;
  const angleStep = 360 / 10;

  const activeColor = "#FFFFFF";
  const defaultColor = "#B0D944";

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  // Calculate the rotation angle for the active index
  const rotationAngle = angleStep * activeIndex;

  return (
    <div className="container">
      <div
        className="outer-circle"
        style={{
          width: `${2 * dimensions.outerRadius}px`,
          height: `${2 * dimensions.outerRadius}px`,
        }}
      >
        <div
          className="inner-circle"
          style={{
            width: `${2 * dimensions.radius}px`,
            height: `${2 * dimensions.radius}px`,
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Rotate based on activeIndex
            transition: "transform 0.5s ease", // Smooth rotation
          }}
        >
          {Array.from({ length: numberOfElements }, (_, index) => {
            const angle = angleStep * (numberOfElements - index);
            const x =
              dimensions.radius +
              (dimensions.radius - 50) * Math.cos((angle * Math.PI) / 180);
            const y =
              dimensions.radius +
              (dimensions.radius - 50) * Math.sin((angle * Math.PI) / 180);
            const color = index === activeIndex ? activeColor : defaultColor;

            return index < logos.length ? (
              <div
                key={index}
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  transform: "translate(-50%, -50%)",
                  width: `${dimensions.radius / 9}px`,
                  height: `${dimensions.radius / 9}px`,
                  cursor: "pointer",
                  zIndex: "1",
                  opacity: index === activeIndex ? 1 : 0.25,
                  // transform: index === activeIndex ? "translate(-50%, -50%) scale(1.25)" : "translate(-50%, -50%), scale(1)",
                  transition: "opacity 1s ease", // Smooth scaling
                }}
                className="logo-wrapper"
                onClick={() => setActiveIndex(index)} // Update activeIndex on click
              >
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ) : null;
          })}
        </div>

        <div
          className="center-image"
          style={{
            width: dimensions.isMobile ? "100%" : `${dimensions.radius * 3}px`,
            height: dimensions.isMobile ? "100%" : `${dimensions.radius * 3}px`,
          }}
        >
          <img
            src={centreImage}
            alt="Center Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: dimensions.isMobile ? "cover" : "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;

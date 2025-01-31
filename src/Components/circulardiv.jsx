import React, { useState, useEffect } from "react";
import earth from "../SVGs/Group 24.svg";
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
      } else {
        setDimensions({
          radius: 290,
          outerRadius: 370,
          isMobile: false,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const numberOfElements = 10;
  const angleStep = 360 / numberOfElements;

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

  // Rotation angle calculation for logos
  const rotationAngle = angleStep * activeIndex;

  const earthRotation = 170; //

  return (
    <div className="container">
      <div
        className="outer-circle"
        style={{
          width: `${2 * dimensions.outerRadius}px`,
          height: `${2 * dimensions.outerRadius}px`,
          position: "relative",
        }}
      >
        <div
          className="inner-circle"
          style={{
            width: `${2 * dimensions.radius}px`,
            height: `${2 * dimensions.radius}px`,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {logos.map((logo, index) => {
            const angle = angleStep * (numberOfElements - index);
            const x =
              dimensions.radius +
              (dimensions.radius - 50) * Math.cos((angle * Math.PI) / 180);
            const y =
              dimensions.radius +
              (dimensions.radius - 50) * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="logo-wrapper"
                onClick={() => setActiveIndex(index)}
                style={{
                  position: "absolute",
                  top: `${y}px`,
                  left: `${x}px`,
                  transform: "translate(-50%, -50%)",
                  width: `${dimensions.radius / 9}px`,
                  height: `${dimensions.radius / 9}px`,
                  cursor: "pointer",
                  zIndex: "1",
                  opacity: index === activeIndex ? 1 : 0.5,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Centered Earth Image with Rotation */}
        <div
          className="center-image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${earthRotation}deg) translateX(-9%) `,
            width: dimensions.isMobile ? "20%" : "490px", // Adjusted for mobile and desktop
            height: dimensions.isMobile ? "20%" : "490px", // Adjusted for mobile and desktop
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={earth}
            alt="Center Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;

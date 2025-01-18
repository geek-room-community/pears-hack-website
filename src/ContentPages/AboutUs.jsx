// AboutUs.jsx
import React, { useState } from 'react';
import './about.css';
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";


const AboutUs = () => {
  const [activeContent, setActiveContent] = useState('pear'); // 'pear' or 'geek'

  const geekRoomContent = {
    title: "GEEK ROOM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    logo:GRLogo,
  };

  const pearContent = {
    title: "PEARS",
    description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Welcome to our innovative tech community where creativity meets code. We focus on building the next generation of tech leaders through hands-on experience and collaborative learning.",
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
     "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    logo:PearLogo,
  };

  const currentContent = activeContent === 'pear' ? pearContent : geekRoomContent;

  return (
    <div className="about-container">
      {/* Header with logos */}
       {/* Toggle Switch */}
       <div className="toggle-container">
        {/* Geek Room Button */}
        <button
          onClick={() => setActiveContent("geek")}
          className={`toggle-button ${
            activeContent === "geek" ? "active" : ""
          }`}
        >
          <img src={GRLogo} alt="Geek Room Logo" />
        </button>
        {/* Pears Button */}
        <button
          onClick={() => setActiveContent("pear")}
          className={`toggle-button ${
            activeContent === "pear" ? "active pear" : ""
          }`}
        >
          <img src={PearLogo} alt="Pear Logo" />
        </button>
      </div>

      {/* Title toggle */}
      <div className="title-container">
        <div className={`title-wrapper ${activeContent === 'geek' ? 'geek-title' : 'pear-title'}`}>
          <div className="title-code-brackets">
            <img src={currentContent.logo} alt="" height="50px"/>
          </div>
          <div className="title">
            {currentContent.title.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        </div>
      </div>



      {/* Content */}
      <div className="content-section">
        <p className="description">
          {currentContent.description}
        </p>

        {/* Image grid */}
        <div className={`image-grid ${activeContent === 'pear' ? 'pear-grid' : 'geek-grid'}`}>
          {currentContent.images.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={img}
                alt={`Content ${index + 1}`}
                className="content-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
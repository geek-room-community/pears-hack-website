// AboutUs.jsx
import React, { useState } from 'react';
import './about.css';
import PearLogo from "../SVGs/pears-logo.svg";
import GRLogo from "../SVGs/GRLogo.svg";


const AboutUs = () => {
  const [activeContent, setActiveContent] = useState('pear'); // 'pear' or 'geek'

  const geekRoomContent = {
    title: "GEEK ROOM",
    description: "Geek Room is a widespread coding community with over 25000+ active coders nationwide. It was started by three coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping each other is the purpose.",
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
    description: " Pear by Holepunch is a combined Peer-to-Peer (P2P) Runtime, Development & Deployment tool Build, share & extend unstoppable, zero-infrastructure P2P applications for Desktop, Terminal & Mobile. Welcome to the Internet of Peers",
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
            <img src={currentContent.logo} alt="" height="30px"/>
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
        {/* <div className={`image-grid ${activeContent === 'pear' ? 'pear-grid' : 'geek-grid'}`}>
          {currentContent.images.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={img}
                alt={`Content ${index + 1}`}
                className="content-image"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
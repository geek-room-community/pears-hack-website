/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
import PearLogo from "../SVGs/PearsLogo1.png";

const AboutUs = () => {
  const pearContent = {
    title: "PEARS",
    description:
      " Pear by Holepunch is a combined Peer-to-Peer (P2P) Runtime, Development & Deployment tool Build, share & extend unstoppable, zero-infrastructure P2P applications for Desktop, Terminal & Mobile. Welcome to the Internet of Peers",
    images: [
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
      "/api/placeholder/200/150",
    ],
    logo: PearLogo,
  };

  return (
    <div className="about-container">
      {/* Header with logos */}
      {/* Toggle Switch */}

      {/* Title toggle */}
      <div className="title-container">
        <div className={`title-wrapper `}>
          <div className="title-code-brackets">
            <img src={pearContent.logo} alt="" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-section mb-2">
        <p className="description  md:text-3xl tracking-wider px-2 py-2">
          Pear Runtime is an open-source, peer-to-peer (P2P) development
          platform revolutionizing how apps are built, deployed, and
          distributed. By eliminating the need for servers,it empowers to create
          secure and cost-efficient applications while maintaining full control
          over data. Pear Runtime is shaping the future of the internet where
          creators and users are in control.
        </p>{" "}
        <p className="descriptionn  md:text-3xl tracking-widest px-2 py-3">
          Find out more at pears.com
        </p>
        <a
          href="https://pears.com/"

          className="py-3 px-4 md:px-8 md:text-xl rounded-[6px] mt-2 font-bold transition duration-200 hover:bg-transparent bg-[#B6DD48] hover:text-white text-black border hover:border-[#B6DD48]"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;

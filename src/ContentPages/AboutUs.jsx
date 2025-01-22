// AboutUs.jsx
import React, { useState } from 'react';
import './about.css';
import PearLogo from "../SVGs/PearsLogo1.png";
// import GRLogo from "../SVGs/GRLogo.svg";


const AboutUs = () => {
  // const [activeContent, setActiveContent] = useState('pear'); // 'pear' or 'geek'

  // const geekRoomContent = {
  //   title: "GEEK ROOM",
  //   description: "Geek Room is a widespread coding community with over 25000+ active coders nationwide. It was started by three coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping each other is the purpose.",
  //   images: [
  //     "/api/placeholder/200/150",
  //     "/api/placeholder/200/150",
  //     "/api/placeholder/200/150",
  //     "/api/placeholder/200/150",
  //   ],
  //   logo:GRLogo,
  // };

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

  return (
    <div className="about-container">
      {/* Header with logos */}
       {/* Toggle Switch */}
      

      {/* Title toggle */}
      <div className="title-container">
        <div className={`title-wrapper `}>
          <div className="title-code-brackets">
            <img src={pearContent.logo} alt="" height="30px"/>
          </div>
          
        </div>
      </div>



      {/* Content */}
      <div className="content-section mb-2">
        <p className="description">
        Pear Runtime is an open-source, peer-to-peer (P2P) development platform revolutionizing how apps are built, deployed, and distributed. By eliminating the need for servers, it empowers to create secure and cost-efficient applications while maintaining full control of their data.
 Pear Runtime is shaping the future of the internet—one where creators and users are in control.
</p>  <p className="descriptionn">
Find out more at pears.com and Explore our Famous Product P2P safe chat-system
        </p>
<a href="https://keet.io/"
              className="py-3 
            px-4
            md:px-8
      md:text-xl
      hover:bg-[#121212] 
      rounded-[6px]
      
       bg-[#b0d944] 
       text-gray-700
       font-bold 
       transition 
       duration-200 
      "
          >Keet.io</a>
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
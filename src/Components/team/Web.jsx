"use client";

import "../../styles/JudgesMentors.css";
import "./TeamMembers.css";
import React from "react";
import { Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Frame from "../../SVGs/Frame.svg";

import Naman from "../../assets/team/website/Naman.jpg";
import Nevin from "../../assets/team/website/Nevin.jpg";
import Darsh from "../../assets/team/website/Darsh.jpg";
import Manas from "../../assets/team/website/Manas.jpg";
import Arsh from "../../assets/team/website/Arsh.jpeg";
import Chaitanya from "../../assets/team/website/Chaitanya.webp";
import Nibedan from "../../assets/team/website/Nibedan.jpeg";
import Chirag from "../../assets/team/website/Chirag.jpg";

const webdev = [
  {
    name: "Naman Dadhich",
    image: Naman,
    linkedin: "https://www.linkedin.com/in/namannn04",
    github: "https://github.com/namannn04",
  },
  {
    name: "Nevin Bali",
    image: Nevin,
    linkedin: "https://www.linkedin.com/in/nevinbali1012",
    github: "https://github.com/Nevin100",
  },
  {
    name: "Darsh Jain",
    image: Darsh,
    linkedin: "https://www.linkedin.com/in/darsh-jain-521691218",
    github: "https://github.com/sparky0520",
  },
  {
    name: "Manas Kush",
    image: Manas,
    linkedin: "https://www.linkedin.com/in/manas-kush",
    github: "https://github.com/manaskush",
  },
  {
    name: "Arsh Tiwari",
    image: Arsh,
    linkedin: "https://www.linkedin.com/in/arsh-tiwari-072609284",
    github: "https://github.com/ArshTiwari2004",
  },
  {
    name: "Chaitanya Gupta",
    image: Chaitanya,
    linkedin: "https://www.linkedin.com/in/chaitanya-gupta-483476137",
    github: "https://github.com/chaitanyaBytes",
  },
  {
    name: "Nibedan Pati",
    image: Nibedan,
    linkedin: "https://www.linkedin.com/in/nibedan-pati-2139b3277",
    github: "https://github.com/Heisenberg300604",
  },
  {
    name: "Chirag Bhal",
    image: Chirag,
    linkedin: "https://www.linkedin.com/in/chirag-bhal-0a5854280",
    github: "http://github.com/chirahbhal312",
  },
];

const DevCard = ({ mentor }) => (
  <div className="group relative w-[14rem] h-[18rem] flex-shrink-0">
    <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden border-2 border-[#b6e33e] transition-transform duration-300 group-hover:scale-105">
      <img
        src={mentor.image || "/placeholder.svg"}
        alt={mentor.name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white text-xs font-bold mb-1 truncate">
            {mentor.name}
          </h3>
          <div className="flex gap-2">
            <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
            </a>
            <a href={mentor.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Carousel = ({ mentors, direction = "left" }) => {
  const repeatedMentors = [...mentors, ...mentors, ...mentors, ...mentors];

  return (
    <div className="flex flex-nowrap relative w-full h-[19rem] py-2 overflow-hidden ">
      <div
        className={`flex flex-nowrap gap-4 ${direction === "left" ? "scroll-left" : "scroll-right"
          }`}
      >
        {repeatedMentors.map((mentor, index) => (
          <DevCard key={`${mentor.name}-${index}`} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

const Web = () => {
  // const halfIndex = Math.ceil(webdev.length / 2)
  // const topMentors = webdev.slice(0, halfIndex)
  // const bottomMentors = webdev.slice(halfIndex)

  return (
    <section className="flex flex-col justify-start gap-10 mt-16 md:mt-4 h-[95vh] w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem] overflow-hidden">
      <Link to="/">
        <button className="back-button ml-3">
          <img

            src={Frame || "/placeholder.svg"}
            alt="Back-Arrow"
            className="back-arrow w-[1.5rem] h-8 mr-2"
          />
        </button>
      </Link>
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="flex flex-col gap-[1rem]">
          {/* <Carousel mentors={topMentors} direction="left" /> */}
          <Carousel mentors={webdev} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Web;

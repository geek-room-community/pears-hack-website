"use client";

import "../styles/JudgesMentors.css";
import "../Components/team/TeamMembers.css";
import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Frame from "../SVGs/Frame.svg";

import David from "../assets/judges/David.jpg";
import Swann from "../assets/judges/Swann.jpg";

const jud = [
  {
    name: "David Mark Clements",
    image: David,
    twitter: "https://twitter.com/davidmarkclem",
  },
  {
    name: "Guy Swann",
    image: Swann,
    linkedin: "https://www.linkedin.com/in/%F0%9F%8E%A7-guy-swann-77b0a7117",
  },
];

const JudCard = ({ mentor, index }) => (
  <div className="group relative w-[10rem] h-[14rem] sm:w-[12rem] sm:h-[16rem] flex-shrink-0">
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
            {index === 0 ? (
              <a href={mentor.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
              </a>
            ) : (
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Judges = () => {
  return (
    <section className="flex flex-col mx-0 md:mx-20 justify-start gap-8 xl:gap-20 mt-0 md:mt-2 2xl:mt-10 h-auto w-full overflow-visible">
      <Link to="/">
        <button className="bg-[#222] rounded-full border-2 border-[#b6e33e] px-4 py-1 flex items-center justify-center opacity-0">
          <img
            src={Frame || "/placeholder.svg"}
            alt="Back-Arrow"
            className="back-arrow w-[1.5rem] h-8 mr-2"
          />
        </button>
      </Link>
      <div className="max-w-7xl mx-auto px-4 flex flex-nowrap justify-center gap-8 sm:gap-4">
        {jud.map((mentor, index) => (
          <JudCard key={mentor.name} mentor={mentor} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Judges;

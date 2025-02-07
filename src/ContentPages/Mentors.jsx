"use client";

import "../styles/JudgesMentors.css";
import "../Components/team/TeamMembers.css";
import React from "react";
import { Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Frame from "../SVGs/Frame.svg";

import Ojas from "../assets/mentors/Ojas.JPG";
import Ankit from "../assets/mentors/Ankit.png";
import Suryaansh from "../assets/mentors/Suryaansh.PNG";
import Rohan from "../assets/mentors/Rohan.jpeg";
import Taranjot from "../assets/mentors/Taranjot.png";
import Teeksha from "../assets/mentors/Teeksha.jpeg";
import Utkarsh from "../assets/mentors/Utkarsh.jpg";
import Manjeet from "../assets/mentors/Manjeet.png";
import Kanishak from "../assets/mentors/Kanishak.jpg";
import Deepak from "../assets/mentors/Deepak.jpeg";
import Parth from "../assets/mentors/Parth.jpg";
import Praveen from "../assets/mentors/Praveen.png";
import Abdal from "../assets/mentors/Abdal.png";
import Priya from "../assets/mentors/Priya.jpg";
import Aryan from "../assets/mentors/Aryan.jpg";
import Chinmay from "../assets/mentors/Chinmay.jpeg";

const Men = [
  {
    name: "Ojas",
    image: Ojas,
    linkedin: "https://www.linkedin.com/in/ojas0710/",
    github: "https://github.com/nerdchanojas",
  },
  {
    name: "Ankit Jaiswal",
    image: Ankit,
    linkedin: "https://www.linkedin.com/in/ankit-on-tech",
    github: "https://github.com/AnkitJaiswal1605",
  },
  {
    name: "Suryaansh Singh",
    image: Suryaansh,
    linkedin: "https://www.linkedin.com/in/super-suryaansh/",
    github: "https://github.com/supersuryaansh",
  },
  {
    name: "Rohan Kumar",
    image: Rohan,
    linkedin: "https://www.linkedin.com/in/rohan-kumar-a65a87175/",
    github: "https://github.com/rohan220217",
  },
  {
    name: "Taranjot Singh",
    image: Taranjot,
    linkedin: "https://www.linkedin.com/in/taranjotsingh23",
    github: "https://github.com/taranjotsingh23",
  },
  {
    name: "Teeksha Harish",
    image: Teeksha,
    linkedin: "https://www.linkedin.com/in/teeksha-harish-5895a0234/",
    github: "https://github.com/TeekshaHarish",
  },
  {
    name: "Utkarsh",
    image: Utkarsh,
    linkedin: "https://www.linkedin.com/in/utkarsh-payal",
    github: "https://github.com/utkarshpayal",
  },
  {
    name: "Manjeet Agarwal",
    image: Manjeet,
    linkedin: "https://www.linkedin.com/in/manjeet-agarwal/",
    github: "https://github.com/Manjeet-Agarwal",
  },
  {
    name: "Kanishak Chaurasia",
    image: Kanishak,
    linkedin: "https://linkedin.com/in/dappdost",
    github: "https://github.com/kanishak11-cyber",
  },
  {
    name: "Deepak Chanda",
    image: Deepak,
    linkedin: "http://linkedin.com/in/deepak-chanda-3b5b3b193",
    github: "https://github.com",
  },
  {
    name: "Kumar Parth",
    image: Parth,
    linkedin: "https://www.linkedin.com/in/kumarparth28",
    github: "https://github.com",
  },
  {
    name: "Praveen Kumar Pokala",
    image: Praveen,
    linkedin: "http://www.linkedin.com/in/praveen-kumar-pokala-phd-73509014",
    github: "https://github.com/praveenkumar-pokala",
  },
  {
    name: "Abdal Lalit",
    image: Abdal,
    linkedin: "https://www.linkedin.com/in/abdal-lalit/",
    github: "https://github.com",
  },
  {
    name: "Priya Chandak",
    image: Priya,
    linkedin: "https://www.linkedin.com/in/priya-chandak-ba0a6b178/",
    github: "https://github.com/PriyaChandak24",
  },
  {
    name: "Aryan Gupta",
    image: Aryan,
    linkedin: "https://www.linkedin.com/in/aryangupta899",
    github: "https://github.com/aryangupta899",
  },
  {
    name: "Chinmay Pant",
    image: Chinmay,
    linkedin: "https://www.linkedin.com/in/chinmaypant",
    github: "https://github.com/chinmaypant21",
  },
];

const MenCard = ({ mentor }) => (
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
          <MenCard key={`${mentor.name}-${index}`} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

const Mentors = ({ setActivePanel }) => {
  // const halfIndex = Math.ceil(webdev.length / 2)
  // const topMentors = webdev.slice(0, halfIndex)
  // const bottomMentors = webdev.slice(halfIndex)

  return (
    <section className="flex flex-col justify-start gap-8 xl:gap-20 mt-12 md:mt-10 h-[95vh] w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem] overflow-hidden">
      <Link>
        <button className="bg-[#222] rounded-full border-2 border-[#b6e33e] px-4 py-1 flex items-center justify-center" onClick={() => setActivePanel("judgingPanel")}>
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
          <Carousel mentors={Men} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Mentors;

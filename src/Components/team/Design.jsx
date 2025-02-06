"use client"

import "../../styles/JudgesMentors.css"
import "./TeamMembers.css"
import React from "react"
import { Linkedin, Github } from "lucide-react"
import { Link } from "react-router-dom"
import Frame from "../../SVGs/Frame.svg"

import Akshat from "../../assets/team/design/Akshat.png"
import Saad from "../../assets/team/design/Saad.jpg"
import Mankrish from "../../assets/team/design/Mankrish.png"
import Anushree from "../../assets/team/design/Anushree.jpg"
import Shreiya from "../../assets/team/design/Shreiya.jpg"
import Pranshu from "../../assets/team/design/Pranshu.jpeg"
import Simrat from "../../assets/team/design/Simrat.jpeg"
import Aditya from "../../assets/team/design/Aditya.jpeg"

const des = [
  {
    name: "Akshat Kumar",
    image: Akshat,
    linkedin: "https://www.linkedin.com/in/akshat-kumar-40b991261",
    github: "https://github.com/AKR4PC",
  },
  {
    name: "Saad Salim",
    image: Saad,
    linkedin: "https://www.linkedin.com/in/saad-salim-24b251228",
    github: "https://github.com/saadsaleem17",
  },
  {
    name: "Mankrish Lutharia",
    image: Mankrish,
    linkedin: "https://www.linkedin.com/in/mankrish-lutharia-232058282",
    github: "https://github.com/Mankrish5000",
  },
  {
    name: "Anushree",
    image: Anushree,
    linkedin: "https://www.linkedin.com/in/anushree-558056292",
    github: "https://github.com/ashree2118",
  },
  {
    name: "Shreiya Malla",
    image: Shreiya,
    linkedin: "https://www.linkedin.com/in/shreiya-malla-9565892aa",
    github: "https://github.com/shreiyacodes",
  },
  {
    name: "Pranshu Bansal",
    image: Pranshu,
    linkedin: "https://www.linkedin.com/in/pranshu-bansal-b485a6322",
    github: "https://github.com/Pranshu640",
  },
  {
    name: "Simrat Oberoi",
    image: Simrat,
    linkedin: "http://linkedin.com/in/simrat-oberoi-341b7b322",
    github: "https://github.com/simratoberoi",
  },
  {
    name: "Aditya Singh",
    image: Aditya,
    linkedin: "https://www.linkedin.com/in/itsadityasingh",
    github: "https://github.com/its-adityasingh",
  },
]

const DesignCard = ({ mentor }) => (
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
          <DesignCard key={`${mentor.name}-${index}`} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

const Design = () => {
  // const halfIndex = Math.ceil(webdev.length / 2)
  // const topMentors = webdev.slice(0, halfIndex)
  // const bottomMentors = webdev.slice(halfIndex)

  return (
    <section className="flex flex-col justify-start gap-8 xl:gap-16 2xl:gap-10 mt-16 md:mt-10 2xl:mt-4 h-[95vh] w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem] overflow-hidden">
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
          <Carousel mentors={des} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Design;
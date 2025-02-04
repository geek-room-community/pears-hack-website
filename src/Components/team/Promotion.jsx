"use client"

import "../../styles/JudgesMentors.css"
import "./TeamMembers.css"
import React from "react"
import { Linkedin, Github } from "lucide-react"
import { Link } from "react-router-dom"
import Frame from "../../SVGs/Frame.svg"

import Harshit from "../../assets/team/promotion/Harshit.jpg"
import Suresh from "../../assets/team/promotion/Suresh.jpg"
import Yash from "../../assets/team/promotion/Yash.jpg"

const prom = [
  {
    name: "Harshit Gupta",
    image: Harshit,
    linkedin: "https://www.linkedin.com/in/harshit-gupta-361574285",
    github: "https://github.com/harshitg20",
  },
  {
    name: "Suresh Suri",
    image: Suresh,
    linkedin: "https://www.linkedin.com/in/suresh-suri-70b8a2272",
    github: "https://github.com",
  },
  {
    name: "Yash Varma",
    image: Yash,
    linkedin: "https://www.linkedin.com/in/yash-varma-",
    github: "https://github.com/YASH2204V",
  },
]

const PromCard = ({ mentor }) => (
  <div className="group relative w-[14rem] h-[18rem] flex-shrink-0">
    <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden border-2 border-[#b6e33e] transition-transform duration-300 group-hover:scale-105">
      <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white text-xs font-bold mb-1 truncate">{mentor.name}</h3>
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
)

const Carousel = ({ mentors, direction = "left" }) => {
  const repeatedMentors = [...mentors, ...mentors, ...mentors, ...mentors]

  return (
    <div className="flex flex-nowrap relative w-full h-[19rem] py-2 overflow-hidden">
      <div className={`flex flex-nowrap gap-4 ${direction === "left" ? "scroll-left" : "scroll-right"}`}>
        {repeatedMentors.map((mentor, index) => (
          <PromCard key={`${mentor.name}-${index}`} mentor={mentor} />
        ))}
      </div>
    </div>
  )
}

const Promotion = () => {
  // const halfIndex = Math.ceil(webdev.length / 2)
  // const topMentors = webdev.slice(0, halfIndex)
  // const bottomMentors = webdev.slice(halfIndex)

  return (
    <section className="relative h-[95vh] mt-16 md:mt-20 w-[50rem] py-[1rem] overflow-hidden">
      <Link to="/">
        <button className="back-button">
          <img src={Frame || "/placeholder.svg"} alt="Back-Arrow" className="back-arrow w-[1.5rem] h-8 mr-2" />
        </button>
      </Link>
      <div className="max-w-7xl mt-5 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="flex flex-col gap-[1rem]">
          {/* <Carousel mentors={topMentors} direction="left" /> */}
          <Carousel mentors={prom} direction="right" />
        </div>
      </div>
    </section>
  )
}

export default Promotion


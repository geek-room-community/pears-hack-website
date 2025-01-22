// ContactSection.jsx
import React from 'react';
import Email from "../SVGs/email.svg";
import Web from "../SVGs/website.svg";
import Instagram from "../SVGs/instagram.svg";
import LinkedIn from "../SVGs/linkedin.svg";

const Contact = () => {
  return (
    <div className="bg-[#2A2A2A] shadow-lg p-4 pt-2 md:pt-4 md:p-6 rounded-3xl flex flex-col justify-center gap-3 md:gap-5 md:max-w-md md:w-11/12 w-3/4 mx-auto md:mx-0 -mt-[4vh]">
      <h2 className="font-['Bebas_Neue'] text-3xl md:text-4xl flex gap-2 items-baseline justify-center">
        <span className="text-[#B6DD48] text-4xl">GOT</span> A QUERY?
      </h2>

      <p className="font-['VT323'] text-lg md:text-2xl text-left">
        We're here to assist you! Reach out to us through:
      </p>

      <div className="flex flex-col md:gap-3">
        <a href="mailto:community@geekroom.in"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] md:py-1 break-words">
          <img className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Email}
            alt="email icon" />
          <span className="font-['VT323'] text-lg md:text-xl">
            community@geekroom.in
          </span>
        </a>
      </div>

      <p className="font-['VT323'] text-lg md:text-2xl text-left">
        Also follow us on our social media handles
      </p>

      <div className="flex flex-col gap-1 md:gap-3">
        <a href="https://www.geekroom.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words">
          <img className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Web}
            alt="website icon" />
          <span className="font-['VT323'] text-lg">
            www.geekroom.in
          </span>
        </a>

        <a href="https://www.instagram.com/geek_suite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words">
          <img className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={Instagram}
            alt="instagram icon" />
          <span className="font-['VT323'] text-lg">
            geek_suite
          </span>
        </a>

        <a href="https://www.linkedin.com/company/geek-suite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-[#B6DD48] break-words">
          <img className="w-5 md:w-6 aspect-square flex-shrink-0"
            src={LinkedIn}
            alt="linkedin icon" />
          <span className="font-['VT323'] text-lg">
            Geek Suite
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
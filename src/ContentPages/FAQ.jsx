import React, { useState } from 'react';
import Search from '../SVGs/searchicon.svg';
import Down from '../SVGs/downarrow.svg';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState({});
  
  const faqQuestions = [
    {
      id: 1,
      question: "What is the project submission deadline? ",
      answer: "The deadline for submitting your project is the end of February. Submissions are evaluated on a first-come, first-serve basis, so the earlier you submit, the better your chances of getting reviewed promptly."
    },
    {
      id: 2,
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to everyone, whether you're a professional, a college student, or even a school student. All you need is a passion for innovation and creativity. "
    },
    {
      id: 3,
      question: "What should the projects be built on? ",
      answer: "The hackathon follows an Open Innovation theme, meaning you have the creative freedom to work on any idea. However, your project must integrate Peers technology in some way. Refer to the official documentation for more information."
    },
    {
      id: 4,
      question: "How to get help ?",
      answer: "You can join the Keet Room to seek assistance with Peers-related queries and connect with fellow Hackathon participants."
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:community@geekroom.in';
  };

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen p-5 md:p-14 mt-64 md:mt-60" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 md:left-4 flex items-center">
            <img src={Search} alt="Search" className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs"
            className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-[#333333] rounded-[90px] text-white text-sm md:text-base border-2 border-[#B6DD48] focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="bg-[#333333] p-3 md:p-4 rounded-[20px] md:rounded-[30px] border-0 hover:border hover:border-[#B6DD48] transition-all duration-300">
            <h3 className="text-white font-bold text-sm md:text-base">Team size</h3>
            <p className="text-gray-300 text-sm md:text-base">1 - 4</p>
          </div>
          <div className="bg-[#333333] p-3 md:p-4 rounded-[20px] md:rounded-[30px] border-0 hover:border hover:border-[#B6DD48] transition-all duration-300">
            <h3 className="text-white font-bold text-sm md:text-base">Registration costs?</h3>
            <p className="text-gray-300 text-sm md:text-base">Nada</p>
          </div>
        </div>

        {/* FAQ Questions */}
        <div className="space-y-3 md:space-y-4">
          {faqQuestions.map((faq) => (
            <div
              key={faq.id}
              className={`bg-[#333333] transition-all duration-300 ${
                openQuestions[faq.id] 
                  ? 'rounded-[20px] md:rounded-[30px] border border-[#B6DD48]' 
                  : 'rounded-[30px] md:rounded-[90px] hover:border hover:border-[#B6DD48]'
              }`}
            >
              <button 
                className="w-full text-left"
                onClick={() => toggleQuestion(faq.id)}
              >
                <div className="p-3 md:p-4 flex justify-between items-center">
                  <h3 className="text-white text-sm md:text-base pr-6 md:pr-8">{faq.question}</h3>
                  <img 
                    src={Down} 
                    alt="Expand" 
                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${
                      openQuestions[faq.id] ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestions[faq.id] ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="p-3 md:p-4 pt-0 text-gray-300 text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Link */}
        <div className="text-center pt-4 md:pt-6">
          <p className="text-white text-sm md:text-base">
            Got more questions? Reach out to{' '}
            <button
              onClick={handleEmailClick}
              className="text-[#B6DD48] hover:underline focus:outline-none"
            >
              community@geekroom.in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
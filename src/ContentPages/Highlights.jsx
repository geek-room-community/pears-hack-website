import React from 'react';
import '../styles/highlights.css';
import high1 from '../assets/highlights/high1.jpg';
import high2 from '../assets/highlights/high9.jpg';
import high3 from '../assets/highlights/high6.jpg';
import high4 from '../assets/highlights/high4.JPG';
import high5 from '../assets/highlights/high5.jpg';

const Highlights = () => {
  return (
    <div className="highlights-container">
      <div className="grid-item top">
        <img src={high1} alt="Highlight 1" />
      </div>
      <div className="grid-item small left">
        <img src={high2} alt="Highlight 2" />
      </div>
      <div className="grid-item tall bottom-left">
        <img src={high3} alt="Highlight 3" />
      </div>
      <div className="grid-item tall middle">
        <img src={high4} alt="Highlight 4" />
      </div>
      <div className="grid-item tall right">
        <img src={high5} alt="Highlight 5" />
      </div>
    </div>
  );
};

export default Highlights;

// ContactSection.jsx
import React from 'react';
import '../styles/contact.css';
import Email from "../SVGs/email.svg";
import Web from "../SVGs/website.svg";
import Instagram from "../SVGs/instagram.svg";
import LinkedIn from "../SVGs/linkedin.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading"><span className="highlight">GOT</span> A QUERY?</h2>
      <p className="contact-intro">We're here to assist you! Reach out to us through:</p>
      
      <div className="contact-info">
        
        <a href="mailto:community@geekroom.in" className="contact-item">
          <img className="contact-icon" src={Email} alt="email icon" />
          <span className="contact-text">community@geekroom.in</span>
        </a>
      </div>

      <p className="social-intro">Also follow us on our social media handles</p>
      
      <div className="social-links">
        <a href="https://www.geekroom.in/" target="_blank" rel="noopener noreferrer" className="social-item">
          <img className="social-icon" src= { Web } alt="website icon" />
          <span className="social-text">www.geekroom.in</span>
        </a>
        
        <a href="https://www.instagram.com/geek_suite/" target="_blank" rel="noopener noreferrer" className="social-item">
          <img className="social-icon" src= { Instagram } alt="instagram icon" />
          <span className="social-text">geek_suite</span>
        </a>
        
        <a href="https://www.linkedin.com/company/geek-suite/" target="_blank" rel="noopener noreferrer" className="social-item">
          <img className="social-icon" src= { LinkedIn } alt="linkedin icon" />
          <span className="social-text">Geek Suite</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
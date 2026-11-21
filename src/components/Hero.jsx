import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Hero = ({ onOpenResume }) => {
  const { personal, education, socials } = portfolioData;
  const edu = education[0];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const fullText = personal.titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText === fullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % personal.titles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, personal.titles, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-greeting">
          <span className="status-dot"></span>
          <span>Available for Internships & Projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Hello, I'm <br />
          <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Animated Typewriter Title */}
        <div className="hero-typewriter-wrapper">
          <span>&gt; </span>
          <span>{displayedText}</span>
          <span className="typing-cursor"></span>
        </div>

        {/* Bio Narrative */}
        <p className="hero-bio">
          3rd-year <strong>B.Tech</strong> undergraduate in <strong>CSE (CIC)</strong> at <strong>VVITU</strong> with a strong foundation in procedural and object-oriented programming (C, Java), algorithmic problem-solving, and responsive full-stack web applications.
        </p>

        {/* Academic Highlights / Badges */}
        <div className="hero-pills">
          <div className="hero-pill">
            <Icon name="academic" size={16} />
            <span><strong>VVITU</strong> • {edu.currentYear}</span>
          </div>
          <div className="hero-pill">
            <Icon name="star" size={16} />
            <span><strong>{edu.cgpa}</strong> CGPA</span>
          </div>
          <div className="hero-pill">
            <Icon name="map-pin" size={16} />
            <span>Guntur, AP</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="hero-cta-group">
          <a href="#contact" className="btn btn-primary btn-glow">
            <span>Connect With Me</span>
            <Icon name="arrow-right" size={18} />
          </a>
          <a href="#skills" className="btn btn-secondary">
            <Icon name="code" size={18} />
            <span>Explore Skills</span>
          </a>
          <button onClick={onOpenResume} className="btn btn-secondary">
            <Icon name="download" size={18} />
            <span>Resume</span>
          </button>
        </div>

        {/* Quick Social Profile Links */}
        <div className="hero-social-row">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            title="GitHub"
          >
            <Icon name="github" size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            title="LinkedIn"
          >
            <Icon name="linkedin" size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hero-social-link"
            title="Email Directly"
          >
            <Icon name="mail" size={16} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

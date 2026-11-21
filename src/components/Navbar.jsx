import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Learning', href: '#learning' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'education', 'learning', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="nav-logo-badge">YS</div>
          <div className="nav-logo-info">
            <span className="nav-name">{portfolioData.personal.name}</span>
            <span className="nav-sub">B.Tech CSE (CIC) • VVITU</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="nav-actions">
          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm"
            title="Download or preview resume"
          >
            <Icon name="download" size={15} />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Hire Me</span>
            <Icon name="arrow-right" size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="nav-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}

        <div className="mobile-actions">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-secondary btn-block"
          >
            <Icon name="download" size={16} />
            <span>Download Resume</span>
          </button>
          <a
            href="#contact"
            className="btn btn-primary btn-block"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Get In Touch</span>
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};

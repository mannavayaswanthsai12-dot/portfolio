import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Footer = () => {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="nav-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <div className="nav-logo-badge">YS</div>
              <div className="nav-logo-info">
                <span className="nav-name">{personal.name}</span>
                <span className="nav-sub">B.Tech CSE (CIC) • VVITU</span>
              </div>
            </div>
            <p className="footer-desc">
              Aspiring software engineer passionate about algorithms, clean code architecture, and high-performance modern web applications.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="footer-social-links">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Icon name="github" size={20} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Icon name="linkedin" size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-circle-btn"
              title="Email"
              aria-label="Email Directly"
            >
              <Icon name="mail" size={20} />
            </a>
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
              className="social-circle-btn"
              title="Phone"
              aria-label="Call Directly"
            >
              <Icon name="phone" size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} <strong>{personal.name}</strong>. All rights reserved.
          </div>
          <div>
            Built with <strong>React 19</strong>, <strong>Vite</strong> &amp; Modern CSS.
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top" aria-label="Back to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

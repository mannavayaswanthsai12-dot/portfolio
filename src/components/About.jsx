import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const About = () => {
  const { personal, education } = portfolioData;
  const edu = education[0];

  const highlights = [
    {
      icon: 'cpu',
      title: 'Algorithmic Rigor & Fundamentals',
      description: 'Strengthened analytical mindset through intensive study of Data Structures & Algorithms in Java and procedural computing in C.'
    },
    {
      icon: 'layers',
      title: 'Modern Web Engineering',
      description: 'Building dynamic, responsive interfaces using React.js and Vite paired with modular backend REST APIs via Express.js.'
    },
    {
      icon: 'sparkles',
      title: 'Continuous Growth & Dedication',
      description: 'Consistent academic dedication at VVITU (7.5 CGPA) balanced with practical code implementation, clean documentation, and best practices.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="code" size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated computer science undergraduate focused on algorithmic problem solving, clean code architecture, and high-performance applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative Bio & Focus Pillars */}
          <div className="about-card glass-card">
            <h3 className="about-card-title">
              Aspiring Developer with a Rigorous Engineering Mindset
            </h3>
            <p className="about-text">
              {personal.bio}
            </p>
            <p className="about-text">
              Currently in my 3rd year at <strong>VVITU</strong> pursuing a <strong>B.Tech in Computer Science and Engineering (CIC)</strong>, I have concentrated on understanding how computing systems function at both low levels (C memory pointers, data representations) and higher abstractions (Java OOP, REST APIs, and component-based React frontends).
            </p>

            <div className="about-pillars">
              {highlights.map((item, idx) => (
                <div key={idx} className="pillar-item">
                  <div className="pillar-icon-box">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div>
                    <h4 className="pillar-title">{item.title}</h4>
                    <p className="pillar-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Bio Data Card */}
          <div className="about-card glass-card">
            <h3 className="about-card-title">Academic & Contact Overview</h3>

            <div className="about-info-list">
              <div className="info-box">
                <div className="info-label">
                  <Icon name="academic" size={14} /> Institution
                </div>
                <div className="info-value">{edu.institution}</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="graduation" size={14} /> Degree
                </div>
                <div className="info-value">{edu.degree}</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="layers" size={14} /> Branch / Dept
                </div>
                <div className="info-value">{edu.branch}</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="sparkles" size={14} /> Academic Year
                </div>
                <div className="info-value">{edu.currentYear} (Class of {edu.graduationYear})</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="star" size={14} /> Cumulative CGPA
                </div>
                <div className="info-value" style={{ color: '#34d399' }}>{edu.cgpa} / 10.0</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="map-pin" size={14} /> Location
                </div>
                <div className="info-value">{personal.location}</div>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="mail" size={14} /> Email
                </div>
                <a href={`mailto:${personal.email}`} className="info-value info-link">
                  {personal.email}
                </a>
              </div>

              <div className="info-box">
                <div className="info-label">
                  <Icon name="phone" size={14} /> Phone
                </div>
                <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="info-value info-link">
                  {personal.phone}
                </a>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary btn-block">
              <Icon name="mail" size={16} />
              <span>Get In Touch Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

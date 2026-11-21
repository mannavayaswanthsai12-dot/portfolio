import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="academic" size={14} />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Standing</span>
          </h2>
          <p className="section-subtitle">
            Formal undergraduate education in Computer Science and Engineering, building foundational knowledge in computer architecture, systems, and modern software design.
          </p>
        </div>

        {/* Main Education Showcase Card */}
        <div className="edu-wrapper">
          {education.map((item, index) => (
            <div key={index} className="edu-card glass-card">
              <div className="edu-header">
                <div>
                  <h3 className="edu-institution">{item.institution}</h3>
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-branch">{item.branch} • Currently in {item.currentYear}</div>
                </div>

                <div className="edu-cgpa-badge">
                  <div className="cgpa-number">{item.cgpa}</div>
                  <div className="cgpa-label">CGPA / 10.0</div>
                </div>
              </div>

              <div className="edu-meta-grid">
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Branch & Specialization</span>
                  <span className="edu-meta-value">{item.branch}</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Current Academic Standing</span>
                  <span className="edu-meta-value">{item.currentYear}</span>
                </div>
                <div className="edu-meta-item">
                  <span className="edu-meta-label">Graduation Year</span>
                  <span className="edu-meta-value">Class of {item.graduationYear}</span>
                </div>
              </div>

              <ul className="edu-highlights">
                {item.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="edu-highlight-item">
                    <Icon name="check" size={16} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

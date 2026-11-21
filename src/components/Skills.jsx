import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, SkillBadgeIcon } from '../utils/icons';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Programming Languages', 'Frontend Development', 'Frontend Frameworks', 'Backend Development'];

  const filteredSkills = activeFilter === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="code" size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, frameworks, and web technologies mastered through coursework, hands-on development, and problem solving.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Skills (8)' : cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card glass-card">
              <div className="skill-top">
                <SkillBadgeIcon name={skill.name} size={42} />
                <span className="skill-category">{skill.category}</span>
              </div>

              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>

              <div className="skill-footer">
                <span className="skill-level-badge">{skill.level}</span>
                <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span className="status-dot"></span> Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

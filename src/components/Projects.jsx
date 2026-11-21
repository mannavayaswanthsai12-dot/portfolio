import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="layers" size={14} />
            <span>Practical Implementation</span>
          </div>
          <h2 className="section-title">
            Projects & <span className="gradient-text">Development Roadmap</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software builds and engineering practicals currently under active development.
          </p>
        </div>

        <div className="projects-header-info">
          This section is modularly designed and continuously updated as new code repositories are completed.
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div>
                <div className="project-status-bar">
                  <span className="skill-category">{project.category}</span>
                  <span className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <Icon name="check" size={15} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-block"
                  title="View repository on GitHub"
                >
                  <Icon name="github" size={18} />
                  <span>View Code on GitHub</span>
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

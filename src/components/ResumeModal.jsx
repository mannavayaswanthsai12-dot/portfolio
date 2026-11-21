import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills, courses, socials } = portfolioData;
  const edu = education[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon name="close" size={20} />
        </button>

        <div className="modal-header">
          <h3 className="modal-title">Curriculum Vitae / Resume</h3>
          <p className="modal-subtitle">Candidate Summary • {personal.name}</p>
        </div>

        <div className="modal-body">
          <div className="resume-preview-box">
            <div className="resume-candidate-name">{personal.name}</div>
            <div className="resume-candidate-sub">{personal.role}</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              {personal.email} • {personal.phone}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>
              {personal.location}
            </div>

            <div className="resume-item-row">
              <strong style={{ color: '#f8fafc' }}>Education:</strong><br />
              {edu.degree} — {edu.branch}<br />
              {edu.institution} • {edu.currentYear} (Class of {edu.graduationYear})<br />
              Academic CGPA: <strong style={{ color: '#34d399' }}>{edu.cgpa} / 10.0</strong>
            </div>

            <div className="resume-item-row">
              <strong style={{ color: '#f8fafc' }}>Technical Skills:</strong><br />
              {skills.map(s => s.name).join(' • ')}
            </div>

            <div className="resume-item-row">
              <strong style={{ color: '#f8fafc' }}>Coursework:</strong><br />
              {courses.map(c => c.title).join(' • ')}
            </div>

            <div className="resume-item-row">
              <strong style={{ color: '#f8fafc' }}>Profiles:</strong><br />
              GitHub: {socials.github}<br />
              LinkedIn: {socials.linkedin}
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button onClick={handlePrint} className="btn btn-primary">
            <Icon name="download" size={16} />
            <span>Print / Save as PDF</span>
          </button>
          <a
            href={`mailto:${personal.email}?subject=Requesting Resume of ${personal.name}`}
            className="btn btn-secondary"
          >
            <Icon name="mail" size={16} />
            <span>Email Request</span>
          </a>
          <button onClick={onClose} className="btn btn-secondary">
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Learning = () => {
  const { courses } = portfolioData;

  return (
    <section id="learning" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="book" size={14} />
            <span>Coursework & Curricula</span>
          </div>
          <h2 className="section-title">
            Courses & <span className="gradient-text">Structured Learning</span>
          </h2>
          <p className="section-subtitle">
            Core computer science disciplines and programming methodologies studied in-depth to establish rock-solid software engineering competencies.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="learning-grid">
          {courses.map((course, idx) => (
            <div key={idx} className="course-card glass-card">
              <div>
                <span className="course-badge">
                  <Icon name={idx === 0 ? "cpu" : "code"} size={14} />
                  <span>{course.focus}</span>
                </span>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-issuer">{course.issuer}</div>
                <p className="course-desc">{course.description}</p>
              </div>

              <div className="course-topics">
                {course.topics.map((topic, tIdx) => (
                  <div key={tIdx} className="topic-item">
                    <Icon name="check" size={16} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from '../utils/icons';

export const Contact = () => {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Yaswanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Icon name="mail" size={14} />
            <span>Communication & Inquiries</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you are discussing internship opportunities, engineering projects, or technical collaboration, I would be delighted to hear from you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Cards */}
          <div className="contact-card-list">
            <a href={`mailto:${personal.email}`} className="contact-info-card glass-card">
              <div className="contact-icon-box">
                <Icon name="mail" size={22} />
              </div>
              <div>
                <div className="contact-info-title">Email Address</div>
                <div className="contact-info-value">{personal.email}</div>
              </div>
            </a>

            <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="contact-info-card glass-card">
              <div className="contact-icon-box">
                <Icon name="phone" size={22} />
              </div>
              <div>
                <div className="contact-info-title">Phone & WhatsApp</div>
                <div className="contact-info-value">{personal.phone}</div>
              </div>
            </a>

            <div className="contact-info-card glass-card">
              <div className="contact-icon-box">
                <Icon name="map-pin" size={22} />
              </div>
              <div>
                <div className="contact-info-title">Location</div>
                <div className="contact-info-value">{personal.location}</div>
              </div>
            </div>

            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="contact-info-card glass-card">
              <div className="contact-icon-box">
                <Icon name="github" size={22} />
              </div>
              <div>
                <div className="contact-info-title">GitHub Profile</div>
                <div className="contact-info-value">github.com/mannavayaswanthsai12-dot</div>
              </div>
            </a>

            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact-info-card glass-card">
              <div className="contact-icon-box">
                <Icon name="linkedin" size={22} />
              </div>
              <div>
                <div className="contact-info-title">LinkedIn Profile</div>
                <div className="contact-info-value">Mannava Yaswanth Sai</div>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-desc">
              Fill in your details below to compose an inquiry directly to my personal email inbox.
            </p>

            {submitted && (
              <div style={{ padding: '0.85rem 1.25rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', color: '#34d399', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                Your email client was opened. If it didn't trigger, please write directly to <strong>{personal.email}</strong>.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <Icon name="mail" size={18} />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

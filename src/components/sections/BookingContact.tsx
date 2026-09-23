import React, { useState } from 'react';
import { Icon } from '../ui/Icons';

export const BookingContact: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectType, setProjectType] = useState('High-Converting Website or E-Commerce');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedText = `Hi Pankaj, I am *${name.trim()}* (${contact.trim()}).%0A%0A*Project Type:* ${projectType}%0A*Details:* ${encodeURIComponent(message.trim() || 'Looking to discuss a new project.')}%0A%0A_Sent via pixeltocloud.com React SPA intro booking form_`;
    const whatsappUrl = `https://wa.me/918629008768?text=${formattedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-split">
          {/* Left: Direct Founder Info & Links */}
          <div className="contact-left">
            <div className="section-pill-tag">✦ Start a Project</div>
            <h2>Let's build something remarkable together.</h2>
            <p>
              Have a new product idea, need custom software, or want to automate manual bottlenecks? Speak directly with our technical team today.
            </p>

            <div className="contact-direct-list">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918629008768?text=Hi%20Pankaj%2C%20I%20visited%20pixeltocloud.com%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-item"
              >
                <Icon name="whatsapp" size={20} color="#10b981" />
                <div>
                  <div className="title">WhatsApp Quick Chat</div>
                  <div className="val">+91 86290 08768 (Instant Reply)</div>
                </div>
              </a>

              {/* Phone Call */}
              <a href="tel:+918629008768" className="contact-direct-item">
                <Icon name="phone" size={18} color="var(--brand-blue)" />
                <div>
                  <div className="title">Direct Phone Line</div>
                  <div className="val">+91 86290 08768 / +91 82193 52124</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:contact@pixeltocloud.com" className="contact-direct-item">
                <Icon name="mail" size={18} color="var(--brand-blue)" />
                <div>
                  <div className="title">Official Email</div>
                  <div className="val">contact@pixeltocloud.com</div>
                </div>
              </a>

              {/* Smart Card Profile */}
              <a href="connect" className="contact-direct-item">
                <Icon name="idCard" size={18} color="var(--brand-blue)" />
                <div>
                  <div className="title">Digital Visiting Card</div>
                  <div className="val">pixeltocloud.com/connect</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Stateful Inquiry Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Book an Intro Call
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px' }}>
              Share your goals and we'll reply with a roadmap and ballpark estimate within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="userName"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="userContact" className="form-label">Email or WhatsApp Number</label>
                <input
                  type="text"
                  id="userContact"
                  className="form-input"
                  placeholder="e.g. rahul@company.com or +91 98765 43210"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">What do you want to build?</label>
                <select
                  id="projectType"
                  className="form-select"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option value="High-Converting Website or E-Commerce">High-Converting Website or E-Commerce</option>
                  <option value="Custom Software, CRM or Billing Portal">Custom Software, CRM or Billing Portal</option>
                  <option value="24/7 WhatsApp AI Bot & Automation">24/7 WhatsApp AI Bot &amp; Automation</option>
                  <option value="Google Ads & Lead Generation Funnel">Google Ads &amp; Lead Generation Funnel</option>
                  <option value="Other Growth / Cloud Engineering Project">Other Growth / Cloud Engineering Project</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="userMessage" className="form-label">Brief Project Summary</label>
                <textarea
                  id="userMessage"
                  className="form-textarea"
                  placeholder="Tell us a little about your business, timeline, and current bottlenecks..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn-form-submit">
                <span>{submitted ? 'Inquiry Sent! Opening WhatsApp...' : 'Send Project Inquiry'}</span>
                <Icon name="paperPlane" size={16} color="#ffffff" style={{ marginLeft: '6px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

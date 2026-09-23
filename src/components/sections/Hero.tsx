import React from 'react';
import { Icon } from '../ui/Icons';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Trust & Review Pill */}
        <div className="trust-badge-pill">
          <span className="stars">
            <Icon name="star" size={13} color="#f59e0b" />
            <Icon name="star" size={13} color="#f59e0b" />
            <Icon name="star" size={13} color="#f59e0b" />
            <Icon name="star" size={13} color="#f59e0b" />
            <Icon name="star" size={13} color="#f59e0b" />
          </span>
          <span><strong>4.9 / 5.0 Rating</strong> &nbsp;·&nbsp; Trusted by 30+ Modern Businesses &amp; Founders</span>
        </div>

        {/* Main Studio Headline */}
        <h1 className="hero-headline">
          Stunning Websites, Custom Software &amp; AI Systems for <span className="text-gradient">Modern Businesses</span>
        </h1>

        {/* Plain-English Value Proposition */}
        <p className="hero-subtitle">
          We design high-converting web experiences, build tailor-made operational software &amp; CRM portals, and deploy intelligent AI automations. 100% full source-code ownership with zero vendor lock-in.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#contact" className="btn-hero-primary">
            <span>Book an Intro Call</span>
            <Icon name="arrowRight" size={16} color="#ffffff" />
          </a>
          <a href="#work" className="btn-hero-secondary">
            <span>View Selected Work</span>
            <Icon name="arrowDown" size={15} color="var(--text-main)" />
          </a>
        </div>

        {/* Key Assurance Perks */}
        <div className="hero-perks-row">
          <div className="hero-perk-item">
            <Icon name="bolt" size={15} color="var(--brand-blue)" />
            <span>10–14 Day Rapid MVP Delivery</span>
          </div>
          <div className="hero-perk-item">
            <Icon name="lock" size={15} color="var(--brand-blue)" />
            <span>100% Code &amp; Asset Ownership</span>
          </div>
          <div className="hero-perk-item">
            <Icon name="comments" size={15} color="var(--brand-blue)" />
            <span>Direct Founder Access &amp; WhatsApp Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Icon } from '../ui/Icons';

export const PillarsBridge: React.FC = () => {
  return (
    <section className="pillars-bridge-section" id="pillars">
      <div className="container">
        <div className="section-header">
          <div className="section-pill-tag">✦ The 3 Brand Pillars</div>
          <h2 className="section-title">Build · Grow · Automate</h2>
          <p className="section-subtitle">
            The foundational philosophy behind every project we deliver at PixelToCloud. Designed to move your business from initial concept to market dominance.
          </p>
        </div>

        <div className="pillars-grid">
          {/* Pillar 1: BUILD */}
          <div className="pillar-box pillar-build">
            <div className="pillar-badge-accent">Pillar 01</div>
            <h3 className="pillar-name">BUILD</h3>
            <p className="pillar-summary">
              Rock-solid digital foundations crafted with precision engineering and clean architecture.
            </p>
            <ul className="pillar-bullets">
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> High-Converting Brand Websites</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Custom Web Apps &amp; SaaS MVPs</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Clean, Documented Source Code</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> 100% Client Code Ownership</li>
            </ul>
          </div>

          {/* Pillar 2: GROW */}
          <div className="pillar-box pillar-grow">
            <div className="pillar-badge-accent">Pillar 02</div>
            <h3 className="pillar-name">GROW</h3>
            <p className="pillar-summary">
              Targeted customer acquisition and visibility funnels engineered to convert browsers into revenue.
            </p>
            <ul className="pillar-bullets">
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> High-Intent Google Ads Setup</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Technical &amp; Local Business SEO</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> High-Conversion Landing Pages</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Conversion Tracking &amp; ROI Analytics</li>
            </ul>
          </div>

          {/* Pillar 3: AUTOMATE */}
          <div className="pillar-box pillar-auto">
            <div className="pillar-badge-accent">Pillar 03</div>
            <h3 className="pillar-name">AUTOMATE</h3>
            <p className="pillar-summary">
              Intelligent bots and automated cloud pipelines that free up dozens of hours every single week.
            </p>
            <ul className="pillar-bullets">
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> 24/7 WhatsApp AI Chatbots</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Automated Billing &amp; Invoicing</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> AI Document &amp; PDF Data Extraction</li>
              <li className="pillar-bullet-item"><Icon name="check" size={14} color="var(--brand-blue)" /> Multi-App Zapier / Webhook Flows</li>
            </ul>
          </div>
        </div>

        {/* Live Smart Card Callout Banner */}
        <div className="smart-card-bridge-banner">
          <div className="smart-card-info">
            <h3>Meet Pankaj on the Smart Digital Profile</h3>
            <p>
              Scan the verified visiting card QR code or tap below to access our live smart card profile with one-tap WhatsApp chat, vCard address book download, and direct scheduling.
            </p>
          </div>
          <div className="smart-card-action-wrap">
            <div className="mini-qr-box" title="Scan to open pixeltocloud.com/connect">
              <img src="/qr-code/qr-pixeltocloud-connect.svg" alt="PixelToCloud Smart Card QR Code" />
            </div>
            <a href="connect" className="btn-open-connect">
              <span>Open Live Smart Profile</span>
              <Icon name="arrowRight" size={14} color="#ffffff" style={{ marginLeft: '6px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Icon } from '../ui/Icons';

interface ClientItem {
  iconName: string;
  iconColor: string;
  name: string;
  metric: string;
}

const clients: ClientItem[] = [
  { iconName: 'invoice', iconColor: '#0284c7', name: 'Easy My Tax', metric: '10,000+ Filings Processed' },
  { iconName: 'tooth', iconColor: '#10b981', name: 'Harish Renova Dental', metric: '40% Faster Patient Triage' },
  { iconName: 'gem', iconColor: '#ea580c', name: 'Saini Handicrafts', metric: '2.4× Direct Online Conversions' },
  { iconName: 'cube', iconColor: '#8b5cf6', name: 'Nebula3D Studio', metric: 'WebGL Product Configurator' },
  { iconName: 'heart', iconColor: '#ef4444', name: 'Apex Healthcare', metric: '24/7 Automated WhatsApp Booking' }
];

export const ClientMarquee: React.FC = () => {
  return (
    <section className="marquee-section">
      <div className="container">
        <h3 className="marquee-heading">Trusted by Founders, Clinics, CAs &amp; Growing Enterprises</h3>
      </div>

      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {clients.map((c, idx) => (
            <div key={`client-a-${idx}`} className="client-stat-card">
              <Icon name={c.iconName} size={18} color={c.iconColor} />
              <span className="client-name">{c.name}</span>
              <span className="client-metric">{c.metric}</span>
            </div>
          ))}

          {/* Interactive Next Growth Story Card */}
          <a href="#contact" className="client-stat-card add-story">
            <Icon name="plus" size={18} color="var(--brand-orange)" />
            <span className="client-name">+ Your Next Growth Story</span>
            <span className="client-metric" style={{ background: '#ffedd5', color: '#c2410c' }}>Let's Build It →</span>
          </a>

          {/* Duplicate set for seamless continuous marquee loop */}
          {clients.map((c, idx) => (
            <div key={`client-b-${idx}`} className="client-stat-card">
              <Icon name={c.iconName} size={18} color={c.iconColor} />
              <span className="client-name">{c.name}</span>
              <span className="client-metric">{c.metric}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

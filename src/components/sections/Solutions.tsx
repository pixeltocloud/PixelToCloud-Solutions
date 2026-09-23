import React from 'react';
import { Icon } from '../ui/Icons';

interface SolutionItem {
  iconName: string;
  isOrange?: boolean;
  title: string;
  desc: string;
  tags: string[];
}

const solutions: SolutionItem[] = [
  {
    iconName: 'laptop',
    title: 'High-Converting Websites & Online Stores',
    desc: 'Ultra-fast, mobile-perfect marketing websites and e-commerce storefronts. Tailored design in Figma, clean code in Next.js, and rock-solid SEO architecture to dominate Google search results.',
    tags: ['Custom UI/UX', 'Next.js & React', 'Technical SEO', '< 1s Load Speed']
  },
  {
    iconName: 'cubes',
    isOrange: true,
    title: 'Custom Software, Billing & CRM Portals',
    desc: 'Software built exactly for the unique way your business operates. Client management dashboards, custom invoice generators, inventory trackers, and role-based permissions with zero monthly subscription penalties.',
    tags: ['Custom CRM', 'Automated Invoicing', 'Role-Based Access', 'API Integrations']
  },
  {
    iconName: 'chart',
    title: 'Google Ads & High-ROI Lead Funnels',
    desc: 'Laser-targeted landing pages and search advertising funnels that convert visitors into paying clients. Precise keyword targeting, conversion tracking, and high-converting copy that maximizes your marketing spend.',
    tags: ['Conversion Rate Opt', 'Google Ads', 'Landing Page CRO', 'Lead Qualification']
  },
  {
    iconName: 'cloud',
    title: 'Speed, Cloud Performance & Security',
    desc: 'Enterprise cloud architecture deployed on AWS and Cloudflare. Automated backups, bank-grade SSL encryption, global CDN caching, and 99.99% uptime so your business never goes down during high-traffic surges.',
    tags: ['AWS Cloud', 'Cloudflare CDN', '99.99% SLA Uptime', 'SSL & DDoS Shield']
  },
  {
    iconName: 'whatsapp',
    isOrange: true,
    title: '24/7 WhatsApp AI Booking & Support',
    desc: "Turn WhatsApp into your hardest working salesperson. Automated intelligent bots that qualify leads, book appointments, send payment links, and trigger automated reminders directly on the world's most popular messaging app.",
    tags: ['WhatsApp API', 'Auto-Scheduler', 'Lead Nurturing', 'Instant Replies']
  },
  {
    iconName: 'brain',
    title: 'AI Document & Invoice Data Extraction',
    desc: 'Eliminate tedious manual data entry. Our intelligent document parsers extract structured financial data from PDFs, tax forms, receipts, and invoices directly into your accounting software and databases with 99.9% accuracy.',
    tags: ['AI OCR & Vision', 'PDF Data Parsing', 'Accounting Sync', 'Zero Human Error']
  }
];

export const Solutions: React.FC = () => {
  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-pill-tag">✦ Studio Capabilities</div>
          <h2 className="section-title">Our Solutions for your Digital Growth</h2>
          <p className="section-subtitle">
            We combine cutting-edge design, bespoke software engineering, and intelligent AI automation to solve real operational bottlenecks and accelerate revenue.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, idx) => (
            <div key={idx} className={`solution-card ${item.isOrange ? 'card-orange' : ''}`}>
              <div className="solution-icon-wrap">
                <Icon name={item.iconName} size={24} color={item.isOrange ? 'var(--brand-orange)' : 'var(--brand-blue)'} />
              </div>
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.desc}</p>
              <div className="solution-tags">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="solution-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

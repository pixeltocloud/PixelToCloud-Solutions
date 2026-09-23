import React from 'react';
import { Icon } from '../ui/Icons';

interface CaseStudy {
  title: string;
  category: string;
  categoryBadge: string;
  mediaSub: string;
  mediaVal: string;
  tags: string[];
  chips: string[];
  desc: string;
  impact: string;
}

const cases: CaseStudy[] = [
  {
    title: 'Easy My Tax',
    category: 'CA Portal',
    categoryBadge: 'Financial Software',
    mediaSub: 'Automated Tax Return Pipelines',
    mediaVal: '10,480+ Client Filings',
    tags: ['Custom Web Platform', 'Document AI'],
    chips: ['99.99% Uptime', 'Bank-Grade Encrypted'],
    desc: 'Full-stack digital tax preparation portal for Chartered Accountants and taxpayers, handling automated document intake, calculations, and secure client communication.',
    impact: 'Over 10,000+ tax filings processed with zero data loss or downtime.'
  },
  {
    title: 'Harish Renova Dental',
    category: 'Dental Clinic',
    categoryBadge: 'Healthcare Platform',
    mediaSub: 'Automated Appointment Triage',
    mediaVal: '40% Faster Scheduling',
    tags: ['Clinic Management', 'WhatsApp API'],
    chips: ['WhatsApp Bot Active', 'SMS Reminders'],
    desc: 'Patient scheduling, digital records management, and automated WhatsApp appointment reminders designed to eliminate receptionist bottlenecks and no-shows.',
    impact: '40% reduction in patient wait time and near-zero missed appointments.'
  },
  {
    title: 'Saini Handicrafts',
    category: 'Export Catalog',
    categoryBadge: 'E-Commerce & Export',
    mediaSub: 'Global Catalog & Direct Ordering',
    mediaVal: '2.4× Direct Revenue',
    tags: ['E-Commerce Architecture', 'Performance SEO'],
    chips: ['International Currency', 'Razorpay & Stripe'],
    desc: 'High-speed global catalog and digital inquiry engine for hand-carved heritage crafts, allowing domestic and international B2B buyers to request quotes seamlessly.',
    impact: '2.4× increase in verified international trade inquiries within 90 days.'
  },
  {
    title: 'Nebula3D Configurator',
    category: '3D Studio',
    categoryBadge: 'WebGL / Three.js',
    mediaSub: 'Interactive 3D Product Customizer',
    mediaVal: '60 FPS Spatial Rendering',
    tags: ['Interactive 3D Web', 'Three.js & GLTF'],
    chips: ['Zero Plugins Needed', 'Mobile Accelerated'],
    desc: 'Photorealistic in-browser 3D model viewer enabling customers to customize finishes, textures, and dimensions on any smartphone without installing apps.',
    impact: 'Tripled on-page engagement time with fluid 60 FPS mobile rendering.'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section className="work-section" id="work">
      <div className="container">
        <div className="section-header">
          <div className="section-pill-tag">✦ Proven Case Studies</div>
          <h2 className="section-title">Selected Work with Tangible Impact</h2>
          <p className="section-subtitle">
            Real business outcomes engineered for clients across healthcare, finance, global e-commerce, and high-tech 3D design.
          </p>
        </div>

        <div className="work-grid">
          {cases.map((item, idx) => (
            <div key={idx} className="work-card">
              <div className="work-card-media">
                <div className="work-media-inner">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>{item.title} · {item.category}</span>
                    <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px' }}>
                      {item.categoryBadge}
                    </span>
                  </div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', marginTop: '6px' }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{item.mediaSub}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{item.mediaVal}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: 'auto' }}>
                    {item.chips.map((chip, cIdx) => (
                      <span key={cIdx} style={{ fontSize: '0.65rem', background: '#ecfdf5', color: '#059669', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="work-card-body">
                <div className="work-tag-row">
                  {item.tags.map((t, tIdx) => (
                    <span key={tIdx} className="work-category-badge">{t}</span>
                  ))}
                </div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-desc">{item.desc}</p>
                <div className="work-impact-box">
                  <Icon name="trendUp" size={14} color="var(--brand-orange)" style={{ marginRight: '6px' }} />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

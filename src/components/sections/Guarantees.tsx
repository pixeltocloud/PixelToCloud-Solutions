import React from 'react';
import { Icon } from '../ui/Icons';

interface GuaranteeItem {
  iconName: string;
  title: string;
  desc: string;
}

const guarantees: GuaranteeItem[] = [
  {
    iconName: 'key',
    title: '100% Code Ownership',
    desc: 'You own all GitHub repositories, production code, database schemas, and media assets. No hostage clauses.'
  },
  {
    iconName: 'user',
    title: 'Senior Architect Access',
    desc: 'You collaborate directly with founders Pankaj & Tushar. No rookie account managers or broken telephone calls.'
  },
  {
    iconName: 'gauge',
    title: '100–14 Day MVP Sprints',
    desc: 'We work in rapid, weekly milestone releases so you test working software early and launch ahead of schedule.'
  },
  {
    iconName: 'handshake',
    title: 'Transparent Fixed Pricing',
    desc: 'Clear, scope-locked milestones with milestone payments. Zero hidden monthly retainers or surprise hourly bills.'
  }
];

export const Guarantees: React.FC = () => {
  return (
    <section className="guarantee-section" id="guarantees">
      <div className="container">
        <div className="section-header">
          <div className="section-pill-tag">✦ The Studio Difference</div>
          <h2 className="section-title">Zero Lock-In. Complete Freedom.</h2>
          <p className="section-subtitle">
            Unlike legacy agencies that hold your domain, hosting, and code hostage, we believe you should own 100% of everything we build for you.
          </p>
        </div>

        <div className="guarantee-grid">
          {guarantees.map((item, idx) => (
            <div key={idx} className="guarantee-card">
              <div className="icon-box">
                <Icon name={item.iconName} size={28} color="var(--brand-blue)" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

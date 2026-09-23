import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="studio-footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 252 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerPCloudGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="25%" stopColor="#1d4ed8" />
                    <stop offset="60%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 72 145 L 42 145 C 16 145, -2 122, -2 92 C -2 64, 18 42, 46 40 C 58 10, 88 -8, 124 -8 C 160 -8, 190 10, 202 40 C 230 42, 250 64, 250 92 C 250 122, 230 145, 198 145 L 128 145"
                  fill="none"
                  stroke="url(#footerPCloudGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 66 44 C 78 22, 98 12, 124 12 C 150 12, 168 22, 180 44"
                  fill="none"
                  stroke="url(#footerPCloudGrad)"
                  strokeWidth="13"
                  strokeLinecap="round"
                />
                <path
                  d="M 102 145 L 102 44 L 118 44 C 144 44, 154 56, 154 74 C 154 92, 142 104, 118 104 L 102 104"
                  fill="none"
                  stroke="url(#footerPCloudGrad)"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                PixelTo<span style={{ color: '#38bdf8' }}>Cloud</span>
              </span>
            </div>
            <p>
              Modern digital engineering studio crafting bespoke websites, custom business software, and intelligent AI automation. 100% source-code ownership.
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div className="footer-col">
            <h5>Capabilities</h5>
            <ul>
              <li><a href="#solutions">High-Converting Websites</a></li>
              <li><a href="#solutions">Custom Software &amp; CRM</a></li>
              <li><a href="#solutions">Google Ads &amp; Lead Funnels</a></li>
              <li><a href="#solutions">Cloud Infrastructure</a></li>
              <li><a href="#solutions">WhatsApp AI Automations</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Direct */}
          <div className="footer-col">
            <h5>Direct Contact</h5>
            <ul>
              <li><a href="https://wa.me/918629008768" target="_blank" rel="noopener noreferrer">WhatsApp: +91 86290 08768</a></li>
              <li><a href="tel:+918629008768">Call: +91 86290 08768</a></li>
              <li><a href="mailto:contact@pixeltocloud.com">contact@pixeltocloud.com</a></li>
              <li><a href="connect">Smart Digital Card (/connect)</a></li>
            </ul>
          </div>

          {/* Col 4: Studio Pillars */}
          <div className="footer-col">
            <h5>Core Pillars</h5>
            <ul>
              <li><a href="#pillars"><strong>BUILD</strong> · Web &amp; Apps</a></li>
              <li><a href="#pillars"><strong>GROW</strong> · SEO &amp; Ads</a></li>
              <li><a href="#pillars"><strong>AUTOMATE</strong> · AI &amp; Bots</a></li>
              <li><a href="#guarantees">Zero Lock-In Guarantee</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 PixelToCloud. All rights reserved. Registered under PixelToCloud Solutions.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="connect">Smart Card Profile</a>
            <a href="#contact">Book Intro Call</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

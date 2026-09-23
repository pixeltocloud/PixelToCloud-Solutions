import React, { useState } from 'react';
import { Icon } from '../ui/Icons';

export const DeviceShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [metricTab, setMetricTab] = useState<'filings' | 'speed' | 'ownership'>('filings');

  return (
    <section className="device-showcase-section">
      <div className="container-wide">
        <div className="device-showcase-grid">

          {/* Left: Handheld Smartphone (Mobile Experience & Booking) */}
          <div className="device-phone-container">
            <div className="mockup-phone">
              <div className="phone-screen">
                <div className="phone-island-bar">
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0f172a' }}>9:41</span>
                  <div className="dynamic-island"></div>
                  <div style={{ fontSize: '0.65rem', color: '#0f172a', display: 'flex', gap: '4px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800 }}>5G</span>
                    <Icon name="check" size={10} color="#0f172a" />
                  </div>
                </div>

                <div className="phone-content">
                  <div className="phone-header-hero">
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.85 }}>Patient Care Portal</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '4px' }}>Dr. Harish Renova Dental</div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.9, marginTop: '2px' }}>Instant Appointment &amp; Triage</div>
                  </div>

                  <div className="phone-action-card">
                    <div className="phone-action-icon">
                      <Icon name="calendar" size={18} color="#10b981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>Confirmed Slot</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Today · 4:30 PM with Dr. Harish</div>
                    </div>
                  </div>

                  <div className="phone-action-card">
                    <div className="phone-action-icon" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                      <Icon name="bell" size={18} color="#0284c7" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>WhatsApp Alert Sent</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>SMS &amp; Location Map Delivered</div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/918629008768?text=Hi%20Pankaj%2C%20I%20saw%20the%20mobile%20booking%20demo%20on%20pixeltocloud.com!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="phone-booking-btn"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <Icon name="whatsapp" size={16} color="#ffffff" />
                    <span>One-Tap WhatsApp Sync</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Laptop (MacBook Pro SaaS & Custom Business Portal) */}
          <div className="device-laptop-container">
            <div className="floating-badge badge-left">
              <Icon name="checkCircle" size={16} color="#10b981" />
              <span>99.8% Client Retention</span>
            </div>
            <div className="floating-badge badge-right">
              <Icon name="gauge" size={16} color="#0284c7" />
              <span>&lt; 0.8s Global CDN Load</span>
            </div>

            <div className="mockup-laptop">
              <div className="laptop-screen-content">
                {/* Browser Header */}
                <div className="laptop-browser-bar">
                  <div className="browser-dots">
                    <div className="browser-dot dot-red"></div>
                    <div className="browser-dot dot-yellow"></div>
                    <div className="browser-dot dot-green"></div>
                  </div>
                  <div className="browser-url-pill">
                    <Icon name="lock" size={11} color="#10b981" />
                    <span>pixeltocloud.com</span>/portal/operations-overview
                  </div>
                </div>

                {/* Inside Dashboard Mockup */}
                <div className="laptop-app-body">
                  <div className="app-header-strip">
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>Executive Operations Hub</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Custom Billing, Client CRM &amp; Automation Engine</div>
                    </div>
                    <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '9999px' }}>
                      ● Live Synchronized
                    </span>
                  </div>

                  <div className="app-metrics-grid">
                    <div
                      className="app-metric-box"
                      style={{ cursor: 'pointer', borderColor: metricTab === 'filings' ? '#0284c7' : '#e2e8f0' }}
                      onClick={() => setMetricTab('filings')}
                    >
                      <div className="label">Total Filings Handled</div>
                      <div className="val">10,480+</div>
                      <div className="trend">↑ +38% this quarter</div>
                    </div>
                    <div
                      className="app-metric-box"
                      style={{ cursor: 'pointer', borderColor: metricTab === 'speed' ? '#0284c7' : '#e2e8f0' }}
                      onClick={() => setMetricTab('speed')}
                    >
                      <div className="label">Avg Response Time</div>
                      <div className="val">1.2 sec</div>
                      <div className="trend">⚡ 24/7 AI Automated</div>
                    </div>
                    <div
                      className="app-metric-box"
                      style={{ cursor: 'pointer', borderColor: metricTab === 'ownership' ? '#0284c7' : '#e2e8f0' }}
                      onClick={() => setMetricTab('ownership')}
                    >
                      <div className="label">Zero Lock-In</div>
                      <div className="val">100%</div>
                      <div className="trend" style={{ color: '#0284c7' }}>Direct Code Ownership</div>
                    </div>
                  </div>

                  <div className="app-chart-preview">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0f172a' }}>Platform Activity &amp; Conversion Velocity</span>
                      <span style={{ fontSize: '0.65rem', color: '#64748b' }}>Real-time Telemetry</span>
                    </div>
                    <div className="chart-bars-wrap">
                      <div className="chart-bar" style={{ height: '45%' }}></div>
                      <div className="chart-bar" style={{ height: '65%' }}></div>
                      <div className="chart-bar" style={{ height: '55%' }}></div>
                      <div className="chart-bar" style={{ height: '85%' }}></div>
                      <div className="chart-bar" style={{ height: '70%' }}></div>
                      <div className="chart-bar" style={{ height: '95%' }}></div>
                      <div className="chart-bar" style={{ height: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup-laptop-base">
              <div className="mockup-laptop-notch"></div>
            </div>
          </div>

          {/* Right: Tablet (iPad Pro Analytics & Workflow Automation) */}
          <div className="device-tablet-container">
            <div className="mockup-tablet">
              <div className="tablet-screen">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>Automation Pipeline</span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Interactive Flow</span>
                </div>

                <div
                  className="tablet-flow-card"
                  style={{ cursor: 'pointer', background: activeStep === 1 ? '#eff6ff' : '#ffffff' }}
                  onClick={() => setActiveStep(1)}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284c7', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="mail" size={13} color="#0284c7" /> Step 1: Web Lead Captured
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>Instant validation &amp; database sync</div>
                </div>

                <div
                  className="tablet-flow-card"
                  style={{ cursor: 'pointer', background: activeStep === 2 ? '#f5f3ff' : '#ffffff' }}
                  onClick={() => setActiveStep(2)}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="brain" size={13} color="#7c3aed" /> Step 2: AI Lead Scoring
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>Categorized by budget &amp; requirements</div>
                </div>

                <div
                  className="tablet-flow-card"
                  style={{ cursor: 'pointer', background: activeStep === 3 ? '#ecfdf5' : '#ffffff' }}
                  onClick={() => setActiveStep(3)}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="whatsapp" size={13} color="#10b981" /> Step 3: Auto WhatsApp Dispatch
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>Custom personalized reply in &lt; 3s</div>
                </div>

                <div style={{ marginTop: 'auto', background: '#e0f2fe', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0284c7' }}>42.8% Faster Lead-to-Call Conversion</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

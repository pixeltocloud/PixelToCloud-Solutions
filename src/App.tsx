import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { DeviceShowcase } from './components/sections/DeviceShowcase';
import { ClientMarquee } from './components/sections/ClientMarquee';
import { Solutions } from './components/sections/Solutions';
import { PillarsBridge } from './components/sections/PillarsBridge';
import { Guarantees } from './components/sections/Guarantees';
import { SelectedWork } from './components/sections/SelectedWork';
import { BookingContact } from './components/sections/BookingContact';
import { Footer } from './components/layout/Footer';

export default function App(): React.JSX.Element {
  return (
    <div className="react-app-root">
      {/* Decorative Canvas Backgrounds */}
      <div className="bg-grid-pattern" aria-hidden="true" />
      <div className="ambient-glow-top" aria-hidden="true" />

      {/* Floating Pill Header Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* 3-Device Physical Showcase */}
        <DeviceShowcase />

        {/* Client Outcomes & Proof Marquee */}
        <ClientMarquee />

        {/* 6 Capabilities & Solutions */}
        <Solutions />

        {/* 3 Brand Pillars (BUILD · GROW · AUTOMATE) & Smart Card */}
        <PillarsBridge />

        {/* Zero Lock-In Guarantees */}
        <Guarantees />

        {/* Selected Work & Case Studies */}
        <SelectedWork />

        {/* High-Conversion Contact & WhatsApp Booking */}
        <BookingContact />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGlobeAfrica, 
  FaCertificate, 
  FaShippingFast, 
  FaHandHoldingUsd, 
  FaHandshake, 
  FaShieldAlt, 
  FaEye, 
  FaBullseye, 
  FaChartLine, 
  FaAward, 
  FaUsers 
} from 'react-icons/fa';
import '../styles/AboutUs.css';

// Importing your specific local asset image for the founder
import FounderImg from '../assets/j.jpeg';

const AboutUs = () => {
  return (
    <div className="about-view-wrapper">
      
      {/* ================= HERO LOGISTICS OVERVIEW COVER ================= */}
      <div className="about-hero-banner">
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content-box">
          <span className="about-brand-tagline">U & J Contact Terminal Group</span>
          <h1>Cross-Border Commerce Specialists</h1>
          <p>Connecting supply chains between Tanzanian port warehouses and premium Kigali boutique networks seamlessly.</p>
        </div>
      </div>

      {/* ================= DATA STATS TRACKING DISPLAY STRIP ================= */}
      <section className="about-live-metrics-strip">
        <div className="stats-strip-container">
          <div className="stat-metric-node">
            <h2>30+</h2>
            <p>Active Product Lots Dispatched</p>
          </div>
          <div className="stat-metric-node">
            <h2>100%</h2>
            <p>Kigali Delivery Free Commitment</p>
          </div>
          <div className="stat-metric-node">
            <h2>24/7</h2>
            <p>Border Clearing Agent Manifest Handling</p>
          </div>
          <div className="stat-metric-node">
            <h2>500+</h2>
            <p>Boutique Merchants Served Safely</p>
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PILLARS GRID: MISSION & VISION ================= */}
      <section className="strategic-pillars-section">
        <div className="pillars-grid-container">
          
          <div className="pillar-statement-card">
            <div className="pillar-icon-header icon-blue">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To bridge the trading gap between Tanzanian commercial ports and Rwandan boutique retail markets by providing transparent, stress-free consolidated freight operations that empower small and medium enterprises.
            </p>
          </div>

          <div className="pillar-statement-card">
            <div className="pillar-icon-header icon-yellow">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To serve as the benchmark multi-channel trading portal within the EAC central highway artery, heavily valued for zero-friction border customs compliance and guaranteed door-to-door retail safety.
            </p>
          </div>

          <div className="pillar-statement-card">
            <div className="pillar-icon-header icon-green">
              <FaChartLine />
            </div>
            <h3>Our Regional Impact</h3>
            <p>
              By converting unstable freight intervals into automated, weekly predictable cargo schedules, we help local clothing stores secure high inventory turnover rates with minimized capital risk profiles.
            </p>
          </div>

        </div>
      </section>

      {/* ================= EXECUTIVE MANAGEMENT TEAM CARDS ================= */}
      <section className="executive-leadership-team-section">
        <div className="about-section-heading-box">
          <span className="heading-pre-tag"><FaUsers /> Executive Leadership</span>
          <h2>The Founders & Strategic Directors</h2>
          <div className="heading-decorative-underline"></div>
          <p className="heading-explainer-subtext">Meet the core administrators managing our cargo dispatch registries and customs networks daily.</p>
        </div>

        <div className="leadership-cards-grid">
          
          {/* Card 1: Managing Director / Founder Profile (Updated to use j.jpeg) */}
          <div className="executive-profile-card">
            <div className="executive-image-container">
              <img 
                src={FounderImg} 
                alt="Jean de Dieu - Founder & Managing Director" 
                className="executive-photo"
                onError={(e) => { e.target.src = 'https://placeholder.com'; }}
              />
              <div className="executive-overlay-gradient"></div>
            </div>
            <div className="executive-metadata-box">
              <h4>Jean de Dieu</h4>
              <span className="executive-title-tag">Founder & Managing Director</span>
              <p>Directly oversees centralized terminal operations at the Dar es Salaam port warehouse, cargo packing compliance, and highway fleet security.</p>
              <div className="executive-contact-mini-tag">
                <span>Instagram: jean.de.dieu80425</span>
              </div>
            </div>
          </div>

          {/* Card 2: Operations & Customs Director Profile */}
          <div className="executive-profile-card">
            <div className="executive-image-container">
              <img 
                src="https://unsplash.com" 
                alt="U & J Logistics Terminal Lead desk" 
                className="executive-photo"
              />
              <div className="executive-overlay-gradient"></div>
            </div>
            <div className="executive-metadata-box">
              <h4>Logistics Terminal Lead</h4>
              <span className="executive-title-tag">EAC Customs Clearing Director</span>
              <p>Manages transit declaration manifests at the Rusumo Border checkpoint and drives final freight sorting at the Nyabugogo terminal yards in Kigali.</p>
              <div className="executive-contact-mini-tag">
                <span>Hotline Support: +250 786 257 303</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CORE OPERATIONAL SERVICES PILLARS ================= */}
      <section className="commitments-showcase-matrix-section">
        <div className="about-section-heading-box">
          <span className="heading-pre-tag"><FaAward /> Client Commitments</span>
          <h2>The Four Pillars of Our Logistics Performance</h2>
          <div className="heading-decorative-underline"></div>
        </div>

        <div className="commitments-cards-grid">
          
          <div className="commitment-display-card">
            <div className="commitment-icon-frame">
              <FaShippingFast />
            </div>
            <h3>Premium Corridor Speed</h3>
            <p>Bypassing traditional third-party forwarding friction by operating a direct truck network down the Central Corridor artery for rapid cargo drop schedules.</p>
          </div>

          <div className="commitment-display-card highlight-emerald-card">
            <div className="commitment-icon-frame">
              <FaHandHoldingUsd />
            </div>
            <h3>100% Zero Kigali Delivery Fees</h3>
            <p>Eliminating hidden destination fees. We unpack your batches at our Nyabugogo station and distribute straight to your boutique stalls completely free.</p>
            <span className="pill-highlight-label">Standard Policy</span>
          </div>

          <div className="commitment-display-card">
            <div className="commitment-icon-frame">
              <FaHandshake />
            </div>
            <h3>Accountable Consolidations</h3>
            <p>Every single bundle code or bale of wholesale clothing is itemized inside digital shipping files, ensuring accurate delivery logs with zero container mix-ups.</p>
          </div>

          <div className="commitment-display-card">
            <div className="commitment-icon-frame">
              <FaShieldAlt />
            </div>
            <h3>Stable Protective Cargo</h3>
            <p>We wrap fashion items separately from hardware loads. High-tier designer bags maintain structured storage compartments to shield against deep container compression.</p>
          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION FOOTER INTERACTIVE BLOCK ================= */}
      <section className="about-corporate-cta-banner-section">
        <div className="cta-banner-card-box">
          <h2>Ready To Restock Your Boutique Inventory?</h2>
          <p>Explore our active catalog lots clearing from Dar es Salaam port hubs or contact terminal operators directly for instant space allocations.</p>
          <div className="cta-banner-links-row">
            <Link to="/shop" className="btn btn-about-cta-yellow">Explore Digital Catalog</Link>
            <Link to="/contact" className="btn btn-about-cta-outline">Connect with Agents</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

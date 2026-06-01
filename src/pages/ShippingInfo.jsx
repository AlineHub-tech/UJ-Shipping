import React, { useState } from 'react';
import { 
  FaSearchLocation, 
  FaReceipt, 
  FaWarehouse, 
  FaPassport, 
  FaTruckLoading, 
  FaQuestionCircle,
  FaRoute
} from 'react-icons/fa';
import '../styles/ShippingInfo.css';

const ShippingInfo = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackCargo = (e) => {
    e.preventDefault();
    if (!trackingId) return alert("Please type your U & J Cargo Receipt Number!");
    
    // Simulating verified data tracking results
    setTrackingResult({
      id: trackingId.toUpperCase(),
      status: "Customs Clearing Processes Active",
      location: "Rusumo One-Stop Border Post (SCT Lane)",
      ETA: "24 - 48 Hours to Destined Station",
      batch: "Weekly Consolidation Batch #42",
      details: "Boutique clothes apparel, premium shoes batches, and structured designer bags cleared from Dar es Salaam port warehouse. Currently undergoing cross-border verification logs."
    });
  };

  return (
    <div className="shipping-view-wrapper">
      
      {/* ================= HERO LOGISTICS BANNER ================= */}
      <div className="shipping-hero-banner">
        <div className="shipping-banner-overlay"></div>
        <div className="shipping-banner-text-box">
          <span className="shipping-badge">Dar es Salaam ➔ Kigali Trade Corridor</span>
          <h1>EAC Cross-Border Shipping Logistics</h1>
          <p>Complete visibility into our high-efficiency freight consolidation system. Moving your stock from port terminals to Kigali safely and swiftly.</p>
        </div>
      </div>

      {/* ================= CARGO TRACKING LOOKUP ================= */}
      <section className="cargo-tracking-lookup-section">
        <div className="tracking-card-container">
          <div className="tracking-header-text">
            <h2><FaSearchLocation className="header-icon-emerald" /> Real-Time Cargo Manifest Tracking</h2>
            <p>Enter your tracking reference configuration or U & J Cargo Receipt code to verify your package status immediately.</p>
          </div>
          
          <form onSubmit={handleTrackCargo} className="tracking-search-form">
            <div className="tracking-input-wrapper">
              <FaReceipt className="tracking-icon-label" />
              <input 
                type="text" 
                placeholder="e.g., UJ-CARGO-789X" 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-tracking-submit">Track Manifest Location</button>
          </form>

          {trackingResult && (
            <div className="tracking-results-display-panel">
              <div className="results-grid-header">
                <h3>Shipment Ref: <span className="highlight-emerald">{trackingResult.id}</span></h3>
                <span className="badge-status-moving"><FaRoute className="spin-effect" /> {trackingResult.status}</span>
              </div>
              <div className="results-data-body">
                <p><strong>Active Terminal Station:</strong> {trackingResult.location}</p>
                <p><strong>Estimated Delivery Window:</strong> {trackingResult.ETA}</p>
                <p><strong>Consolidation Cargo Batch:</strong> {trackingResult.batch}</p>
                <p className="results-description-paragraph"><strong>Agent Manifest Logs:</strong> {trackingResult.details}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= REAL-WORLD STEP LOGISTICS TIMELINE ================= */}
      <section className="transit-pipeline-timeline-section">
        <div className="shipping-section-title-box">
          <h2>Our Verified Cross-Border Shipping Pipeline</h2>
          <p>A trusted, end-to-end logistics lane ensuring safe transport for apparel, footwear, and designer bags.</p>
          <div className="shipping-decorative-line"></div>
        </div>

        <div className="pipeline-timeline-flow">
          
          <div className="pipeline-step-node">
            <div className="pipeline-badge-icon"><FaWarehouse /></div>
            <div className="pipeline-content-card">
              <h3>01. Consolidation Hub (Dar es Salaam)</h3>
              <p>Your items are collected directly from primary trading districts or ports in Tanzania. Goods are categorized by type, securely packed into uniform containers, and logged into the shipping database.</p>
            </div>
          </div>

          <div className="pipeline-step-node">
            <div className="pipeline-badge-icon"><FaRoute /></div>
            <div className="pipeline-content-card">
              <h3>02. Secure Highway Freight Transit</h3>
              <p>Vehicles leave the coast via the central transport artery. Our container trucks maintain strict schedules to optimize road hours across regional hubs before reaching the border boundaries.</p>
            </div>
          </div>

          <div className="pipeline-step-node">
            <div className="pipeline-badge-icon"><FaPassport /></div>
            <div className="pipeline-content-card">
              <h3>03. Customs Clearance Handling (Rusumo Border)</h3>
              <p>Our designated clearing agents process declarations directly at the Rusumo One-Stop Border Post. We use the East African Single Customs Territory (SCT) framework to speed up tax clearances and prevent border bottlenecks.</p>
            </div>
          </div>

          <div className="pipeline-step-node">
            <div className="pipeline-badge-icon"><FaTruckLoading /></div>
            <div className="pipeline-content-card">
              <h3>04. Final Offloading Station (Kigali)</h3>
              <p>Containers arrive safely at our primary terminal hub in Nyabugogo, Kigali. Batches are sorted out instantly, and we handle final door-to-boutique distribution across the capital completely free of charge.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= AUTHORITATIVE FAQ SECTION ================= */}
      <section className="logistics-faq-accordion-section">
        <div className="shipping-section-title-box">
          <h2>Logistics & Border Regulations FAQ</h2>
          <p>Important clearing information for retail merchants and commercial boutique networks.</p>
          <div className="shipping-decorative-line"></div>
        </div>

        <div className="faq-questions-grid">
          <div className="faq-question-box">
            <h4><FaQuestionCircle className="faq-q-icon" /> How long does shipping take from Dar es Salaam to Kigali?</h4>
            <p>Standard cargo consolidation, continuous highway transit, customs clearing checks, and terminal sorting take between **5 to 7 operational business days**.</p>
          </div>

          <div className="faq-question-box">
            <h4><FaQuestionCircle className="faq-q-icon" /> Are customs duties included in the catalog price?</h4>
            <p>Yes. The prices listed across our digital store catalogs cover cross-border border clearance handling and customs documentation protocols managed directly by our legal field agents.</p>
          </div>

          <div className="faq-question-box">
            <h4><FaQuestionCircle className="faq-q-icon" /> Is local delivery within Kigali completely free?</h4>
            <p>Yes, absolutely. Once your clothes, shoes, or bags are cleared and offloaded at our Nyabugogo logistics terminal, we handle direct drop shipping straight to your commercial retail shop doors or warehouse stalls in Kigali for zero extra delivery fees.</p>
          </div>

          <div className="faq-question-box">
            <h4><FaQuestionCircle className="faq-q-icon" /> How are premium bags and leather footwear secured against damage?</h4>
            <p>We pack clothes and textiles separately from rigid items. High-tier designer bags and leather footwear are stored inside protective shock-resistant polymer containers to safeguard them against compression and mechanical friction during transit.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShippingInfo;

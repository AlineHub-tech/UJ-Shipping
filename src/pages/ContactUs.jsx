import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaMobileAlt, 
  FaInstagram, 
  FaPaperPlane, 
  FaWarehouse, 
  FaPassport, 
  FaTruckLoading 
} from 'react-icons/fa';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !messageBody) {
      return alert('Please completely populate all communication form fields!');
    }
    alert(`Thank you, ${senderName}! Your dispatch inquiry has been routed to our regional agents. We will reply via email shortly.`);
    setSenderName('');
    setSenderEmail('');
    setMessageBody('');
  };

  return (
    <div className="contact-view-wrapper">
      
      {/* ================= HERO COVER AREA ================= */}
      <div className="contact-hero-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-text-box">
          <span className="contact-brand-pill">EAC Help Center Support</span>
          <h1>Connect With Our Cargo Terminals</h1>
          <p>Get immediate logistical support regarding departures from Dar es Salaam or arrivals at our Kigali warehouse terminals.</p>
        </div>
      </div>

      {/* ================= PRIMARY COMMUNICATIONS SECTION ================= */}
      <section className="contact-communications-split-section">
        <div className="contact-split-grid-container">
          
          {/* Left Column: Direct Phone Hotlines & Directories */}
          <div className="contact-directory-column-info">
            <span className="directory-pre-title">Regional Directories</span>
            <h2>Terminal Station Hotlines</h2>
            <p className="directory-explainer-text">
              Reach out directly to our field logistics supervisors and clearance agents operating inside your target economic zone for immediate transit support.
            </p>

            <div className="directory-cards-stack">
              
              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <FaPhoneAlt />
                </div>
                <div className="directory-card-text-block">
                  <h3>Tanzania Port Dispatch Hotlines</h3>
                  <p className="phone-digit-highlight">+255 746 880 993</p>
                  <p className="phone-digit-highlight">+255 795 298 877</p>
                  <span>Operating Warehouse Hours: Mon - Sat (8 AM - 6 PM)</span>
                </div>
              </div>

              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <FaMobileAlt />
                </div>
                <div className="directory-card-text-block">
                  <h3>Rwanda Terminal Station Hotline</h3>
                  <p className="phone-digit-highlight">+250 786 257 303</p>
                  <span>Nyabugogo Warehouse Operations: 24/7 Arrivals</span>
                </div>
              </div>

              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <FaInstagram />
                </div>
                <div className="directory-card-text-block">
                  <h3>Social Channels & Logistics Media</h3>
                  <p className="social-handle-tag">@jean.de.dieu80425</p>
                  <span>Follow for updates on shipping drops and container batches.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Email Messaging Portal */}
          <div className="contact-messaging-form-wrapper">
            <div className="messaging-form-header">
              <h3>Transmit Direct Cargo Manifest Inquiry</h3>
              <p>Need custom procurement tracking support? Drop our core clearance desk an explicit email notification payload below.</p>
            </div>

            <form onSubmit={handleFormSubmission} className="interactive-contact-form-node">
              <div className="form-input-field-block">
                <label htmlFor="contact-sender-name">Your Full Professional Name:</label>
                <input 
                  type="text" 
                  id="contact-sender-name"
                  placeholder="e.g., Keza Alice" 
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-input-field-block">
                <label htmlFor="contact-sender-email">Target Email Notification Address:</label>
                <input 
                  type="email" 
                  id="contact-sender-email"
                  placeholder="e.g., alice@example.com" 
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="form-input-field-block">
                <label htmlFor="contact-sender-message">Elaborate Detailed Logistical Inquiry:</label>
                <textarea 
                  id="contact-sender-message"
                  placeholder="Elaborate details regarding your garments, size profile breakdowns, or target arrival dates..." 
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-form-messaging-submit">
                Transmit Manifest Message <FaPaperPlane className="plane-icon" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= CORRIDOR MAP ALIGNMENT BLOCK ================= */}
      <section className="cross-border-corridor-map-section">
        <div className="map-text-header-box">
          <h2>Central EAC Highway Transit Corridor</h2>
          <p>Our operational highway lane runs continuously from the Port of Dar es Salaam straight through the Rusumo Border Post into Kigali.</p>
        </div>
        <div className="mock-map-visual-placeholder">
          <div className="map-inner-tint-overlay">
            
            <div className="map-floating-pin pin-dar">
              <FaWarehouse className="map-pin-icon" /> 
              <span>Dar es Salaam Consolidated Terminal</span>
            </div>
            
            <div className="map-corridor-connecting-line"></div>
            
            <div className="map-floating-pin pin-border">
              <FaPassport className="map-pin-icon" /> 
              <span>Rusumo Clearing Post</span>
            </div>
            
            <div className="map-corridor-connecting-line"></div>
            
            <div className="map-floating-pin pin-kigali">
              <FaTruckLoading className="map-pin-icon" /> 
              <span>Kigali Destination Station</span>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;

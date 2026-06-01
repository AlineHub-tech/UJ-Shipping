import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShip, FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, 
  FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaShieldAlt, FaTruck, FaCode, FaTruckMoving 
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [newsEmail, setNewsEmail] = useState('');

  const captureNewsletter = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    alert(`Success! ${newsEmail} registered to U & J Shipping departures tracker channel.`);
    setNewsEmail('');
  };

  return (
    <footer className="global-brand-footer">
      <div className="footer-top-grid-container">
        
        {/* Column 1: Core Corporate Segment Summary */}
        <div className="footer-meta-block">
          {/* Logo ihuje neza na Navbar */}
          <div className="footer-logo-area">
            <div className="footer-logo-sphere">
              <FaShip className="footer-vector-ship" />
              <div className="footer-vector-truck">
                <FaTruckMoving />
              </div>
            </div>
            <div className="footer-logo-text">
              <h3>U & J</h3>
              <p>CROSS-BORDER LOGISTICS</p>
            </div>
          </div>
          <p className="footer-brand-description">
            Your premium EAC trade corridor logistics partner. Transporting high-quality garments, 
            footwear, and luxury bags directly from corporate hubs in Dar es Salaam straight to Kigali stations securely.
          </p>
          <div className="footer-social-matrix">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-matrix-link" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-matrix-link" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Column 2: Quick Links Directory Map */}
        <div className="footer-links-block">
          <h4 className="footer-block-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/"><FaAngleRight className="link-arrow" /> Home Space</Link></li>
            <li><Link to="/shop"><FaAngleRight className="link-arrow" /> Digital Shop</Link></li>
            <li><Link to="/shipping-info"><FaAngleRight className="link-arrow" /> Shipping Info</Link></li>
            <li><Link to="/about"><FaAngleRight className="link-arrow" /> About Network</Link></li>
            <li><Link to="/contact"><FaAngleRight className="link-arrow" /> Contact Desk</Link></li>
          </ul>
        </div>

        {/* Column 3: Regional Terminals Office Directory */}
        <div className="footer-links-block">
          <h4 className="footer-block-heading">Our Stations</h4>
          <ul className="footer-contact-matrix">
            <li>
              <div className="contact-icon-wrapper"><FaMapMarkerAlt /></div>
              <span><strong>Dar es Salaam:</strong> Commercial Port Terminal, Tanzania</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><FaMapMarkerAlt /></div>
              <span><strong>Kigali Hub:</strong> Nyabugogo Warehouse, Rwanda</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><FaPhoneAlt /></div>
              <span>+255 746 880 993<br />+250 786 257 303</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Box Capture Form */}
        <div className="footer-newsletter-block">
          <h4 className="footer-block-heading">Logistics Updates</h4>
          <p className="newsletter-explainer">Subscribe to lock down immediate cargo departures data logs.</p>
          <form className="footer-newsletter-form" onSubmit={captureNewsletter}>
            <div className="newsletter-input-group">
              <FaEnvelope className="input-context-icon" />
              <input 
                type="email" 
                placeholder="Enter email address..." 
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="footer-subscribe-btn">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Reconciled Base Copyright Bar */}
      <div className="footer-copyright-bar">
        <div className="copyright-bar-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>U & J Shipping & Trading</strong>. All Rights Reserved.
          </p>
          
          {/* Link ya ByteFlow Ltd yashyizwemo neza hano */}
          <a 
            href="https://byte-flow-ltd.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="developer-attribution-link"
          >
            <div className="developer-attribution-pill">
              <FaCode className="dev-icon" /> 
              <span>Developed by <strong className="dev-brand-highlight">ByteFlow Ltd</strong></span>
            </div>
          </a>

          <div className="copyright-trust-badges">
            <span><FaShieldAlt className="badge-icon" /> Secure Transit</span>
            <span><FaTruck className="badge-icon" /> Free Kigali Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

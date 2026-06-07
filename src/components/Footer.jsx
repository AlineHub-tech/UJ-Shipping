import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, 
  FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaShieldAlt, FaTruck, FaCode 
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [newsEmail, setNewsEmail] = useState('');

  const captureNewsletter = (e) => {
    e.preventDefault();
    if (!newsEmail) return;
    alert(`Thanks! ${newsEmail} is now subscribed to U & J Shop updates.`);
    setNewsEmail('');
  };

  return (
    <footer className="global-brand-footer">
      <div className="footer-top-grid-container">

        <div className="footer-meta-block">
          <div className="footer-logo-area">
            <div className="footer-logo-sphere">
              <span className="footer-logo-mark">U</span>
              <span className="footer-logo-divider">&</span>
              <span className="footer-logo-mark footer-logo-mark-j">J</span>
            </div>
            <div className="footer-logo-text">
              <h3>U & J Shop</h3>
              <p>Fashion delivery from Muhanga to Kigali</p>
            </div>
          </div>
          <p className="footer-brand-description">
            Boutique-ready apparel, matching sets, dresses, and bags delivered free across the Muhanga–Kigali corridor with fast WhatsApp checkout and secure handling.
          </p>
          <div className="footer-social-matrix">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://wa.me/250786257303" target="_blank" rel="noopener noreferrer" className="social-matrix-link" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-links-block">
          <h4 className="footer-block-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/"><FaAngleRight className="link-arrow" /> Home</Link></li>
            <li><Link to="/shop"><FaAngleRight className="link-arrow" /> Shop</Link></li>
            <li><Link to="/about"><FaAngleRight className="link-arrow" /> About Us</Link></li>
            <li><Link to="/shipping-info"><FaAngleRight className="link-arrow" /> Shipping Info</Link></li>
            <li><Link to="/contact"><FaAngleRight className="link-arrow" /> Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-block">
          <h4 className="footer-block-heading">Contact</h4>
          <ul className="footer-contact-matrix">
            <li>
              <div className="contact-icon-wrapper"><FaWhatsapp /></div>
              <span><strong>WhatsApp:</strong> +250 786 257 303</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><FaPhoneAlt /></div>
              <span><strong>Call Us:</strong> +250 786 257 303</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><FaEnvelope /></div>
              <span><strong>Email:</strong> hello@ujshop.rw</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><FaMapMarkerAlt /></div>
              <span><strong>Delivery:</strong> Muhanga to Kigali free route</span>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter-block">
          <h4 className="footer-block-heading">Stay Updated</h4>
          <p className="newsletter-explainer">Get new arrival alerts, free delivery updates, and exclusive offers sent straight to your inbox.</p>
          <form className="footer-newsletter-form" onSubmit={captureNewsletter}>
            <div className="newsletter-input-group">
              <FaEnvelope className="input-context-icon" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="footer-subscribe-btn">Join Updates</button>
          </form>
        </div>

      </div>

      <div className="footer-copyright-bar">
        <div className="copyright-bar-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>U & J Shop</strong>. Free delivery between Muhanga and Kigali.
          </p>
          <a 
            href="https://byte-flow-ltd.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="developer-attribution-link"
          >
            <div className="developer-attribution-pill">
              <FaCode className="dev-icon" /> 
              <span>Built by <strong className="dev-brand-highlight">ByteFlow Ltd</strong></span>
            </div>
          </a>
          <div className="copyright-trust-badges">
            <span><FaShieldAlt className="badge-icon" /> Secure shopping</span>
            <span><FaTruck className="badge-icon" /> Free Kigali delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

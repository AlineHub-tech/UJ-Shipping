import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Sparkles, 
  Target, 
  CheckCircle, 
  Shirt, 
  Users, 
  Compass 
} from 'lucide-react';
import '../styles/AboutUs.css';

import AboutHeroImg from '../assets/23.jpeg';
import VisionImg from '../assets/4 (4).jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`uj-about-view ${isVisible ? 'uj-page-active' : ''}`}>
      
      {/* ================= SECTION 1: HERO TEXT HEADER BANNER ================= */}
      <section className="uj-about-hero-banner">
        <img src={AboutHeroImg} alt="U & J Boutique Fashion Hub" className="uj-about-hero-bg" />
        <div className="uj-about-hero-overlay"></div>
        <div className="uj-about-hero-content">
          <span className="uj-about-badge"><Sparkles size={14} /> Redefining Apparels</span>
          <h1>About U & J Shop</h1>
          <p>Connecting trendsetters from Muhanga to Kigali with premium boutique collections and zero delivery fees.</p>
        </div>
      </section>

      {/* ================= SECTION 2: WHAT WE DO MATRIX ================= */}
      <section className="uj-about-core-section">
        <div className="uj-about-container">
          <div className="uj-about-split-grid">
            
            <div className="uj-about-text-column">
              <span className="uj-about-pre-title">Who We Are & What We Do</span>
              <h2>Your Ultimate Destination For Premium Boutique Drops</h2>
              <div className="uj-about-line"></div>
              <p className="uj-about-main-paragraph">
                At <strong>U & J Shop</strong>, we curate high-end commercial and luxury textiles designed to elevate your everyday look. We specialize in bringing you gorgeous <strong>Elegant Dresses</strong>, casual and urban <strong>Matching Sets</strong>, premium quality <strong>Valise Sweaters</strong>, and head-turning <strong>Designer Handbags</strong>.
              </p>
              <p className="uj-about-sub-paragraph">
                We eliminated the stressful barriers of traditional shopping. Through our modern single-tap WhatsApp checkout pipeline, you can order your favorite fit instantly and enjoy guaranteed <strong>Free Door-to-Door Delivery</strong> straight from our operations base in Muhanga directly to your doorstep anywhere in Kigali.
              </p>

              <div className="uj-about-mini-features">
                <div className="uj-mini-feature-node">
                  <div className="uj-mini-icon"><Shirt size={18} /></div>
                  <div className="uj-mini-txt">
                    <h4>Boutique Condition Inspection</h4>
                    <p>Every dress, tracksuit, and bag undergoes strict layout handling before packaging.</p>
                  </div>
                </div>
                <div className="uj-mini-feature-node">
                  <div className="uj-mini-icon"><CheckCircle size={18} /></div>
                  <div className="uj-mini-txt">
                    <h4>Guaranteed Safe Transit</h4>
                    <p>No item compression. Your items arrive fresh, pristine, and ready to wear.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="uj-about-image-column">
              <div className="uj-about-img-wrapper">
                <img src={VisionImg} alt="U & J Shop Core Vision Outfit" className="uj-about-side-img" />
                <div className="uj-about-floating-card-metric">
                  <h3>100%</h3>
                  <span>Verified Buyer Satisfaction</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: TARGET CLIENTS & INTENTIONS ================= */}
      <section className="uj-about-target-vision-strip">
        <div className="uj-about-container">
          <div className="uj-center-header-block">
            <span className="uj-badge-pill-header"><Target size={14} /> Our Mission & Focus</span>
            <h2 className="uj-section-main-title">Our Target Audience & Core Vision</h2>
            <div className="uj-decorative-bar-line"></div>
          </div>

          <div className="uj-target-cards-grid">
            
            <div className="uj-target-card-box">
              <div className="uj-target-icon-sphere"><Users size={24} /></div>
              <h3>Our Target Clients</h3>
              <p>
                We serve corporate professionals, fashion-forward youth, modern mothers, and style enthusiasts who refuse to compromise on apparel quality. Whether you are dressing up for an executive corporate meeting, a high-society celebration gala, or a casual weekend brunch, we have your perfect statement drop.
              </p>
            </div>

            <div className="uj-target-card-box">
              <div className="uj-target-icon-sphere"><Compass size={24} /></div>
              <h3>Our Core Intentions</h3>
              <p>
                Our core goal is to make luxury and trending boutique fashion accessible, transparent, and effortlessly swift. By establishing a direct dedicated shipping pipeline from Muhanga straight to Kigali hubs, we bridge the gap between quality supply and fast local delivery demands with total integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CALL TO ACTION CONVERTING FOOTER ================= */}
      <section className="uj-about-cta-banner">
        <div className="uj-about-cta-inner">
          <h2>Ready To Discover Your Next Favorite Fit?</h2>
          <p>Browse our completely updated catalog divided across 22 comprehensive premium style variant groups right now.</p>
          <Link to="/shop" className="uj-about-primary-btn">
            Explore Full Shop Catalog <ShoppingBag size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;

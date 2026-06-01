import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShoppingBag, FaClock, FaTruckMoving, FaShieldAlt, FaBolt, 
  FaTshirt, FaBriefcase, FaArrowRight, FaBoxes, FaHeadset,
  FaStar, FaGlobe, FaTags
} from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import HeroSlider from '../components/HeroSlide';

import '../styles/Home.css'; 

// Import static assets safely
import Image10 from '../assets/10.png';
import Image12 from '../assets/12.png';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';

const mainCategories = [
  { id: 'apparel', name: "Designer Apparel", count: "140+ Arrivals", icon: <FaTshirt />, img: Image2, delay: '0.1s' },
  { id: 'shoes', name: "Premium Footwear", count: "85+ Products", icon: <GiRunningShoe />, img: Image3, delay: '0.2s' },
  { id: 'bags', name: "Luxury Bags & Purses", count: "60+ Variations", icon: <FaBriefcase />, img: Image4, delay: '0.3s' }
];

const trendingDrops = [
  { id: 1, name: 'Premium Classic Fit Shirt', img: Image5, price: 18500, rating: 4.8, badging: 'Best Seller', delay: '0.1s' },
  { id: 2, name: 'Street Utility Cargo Pants', img: Image6, price: 24000, rating: 4.6, badging: 'New', delay: '0.2s' },
  { id: 3, name: 'Elite Breathable Sneakers', img: Image3, price: 45000, rating: 4.9, badging: 'Hot Deal', delay: '0.3s' },
  { id: 4, name: 'Structured Leather Tote', img: Image4, price: 29000, rating: 4.5, badging: 'Trending', delay: '0.4s' }
];

const Home = () => {
  // Real-time animation trigger implementation on component mount
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-view-wrapper ${isVisible ? 'page-loaded' : ''}`}>
      
      {/* ================= SECTION 1: MASTER HERO INTRO SYSTEM ================= */}
      <div className="homepage-hero-corridor-grid reveal-fade-in">
        <div className="hero-slider-main-column">
          <HeroSlider />
        </div>
        <div className="hero-side-promotions-column">
          <div className="side-promo-widget bg-emerald-tint reveal-item slide-in-right" style={{ animationDelay: '0.2s' }}>
            <span className="widget-tag">Customs Clearance Lane</span>
            <h3>Dar es Salaam ➔ Kigali Manifests</h3>
            <p>Consolidated cargo batches processing weekly with zero hidden customs duty overheads.</p>
            <Link to="/shipping-info" className="widget-link">Track Batches <FaArrowRight className="link-icon-move" /></Link>
          </div>
          <div className="side-promo-widget bg-slate-tint reveal-item slide-in-right" style={{ animationDelay: '0.4s' }}>
            <span className="widget-tag yellow-txt">VIP Procurement</span>
            <h3>Direct Wholesale Agents</h3>
            <p>Connect instantly with our local dispatchers operating inside major ports for customized batch sourcing.</p>
            <Link to="/contact" className="widget-link">Message Desk <FaArrowRight className="link-icon-move" /></Link>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: TRUST METRICS HORIZONTAL STRIP ================= */}
      <section className="logistics-value-metrics-section reveal-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="section-grid-container">
          <div className="metric-card-box hover-lift">
            <div className="metric-icon-sphere PulseAnimation"><FaTruckMoving /></div>
            <div className="metric-text-column">
              <h3>Free Local Delivery</h3>
              <p>Enjoy guaranteed zero distribution costs right to your shop doors inside Kigali boundaries.</p>
            </div>
          </div>
          <div className="metric-card-box hover-lift">
            <div className="metric-icon-sphere PulseAnimation"><FaShieldAlt /></div>
            <div className="metric-text-column">
              <h3>Secure Transit Networks</h3>
              <p>Your textiles, shoes, and fragile leather goods are heavily padded against any transit compression vectors.</p>
            </div>
          </div>
          <div className="metric-card-box hover-lift">
            <div className="metric-icon-sphere PulseAnimation"><FaGlobe /></div>
            <div className="metric-text-column">
              <h3>East African Synergy</h3>
              <p>Operating transparently within legal EAC frameworks for fluid central corridor shipments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE CATEGORIES MATRIX ================= */}
      <section className="shop-categories-showcase-section">
        <div className="section-header-alignment reveal-item item-fade-up">
          <span className="section-pre-title">EAC Direct Imports</span>
          <h2 className="section-main-heading">Shop By Verified Category</h2>
          <div className="heading-decorative-separator slide-expand"></div>
        </div>

        <div className="categories-display-grid">
          {mainCategories.map((category) => (
            <div key={category.id} className="premium-category-display-card reveal-item item-fade-up" style={{ animationDelay: category.delay }}>
              <div className="category-image-container">
                <img src={category.img} alt={category.name} className="category-parallax-image" />
                <div className="category-tint-overlay"></div>
              </div>
              <div className="category-card-floating-info">
                <div className="category-badge-pill">
                  <span className="react-category-icon-pulse">{category.icon}</span> 
                  <span>{category.count}</span>
                </div>
                <h3>{category.name}</h3>
                <Link to="/shop" className="category-action-link">
                  Browse Grid <FaArrowRight className="link-arrow-icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: LIVE TRENDING CATALOG PREVIEW ================= */}
      <section className="trending-catalog-preview-section">
        <div className="section-header-alignment reveal-item item-fade-up">
          <span className="section-pre-title">Curated Inventory</span>
          <h2 className="section-main-heading">Trending Cargo Releases</h2>
          <div className="heading-decorative-separator slide-expand"></div>
        </div>

        <div className="catalog-preview-products-grid">
          {trendingDrops.map((product) => (
            <Link to="/shop" className="home-store-product-card reveal-item item-fade-up" key={product.id} style={{ animationDelay: product.delay }}>
              <div className="product-card-image-box">
                <img src={product.img} alt={product.name} loading="lazy" className="zoom-subtle" />
                <div className="product-badge-floating-tag shimmer-effect">
                  <span>{product.badging}</span>
                </div>
              </div>
              <div className="product-card-body">
                <div className="product-card-header-row">
                  <h3>{product.name}</h3>
                  <span className="star-rating-pill"><FaStar /> {product.rating}</span>
                </div>
                <div className="product-card-footer-row">
                  <span className="price-tag-frw">{product.price.toLocaleString()} RWF</span>
                  <span className="order-btn-shortcut">Order Now <FaArrowRight className="btn-arrow-slide" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: SPLIT CALL TO ACTIONS BANNERS ================= */}
      <section className="split-action-promotions-section">
        <div className="promo-banner-card banner-green-gradient reveal-item slide-in-left">
          <div className="promo-content-text">
            <h2>Real-time Freight Updates</h2>
            <p>Track exactly where the fleet containers are currently clearing customs boundary checks.</p>
            <Link to="/shipping-info" className="btn btn-promo-white button-glow">Logistics Manifests</Link>
          </div>
          <div className="promo-icon-bg float-animation"><FaBoxes /></div>
        </div>
        <div className="promo-banner-card banner-charcoal-gradient reveal-item slide-in-right">
          <div className="promo-content-text">
            <h2>Boutique Direct Sourcing</h2>
            <p>Want custom color drops or size allocations? Contact our Dar es Salaam headquarters.</p>
            <Link to="/contact" className="btn btn-promo-emerald button-glow">Message Clearance Desk</Link>
          </div>
          <div className="promo-icon-bg float-animation"><FaHeadset /></div>
        </div>
      </section>

    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Zap,
  Sparkles,
  Heart,
  Star,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import HeroSlider from '../components/HeroSlide';
import OptimizedImage from '../components/OptimizedImage';
import '../styles/Home.css';

import Image1 from '../assets/23.jpeg';
import Image2 from '../assets/4 (4).jpg';
import Image3 from '../assets/22 (5).jpg';
import Image4 from '../assets/2 (4).jpg';
import Image5 from '../assets/2 (8).jpg';
import Image6 from '../assets/2 (1).jpg';

const categoryCards = [
  {
    id: 'elegant-dresses',
    title: 'Elegant Dresses',
    description: 'Boutique dresses, evening silhouettes and premium tailoring.',
    count: '140+ Items',
    image: Image4,
    webp: '2-4.webp'
  },
  {
    id: 'matching-sets',
    title: 'Matching Sets',
    description: 'Coordinated high-end sets for polished everyday styling.',
    count: '95+ Outfits',
    image: Image2,
    webp: '4-4.webp'
  },
  {
    id: 'valise-sweaters',
    title: 'Valise Sweaters',
    description: 'Luxury knitwear designed for comfort with a boutique edge.',
    count: '70+ Pieces',
    image: Image3,
    webp: '22-5.webp'
  },
  {
    id: 'designer-handbags',
    title: 'Designer Handbags',
    description: 'Statement handbags and premium carryalls for every occasion.',
    count: '110+ Styles',
    image: Image1,
    webp: '23.webp'
  }
];

const trendingDrops = [
  {
    id: 'trend-1',
    title: 'Premium Floral Boutique Dress',
    price: 25000,
    label: 'Best Seller',
    image: Image5,
    webp: '2-8.webp',
    rating: 4.9
  },
  {
    id: 'trend-2',
    title: 'Urban Casual Matching Tracksuit',
    price: 32000,
    label: 'New Arrival',
    image: Image6,
    webp: '2-1.webp',
    rating: 4.8
  },
  {
    id: 'trend-3',
    title: 'Classic Valise Knit Sweater',
    price: 18000,
    label: 'Hot Deal',
    image: Image3,
    webp: '22-5.webp',
    rating: 4.7
  },
  {
    id: 'trend-4',
    title: 'Luxury Leather Textured Tote Bag',
    price: 28000,
    label: 'Trending',
    image: Image1,
    webp: '23.webp',
    rating: 4.9
  }
];

const faqItems = [
  {
    question: 'How long does delivery take from Muhanga to Kigali?',
    answer:
      'We operate daily dispatches. Orders locked before 12:00 PM are delivered to your Kigali doorstep the same day. Afternoon orders arrive within 24 hours.'
  },
  {
    question: 'Is the doorstep delivery really free?',
    answer:
      'Yes. There are no hidden shipping costs or rider handling fees on our entire Muhanga to Kigali route. Delivery is fully covered.'
  },
  {
    question: 'How do I process payment?',
    answer:
      'Enter your order details in the checkout form and our system sends a secure WhatsApp manifest to +250786257303. Payment is confirmed using standard Mobile Money security verification.'
  }
];

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="uj-premium-home">
      <section className="uj-hero-container-block">
        <HeroSlider />
      </section>

      <section className="uj-metrics-wrapper-bar">
        <div className="uj-metrics-inner-grid">
          <article className="uj-metric-premium-card">
            <div className="uj-metric-icon-shell"><Truck size={22} /></div>
            <div>
              <h3>Free Express Route</h3>
              <p>Zero-cost secure delivery from Muhanga to Kigali doorsteps with verified route coverage.</p>
            </div>
          </article>
          <article className="uj-metric-premium-card">
            <div className="uj-metric-icon-shell"><ShieldCheck size={22} /></div>
            <div>
              <h3>Verified Boutique Quality</h3>
              <p>Every piece receives boutique-grade handling, quality control, and condition inspection.</p>
            </div>
          </article>
          <article className="uj-metric-premium-card">
            <div className="uj-metric-icon-shell"><Zap size={22} /></div>
            <div>
              <h3>Instant Checkout</h3>
              <p>Single-tap ordering funnels your details directly to WhatsApp for immediate processing.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="uj-steps-process-section">
        <div className="uj-center-header-block">
          <span className="uj-badge-pill-header">How To Order</span>
          <h2 className="uj-section-main-title">U & J Shop Order Journey</h2>
          <div className="uj-decorative-bar-line" />
        </div>

        <div className="uj-steps-container-grid">
          <article className="uj-step-node">
            <div className="uj-step-marker">01</div>
            <h3>Pick Your Apparel</h3>
            <p>Browse the catalog, choose your size, and select your preferred color and finish.</p>
          </article>
          <article className="uj-step-node">
            <div className="uj-step-marker">02</div>
            <h3>Fill Delivery Details</h3>
            <p>Tap the order button to open the quick checkout modal and enter your address and contact information.</p>
          </article>
          <article className="uj-step-node">
            <div className="uj-step-marker">03</div>
            <h3>Get WhatsApp Delivery</h3>
            <p>The form bundles your order automatically and sends the manifest straight to our WhatsApp sales desk.</p>
          </article>
        </div>
      </section>

      <section className="uj-category-showcase-wrapper">
        <div className="uj-center-header-block">
          <span className="uj-badge-pill-header"><Sparkles size={14} /> Category Showcase</span>
          <h2 className="uj-section-main-title">Shipping By Category</h2>
          <p className="uj-section-subtitle">4 handpicked premium lines designed for a seamless boutique shopping experience.</p>
          <div className="uj-decorative-bar-line" />
        </div>

        <div className="uj-category-luxury-grid">
          {categoryCards.map((category) => (
            <article className="uj-category-luxury-card" key={category.id}>
              <div className="uj-cat-image-frame">
              <OptimizedImage
                src={category.image}
                alt={category.title}
                className="uj-cat-zoom-img"
                webpFileName={category.webp}
              />
              <span className="uj-cat-floating-count">{category.count}</span>
            </div>
              <div className="uj-cat-content-frame">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to="/shop" className="uj-cat-action-premium-btn">
                  Explore Collection
                  <span className="uj-arrow-circle"><ArrowRight size={14} /></span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="uj-trending-catalog-wrapper">
        <div className="uj-center-header-block">
          <span className="uj-badge-pill-header">Trending Releases</span>
          <h2 className="uj-section-main-title">Live Product Gallery</h2>
          <div className="uj-decorative-bar-line" />
        </div>

        <div className="uj-trending-products-matrix">
          {trendingDrops.map((product) => (
            <article className="uj-premium-product-node" key={product.id}>
              <div className="uj-prod-media-box">
                <OptimizedImage
                  src={product.image}
                  alt={product.title}
                  className="uj-prod-media-box-img"
                  webpFileName={product.webp}
                />
                <span className="uj-prod-floating-tag">{product.label}</span>
                <button className="uj-prod-wishlist-circle" aria-label="Save item to wishlist">
                  <Heart size={16} />
                </button>
              </div>
              <div className="uj-prod-body-box">
                <div className="uj-prod-header-meta">
                  <h3>{product.title}</h3>
                  <span className="uj-prod-rating-star">
                    <Star size={14} fill="#2e7d32" color="#2e7d32" /> {product.rating}
                  </span>
                </div>
                <div className="uj-prod-footer-meta">
                  <span className="uj-prod-price-tag">{product.price.toLocaleString()} RWF</span>
                  <Link to="/shop" className="uj-prod-instant-btn">
                    Order Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="uj-faqs-wrapper">
        <div className="uj-center-header-block">
          <span className="uj-badge-pill-header"><HelpCircle size={14} /> FAQs</span>
          <h2 className="uj-section-main-title">Frequently Asked Questions</h2>
          <div className="uj-decorative-bar-line" />
        </div>

        <div className="uj-faqs-container">
          {faqItems.map((item, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className={`uj-faq-item ${isOpen ? 'uj-faq-open' : ''}`}>
                <button
                  type="button"
                  className="uj-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <div className="uj-faq-icon-shell"><MessageSquare size={16} /></div>
                  <span>{item.question}</span>
                  <span className="uj-faq-toggle-mark">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="uj-faq-answer-wrap" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
                  <p className="uj-faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="uj-cta-banner-section">
        <div className="uj-cta-banner-inner">
          <div>
            <p className="uj-cta-eyebrow">Free delivery across Muhanga to Kigali</p>
            <h2>Redefine Your Everyday Style Matrix</h2>
            <p className="uj-cta-copy">Browse boutique essentials, premium fits, and a quick checkout experience built for modern Kigali shoppers.</p>
          </div>
          <Link to="/shop" className="uj-cta-action-btn">
            Browse Entire Shop Grid <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

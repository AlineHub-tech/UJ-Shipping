import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/HeroSlide.css';

// ================= FIXED IMAGE IMPORT LIFELINE SYSTEM =================
import Image1 from '../assets/14 (3).jpg';
import Image2 from '../assets/2 (4).jpg';
import Image3 from '../assets/1 (8).jpg';
import Image4 from '../assets/10 (2).jpg';

const slidesData = [
  {
    id: 1,
    title: "Luxury Dresses & Trendy Fashion drops",
    subtitle: "Muhanga ➔ Kigali | Fast Free Delivery",
    description: "Upgrade your wardrobe with our premium collection of elegant dresses and high-end boutique apparel selected just for you.",
    image: Image1
  },
  {
    id: 2,
    title: "Premium Matching Sets & Tracksuits",
    subtitle: "Streetwear & Casual Match Outfits",
    description: "Discover exclusive top-and-bottom clothing combinations. Perfectly tailored fits designed for maximum comfort and style.",
    image: Image2
  },
  {
    id: 3,
    title: "Designer Handbags & Premium Bags",
    subtitle: "U & J Premium Accessories Hub",
    description: "Complete your outfit with head-turning leather luxury accessories. High-quality designs delivered safely to your doorstep.",
    image: Image3
  },
  {
    id: 4,
    title: "Exclusive Valise & Smart Travel Bags",
    subtitle: "Heavy-Duty Quality Travel Goods",
    description: "Travel in absolute style and confidence with our durable, spacious luxury luggage containers and statement bags.",
    image: Image4
  }
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slide cycle switcher running seamlessly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="uj-hero-slider">
      {slidesData.map((slide, index) => {
        const isCurrent = index === activeIndex;
        return (
          <div 
            key={slide.id} 
            className={`uj-slide-item ${isCurrent ? 'uj-slide-active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="uj-slide-bg-img"
            />
            <div className="uj-slide-image-overlay" />
            <div className="uj-slide-content">
              <span className="uj-slide-badge">{slide.subtitle}</span>
              <h2 className="uj-slide-title">{slide.title}</h2>
              <p className="uj-slide-desc">{slide.description}</p>
              <div className="uj-slide-actions">
                <Link to="/shop" className="uj-btn uj-btn-green">
                  Explore Shop <ShoppingBag size={18} className="uj-icon-gap" />
                </Link>
                <Link to="/contact" className="uj-btn uj-btn-outline">
                  Contact Sales <MessageSquare size={18} className="uj-icon-gap" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Navigation Controls */}
      <button className="uj-slider-arrow arrow-left" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button className="uj-slider-arrow arrow-right" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      {/* Lower Indicator Dots */}
      <div className="uj-slider-dots">
        {slidesData.map((_, idx) => (
          <span 
            key={idx} 
            className={`uj-dot ${idx === activeIndex ? 'uj-dot-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

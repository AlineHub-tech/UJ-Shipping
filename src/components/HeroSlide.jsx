import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaClock, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/HeroSlide.css';

// Import amashusho yawe nk'uko wayahamagaye muri Home
import Image10 from '../assets/10.png';
import Image12 from '../assets/12.png';
import Image1 from '../assets/1.png';

const slidesData = [
  {
    id: 1,
    title: "Premium Wardrobe Importation",
    subtitle: "Dar es Salaam Hub ➔ Kigali Cargo Operations",
    description: "Transporting boutique clothing drops directly across the East African Community with top-tier customs clearance handling.",
    image: Image10
  },
  {
    id: 2,
    title: "Elite Footwear Distributions",
    subtitle: "Modern Styles Delivered Fast & Free",
    description: "Get immediate access to high-demand sneakers, boots, and official footwear with zero cross-border delivery fees.",
    image: Image12
  },
  {
    id: 3,
    title: "Designer Handbags & Bags",
    subtitle: "Safe Transit From Ports Straight To Your Door",
    description: "Secure logistics routes ensuring luxury and commercial leather accessories arrive at your station in flawless condition.",
    image: Image1
  }
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide trigger every 5 seconds
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
    <div className="hero-slider-wrapper">
      {slidesData.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide-node ${index === activeIndex ? 'slide-node-active' : ''}`}
          style={{ backgroundImage: `linear-gradient(to right, rgba(0, 122, 94, 0.9) 20%, rgba(26, 32, 44, 0.6) 100%), url(${slide.image})` }}
        >
          <div className="slide-inner-content">
            <span className="slide-badge-pill">{slide.subtitle}</span>
            <h2 className="slide-main-title">{slide.title}</h2>
            <p className="slide-main-desc">{slide.description}</p>
            <div className="slide-buttons-row">
              <Link to="/shop" className="btn btn-slide-white">
                Shop Now <FaShoppingBag className="icon-gap" />
              </Link>
              <Link to="/shipping-info" className="btn btn-slide-outline">
                Schedules <FaClock className="icon-gap" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Navigation Controls Arrow Buttons */}
      <button className="slider-arrow-btn arrow-left" onClick={prevSlide} aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button className="slider-arrow-btn arrow-right" onClick={nextSlide} aria-label="Next slide">
        <FaChevronRight />
      </button>

      {/* Indicator Capsule Dots */}
      <div className="slider-capsule-indicators">
        {slidesData.map((_, idx) => (
          <span 
            key={idx} 
            className={`indicator-dot ${idx === activeIndex ? 'dot-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaShip, 
  FaHome, 
  FaShoppingBag, 
  FaTruckMoving, 
  FaInfoCircle, 
  FaEnvelope, 
  FaShoppingCart,
  FaGlobeAfrica
} from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Guhindura navbar imiterere iyo umuntu arimo kumanuka (Scroll Effect)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className={`main-navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* ================= PRO E-COMMERCE LOGO SYSTEM ================= */}
        <Link to="/" className="navbar-brand-logo-container" onClick={closeMenu}>
          <div className="logo-graphics-sphere">
            <FaShip className="vector-icon-ship" />
            <div className="vector-badge-truck">
              <FaTruckMoving />
            </div>
            <div className="pulse-glow-effect"></div>
          </div>
          <div className="brand-text">
            <h1 className="logo-main-title">U & J</h1>
            <p className="logo-subtitle-tagline">CROSS-BORDER LOGISTICS</p>
          </div>
        </Link>

        {/* ================= NAVIGATION MENUS ================= */}
        <nav className={`navbar-navigation-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links-list">
            <li>
              <Link to="/" className={`nav-link-item ${isActive('/')}`} onClick={closeMenu}>
                <FaHome className="nav-link-icon" /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className={`nav-link-item ${isActive('/shop')}`} onClick={closeMenu}>
                <FaShoppingBag className="nav-link-icon" /> <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/shipping-info" className={`nav-link-item ${isActive('/shipping-info')}`} onClick={closeMenu}>
                <FaTruckMoving className="nav-link-icon" /> <span>Logistics Tracking</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link-item ${isActive('/about')}`} onClick={closeMenu}>
                <FaInfoCircle className="nav-link-icon" /> <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link-item ${isActive('/contact')}`} onClick={closeMenu}>
                <FaEnvelope className="nav-link-icon" /> <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* ================= ACTION UTILITIES BAR ================= */}
        <div className="navbar-utility-actions">
          {/* Live Indicator Status */}
          <div className="navbar-status-pill desktop-only">
            <FaGlobeAfrica className="status-globe-icon" />
            <span>EAC Live Hub</span>
          </div>

          {/* Premium Shopping Cart Utility */}
          <Link to="/shop" className="utility-btn-cart" aria-label="View Shopping Basket">
            <div className="cart-icon-wrapper">
              <FaShoppingCart />
              <span className="cart-badge-count">0</span>
            </div>
          </Link>
          
          {/* Mobile Menu Action Hamburger Toggle Trigger */}
          <button 
            className={`mobile-menu-hamburger ${isMenuOpen ? 'hamburger-active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

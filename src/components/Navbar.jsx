import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ShoppingBag, 
  Info, 
  Mail, 
  ShoppingCart, 
  Menu, 
  X, 
  MapPin 
} from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Guhindura navbar iyo umuntu arimo kumanuka (Scroll Effect)
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

  // Ensure mobile menu positions exactly below header when opened (fix large top gap)
  useEffect(() => {
    const menuEl = document.querySelector('.uj-navbar-menu');
    const headerEl = document.querySelector('.uj-navbar-header');
    if (!menuEl || !headerEl) return;

    const adjustTop = () => {
      const h = Math.round(headerEl.getBoundingClientRect().height);
      menuEl.style.top = `${h}px`;
    };

    if (isMenuOpen) {
      adjustTop();
      // force inline transform/opacity to avoid cascade timing issues
      menuEl.style.transform = 'translateY(0)';
      menuEl.style.opacity = '1';
      window.addEventListener('resize', adjustTop);
    } else {
      menuEl.style.top = '';
      menuEl.style.transform = '';
      menuEl.style.opacity = '';
      window.removeEventListener('resize', adjustTop);
    }

    return () => {
      window.removeEventListener('resize', adjustTop);
      if (menuEl) {
        menuEl.style.top = '';
        menuEl.style.transform = '';
        menuEl.style.opacity = '';
      }
    };
  }, [isMenuOpen]);

  return (
    <header className={`uj-navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="uj-navbar-container">
        
        {/* ================= NEW LOGO SYSTEM (U & J SHOP) ================= */}
        <Link to="/" className="uj-navbar-brand" onClick={closeMenu}>
          <div className="uj-logo-icon">
            <span className="logo-letter-u">U</span>
            <span className="logo-ampersand">&</span>
            <span className="logo-letter-j">J</span>
          </div>
          <div className="uj-brand-text">
            <h1 className="uj-logo-title">U & J <span className="title-highlight">Shop</span></h1>
            <p className="uj-logo-tagline">Muhanga - Kigali Delivery</p>
          </div>
        </Link>

        {/* ================= NAVIGATION MENUS ================= */}
        <nav className={`uj-navbar-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="uj-nav-links">
            <li>
              <Link to="/" className={`uj-nav-item ${isActive('/')}`} onClick={closeMenu}>
                <Home className="uj-nav-icon" size={18} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className={`uj-nav-item ${isActive('/shop')}`} onClick={closeMenu}>
                <ShoppingBag className="uj-nav-icon" size={18} /> <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={`uj-nav-item ${isActive('/about')}`} onClick={closeMenu}>
                <Info className="uj-nav-icon" size={18} /> <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`uj-nav-item ${isActive('/contact')}`} onClick={closeMenu}>
                <Mail className="uj-nav-icon" size={18} /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* ================= ACTION UTILITIES BAR ================= */}
        <div className="uj-navbar-actions">
          {/* Route Status Badge */}
          <div className="uj-route-badge desktop-only">
            <MapPin size={14} className="uj-pin-icon" />
            <span>Muhanga ➔ Kigali</span>
          </div>

          {/* Premium Shopping Cart Utility */}
          <Link to="/shop" className="uj-cart-btn" aria-label="View Shopping Basket" onClick={closeMenu}>
            <div className="uj-cart-icon-wrapper">
              <ShoppingCart size={22} />
              <span className="uj-cart-badge">0</span>
            </div>
          </Link>
          
          {/* Mobile Menu Toggle Trigger */}
          <button 
            className="uj-mobile-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;

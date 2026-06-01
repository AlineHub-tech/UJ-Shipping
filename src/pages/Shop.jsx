import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaAward, 
  FaWhatsapp, 
  FaTimes, 
  FaCheckCircle, 
  FaArrowRight,
  FaBoxes,
  FaTh,
  FaUser,
  FaPhoneAlt
} from 'react-icons/fa';
import '../styles/Shop.css';

// Import assets up front using standard ES Module syntax so Vite maps paths natively
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';

const staticImages = [Image1, Image2, Image3, Image4, Image5, Image6];

const generateBoutiqueInventory = () => {
  const customCategories = ['apparel', 'shoes', 'bags'];
  const qualityGrades = [
    'Grade A Boutique Premium', 
    'Heavy Duty Durable Canvas', 
    'Genuine Tanzanian Leather Craft', 
    'Waterproof Export High-Tier'
  ];
  
  const designBlueprints = [
    { name: "Classic Cotton Slim Fit Shirt", colors: ["Sky Blue", "White"], sizes: ["M", "L", "XL"] },
    { name: "Streetwear Cargo Utility Pants", colors: ["Khaki", "Black"], sizes: ["32", "34", "36"] },
    { name: "Urban Lightweight Designer Jacket", colors: ["Navy Blue"], sizes: ["L", "XL"] },
    { name: "Retro Breathable Mesh Sneakers", colors: ["Stealth Grey"], sizes: ["41", "42", "43"] },
    { name: "Official Leather Dress Loafers", colors: ["Mahogany", "Black"], sizes: ["40", "41", "42"] },
    { name: "All-Weather Heavy Duty Boots", colors: ["Olive Drab"], sizes: ["42", "43", "44"] },
    { name: "Premium Structured Leather Tote", colors: ["Tan", "Jet Black"], sizes: ["Medium Frame"] },
    { name: "Waterproof Commuter Tech Backpack", colors: ["Carbon Charcoal"], sizes: ["25L Standard"] },
    { name: "Luxury Chain Evening Clutch", colors: ["Champagne Gold"], sizes: ["Compact Scale"] }
  ];

  const completeCatalog = [];

  for (let i = 1; i <= 30; i++) {
    const blueprint = designBlueprints[(i - 1) % designBlueprints.length];
    const categorySelector = (i - 1) % customCategories.length;
    
    let productValue = 18000;
    if (customCategories[categorySelector] === 'shoes') productValue = 48000;
    if (customCategories[categorySelector] === 'bags') productValue = 29000;

    completeCatalog.push({
      id: `product-id-${i}`,
      name: `${blueprint.name} (Premium Lot #${200 + i})`,
      category: customCategories[categorySelector],
      price: productValue + ((i * 850) % 15000),
      sizes: blueprint.sizes,
      colors: blueprint.colors,
      quality: qualityGrades[(i - 1) % qualityGrades.length],
      img: staticImages[(i - 1) % staticImages.length]
    });
  }
  return completeCatalog;
};

const storeProducts = generateBoutiqueInventory();

const Shop = () => {
  const [filterState, setFilterState] = useState('all');
  const [activeOrderProduct, setActiveOrderProduct] = useState(null);
  
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const displayedProducts = filterState === 'all' 
    ? storeProducts 
    : storeProducts.filter(item => item.category === filterState);

  const handleTriggerOrderWindow = (product) => {
    setActiveOrderProduct(product);
    setSelectedSize(product.sizes[0]); 
    setSelectedColor(product.colors[0]); 
  };

  const handleDismissOrderWindow = () => {
    setActiveOrderProduct(null);
    setCustomerName('');
    setCustomerPhone('');
  };

  const processOrderWhatsAppPayload = (e) => {
    e.preventDefault();
    if (!activeOrderProduct || !customerName || !customerPhone) {
      return alert("Please enter your name and phone number to complete the order!");
    }

    const targetWhatsAppLine = "250786257303"; 
    
    const orderMessageText = 
`*NEW CARGO ORDER PLACEMENT — U & J SHIPPING*

*CUSTOMER DETAILS:*
• Full Name: ${customerName}
• Contact Phone: ${customerPhone}

*PRODUCT ORDER DETAILS:*
• Product Name: ${activeOrderProduct.name}
• Quality Level: ${activeOrderProduct.quality}
• Size Selected: ${selectedSize}
• Color Selected: ${selectedColor}
• Price Rate: ${activeOrderProduct.price.toLocaleString()} RWF

*FREIGHT & TRANSIT CONSTRAINTS:*
• Transit Route: Dar es Salaam Hub ➔ Kigali Station
• Shipping Terms: Free Local Delivery to Kigali Terminals

Please dispatch this inventory batch data into the active cargo file loading manifest!`;

    const standardSafePayload = encodeURIComponent(orderMessageText);
    const nativeBrowserWhatsAppURI = `https://wa.me{targetWhatsAppLine}?text=${standardSafePayload}`;
    
    window.open(nativeBrowserWhatsAppURI, '_blank');
    handleDismissOrderWindow();
  };

  return (
    <div className="shop-view-container">
      
      {/* ================= HEADER HERO BANNER ================= */}
      <div className="shop-header-banner">
        <div className="banner-txt-wrapper">
          <span className="live-pill"><FaBoxes /> U & J Cross-Border Storefront</span>
          <h1>Premium Digital Import Catalog</h1>
          <p>Explore weekly product releases dispatched directly from Dar es Salaam port hubs to our Kigali terminal station points flawlessly.</p>
        </div>
      </div>

      {/* ================= CONTROLS & FILTERING ================= */}
      <div className="catalog-filter-controls">
        <button className={`filter-node ${filterState === 'all' ? 'node-active' : ''}`} onClick={() => setFilterState('all')}><FaTh /> All Batches</button>
        <button className={`filter-node ${filterState === 'apparel' ? 'node-active' : ''}`} onClick={() => setFilterState('apparel')}><FaShoppingBag /> Apparel Drops</button>
        <button className={`filter-node ${filterState === 'shoes' ? 'node-active' : ''}`} onClick={() => setFilterState('shoes')}><FaArrowRight /> Footwear Selection</button>
        <button className={`filter-node ${filterState === 'bags' ? 'node-active' : ''}`} onClick={() => setFilterState('bags')}><FaCheckCircle /> Luxury Bags</button>
      </div>

      {/* ================= PRODUCTS GRID SYSTEM ================= */}
      <div className="catalog-products-grid">
        {displayedProducts.map((product) => (
          <div key={product.id} className="store-product-card">
            
            <div className="product-card-image-box">
              <img src={product.img} alt={product.name} loading="lazy" />
              <div className="quality-floating-tag">
                <FaAward className="gold-star" /> <span>{product.quality}</span>
              </div>
            </div>

            <div className="product-card-body">
              <h3 className="product-display-name">{product.name}</h3>
              
              <div className="product-attribute-matrix">
                <div className="attribute-row">
                  <span className="attr-lbl">Sizes:</span>
                  <span className="attr-val">{product.sizes.join(', ')}</span>
                </div>
                <div className="attribute-row">
                  <span className="attr-lbl">Colors:</span>
                  <span className="attr-val">{product.colors.join(' | ')}</span>
                </div>
                <div className="attribute-row">
                  <span className="attr-lbl">Logistics:</span>
                  <span className="attr-val global-route-highlight">Dar to Kigali Express</span>
                </div>
              </div>

              <div className="product-card-footer-action-row">
                <div className="product-display-price-box">
                  <span className="currency-lbl">RWF</span>
                  <span className="price-digits">{product.price.toLocaleString()}</span>
                </div>
                <button type="button" className="btn btn-order-trigger" onClick={() => handleTriggerOrderWindow(product)}>
                  Order via WhatsApp <FaWhatsapp className="wa-icon-margin" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ================= ORDERING MODAL DRAWER ================= */}
      {activeOrderProduct && (
        <div className="modal-overlay-backdrop">
          <div className="modal-checkout-card-box">
            <button className="modal-dismiss-x-btn" onClick={handleDismissOrderWindow}>
              <FaTimes />
            </button>
            
            <div className="modal-checkout-header">
              <h2>Confirm Cargo Booking</h2>
              <p>Direct Procurement Route via Active WhatsApp Dispatch Line</p>
            </div>

            <div className="modal-item-preview-row">
              <img src={activeOrderProduct.img} alt={activeOrderProduct.name} />
              <div className="preview-details">
                <h4>{activeOrderProduct.name}</h4>
                <p className="preview-price">{activeOrderProduct.price.toLocaleString()} RWF</p>
              </div>
            </div>

            <form className="modal-checkout-form" onSubmit={processOrderWhatsAppPayload}>
              
              <div className="form-double-column">
                <div className="form-input-group">
                  <label>Select Size</label>
                  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {activeOrderProduct.sizes.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-input-group">
                  <label>Select Color</label>
                  <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    {activeOrderProduct.colors.map((c, idx) => (
                      <option key={idx} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-input-group">
                <label>Your Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Jean Luc"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>

              <div className="form-input-group">
                <label>WhatsApp Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +250 786 257 303"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-submit-order">
                Send Order to Manifest Desk <FaWhatsapp />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

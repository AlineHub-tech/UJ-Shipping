import React, { useState } from 'react';
import { 
  FaShoppingBag, 
  FaAward, 
  FaWhatsapp, 
  FaTimes, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaTags,
  FaArrowRight,
  FaBoxes,
  FaTh
} from 'react-icons/fa';
import '../styles/Shop.css';

// Import local image assets upfront
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Image5 from '../assets/5.png';
import Image6 from '../assets/6.png';

const staticImagePool = [Image1, Image2, Image3, Image4, Image5, Image6];

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
    { name: "Waterproof Commuter Tech Backpack", colors: ["Charcoal Grey"], sizes: ["25L Standard"] },
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
      img: staticImagePool[(i - 1) % staticImagePool.length]
    });
  }
  return completeCatalog;
};

const storeProducts = generateBoutiqueInventory();

const Shop = () => {
  const [filterState, setFilterState] = useState('all');
  const [activeOrderProduct, setActiveOrderProduct] = useState(null);
  
  // Form input field tracking state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  
  // FIXED: Explicitly initialized termsAccepted state here to fix the console error!
  const [termsAccepted, setTermsAccepted] = useState(true);

  const displayedProducts = filterState === 'all' 
    ? storeProducts 
    : storeProducts.filter(item => item.category === filterState);

  const handleTriggerOrderWindow = (product) => {
    setActiveOrderProduct(product);
    setSelectedSize(product.sizes[0]); 
    setSelectedColor(product.colors[0]); 
    setTermsAccepted(true); // reset checkbox default
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
    if (!termsAccepted) {
      return alert("You must accept the cross-border transit terms to submit your order!");
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
      
      <div className="shop-header-banner">
        <div className="banner-txt-wrapper">
          <span className="live-pill"><FaBoxes /> U & J Cross-Border Storefront</span>
          <h1>Premium Digital Import Catalog</h1>
          <p>Explore product releases dispatched directly from Dar es Salaam port hubs straight to our Kigali terminal warehouse points smoothly.</p>
        </div>
      </div>

      <div className="catalog-filter-controls">
        <button className={`filter-node ${filterState === 'all' ? 'node-active' : ''}`} onClick={() => setFilterState('all')}><FaTh /> All Batches</button>
        <button className={`filter-node ${filterState === 'apparel' ? 'node-active' : ''}`} onClick={() => setFilterState('apparel')}><FaShoppingBag /> Apparel Drops</button>
        <button className={`filter-node ${filterState === 'shoes' ? 'node-active' : ''}`} onClick={() => setFilterState('shoes')}><FaArrowRight /> Footwear Selection</button>
        <button className={`filter-node ${filterState === 'bags' ? 'node-active' : ''}`} onClick={() => setFilterState('bags')}><FaBoxes /> Luxury Bags</button>
      </div>

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
                  <span className="attr-lbl">Logistics corridor:</span>
                  <span className="attr-val global-route-highlight">Dar to Kigali Express</span>
                </div>
              </div>

              <div className="product-card-footer-action-row">
                <div className="product-display-price-box">
                  <span className="currency-lbl">RWF</span>
                  <span className="price-digits">{product.price.toLocaleString()}</span>
                </div>
                <button type="button" className="btn btn-order-trigger" onClick={() => handleTriggerOrderWindow(product)}>
                  Order via WhatsApp
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {activeOrderProduct && (
        <div className="modal-backdrop-layer">
          <div className="modal-content-window">
            
            <div className="modal-header-bar">
              <h2>Confirm WhatsApp Order</h2>
              <button type="button" className="modal-close-x-btn" onClick={handleDismissOrderWindow}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={processOrderWhatsAppPayload} className="modal-form-body">
              
              <div className="modal-product-summary-box">
                <img src={activeOrderProduct.img} alt={activeOrderProduct.name} className="modal-summary-thumb" />
                <div className="modal-summary-text">
                  <h3>{activeOrderProduct.name}</h3>
                  <p className="modal-premium-spec-tag"><FaCheckCircle /> {activeOrderProduct.quality}</p>
                  <p className="modal-price-indicator">Value Rate: <strong>{activeOrderProduct.price.toLocaleString()} RWF</strong></p>
                </div>
              </div>

              <div className="modal-input-field-group">
                <label htmlFor="input-customer-name">Enter Your Full Name:</label>
                <input 
                  type="text" 
                  id="input-customer-name" 
                  placeholder="e.g., Mahoro Jeanne"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required 
                />
              </div>

              <div className="modal-input-field-group">
                <label htmlFor="input-customer-phone">Enter Your Phone Number:</label>
                <input 
                  type="tel" 
                  id="input-customer-phone" 
                  placeholder="e.g., 0788123456"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-field-group">
                <label htmlFor="select-order-size">Size Required:</label>
                <select 
                  id="select-order-size" 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {activeOrderProduct.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-input-field-group">
                <label htmlFor="select-order-color">Color Required:</label>
                <select 
                  id="select-order-color" 
                  value={selectedColor} 
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {activeOrderProduct.colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-input-field-group checkbox-row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
                <input
                  type="checkbox"
                  id="input-terms-accept"
                  style={{ width: 'auto' }}
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="input-terms-accept" style={{ fontSize: '0.8rem', color: '#4a5568', cursor: 'pointer' }}>
                  I accept the cargo manifest terms and order conditions.
                </label>
              </div>

              <button type="submit" className="btn btn-send-order">
                Send Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
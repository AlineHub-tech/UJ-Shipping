import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShippingInfo from './pages/ShippingInfo';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <div className="app-structural-container">
        {/* Sticky Global Top Header Navigation */}
        <Navbar />
        
        {/* Isolated Viewport Core Content Context */}
        <main className="main-viewport-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shipping-info" element={<ShippingInfo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        
        {/* Informational Desktop/Mobile Grid Footer */}
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;

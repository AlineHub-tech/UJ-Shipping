import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  MapPin, 
  Camera, 
  Send, 
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!senderName || !messageBody) {
      return alert('Please fill in your Name and Message text!');
    }

    const merchantWhatsAppNumber = "250786257303";
    
    const plainSupportMessage = `*NEW MESSAGE FROM CONTACT FORM - U & J SHOP*\n\n` +
                                `*Customer Profile:*\n` +
                                `• Client Name: ${senderName}\n` +
                                `• Contact Info: ${senderContact || 'Not Provided'}\n\n` +
                                `*Message Content:*\n` +
                                `"${messageBody}"\n\n` +
                                `Please dispatch a reply status update to this customer timeline!`;

    const stableEndpointURL = `https://wa.me{merchantWhatsAppNumber}?text=${encodeURIComponent(plainSupportMessage)}`;
    
    window.open(stableEndpointURL, '_blank');
    
    setSenderName('');
    setSenderContact('');
    setMessageBody('');
  };

  return (
    <div className={`contact-view-wrapper ${isVisible ? 'uj-page-active' : ''}`}>
      
      <div className="contact-hero-banner">
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-text-box">
          <span className="contact-brand-pill"><Sparkles size={14} /> Direct Desk Support</span>
          <h1>Contact Our Sales Desk</h1>
          <p>Have inquiries about our 22 style variant groups or free route delivery details? Talk to us instantly.</p>
        </div>
      </div>

      <section className="contact-communications-split-section">
        <div className="contact-split-grid-container">
          
          <div className="contact-directory-column-info">
            <span className="directory-pre-title">Get In Touch</span>
            <h2>We Are Always Connected &amp; Ready To Serve You</h2>
            <div className="contact-decorator-line"></div>
            <p className="directory-explainer-text">
              Reach out directly to our support desk team for quick confirmation regarding dress sizing, custom tracksuit matching, or handbag availability drops.
            </p>

            <div className="directory-cards-stack">
              
              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <Smartphone size={20} />
                </div>
                <div className="directory-card-text-block">
                  <h3>WhatsApp Live Support</h3>
                  <p className="phone-digit-highlight">+250 786 257 303</p>
                  <span>Instant chat response desk active from 7:00 AM to 10:00 PM CAT</span>
                </div>
              </div>

              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div className="directory-card-text-block">
                  <h3>Operational Delivery Hubs</h3>
                  <p className="phone-digit-highlight">Muhanga Base Hub ➔ Kigali Center</p>
                  <span>Guaranteed completely Free Door-to-Door Shipping route</span>
                </div>
              </div>

              <div className="directory-item-card-box">
                <div className="directory-card-icon-bubble">
                  <Camera size={20} />
                </div>
                <div className="directory-card-text-block">
                  <h3>Social Channels &amp; Instagram Media</h3>
                  <p className="social-handle-tag">@jean.de.dieu80425</p>
                  <span>Follow us for daily updates on hot drops and seasonal boutique arrivals.</span>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-messaging-form-wrapper">
            <div className="messaging-form-header">
              <h3>Send An Instant Message</h3>
              <p>Your inputs will automatically format and bundle directly into your live WhatsApp chat interface window.</p>
            </div>

            <form onSubmit={handleFormSubmission} className="interactive-contact-form-node">
              <div className="form-input-field-block">
                <label htmlFor="contact-sender-name">Your Full Name *</label>
                <input 
                  type="text" 
                  id="contact-sender-name"
                  placeholder="e.g., Uwase Marie Claire" 
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required 
                />
              </div>

              <div className="form-input-field-block">
                <label htmlFor="contact-sender-contact">Your Phone Number or Email (Optional):</label>
                <input 
                  type="text" 
                  id="contact-sender-contact"
                  placeholder="e.g., 0788... / claire@gmail.com" 
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                />
              </div>

              <div className="form-input-field-block">
                <label htmlFor="contact-sender-message">Your Detailed Inquiry Message *</label>
                <textarea 
                  id="contact-sender-message"
                  rows="5"
                  placeholder="Type your questions or custom apparel specification requests here..." 
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="form-free-delivery-banner-strip">
                <CheckCircle2 size={16} />
                <span>Free Route Shipping Coverage fully Protected</span>
              </div>

              <button type="submit" className="btn btn-form-messaging-submit">
                <span>Launch WhatsApp Chat</span> <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactUs;

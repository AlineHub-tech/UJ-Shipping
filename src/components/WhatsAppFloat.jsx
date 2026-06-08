import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppFloat.css';

const WhatsAppFloat = ({ phone = '250786257303', message = '' }) => {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="uj-whatsapp-float"
      aria-label="Open WhatsApp chat"
    >
      <span className="uj-wj-badge">
        <FaWhatsapp size={18} />
      </span>
      <span className="uj-wj-label">Chat</span>
    </a>
  );
};

export default WhatsAppFloat;

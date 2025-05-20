
import React from 'react';
import { WhatsApp } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919149958270" 
      target="_blank" 
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsApp className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;


import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919149958270" 
      target="_blank" 
      rel="noreferrer"
      className="floating-whatsapp fixed bottom-6 right-6 bg-leaf-dark hover:bg-leaf text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta rounded-full border-2 border-white"></div>
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;

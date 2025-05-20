
import React from 'react';
import { Phone, Coffee, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-lora font-bold mb-4">
              Mitti<span className="text-eco-light">Se</span>Love
            </h3>
            <p className="mb-4 text-gray-300">
              Eco-friendly clay dispensers & pots, handcrafted with love in India.
            </p>
            <div className="flex gap-2">
              <span className="bg-eco-dark/30 text-eco-light text-xs py-1 px-2 rounded-full">Eco-Friendly</span>
              <span className="bg-terracotta-dark/30 text-terracotta-light text-xs py-1 px-2 rounded-full">Made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Our Products</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 text-terracotta-light" />
                <div>
                  <p className="font-semibold">Call to Order:</p>
                  <a href="tel:9149958270" className="text-gray-300 hover:text-white transition-colors">
                    +91 91499 58270
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="h-5 w-5 mt-1 text-terracotta-light" />
                <div>
                  <p className="font-semibold">WhatsApp:</p>
                  <a 
                    href="https://wa.me/919149958270" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Send us a message
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 mt-1 text-eco-light" />
                <div>
                  <p className="font-semibold">Delivery:</p>
                  <p className="text-gray-300">Pan India delivery available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MittiSeLove. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Coffee } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="page-section bg-sketch-light">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-sketch-dark">Ready to Embrace Healthy Living?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Order your eco-friendly clay dispensers today and experience the natural goodness of water stored the traditional way.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Button 
              className="bg-sketch-dark hover:bg-black text-white flex items-center gap-2 py-6 px-8 text-lg w-full md:w-auto"
              asChild
            >
              <a href="https://wa.me/919149958270" target="_blank" rel="noreferrer">
                <Coffee className="h-5 w-5" />
                Buy Now on WhatsApp
              </a>
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="bg-sketch-light p-3 rounded-full">
                <Phone className="h-5 w-5 text-sketch-dark" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Call to Order</p>
                <a href="tel:9149958270" className="text-lg font-semibold text-sketch-dark hover:text-black transition-colors">
                  +91 91499 58270
                </a>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            We provide delivery across India with eco-safe packaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

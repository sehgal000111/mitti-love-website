
import React from 'react';
import { Button } from "@/components/ui/button";
import { Coffee, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero relative min-h-[calc(100vh-80px)] flex items-center"
  style={{
    background: `linear-gradient(rgba(20, 20, 20, 0.754), rgba(20, 19, 19, 0.383)),
                 url("/hero_bg.png")`,
    backgroundPosition: ' center',
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat"
  }}>
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <div className="flex gap-2 mb-4">
            <span className="eco-badge flex items-center gap-1">
              <span className="h-2 w-2 bg-leaf-dark rounded-full"></span> Eco-Friendly
            </span>
            <span className="india-badge flex items-center gap-1">
              <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span> Made in India
            </span>
            <span className="eco-badge flex items-center gap-1">
              <span className="h-2 w-2 bg-leaf-dark rounded-full"></span> Pocket-Friendly
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-md">
            Drink Healthy. <br />Live Naturally.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md drop-shadow-md">
            Eco-friendly clay dispensers & pots, handcrafted with love in India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-terracotta hover:bg-terracotta-dark text-white flex items-center gap-2 py-6"
              asChild
            >
              <a href="https://wa.me/919149958270" target="_blank" rel="noreferrer">
                <Coffee className="h-5 w-5" />
                Buy Now on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/90 hover:bg-white border-terracotta text-terracotta hover:text-terracotta-dark flex items-center gap-2 py-6"
              asChild
            >
              <a href="tel:9149958270">
                <Phone className="h-5 w-5" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

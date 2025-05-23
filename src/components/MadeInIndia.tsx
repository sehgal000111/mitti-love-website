
import React from 'react';
import { Flag, IndianRupee, HandHeart } from 'lucide-react';

const MadeInIndia = () => {
  return (
    <section id="made-in-india" className="page-section bg-eco-light/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-12">Made with Love in India</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center leaf-border">
            <div className="mb-4 bg-terracotta-light/40 p-4 rounded-full">
              <HandHeart className="h-8 w-8 text-terracotta-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-dark">Rural Artisanship</h3>
            <p className="text-muted-foreground">
              Every pot is handcrafted by skilled artisans using traditional techniques passed down through generations in rural India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center leaf-border">
            <div className="mb-4 bg-terracotta-light/40 p-4 rounded-full">
              <Flag className="h-8 w-8 text-terracotta-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-dark">Pan India Delivery</h3>
            <p className="text-muted-foreground">
              We deliver across India with eco-safe packaging that ensures your products arrive in perfect condition.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center leaf-border">
            <div className="mb-4 bg-terracotta-light/40 p-4 rounded-full">
              <IndianRupee className="h-8 w-8 text-terracotta-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-earth-dark">Affordable for Everyone</h3>
            <p className="text-muted-foreground">
              We believe in making eco-friendly choices accessible to all, with pocket-friendly prices for every home.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img 
                src="/Indian_Artisan.png " 
                alt="Indian Artisan Crafting Clay Pot" 
                className="rounded-lg shadow-sm w-full h-auto object-cover aspect-video"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-earth-dark">Supporting Traditional Craftsmanship</h3>
              <p className="text-muted-foreground mb-4">
                By choosing MittiSeLove products, you're supporting the livelihood of skilled rural artisans and helping preserve ancient Indian pottery traditions.
              </p>
              <p className="text-muted-foreground">
                Each piece carries with it centuries of expertise and culture, bringing a piece of India's rich heritage into your home while promoting sustainable living.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="eco-badge">Eco-Friendly</span>
                <span className="india-badge">Made in India</span>
                <span className="eco-badge">Sustainably Crafted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeInIndia;

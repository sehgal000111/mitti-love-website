
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactCTA from '@/components/ContactCTA';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="bg-clay-light/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About MittiSeLove</h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              Bringing the ancient wisdom of clay craftsmanship to modern homes
            </p>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="mb-4">
                MittiSeLove was born from a deep appreciation for India's traditional clay craftsmanship and a desire to preserve this ancient art form while promoting sustainable living.
              </p>
              <p className="mb-4">
                Founded in 2020, we work directly with skilled artisans from rural Rajasthan who have been practicing this craft for generations. Each clay water dispenser is handcrafted using traditional techniques, ensuring that every piece is unique and carries the essence of our rich cultural heritage.
              </p>
              <p>
                Our mission is to provide eco-friendly alternatives to plastic containers while supporting the livelihoods of traditional artisans. We believe in the natural goodness of clay and its ability to enhance the quality of water we consume daily.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/artisan.jpg" 
                alt="Clay artisan at work" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-terracotta/10 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-eco-light flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-eco-dark">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p>We are committed to environmentally friendly practices, from sourcing natural clay to eco-safe packaging.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-eco-light flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-eco-dark">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Artisan Support</h3>
                <p>We provide fair wages and sustainable livelihoods to skilled artisans, preserving traditional craftsmanship.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-eco-light flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-eco-dark">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Focus</h3>
                <p>We believe in promoting health through natural solutions that enhance water quality without chemicals.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Clay?</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-terracotta-dark font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Natural Cooling</h3>
                  <p>Clay naturally cools water through evaporation, eliminating the need for refrigeration and saving energy.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-terracotta-dark font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Alkaline Properties</h3>
                  <p>Clay naturally balances the pH of water, making it more alkaline and healthier for consumption.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-terracotta-dark font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Enhanced Taste</h3>
                  <p>Water stored in clay vessels tastes fresher and more natural due to the clay's ability to filter impurities.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-terracotta-dark font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Chemical-Free</h3>
                  <p>Unlike plastic containers, clay pots don't leach harmful chemicals into your water, keeping it pure and safe.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-terracotta-dark font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Eco-Friendly</h3>
                  <p>Clay is biodegradable and its production has a minimal carbon footprint compared to plastic manufacturing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;

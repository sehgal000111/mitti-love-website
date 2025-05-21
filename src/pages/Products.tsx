
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductShowcase from '@/components/ProductShowcase';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <div className="bg-leaf-light/30 py-16 relative overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 natural-underline mx-auto">Our Products</h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              Handcrafted with love, our clay dispensers bring natural goodness to your home
            </p>
            
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-white/80 rounded-lg shadow-sm">
                  <div className="font-bold text-terracotta-dark">100%</div>
                  <div className="text-sm text-muted-foreground">Natural Materials</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg shadow-sm">
                  <div className="font-bold text-earth-dark">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg shadow-sm">
                  <div className="font-bold text-leaf-dark">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg shadow-sm">
                  <div className="font-bold text-terracotta-dark">PAN</div>
                  <div className="text-sm text-muted-foreground">India Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-12 relative overflow-hidden">
            {/* Background image with subtle opacity */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1606307305459-f9a578fbd5e1?auto=format&fit=crop&q=80"
                  alt="Hands making clay pots"
                  className="rounded-lg shadow-sm h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold mb-4">Our Crafting Process</h2>
                <p className="mb-4 text-muted-foreground">
                  Each clay dispenser is lovingly handcrafted by skilled artisans in rural India using techniques passed down through generations. 
                  The process begins with selecting the finest natural clay, which is then shaped, dried naturally in the sun, and fired using 
                  traditional methods that minimize environmental impact.
                </p>
                <p className="text-muted-foreground">
                  Our artisans take pride in creating products that not only look beautiful but serve a practical purpose while connecting you to 
                  ancient Indian pottery traditions. No two pieces are exactly alike, making your dispenser truly one-of-a-kind.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ProductShowcase />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;


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
        <div className="bg-sketch-light py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 sketch-underline">Our Products</h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              Handcrafted with love, our clay dispensers bring natural goodness to your home
            </p>
          </div>
        </div>
        <ProductShowcase />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;

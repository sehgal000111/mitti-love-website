
import React from 'react';
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Clay Water Dispenser",
    size: "4L",
    price: 1000,
    image: "/images/product-4l.png",
  },
  {
    id: 2,
    name: "Clay Water Dispenser",
    size: "6L",
    price: 1500,
    image: "/images/product-6l.png",
  },
  {
    id: 3,
    name: "Clay Water Dispenser",
    size: "8L",
    price: 2000,
    image: "/images/product-8l.png",
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="page-section container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Our Handcrafted Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card p-6">
            <div className="mb-4 aspect-square flex items-center justify-center bg-muted rounded-md overflow-hidden">
              <img 
                src={product.image} 
                alt={`${product.name} ${product.size}`}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">Size: {product.size}</p>
                </div>
                <span className="text-xl font-bold text-terracotta-dark">₹{product.price}</span>
              </div>
              <div className="flex gap-2 my-2">
                <span className="eco-badge flex items-center gap-1 text-xs">Eco-Friendly</span>
                <span className="india-badge flex items-center gap-1 text-xs">Made in India</span>
              </div>
              <Button 
                className="w-full bg-eco hover:bg-eco-dark mt-2" 
                asChild
              >
                <a href={`https://wa.me/919149958270?text=I'm interested in the ${product.size} Clay Water Dispenser for ₹${product.price}`} target="_blank" rel="noreferrer">
                  Buy Now on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;

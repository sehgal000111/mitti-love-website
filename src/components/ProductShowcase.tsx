
import React from 'react';
import { Button } from "@/components/ui/button";
import { products } from '@/models/Product';
import { Link } from 'react-router-dom';
import { Star } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="products" className="page-section container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">Our Handcrafted Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card p-6 sketch-border">
            <Link to={`/products/${product.id}`} className="block mb-4 aspect-square flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img 
                src={product.mainImage} 
                alt={`${product.name} ${product.size}`}
                className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Link to={`/products/${product.id}`} className="hover:text-sketch-dark transition-colors">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </Link>
                  <p className="text-muted-foreground">Size: {product.size}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? "text-sketch-dark fill-sketch-dark" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({product.reviews.length} reviews)
                    </span>
                  </div>
                </div>
                <span className="text-xl font-bold text-sketch-dark">₹{product.price}</span>
              </div>
              <div className="flex gap-2 my-2">
                <span className="eco-badge flex items-center gap-1 text-xs">Eco-Friendly</span>
                <span className="india-badge flex items-center gap-1 text-xs">Made in India</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="w-full bg-sketch-dark hover:bg-black text-white mt-2 sketch-button" 
                  asChild
                >
                  <a href={`https://wa.me/919149958270?text=I'm interested in the ${product.size} Clay Water Dispenser for ₹${product.price}`} target="_blank" rel="noreferrer">
                    Buy Now
                  </a>
                </Button>
                <Button 
                  className="w-full bg-white border border-sketch-dark text-sketch-dark hover:bg-sketch-light mt-2 sketch-button" 
                  asChild
                >
                  <Link to={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;

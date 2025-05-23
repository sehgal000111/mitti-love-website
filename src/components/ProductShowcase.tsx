
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Star, MessageCircle, BadgePercent, Check } from "lucide-react";
import { Badge } from '@/components/ui/badge';

const ProductShowcase = () => {
  // Static product data
  const products = [
    {
      id: 1,
      name: "Clay Water Dispenser",
      size: "4L",
      price: 1000,
      rating: 4.7,
      reviewCount: 3,
      mainImage: "/claypot1.png",
      discount: 15
    },
    {
      id: 2,
      name: "Clay Water Dispenser",
      size: "8L",
      price: 2000,
      rating: 4.8,
      reviewCount: 5,
      mainImage: "/claypot2-v2.png",
      discount: 0
    }
  ];

  return (
    <section id="products" className="page-section container mx-auto px-4 relative">
      {/* Add background image with subtle opacity */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <h2 className="section-title text-center mx-auto mb-12">Our Handcrafted Products</h2>
      
      <div className="mb-8 p-6 bg-leaf-light/20 rounded-lg border border-leaf-light text-center backdrop-blur-sm">
        <p className="mb-4">
          All our clay dispensers are hand-crafted with love and care by skilled artisans using traditional methods.
          Each piece is unique and may have slight variations in color and texture, adding to its natural beauty.
        </p>
        <div className="flex justify-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1565193298442-a26d2283bc0a?auto=format&fit=crop&q=80&w=200"
            alt="Clay artisan at work"
            className="w-20 h-20 object-cover rounded-full border-2 border-white"
          />
          <img 
            src="https://images.unsplash.com/photo-1503146234394-631200675614?auto=format&fit=crop&q=80&w=200"
            alt="Clay pottery process"
            className="w-20 h-20 object-cover rounded-full border-2 border-white"
          />
          <img 
            src="https://images.unsplash.com/photo-1610701596061-e9573fc25ebb?auto=format&fit=crop&q=80&w=200"
            alt="Clay pot creation"
            className="w-20 h-20 object-cover rounded-full border-2 border-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="product-card p-6">
            <div className="relative mb-4">
              <Link to={`/products/${product.id}`} className="block aspect-square flex items-center justify-center bg-earth-light/20 rounded-md overflow-hidden">
                <img 
                  src={product.mainImage} 
                  alt={`${product.name} ${product.size}`}
                  className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </Link>
              
              {/* Discount tag */}
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-terracotta text-white rounded-full py-1 px-3 font-bold text-sm flex items-center">
                  <BadgePercent className="h-3 w-3 mr-1" />
                  {product.discount}% OFF
                </div>
              )}
              
              {/* Stock status */}
              <div className="absolute bottom-2 right-2">
                <Badge className="text-xs font-medium bg-leaf-light text-leaf-dark hover:bg-leaf-light">
                  <span className="flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    In Stock
                  </span>
                </Badge>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Link to={`/products/${product.id}`} className="hover:text-terracotta transition-colors">
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
                              ? "text-terracotta fill-terracotta-light" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {product.reviewCount} reviews
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  {/* Show original and discounted price */}
                  {product.discount > 0 ? (
                    <>
                      <span className="text-sm text-muted-foreground line-through">₹{Math.round(product.price * (100 + product.discount) / 100)}</span>
                      <span className="text-xl font-bold text-earth-dark block">₹{product.price}</span>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-earth-dark">₹{product.price}</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 my-2">
                <span className="eco-badge flex items-center gap-1 text-xs">Eco-Friendly</span>
                <span className="india-badge flex items-center gap-1 text-xs">Made in India</span>
              </div>
              <div className="flex gap-2">
                <Button 
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white mt-2 eco-button" 
                  asChild
                >
                  <a href={`https://wa.me/919149958270?text=I'm interested in the ${product.size} Clay Water Dispenser for ₹${product.price}`} target="_blank" rel="noreferrer">
                    Buy Now
                  </a>
                </Button>
                <Button 
                  className="w-full bg-white border border-terracotta text-terracotta hover:bg-terracotta-light/20 mt-2 eco-button" 
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
      
      {/* Customer spotlight with slightly modified background for better visibility */}
      <div className="mt-16 bg-earth-light/30 p-6 rounded-lg border border-earth-light/30 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-4 text-center">Customer Spotlight</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1551833726-b6e4b4fa3592?auto=format&fit=crop&q=80"
              alt="Customer using clay pot"
              className="rounded-lg shadow-sm w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg italic mb-4">
              "Switching to clay dispensers was the best decision for our family. The water tastes incredible, and 
              we love knowing we're using something natural and eco-friendly. Plus, our kids find it fun to use!"
            </p>
            <p className="font-semibold">- The Sharma Family, Delhi</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="h-4 w-4 text-terracotta fill-terracotta-light" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

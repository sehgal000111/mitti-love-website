import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/models/Product';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { Star, Check, ArrowLeft, Leaf, Shield, Droplets, BadgePercent, CheckCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [selectedImage, setSelectedImage] = useState(product?.mainImage || '');
  
  useEffect(() => {
    // Find product based on ID
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct);
    setSelectedImage(foundProduct?.mainImage || '');
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Button asChild>
              <Link to="/products">Back to All Products</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate discount based on product ID for demo purposes
  const hasDiscount = product.id % 2 === 1;
  const discountPercentage = hasDiscount ? (product.id * 5) % 20 + 5 : 0;
  const originalPrice = hasDiscount ? Math.round(product.price * (100 + discountPercentage) / 100) : product.price;
  const stockStatus = product.id % 3 === 0 ? 'Low Stock' : 'In Stock';
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 3 + (product.id % 4));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-terracotta-dark">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/products" className="hover:text-terracotta-dark">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-terracotta-dark">{product.name} {product.size}</span>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square bg-white rounded-lg overflow-hidden border relative">
                <img 
                  src={selectedImage} 
                  alt={`${product.name} ${product.size}`}
                  className="w-full h-full object-contain"
                />
                
                {/* New: Discount tag */}
                {hasDiscount && (
                  <div className="absolute top-4 left-4 bg-terracotta text-white rounded-full py-1.5 px-3 font-bold text-sm flex items-center shadow-md">
                    <BadgePercent className="h-4 w-4 mr-1.5" />
                    {discountPercentage}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`aspect-square bg-white rounded border cursor-pointer 
                      ${selectedImage === img ? 'border-terracotta-dark' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} preview ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name} - {product.size}</h1>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? "text-yellow-500 fill-yellow-500" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>
              
              <div className="flex gap-3 mb-6">
                <span className="eco-badge flex items-center gap-1"><Leaf className="h-3 w-3" /> Eco-Friendly</span>
                <span className="india-badge">Made in India</span>
                
                {/* New: Stock status badge */}
                <Badge className={`${product.id % 3 === 0 ? 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200' : 'bg-green-50 text-green-700 hover:bg-green-50 border border-green-200'}`}>
                  <span className="flex items-center">
                    {product.id % 3 === 0 ? (
                      'Low Stock'
                    ) : (
                      <>
                        <CheckCheck className="h-3 w-3 mr-1" />
                        In Stock
                      </>
                    )}
                  </span>
                </Badge>
              </div>
              
              {/* New: Price display with original price if discounted */}
              <div className="mb-6 p-4 bg-earth-light/10 rounded-lg border border-earth-light/20">
                {hasDiscount ? (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl font-bold text-terracotta-dark">₹{product.price}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{originalPrice}</span>
                      <span className="bg-terracotta/20 text-terracotta-dark text-sm px-2 py-0.5 rounded font-medium">
                        Save ₹{originalPrice - product.price}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <span>Limited time offer</span>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <span>Free shipping across India</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-3xl font-bold text-terracotta-dark block mb-1">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground">Free shipping across India</span>
                  </div>
                )}
              </div>
              
              {/* New: Delivery information */}
              <div className="mb-6 flex items-center gap-2 text-sm text-earth-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-leaf-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="13" x="4" y="4" rx="2" />
                  <path d="M4 8h16" />
                  <path d="M8 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M16 12h.01" />
                  <path d="M8 16h.01" />
                  <path d="M12 16h.01" />
                  <path d="M16 16h.01" />
                </svg>
                <span>
                  Get it by <strong>{estimatedDelivery.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}</strong> if ordered within <strong>18 hrs 30 mins</strong>
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.longDescription}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-terracotta-dark mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* New: Quantity selector (non-functional for demo) */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity:</label>
                <div className="flex items-center w-32">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l">-</button>
                  <input
                    type="number" 
                    className="w-full h-8 border-t border-b border-gray-300 text-center" 
                    defaultValue={1}
                    min={1}
                  />
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r">+</button>
                </div>
              </div>
              
              <Button 
                className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-white mb-3 py-6 text-lg" 
                asChild
              >
                <a href={`https://wa.me/919149958270?text=I'm interested in the ${product.size} Clay Water Dispenser for ₹${product.price}`} target="_blank" rel="noreferrer">
                  Buy Now on WhatsApp
                </a>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-2">
                Free delivery • Cash on Delivery available
              </p>

              {/* Environmental Impact Section */}
              <div className="mt-8 p-4 bg-leaf-light/20 rounded-lg border border-leaf">
                <h3 className="font-semibold text-lg mb-3 flex items-center"><Leaf className="h-5 w-5 mr-2 text-leaf-dark" />Environmental Impact</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  By choosing this product, you're helping reduce plastic waste and supporting sustainable practices. Each dispenser is made from natural clay, requiring minimal energy to produce.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="bg-white px-2 py-1 rounded-full border">100% Biodegradable</span>
                  <span className="bg-white px-2 py-1 rounded-full border">No Plastic</span>
                  <span className="bg-white px-2 py-1 rounded-full border">Low Carbon Footprint</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-earth-light/10 py-12 border-t border-b border-earth-light/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">How Clay Dispensers Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="w-16 h-16 rounded-full bg-leaf-light/30 flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-leaf-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Natural Cooling</h3>
                <p className="text-muted-foreground">
                  Clay is naturally porous, allowing water to seep through and evaporate from the surface, cooling the water inside naturally without electricity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="w-16 h-16 rounded-full bg-leaf-light/30 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-leaf-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mineral Enrichment</h3>
                <p className="text-muted-foreground">
                  The natural clay adds beneficial minerals to your water while helping maintain an alkaline pH balance, making it healthier to drink.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="w-16 h-16 rounded-full bg-terracotta-light/30 flex items-center justify-center mx-auto mb-4">
                  <img src="/images/clay-texture.jpg" alt="Clay texture" className="w-10 h-10 object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Earthy Flavor</h3>
                <p className="text-muted-foreground">
                  Clay gives water a subtle, refreshing taste that many describe as pure and natural - the way water was meant to be enjoyed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-clay-light/20 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Health Benefits of Clay Dispensers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center mb-4">
                    <span className="text-terracotta-dark font-bold">{index + 1}</span>
                  </div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Usage Instructions */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">How to Use & Maintain Your Clay Dispenser</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden h-full">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Clay pot with water" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-terracotta-light flex items-center justify-center mr-2 text-xs text-terracotta-dark">1</span>
                  First-Time Setup
                </h3>
                <p className="text-muted-foreground">
                  Rinse the dispenser thoroughly with clean water 2-3 times before first use. Allow it to soak in water for 8-10 hours to prep the clay.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-terracotta-light flex items-center justify-center mr-2 text-xs text-terracotta-dark">2</span>
                  Daily Usage
                </h3>
                <p className="text-muted-foreground">
                  Fill with filtered water and place in a well-ventilated area away from direct sunlight. For best results, refill once the dispenser is half empty.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-terracotta-light flex items-center justify-center mr-2 text-xs text-terracotta-dark">3</span>
                  Weekly Maintenance
                </h3>
                <p className="text-muted-foreground">
                  Empty completely and rinse with clean water once a week. Avoid using soap or detergents as they can be absorbed by the clay.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border">
                <h3 className="font-semibold mb-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-terracotta-light flex items-center justify-center mr-2 text-xs text-terracotta-dark">4</span>
                  Deep Cleaning (Monthly)
                </h3>
                <p className="text-muted-foreground">
                  Fill with water and add 1-2 tablespoons of baking soda. Let it sit overnight, then rinse thoroughly. Sun-dry completely before refilling.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
          
          <div className="mb-8 p-6 bg-white border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{product.rating} out of 5</h3>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? "text-yellow-500 fill-yellow-500" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on {product.reviews.length} reviews
                </p>
              </div>
              <div>
                {/* Add review button - non-functional for demo */}
                <Button variant="outline">Write a Review</Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {product.reviews.map(review => (
              <div key={review.id} className="p-6 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < review.rating 
                          ? "text-yellow-500 fill-yellow-500" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Related Products */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {products.filter(p => p.id !== product.id).map((p) => (
                <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="product-card p-4 border rounded-lg h-full flex flex-col">
                      <div className="relative">
                        <Link to={`/products/${p.id}`} className="block mb-4 aspect-square flex items-center justify-center bg-muted rounded-md overflow-hidden">
                          <img 
                            src={p.mainImage} 
                            alt={`${p.name} ${p.size}`}
                            className="h-full w-full object-contain p-4"
                          />
                        </Link>
                        
                        {/* New: Discount tag on related products */}
                        {p.id % 2 === 1 && (
                          <div className="absolute top-2 left-2 bg-terracotta text-white rounded-full py-1 px-2 text-xs font-bold flex items-center">
                            <BadgePercent className="h-3 w-3 mr-0.5" />
                            {(p.id * 5) % 20 + 5}% OFF
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Link to={`/products/${p.id}`} className="hover:text-terracotta-dark transition-colors">
                              <h3 className="text-lg font-semibold">{p.name}</h3>
                            </Link>
                            <p className="text-muted-foreground">Size: {p.size}</p>
                            
                            {/* New: Stock indicator */}
                            <Badge variant="outline" className="mt-1 text-xs">
                              {p.id % 3 === 0 ? 'Low Stock' : 'In Stock'}
                            </Badge>
                          </div>
                          <div>
                            {/* New: Show original and discounted price */}
                            {p.id % 2 === 1 ? (
                              <>
                                <span className="text-sm text-muted-foreground line-through block text-right">
                                  ₹{Math.round(p.price * (100 + ((p.id * 5) % 20 + 5)) / 100)}
                                </span>
                                <span className="text-lg font-bold text-terracotta-dark">₹{p.price}</span>
                              </>
                            ) : (
                              <span className="text-lg font-bold text-terracotta-dark">₹{p.price}</span>
                            )}
                          </div>
                        </div>
                        <Button 
                          className="w-full bg-terracotta hover:bg-terracotta-dark mt-2" 
                          asChild
                        >
                          <Link to={`/products/${p.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProductDetail;

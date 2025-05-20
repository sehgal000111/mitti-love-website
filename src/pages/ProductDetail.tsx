
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/models/Product';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { Star, Check, ArrowLeft } from 'lucide-react';
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
              <div className="mb-4 aspect-square bg-white rounded-lg overflow-hidden border">
                <img 
                  src={selectedImage} 
                  alt={`${product.name} ${product.size}`}
                  className="w-full h-full object-contain"
                />
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
                <span className="eco-badge">Eco-Friendly</span>
                <span className="india-badge">Made in India</span>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-terracotta-dark">₹{product.price}</span>
                <span className="ml-2 text-muted-foreground">(Free shipping across India)</span>
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
                      <Link to={`/products/${p.id}`} className="block mb-4 aspect-square flex items-center justify-center bg-muted rounded-md overflow-hidden">
                        <img 
                          src={p.mainImage} 
                          alt={`${p.name} ${p.size}`}
                          className="h-full w-full object-contain p-4"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Link to={`/products/${p.id}`} className="hover:text-terracotta-dark transition-colors">
                              <h3 className="text-lg font-semibold">{p.name}</h3>
                            </Link>
                            <p className="text-muted-foreground">Size: {p.size}</p>
                          </div>
                          <span className="text-lg font-bold text-terracotta-dark">₹{p.price}</span>
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

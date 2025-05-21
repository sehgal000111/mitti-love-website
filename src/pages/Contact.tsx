
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="bg-clay-light/30 py-16 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-eco-light p-3 rounded-full">
                      <Phone className="h-5 w-5 text-eco-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <a href="tel:9149958270" className="text-lg text-terracotta-dark hover:underline">
                        +91 91499 58270
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-eco-light p-3 rounded-full">
                      <MessageCircle className="h-5 w-5 text-eco-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">WhatsApp</h3>
                      <a href="https://wa.me/919149958270" target="_blank" rel="noreferrer" className="text-lg text-terracotta-dark hover:underline">
                        +91 91499 58270
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-eco-light p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-eco-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Location</h3>
                      <p className="text-muted-foreground">
                        Made in Rajasthan, Delivered Pan-India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-eco-light p-3 rounded-full">
                      <Clock className="h-5 w-5 text-eco-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-terracotta/10 rounded-lg p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our Clay Products?</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span>
                  <span>Handcrafted by skilled artisans</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span>
                  <span>100% natural materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span>
                  <span>Eco-friendly and sustainable</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span>
                  <span>Naturally cools water</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-terracotta-dark rounded-full"></span>
                  <span>Enhances taste and quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;

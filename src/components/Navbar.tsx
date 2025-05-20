
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-lora font-bold text-terracotta">
            Mitti<span className="text-eco-dark">Se</span>Love
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`${isActive('/products') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
          >
            Contact
          </Link>
        </div>

        {/* Call to Order Button (Desktop) */}
        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors"
            asChild
          >
            <a href="tel:9149958270" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call to Order
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-earth-dark focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`${isActive('/products') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-terracotta-dark font-medium' : 'text-earth-dark'} hover:text-terracotta-dark transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors w-full"
              asChild
            >
              <a href="tel:9149958270" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

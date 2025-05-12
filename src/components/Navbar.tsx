
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Shield, Key, Lock } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-eternavault-dark/80 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-eternavault-accent" />
          <span className="text-xl font-bold font-heading text-white">EternaVault</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">Sign In</Button>
          <Button className="bg-gradient-to-r from-eternavault-accent to-eternavault-blue text-white border-none">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-eternavault-dark/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/features" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/about" className="text-gray-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" className="justify-start text-gray-300 hover:text-white">Sign In</Button>
              <Button className="bg-gradient-to-r from-eternavault-accent to-eternavault-blue text-white border-none">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

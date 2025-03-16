
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold">Tiffin Shiffin</span>
            </Link>
            <p className="text-gray-500 mb-4">
              Bringing authentic home-cooked tiffin meals to your doorstep, making everyday dining convenient and delicious.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/plans" className="text-gray-500 hover:text-primary transition-colors">Plans</Link></li>
              <li><Link to="/customer" className="text-gray-500 hover:text-primary transition-colors">For Customers</Link></li>
              <li><Link to="/chef" className="text-gray-500 hover:text-primary transition-colors">For Chefs</Link></li>
              <li><Link to="/delivery" className="text-gray-500 hover:text-primary transition-colors">For Delivery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-500">
              <li>1234 Tiffin Street</li>
              <li>Mumbai, Maharashtra 400001</li>
              <li>India</li>
              <li className="pt-2">support@tiffinshiffin.com</li>
              <li>+91 1234567890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Tiffin Shiffin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

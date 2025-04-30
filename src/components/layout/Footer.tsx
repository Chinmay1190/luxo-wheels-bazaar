
import React from "react";
import { Link } from "react-router-dom";
import { CarFront, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CarFront className="h-6 w-6 text-gold-DEFAULT" />
              <span className="text-xl font-bold">Luxo Wheels Bazaar</span>
            </div>
            <p className="text-muted-foreground">
              Discover the finest collection of luxury vehicles in India. From hypercars to superbikes, we offer the most exclusive rides.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products?category=supercar" className="text-muted-foreground hover:text-primary">
                  Supercars
                </Link>
              </li>
              <li>
                <Link to="/products?category=luxurycar" className="text-muted-foreground hover:text-primary">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link to="/products?category=superbike" className="text-muted-foreground hover:text-primary">
                  Superbikes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              123 Luxury Lane, Mumbai, Maharashtra, India
            </p>
            <p className="text-muted-foreground">
              Email: info@luxowheelsbazaar.com
            </p>
            <p className="text-muted-foreground">Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t text-center">
          <p className="text-muted-foreground">
            © {currentYear} Luxo Wheels Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

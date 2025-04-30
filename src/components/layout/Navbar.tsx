
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Car, Bike, CarFront } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <CarFront className="h-6 w-6 text-gold-DEFAULT" />
            <span className="hidden text-xl font-bold md:inline-block">
              Luxo Wheels Bazaar
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary/80">
            Home
          </Link>
          <Link
            to="/products?category=supercar"
            className="text-sm font-medium flex items-center gap-1 hover:text-primary/80"
          >
            <Car className="h-4 w-4" />
            Supercars
          </Link>
          <Link
            to="/products?category=luxurycar"
            className="text-sm font-medium flex items-center gap-1 hover:text-primary/80"
          >
            <CarFront className="h-4 w-4" />
            Luxury Cars
          </Link>
          <Link
            to="/products?category=superbike"
            className="text-sm font-medium flex items-center gap-1 hover:text-primary/80"
          >
            <Bike className="h-4 w-4" />
            Superbikes
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={mobileMenuOpen ? "hidden" : "block"}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={mobileMenuOpen ? "block" : "hidden"}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 py-3 bg-background/95 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products?category=supercar"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Car className="h-4 w-4" />
              Supercars
            </Link>
            <Link
              to="/products?category=luxurycar"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CarFront className="h-4 w-4" />
              Luxury Cars
            </Link>
            <Link
              to="/products?category=superbike"
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bike className="h-4 w-4" />
              Superbikes
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

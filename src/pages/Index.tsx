
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, Car, Bike } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import products from "@/data/products";

const Hero = () => (
  <section className="relative py-32 md:py-48 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
      <img
        src="https://images.unsplash.com/photo-1617004890468-deaa2302dade?q=80&w=1920&auto=format&fit=crop"
        alt="Luxury car"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="container relative z-10">
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Exceptional Vehicles for the Extraordinary
        </h1>
        <p className="text-white/90 text-lg mb-8">
          Welcome to Luxo Wheels Bazaar, India's premier destination for luxury vehicles.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gold-DEFAULT hover:bg-gold-dark text-black">
            <Link to="/products">Explore Collection</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:text-gold-light hover:border-gold-light">
            <Link to="/products?category=supercar">View Supercars</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedCategories = () => (
  <section className="py-16 bg-muted/30">
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Premium Vehicle Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/products?category=supercar" className="group">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop" 
              alt="Supercars"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Supercars</h3>
                  <p className="text-white/75">Ultimate performance and design</p>
                </div>
                <Car className="h-8 w-8 text-gold-DEFAULT" />
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/products?category=luxurycar" className="group">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop" 
              alt="Luxury Cars"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Luxury Cars</h3>
                  <p className="text-white/75">Unparalleled comfort and prestige</p>
                </div>
                <CarFront className="h-8 w-8 text-gold-DEFAULT" />
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/products?category=superbike" className="group">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop" 
              alt="Superbikes"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Superbikes</h3>
                  <p className="text-white/75">Speed and engineering excellence</p>
                </div>
                <Bike className="h-8 w-8 text-gold-DEFAULT" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-16">
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-DEFAULT">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">10+ Years Experience</h3>
          <p className="text-muted-foreground">A decade of serving elite clientele with the finest vehicles.</p>
        </div>
        
        <div className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-DEFAULT">
              <path d="m9 9-2 2 2 2"></path>
              <path d="m15 9 2 2-2 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">100% Authentic Vehicles</h3>
          <p className="text-muted-foreground">Each vehicle is thoroughly certified and comes with complete documentation.</p>
        </div>
        
        <div className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-DEFAULT">
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Exclusive Selection</h3>
          <p className="text-muted-foreground">Access to limited editions and rare models not available elsewhere.</p>
        </div>
        
        <div className="p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="h-12 w-12 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-DEFAULT">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Premium Customer Service</h3>
          <p className="text-muted-foreground">Personalized attention and support throughout your ownership journey.</p>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 8);
  const newArrivals = products.filter(product => product.new).slice(0, 8);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductGrid products={featuredProducts} title="Featured Vehicles" />
        <WhyChooseUs />
        <ProductGrid products={newArrivals} title="New Arrivals" />
        <section className="py-16 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our collection of the world's finest vehicles and elevate your driving experience.
            </p>
            <Button asChild size="lg" className="bg-gold-DEFAULT hover:bg-gold-dark text-black">
              <Link to="/products">Browse All Vehicles</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

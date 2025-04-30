
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { IndianRupee, Search } from "lucide-react";
import products from "@/data/products";
import { Product, ProductCategory } from "@/types";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000000]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get category from URL params or default to all
  const categoryParam = searchParams.get("category") || "all";

  // Get all price ranges for the slider
  const minPrice = Math.min(...products.map((p) => p.price));
  const maxPrice = Math.max(...products.map((p) => p.price));

  // Set initial price range based on all products
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Filter products based on category, search term, and price range
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam !== "all") {
      result = result.filter((product) => product.category === categoryParam);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.brand.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(result);
  }, [categoryParam, searchTerm, priceRange]);

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-IN');
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-muted py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">
              {categoryParam === "all"
                ? "All Vehicles"
                : categoryParam === "supercar"
                ? "Supercars"
                : categoryParam === "luxurycar"
                ? "Luxury Cars"
                : "Superbikes"}
            </h1>
            <p className="text-muted-foreground">
              Browse our exclusive collection of high-performance vehicles
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 space-y-8">
                <div className="sticky top-24 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <Tabs 
                      defaultValue={categoryParam} 
                      onValueChange={handleCategoryChange}
                      className="w-full"
                    >
                      <TabsList className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="supercar">Supercars</TabsTrigger>
                        <TabsTrigger value="luxurycar">Luxury Cars</TabsTrigger>
                        <TabsTrigger value="superbike">Superbikes</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Price Range</h3>
                    </div>
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={minPrice}
                      max={maxPrice}
                      step={(maxPrice - minPrice) / 100}
                      value={[priceRange[0], priceRange[1]]}
                      onValueChange={handlePriceChange}
                      className="py-4"
                    />
                    <div className="flex items-center justify-between">
                      <p className="flex items-center text-sm">
                        <IndianRupee className="h-3 w-3 mr-1" />
                        {formatPrice(priceRange[0])}
                      </p>
                      <p className="flex items-center text-sm">
                        <IndianRupee className="h-3 w-3 mr-1" />
                        {formatPrice(priceRange[1])}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Search</h3>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search vehicles..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Applied Filters</h3>
                    <div className="flex flex-wrap gap-2">
                      {categoryParam !== "all" && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          {categoryParam === "supercar"
                            ? "Supercars"
                            : categoryParam === "luxurycar"
                            ? "Luxury Cars"
                            : "Superbikes"}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => handleCategoryChange("all")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">Remove filter</span>
                          </Button>
                        </Badge>
                      )}
                      {searchTerm && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          Search: {searchTerm}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => setSearchTerm("")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">Remove filter</span>
                          </Button>
                        </Badge>
                      )}
                      {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          Price: ₹{formatPrice(priceRange[0])} - ₹{formatPrice(priceRange[1])}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 p-0"
                            onClick={() => setPriceRange([minPrice, maxPrice])}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">Remove filter</span>
                          </Button>
                        </Badge>
                      )}
                    </div>
                    {(categoryParam !== "all" || searchTerm || priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          setSearchParams({});
                          setSearchTerm("");
                          setPriceRange([minPrice, maxPrice]);
                        }}
                      >
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "vehicle" : "vehicles"} found
                  </p>
                </div>
                <ProductGrid products={filteredProducts} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;

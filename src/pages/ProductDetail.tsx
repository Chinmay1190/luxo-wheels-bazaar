
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetailComponent from "@/components/products/ProductDetail";
import ProductGrid from "@/components/products/ProductGrid";
import products from "@/data/products";
import { Product } from "@/types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find((p) => p.id === id);

    if (foundProduct) {
      setProduct(foundProduct);

      // Get related products (same category but excluding the current product)
      const related = products
        .filter(
          (p) => p.category === foundProduct.category && p.id !== foundProduct.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      // If product not found, redirect to the products page
      navigate("/products");
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-24 text-center">
          <div className="spinner">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <ProductDetailComponent product={product} />
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;

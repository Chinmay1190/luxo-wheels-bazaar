
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CheckoutForm from "@/components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <main>
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;

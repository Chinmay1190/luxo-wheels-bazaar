
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

const Success = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been placed successfully and will be processed shortly.
          </p>
          <div className="bg-muted/40 p-6 rounded-lg mb-8">
            <h2 className="font-semibold mb-4">Order Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-medium">#LWB-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-medium text-green-600 dark:text-green-500">Confirmed</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your registered email address with all the details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-black">
                <Link to="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Success;

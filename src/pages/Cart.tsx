
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart, Trash } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";

const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN');
};

const Cart = () => {
  const { items, cartTotal, clearCart } = useCart();

  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <h2 className="text-2xl font-medium">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add items to your cart to see them here
            </p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Cart Items ({items.length})
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  <Trash className="h-4 w-4" /> Clear Cart
                </Button>
              </div>
              <div className="space-y-8">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted/40 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <div className="flex items-center font-medium">
                      <IndianRupee className="h-3 w-3 mr-1 text-gold-DEFAULT" />
                      {formatPrice(cartTotal)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tax</span>
                    <div className="flex items-center font-medium">
                      <IndianRupee className="h-3 w-3 mr-1 text-gold-DEFAULT" />
                      {formatPrice(cartTotal * 0.18)}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between font-semibold text-lg">
                    <span>Total</span>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1 text-gold-DEFAULT" />
                      {formatPrice(cartTotal + cartTotal * 0.18)}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-black"
                  >
                    <Link to="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <div className="text-center">
                    <Link
                      to="/products"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;

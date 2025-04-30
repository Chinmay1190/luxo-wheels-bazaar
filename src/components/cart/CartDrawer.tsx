
import React from "react";
import { ShoppingCart, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN');
};

const CartDrawer = () => {
  const { items, cartCount, cartTotal } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" /> Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-2 p-8">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              <div className="text-xl font-medium">Your cart is empty</div>
              <div className="text-muted-foreground text-center">
                Add items to your cart to see them here
              </div>
              <Button asChild className="mt-4">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <div className="flex items-center text-lg">
                  <IndianRupee className="h-4 w-4 mr-1 text-gold-DEFAULT" />
                  {formatPrice(cartTotal)}
                </div>
              </div>
              <Button asChild className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-black">
                <Link to="/checkout">Checkout</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

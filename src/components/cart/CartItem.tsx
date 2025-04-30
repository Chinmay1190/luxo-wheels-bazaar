
import React from "react";
import { Button } from "@/components/ui/button";
import { IndianRupee, Trash, Minus, Plus } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN');
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { removeItem, updateQuantity } = useCart();
  const placeholderImage = "https://placehold.co/200x150/333/FFF?text=Luxo+Wheels";

  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="w-24 h-24 overflow-hidden rounded-md bg-muted shrink-0">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0] || placeholderImage}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium">{product.name}</h3>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive"
            onClick={() => removeItem(product.id)}
          >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{product.brand}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <div className="flex items-center font-medium">
            <IndianRupee className="h-3 w-3 mr-1 text-gold-DEFAULT" />
            {formatPrice(product.price * quantity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

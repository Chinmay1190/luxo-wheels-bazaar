
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, IndianRupee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN');
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, isInCart } = useCart();
  const placeholderImage = "https://placehold.co/400x300/333/FFF?text=Luxo+Wheels";

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg dark:hover:shadow-gold-dark/20">
      <div className="aspect-square overflow-hidden relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0] || placeholderImage}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-semibold text-white line-clamp-2">
                {product.name}
              </h3>
            </div>
          </div>
          {product.new && (
            <Badge className="absolute top-2 right-2 bg-racing-red text-white">
              New
            </Badge>
          )}
          {product.featured && (
            <Badge variant="outline" className="absolute top-2 left-2 backdrop-blur-sm bg-black/50 text-white border-gold-DEFAULT">
              Featured
            </Badge>
          )}
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="space-y-1 text-sm">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
          </Link>
          <p className="text-muted-foreground text-xs line-clamp-1">{product.brand}</p>
        </div>
        <div className="mt-3 flex items-center text-lg font-semibold">
          <IndianRupee className="h-4 w-4 mr-1 text-gold-DEFAULT" />
          {formatPrice(product.price)}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addItem(product)}
          disabled={isInCart(product.id)}
          className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-black"
        >
          {isInCart(product.id) ? (
            "Added to Cart"
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

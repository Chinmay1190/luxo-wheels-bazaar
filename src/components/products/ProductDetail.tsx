
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, IndianRupee } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface ProductDetailProps {
  product: Product;
}

const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN');
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addItem, isInCart } = useCart();
  const [activeImage, setActiveImage] = useState(
    product.images[0] || "https://placehold.co/800x600/333/FFF?text=Luxo+Wheels"
  );

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg bg-muted">
            <img
              src={activeImage}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative overflow-hidden rounded-md bg-muted ${
                  activeImage === image ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="h-16 w-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.brand}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-2xl font-bold">
                <IndianRupee className="h-5 w-5 mr-1 text-gold-DEFAULT" />
                {formatPrice(product.price)}
              </div>
              {product.new && (
                <Badge className="bg-racing-red text-white">New</Badge>
              )}
              {product.featured && (
                <Badge variant="outline" className="border-gold-DEFAULT">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base text-muted-foreground">{product.description}</p>
            <Button
              size="lg"
              onClick={() => addItem(product)}
              disabled={isInCart(product.id)}
              className="w-full bg-gold-DEFAULT hover:bg-gold-dark text-black"
            >
              {isInCart(product.id) ? (
                "Added to Cart"
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </>
              )}
            </Button>
          </div>

          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="py-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.engine && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Engine</p>
                    <p className="text-sm text-muted-foreground">{product.specs.engine}</p>
                  </div>
                )}
                {product.specs.power && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Power</p>
                    <p className="text-sm text-muted-foreground">{product.specs.power}</p>
                  </div>
                )}
                {product.specs.torque && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Torque</p>
                    <p className="text-sm text-muted-foreground">{product.specs.torque}</p>
                  </div>
                )}
                {product.specs.topSpeed && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Top Speed</p>
                    <p className="text-sm text-muted-foreground">{product.specs.topSpeed}</p>
                  </div>
                )}
                {product.specs.acceleration && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Acceleration</p>
                    <p className="text-sm text-muted-foreground">{product.specs.acceleration}</p>
                  </div>
                )}
                {product.specs.transmission && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Transmission</p>
                    <p className="text-sm text-muted-foreground">{product.specs.transmission}</p>
                  </div>
                )}
                {product.specs.weight && (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Weight</p>
                    <p className="text-sm text-muted-foreground">{product.specs.weight}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="details" className="py-4 space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">About {product.name}</h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-muted-foreground">
                  This exceptional {product.category === "supercar" ? "supercar" : 
                    product.category === "luxurycar" ? "luxury car" : "superbike"} represents the pinnacle of automotive engineering, 
                  combining cutting-edge technology with masterful craftsmanship. 
                  Designed for those who demand nothing but the best, it delivers an unparalleled experience 
                  whether on the road or track.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

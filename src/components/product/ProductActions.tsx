
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductActionsProps {
  productName: string;
  inStock: boolean;
}

const ProductActions = ({ productName, inStock }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${productName} added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${productName} added to your wishlist.`,
    });
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  if (!inStock) {
    return null;
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-muted-foreground">
          Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="rounded-md border border-eco-stone/40 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-eco-green"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          className="bg-eco-green hover:bg-eco-green/90 flex-1"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="border-eco-terracotta text-eco-terracotta hover:bg-eco-terracotta/10"
          onClick={handleAddToWishlist}
        >
          <Heart className="mr-2 h-5 w-5" />
          Add to Wishlist
        </Button>
      </div>
    </div>
  );
};

export default ProductActions;

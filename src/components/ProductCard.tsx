
import { Link } from "react-router-dom";
import { Product } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden border-eco-stone/20 hover:border-eco-green transition-all duration-300 handcrafted-shadow hover:shadow-md h-full">
        <div className="aspect-square relative overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.newArrival && (
            <Badge className="absolute top-2 right-2 bg-eco-terracotta border-0 hover:bg-eco-terracotta">
              New
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-1">By {product.artisan}</p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-eco-green">${product.price.toFixed(2)}</span>
            {!product.inStock && (
              <span className="text-sm text-muted-foreground">Out of stock</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;

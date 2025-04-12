
import { Link } from "react-router-dom";
import { Product } from "@/data/types";
import { Badge } from "@/components/ui/badge";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-eco-green mb-2">{product.name}</h1>
        <p className="text-muted-foreground">By {product.artisan}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
        {product.inStock ? (
          <Badge className="bg-eco-leaf text-green-800 border-0 hover:bg-eco-leaf">
            In Stock
          </Badge>
        ) : (
          <Badge variant="destructive">Out of Stock</Badge>
        )}
      </div>
      
      <p className="text-foreground">{product.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-32 text-muted-foreground">Category:</span>
          <Link 
            to={`/shop?category=${product.category}`}
            className="text-eco-terracotta hover:underline"
          >
            {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
        </div>
        
        {product.dimensions && (
          <div className="flex items-center">
            <span className="w-32 text-muted-foreground">Dimensions:</span>
            <span>{product.dimensions}</span>
          </div>
        )}
        
        <div className="flex items-start">
          <span className="w-32 text-muted-foreground">Materials:</span>
          <span>{product.materials.join(', ')}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-eco-sand border-eco-stone/20">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;

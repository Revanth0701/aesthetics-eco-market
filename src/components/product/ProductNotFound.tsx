
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductNotFound = () => {
  return (
    <div className="eco-container py-16 text-center">
      <h1 className="eco-heading mb-6">Product Not Found</h1>
      <p className="text-muted-foreground mb-8">
        We couldn't find the product you're looking for.
      </p>
      <Button asChild className="bg-eco-green hover:bg-eco-green/90">
        <Link to="/shop">Back to Shop</Link>
      </Button>
    </div>
  );
};

export default ProductNotFound;

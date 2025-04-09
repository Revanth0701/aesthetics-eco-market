
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getProductById } from "@/data/products";
import { getArtisanByName } from "@/data/artisans";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  const product = id ? getProductById(id) : null;
  const artisan = product ? getArtisanByName(product.artisan) : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="eco-container py-16 text-center">
          <h1 className="eco-heading mb-6">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the product you're looking for.
          </p>
          <Button asChild className="bg-eco-green hover:bg-eco-green/90">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} added to your wishlist.`,
    });
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <Layout>
      <div className="eco-container py-8">
        <Link to="/shop" className="flex items-center text-muted-foreground hover:text-eco-green mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-eco-stone/20 bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-auto py-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 rounded-md border overflow-hidden ${
                      selectedImage === index
                        ? "ring-2 ring-eco-green"
                        : "border-eco-stone/20"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
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
            
            {product.inStock && (
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
            )}
            
            {artisan && (
              <div className="mt-8 pt-6 border-t border-eco-stone/20">
                <h3 className="text-lg font-semibold mb-2">About the Artisan</h3>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{artisan.name}</p>
                    <p className="text-sm text-muted-foreground">{artisan.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{artisan.story}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

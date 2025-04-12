
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getProductById } from "@/data/products";
import { getArtisanByName } from "@/data/artisans";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ArtisanInfo from "@/components/product/ArtisanInfo";
import ProductNotFound from "@/components/product/ProductNotFound";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const product = id ? getProductById(id) : null;
  const artisan = product ? getArtisanByName(product.artisan) : null;
  
  if (!product) {
    return (
      <Layout>
        <ProductNotFound />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="eco-container py-8">
        <Link to="/shop" className="flex items-center text-muted-foreground hover:text-eco-green mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <ProductImageGallery 
            images={product.images} 
            productName={product.name} 
          />
          
          {/* Product Info */}
          <div className="space-y-6">
            <ProductInfo product={product} />
            
            {product.inStock && (
              <ProductActions 
                productName={product.name} 
                inStock={product.inStock} 
              />
            )}
            
            {artisan && <ArtisanInfo artisan={artisan} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

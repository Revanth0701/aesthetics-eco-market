
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg border border-eco-stone/20 bg-muted">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="h-full w-full object-cover"
        />
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-auto py-2">
          {images.map((image, index) => (
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
                alt={`${productName} - image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;

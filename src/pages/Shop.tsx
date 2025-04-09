
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import { products, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Category, Product } from "@/data/types";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get the maximum price from products
  const maxPrice = Math.max(...products.map(product => product.price));

  // Parse query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && Object.values(Category).includes(categoryParam as Category)) {
      setSelectedCategory(categoryParam as Category);
    } else {
      setSelectedCategory(null);
    }
  }, [location.search]);

  // Filter products
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => 
        product.price >= (priceRange[0] * maxPrice / 100) && 
        product.price <= (priceRange[1] * maxPrice / 100)
    );
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, priceRange, maxPrice]);

  const handleCategorySelect = (category: Category | null) => {
    setSelectedCategory(category);
    
    // Update URL
    const params = new URLSearchParams(location.search);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by useEffect
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setPriceRange([0, 100]);
    navigate("/shop");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const formatPrice = (value: number) => {
    return `$${Math.floor(value * maxPrice / 100)}`;
  };

  return (
    <Layout>
      <div className="eco-container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="eco-heading">Shop Our Collection</h1>
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={toggleFilters}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - desktop */}
          <aside className="hidden md:block w-64 space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-eco-terracotta">Search</h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-eco-terracotta">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${!selectedCategory ? 'bg-eco-green/10 text-eco-green' : ''}`}
                  onClick={() => handleCategorySelect(null)}
                >
                  All Products
                </Button>
                {Object.values(Category).map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className={`w-full justify-start ${selectedCategory === category ? 'bg-eco-green/10 text-eco-green' : ''}`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-eco-terracotta">Price Range</h3>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-6"
              />
              <div className="flex justify-between text-sm">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={clearFilters}
            >
              <X className="mr-2 h-4 w-4" />
              Clear Filters
            </Button>
          </aside>

          {/* Filters - mobile */}
          {showFilters && (
            <div className="md:hidden fixed inset-0 bg-background z-50 p-4 overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-xl">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={toggleFilters}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-4 text-eco-terracotta">Search</h3>
                  <form onSubmit={handleSearch}>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-eco-terracotta">Categories</h3>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${!selectedCategory ? 'bg-eco-green/10 text-eco-green' : ''}`}
                      onClick={() => {
                        handleCategorySelect(null);
                        toggleFilters();
                      }}
                    >
                      All Products
                    </Button>
                    {Object.values(Category).map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className={`w-full justify-start ${selectedCategory === category ? 'bg-eco-green/10 text-eco-green' : ''}`}
                        onClick={() => {
                          handleCategorySelect(category);
                          toggleFilters();
                        }}
                      >
                        {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-eco-terracotta">Price Range</h3>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="w-1/2"
                    onClick={() => {
                      clearFilters();
                      toggleFilters();
                    }}
                  >
                    Clear All
                  </Button>
                  <Button 
                    className="w-1/2 bg-eco-green hover:bg-eco-green/90"
                    onClick={toggleFilters}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-4">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search term.</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, Heart } from "lucide-react";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <Layout>
      <section className="bg-gradient-to-r from-eco-leaf/20 to-eco-sand/50 py-16 md:py-24">
        <div className="eco-container text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-eco-green">
              Handcrafted with Love, <br />
              <span className="text-eco-terracotta">Sustainable by Nature</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover beautiful, eco-friendly products handmade by rural women artisans. 
              Each purchase supports sustainable living and traditional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-eco-green hover:bg-eco-green/90 text-white">
                <Link to="/shop">Shop Collection</Link>
              </Button>
              <Button asChild variant="outline" className="border-eco-terracotta text-eco-terracotta hover:bg-eco-terracotta/10">
                <Link to="/custom">Request Custom Order</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white p-4 rounded-lg rotate-2 shadow-lg max-w-md mx-auto">
              <img
                src="/lovable-uploads/6d60b2f2-6f27-4ffc-8804-858b85c80960.png"
                alt="Indian Handcraft: Artisan Crafted Products"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="eco-container">
          <h2 className="eco-heading text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-eco-sand/30 p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-eco-green/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="text-eco-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-eco-green">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                All our products use sustainable materials that are kind to the environment and help reduce waste.
              </p>
            </div>

            <div className="bg-eco-sand/30 p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-eco-terracotta/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-eco-terracotta h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-eco-terracotta">Handcrafted</h3>
              <p className="text-muted-foreground">
                Each piece is lovingly handmade by skilled artisans, ensuring quality and uniqueness in every item.
              </p>
            </div>

            <div className="bg-eco-sand/30 p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-eco-clay/20 rounded-full flex items-center justify-center mx-auto">
                <Package className="text-eco-clay h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-eco-clay">Empowering</h3>
              <p className="text-muted-foreground">
                We provide fair wages and sustainable livelihoods for rural women artisans and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-eco-sand/30">
        <div className="eco-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="eco-heading">Featured Products</h2>
            <Link to="/shop" className="text-eco-green hover:text-eco-terracotta flex items-center gap-2 font-medium">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="py-12">
        <div className="eco-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="eco-heading">New Arrivals</h2>
            <Link to="/shop" className="text-eco-green hover:text-eco-terracotta flex items-center gap-2 font-medium">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-eco-leaf/20 to-eco-sand/50">
        <div className="eco-container">
          <h2 className="eco-heading text-center mb-12">Meet Our Artisans</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/lovable-uploads/93ae01c4-bfbf-4a7a-a660-c2c70c5620ae.png"
                  alt="Lakshmi working on a jute basket"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-semibold text-eco-terracotta">Lakshmi's Story</h3>
              <p className="text-muted-foreground">
                "I've been weaving baskets for over 20 years, learning the craft from my mother, 
                who learned it from hers. Working with Aesthetics has allowed me to continue our 
                traditions while earning a sustainable income for my family. Each basket I create 
                carries with it our community's story and heritage."
              </p>
              <Button asChild variant="outline" className="border-eco-terracotta text-eco-terracotta hover:bg-eco-terracotta/10">
                <Link to="/about">Meet More Artisans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="eco-container text-center max-w-3xl mx-auto space-y-6">
          <h2 className="eco-heading">Looking for Something Special?</h2>
          <p className="text-lg text-muted-foreground">
            Our artisans can create custom pieces tailored to your specific needs. 
            Whether it's a special gift or a unique item for your home, we're here to help.
          </p>
          <Button asChild className="bg-eco-green hover:bg-eco-green/90 text-white">
            <Link to="/custom">Request Custom Order</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

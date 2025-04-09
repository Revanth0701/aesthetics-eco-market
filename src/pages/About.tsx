
import Layout from "@/components/Layout";
import { artisans } from "@/data/artisans";
import { 
  Leaf, 
  Heart, 
  Package, 
  Globe, 
  Recycle, 
  Handshake 
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-leaf/20 to-eco-sand/50 py-16">
        <div className="eco-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-4">
              <h1 className="eco-heading">Our Story</h1>
              <p className="text-lg text-muted-foreground">
                Aesthetics was founded with a simple mission: to celebrate and preserve 
                traditional craftsmanship while providing sustainable livelihoods for 
                rural women artisans. We believe in the power of handmade products to 
                connect people across cultures and support communities.
              </p>
              <p className="text-muted-foreground">
                Each Aesthetics product tells a story of skilled hands, traditional 
                techniques, and sustainable materials. When you purchase from us, 
                you're not just buying a product – you're supporting a community 
                of artisans and helping preserve centuries-old craft traditions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg"
                alt="Aesthetics Artisans at Work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="eco-container">
          <h2 className="eco-heading text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-eco-sand/30 p-6 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center">
                <Leaf className="text-eco-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-eco-green">Sustainability</h3>
              <p className="text-muted-foreground">
                We use eco-friendly materials and traditional techniques that minimize 
                environmental impact. Our packaging is plastic-free and biodegradable.
              </p>
            </div>
            
            <div className="bg-eco-sand/30 p-6 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded-full bg-eco-terracotta/10 flex items-center justify-center">
                <Heart className="text-eco-terracotta h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-eco-terracotta">Craftsmanship</h3>
              <p className="text-muted-foreground">
                We celebrate traditional skills and techniques, ensuring each product is 
                crafted with care and attention to detail by our skilled artisans.
              </p>
            </div>
            
            <div className="bg-eco-sand/30 p-6 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded-full bg-eco-clay/20 flex items-center justify-center">
                <Handshake className="text-eco-clay h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-eco-clay">Community</h3>
              <p className="text-muted-foreground">
                We provide fair wages and sustainable livelihoods for rural women artisans, 
                helping to preserve traditional crafts and support local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section className="py-16 bg-eco-sand/50">
        <div className="eco-container">
          <h2 className="eco-heading text-center mb-4">Meet Our Artisans</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Every product at Aesthetics is handcrafted by skilled women artisans from rural 
            communities. Their dedication to their craft and cultural heritage shines through in each piece.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-eco-stone/20 flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover aspect-square md:aspect-auto"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold text-eco-terracotta mb-1">{artisan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{artisan.location}</p>
                  <p className="text-muted-foreground">{artisan.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="eco-container">
          <h2 className="eco-heading text-center mb-4">Our Impact</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            When you purchase from Aesthetics, you're making a positive impact on 
            communities and the environment. Here's how your support makes a difference:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-eco-green/10 flex-shrink-0 flex items-center justify-center">
                <Globe className="text-eco-green h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-eco-green mb-2">Environmental Impact</h3>
                <p className="text-muted-foreground">
                  By using natural, sustainable materials and traditional production methods, 
                  we minimize waste and reduce our carbon footprint. Our artisans use local 
                  materials whenever possible, further reducing environmental impact.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-eco-terracotta/10 flex-shrink-0 flex items-center justify-center">
                <Package className="text-eco-terracotta h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-eco-terracotta mb-2">Cultural Preservation</h3>
                <p className="text-muted-foreground">
                  Many traditional crafts are at risk of being lost as younger generations 
                  move away from rural areas. By creating a market for these crafts, we help 
                  preserve important cultural heritage and traditional techniques.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-eco-leaf/20 flex-shrink-0 flex items-center justify-center">
                <Recycle className="text-eco-leaf h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-eco-leaf mb-2">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  We prioritize natural, renewable, and recycled materials in all our products. 
                  From organic cotton to reclaimed wood and natural dyes, we make conscious 
                  choices to reduce our environmental footprint.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-eco-clay/20 flex-shrink-0 flex items-center justify-center">
                <Handshake className="text-eco-clay h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-eco-clay mb-2">Women's Empowerment</h3>
                <p className="text-muted-foreground">
                  Our work provides sustainable livelihoods for women in rural communities, 
                  helping them achieve financial independence. Many of our artisans are able 
                  to work from home, allowing them to care for their families while earning an income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-to-r from-eco-leaf/20 to-eco-sand/50">
        <div className="eco-container text-center max-w-3xl mx-auto">
          <h2 className="eco-heading mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8">
            We're building a community that values craftsmanship, sustainability, and fair trade. 
            Follow us on social media, subscribe to our newsletter, or reach out directly to learn 
            more about our mission and products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md border border-eco-stone focus:outline-none focus:ring-2 focus:ring-eco-green sm:w-64"
            />
            <button className="bg-eco-green hover:bg-eco-green/90 text-white px-6 py-3 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

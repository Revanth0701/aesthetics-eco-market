
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-sand border-t border-eco-stone/20 mt-12">
      <div className="eco-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-eco-green">Aesthetics</h3>
            <p className="text-muted-foreground">
              Handcrafted eco-friendly products made by rural women artisans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-eco-terracotta">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-terracotta">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-terracotta">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-terracotta">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-eco-terracotta">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-eco-green">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-eco-green">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-muted-foreground hover:text-eco-green">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-eco-green">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-eco-green">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-eco-terracotta">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=home-decor" className="text-muted-foreground hover:text-eco-green">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-muted-foreground hover:text-eco-green">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop?category=kitchen" className="text-muted-foreground hover:text-eco-green">
                  Kitchen & Dining
                </Link>
              </li>
              <li>
                <Link to="/shop?category=textile" className="text-muted-foreground hover:text-eco-green">
                  Textiles
                </Link>
              </li>
              <li>
                <Link to="/shop?category=jewelry" className="text-muted-foreground hover:text-eco-green">
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-eco-terracotta">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get special offers, artisan stories, and updates on new products.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md border border-eco-stone focus:outline-none focus:ring-2 focus:ring-eco-green flex-grow"
              />
              <button className="bg-eco-green hover:bg-eco-green/90 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-eco-stone/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aesthetics. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-eco-green">
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link to="/terms" className="hover:text-eco-green">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

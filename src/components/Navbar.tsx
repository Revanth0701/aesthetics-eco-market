
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-eco-sand/50 sticky top-0 z-50 border-b border-eco-stone/20 backdrop-blur-sm">
      <div className="eco-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-2xl text-eco-green">Aesthetics</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-foreground hover:text-eco-green transition-colors">
            Home
          </Link>
          <Link to="/shop" className="font-medium text-foreground hover:text-eco-green transition-colors">
            Shop
          </Link>
          <Link to="/custom" className="font-medium text-foreground hover:text-eco-green transition-colors">
            Custom Orders
          </Link>
          <Link to="/about" className="font-medium text-foreground hover:text-eco-green transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-foreground hover:text-eco-green transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-eco-terracotta text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-eco-sand border-t border-eco-stone/20 py-4">
          <div className="eco-container flex flex-col space-y-4">
            <Link to="/" className="font-medium text-foreground hover:text-eco-green transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/shop" className="font-medium text-foreground hover:text-eco-green transition-colors" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/custom" className="font-medium text-foreground hover:text-eco-green transition-colors" onClick={toggleMenu}>
              Custom Orders
            </Link>
            <Link to="/about" className="font-medium text-foreground hover:text-eco-green transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="font-medium text-foreground hover:text-eco-green transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-eco-terracotta text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

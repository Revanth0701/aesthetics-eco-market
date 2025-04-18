
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, removeFromCart, clearCart, cartCount, cartTotal } = useCart();

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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-eco-terracotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 bg-eco-green/10 font-medium">Your Cart ({cartCount} items)</div>
              {cartCount === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  Your cart is empty
                </div>
              ) : (
                <>
                  <div className="max-h-96 overflow-auto">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.quantity}`} className="p-4 border-b border-eco-stone/10">
                        <div className="flex justify-between">
                          <div className="flex gap-3">
                            <div className="w-16 h-16 bg-muted rounded overflow-hidden">
                              <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                              <p className="text-eco-green font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span className="text-eco-green">${cartTotal.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button onClick={clearCart} variant="outline" className="flex-1">
                        Clear Cart
                      </Button>
                      <Button className="flex-1 bg-eco-green hover:bg-eco-green/90">
                        Checkout
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </PopoverContent>
          </Popover>
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:text-eco-green hover:bg-eco-leaf/10 relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-eco-terracotta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <div className="p-4 bg-eco-green/10 font-medium">Your Cart ({cartCount} items)</div>
                  {cartCount === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      Your cart is empty
                    </div>
                  ) : (
                    <>
                      <div className="max-h-96 overflow-auto">
                        {cart.map((item) => (
                          <div key={`${item.id}-${item.quantity}`} className="p-4 border-b border-eco-stone/10">
                            <div className="flex justify-between">
                              <div className="flex gap-3">
                                <div className="w-16 h-16 bg-muted rounded overflow-hidden">
                                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                  <p className="text-eco-green font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}
                                className="text-muted-foreground hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="flex justify-between font-medium">
                          <span>Total:</span>
                          <span className="text-eco-green">${cartTotal.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <Button onClick={clearCart} variant="outline" className="flex-1">
                            Clear Cart
                          </Button>
                          <Button className="flex-1 bg-eco-green hover:bg-eco-green/90">
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="eco-container py-16 text-center">
        <h1 className="text-8xl font-bold text-eco-green mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-eco-terracotta mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-eco-green hover:bg-eco-green/90">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-eco-terracotta text-eco-terracotta hover:bg-eco-terracotta/10">
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

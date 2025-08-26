import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "../components/ThemeProvider";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-background font-mono">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <p className="text-xl text-foreground mb-6">Oops! Page not found</p>
          <a 
            href="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Return to Home
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;

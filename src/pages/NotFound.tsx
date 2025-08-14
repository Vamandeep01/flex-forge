
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-FlexForge-orange">404</h1>
          <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
          <p className="text-white/70 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="bg-dark-secondary border-dark-tertiary text-white hover:bg-dark-tertiary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-orange text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </div>

        <div className="pt-8 border-t border-dark-tertiary">
          <p className="text-white/50 text-sm">
            If you believe this is an error, please{' '}
            <button
              onClick={() => navigate('/profile/help-center')}
              className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors"
            >
              contact support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

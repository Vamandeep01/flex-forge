import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoachOnboardingScreen() {
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsSearching(true);
    setTimeout(() => {
      navigate('/coach-selection');
    }, 2000);
  };

  if (isSearching) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4">
              <Search className="w-10 h-10 text-white" />
            </div>
            <LoadingSpinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Finding Fitness Coach...</h2>
          <p className="text-muted-foreground">We're matching you with the perfect AI coach</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="space-y-6 max-w-sm">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop&crop=face" 
              alt="AI Coach" 
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-foreground">
              Meet Your AI
            </h1>
            <h1 className="text-3xl font-bold text-primary">
              Fitness Coach
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get personalized workouts, real-time form corrections, and 24/7 guidance from your AI fitness companion.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-6 space-y-4">
        <Button 
          onClick={handleContinue}
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl"
        >
          Continue
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
        
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
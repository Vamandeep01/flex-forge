
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkoutScreen() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
          alt="Workout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-center mb-8">
            <h1 className="text-white text-4xl font-bold mb-4">Personalized</h1>
            <h2 className="text-white text-2xl mb-2">Workout & Training</h2>
            <p className="text-white/80 text-base mb-8 max-w-sm mx-auto">
              Get workouts built for you, with the right intensity to help you reach your goals
            </p>
          </div>
          
          <Link to="/workout-library">
            <Button className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg">
              Browse Workouts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">127</div>
            <div className="text-white/60 text-sm">Workouts</div>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">45min</div>
            <div className="text-white/60 text-sm">Avg Duration</div>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">320</div>
            <div className="text-white/60 text-sm">Avg Calories</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

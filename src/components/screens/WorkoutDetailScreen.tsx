
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Flame, Users, Dumbbell } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function WorkoutDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-dark-tertiary">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Workout Details</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop"
            alt="Workout"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-white text-2xl font-bold mb-2">Full Body Strength</h2>
            <p className="text-white/60 mb-4">Advanced workout targeting all muscle groups</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-FlexForge-orange" />
                <span className="text-white">45 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-FlexForge-orange" />
                <span className="text-white">420 cal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-FlexForge-orange" />
                <span className="text-white">Advanced</span>
              </div>
              <div className="flex items-center space-x-2">
                <Dumbbell className="w-5 h-5 text-FlexForge-orange" />
                <span className="text-white">Equipment</span>
              </div>
            </div>

            <Button className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg">
              Start Workout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

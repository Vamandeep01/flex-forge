
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Flame, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WorkoutCompletionScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Success Icon */}
      <div className="text-center pt-16 pb-8">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-white text-3xl font-bold mb-2">Workout Complete!</h1>
        <p className="text-white/60">Great job finishing your session</p>
      </div>

      {/* Stats */}
      <div className="space-y-4 mb-8">
        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">45</div>
              <div className="text-white/60 text-sm">Minutes</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Flame className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">420</div>
              <div className="text-white/60 text-sm">Calories</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">8</div>
              <div className="text-white/60 text-sm">Exercises</div>
            </div>
          </div>
        </Card>

        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Personal Best!</h3>
          <p className="text-white/60 text-sm mb-4">
            You've completed this workout faster than before. Keep up the great work!
          </p>
          <div className="bg-FlexForge-orange/10 rounded-lg p-3">
            <p className="text-FlexForge-orange text-sm font-medium">+25 XP earned</p>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg"
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-dark-tertiary text-white hover:bg-dark-secondary py-4 rounded-2xl text-lg"
          onClick={() => navigate('/workout-library')}
        >
          Browse More Workouts
        </Button>
      </div>
    </div>
  );
}

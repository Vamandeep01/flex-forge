
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Pause, SkipForward } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ExercisePlayerScreen() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="text-center">
            <p className="text-white/60 text-sm">Exercise 1 of 8</p>
            <h1 className="text-white font-semibold">Push-ups</h1>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Exercise Video/Image */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
          alt="Exercise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Timer */}
        <div className="absolute top-4 right-4 bg-black/50 rounded-full px-4 py-2">
          <span className="text-white font-bold">00:30</span>
        </div>
      </div>

      {/* Exercise Info */}
      <div className="p-4">
        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
          <h2 className="text-white text-xl font-bold mb-2">Push-ups</h2>
          <p className="text-white/60 mb-4">3 sets × 15 reps</p>
          
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-2">Instructions:</h3>
            <p className="text-white/80 text-sm">
              Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-dark-tertiary"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-dark-tertiary"
            >
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

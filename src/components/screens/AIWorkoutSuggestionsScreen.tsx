
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Sparkles, Clock, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIWorkoutSuggestionsScreen() {
  const navigate = useNavigate();

  const suggestions = [
    {
      id: 1,
      title: "Correct Your Form",
      subtitle: "AI-powered form analysis",
      duration: "15 min",
      difficulty: "Beginner",
      benefit: "Prevent Injuries",
      color: "bg-blue-500/20",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Proper Stretching",
      subtitle: "Personalized flexibility routine",
      duration: "20 min",
      difficulty: "All Levels",
      benefit: "Improve Mobility",
      color: "bg-green-500/20",
      iconColor: "text-green-500"
    },
    {
      id: 3,
      title: "Core Strengthening",
      subtitle: "Based on your weak points",
      duration: "25 min",
      difficulty: "Intermediate",
      benefit: "Build Stability",
      color: "bg-purple-500/20",
      iconColor: "text-purple-500"
    }
  ];

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
          <h1 className="text-xl font-semibold text-white">AI Suggestions</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-FlexForge-orange" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Personalized for You</h2>
          <p className="text-white/60">AI-powered recommendations based on your progress</p>
        </div>

        {/* Suggestions */}
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${suggestion.color} rounded-xl flex items-center justify-center`}>
                  <Target className={`w-6 h-6 ${suggestion.iconColor}`} />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{suggestion.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{suggestion.subtitle}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1 text-white/60 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{suggestion.duration}</span>
                    </div>
                    <div className="bg-FlexForge-orange/20 px-2 py-1 rounded-full">
                      <span className="text-FlexForge-orange text-xs font-medium">{suggestion.difficulty}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-green-500 text-sm mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>{suggestion.benefit}</span>
                  </div>

                  <Button className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-3 rounded-xl">
                    Try This Workout
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="bg-gradient-to-r from-FlexForge-orange/20 to-FlexForge-orange/10 border-FlexForge-orange/30 rounded-2xl p-6 mt-8">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-2">Get More Personalized Tips</h3>
            <p className="text-white/60 text-sm mb-4">Complete your profile for better AI recommendations</p>
            <Button variant="outline" className="border-FlexForge-orange text-FlexForge-orange hover:bg-FlexForge-orange hover:text-white">
              Complete Profile
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

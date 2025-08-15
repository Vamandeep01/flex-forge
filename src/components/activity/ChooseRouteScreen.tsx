
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Sparkles } from 'lucide-react';
import { ActivityType } from '@/pages/ActivityTrackerPage';

interface ChooseRouteScreenProps {
  activityType: ActivityType;
  onContinue: () => void;
  onBack: () => void;
}

export function ChooseRouteScreen({ activityType, onContinue, onBack }: ChooseRouteScreenProps) {
  const routes = [
    { name: 'Central Park Loop', distance: '3.2 km', time: '15 min', difficulty: 'Easy' },
    { name: 'Riverside Trail', distance: '5.1 km', time: '25 min', difficulty: 'Medium' },
    { name: 'Hill Challenge', distance: '7.8 km', time: '40 min', difficulty: 'Hard' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange/80 px-6 py-4 pt-12 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Choose Route</h1>
          <div className="w-10" />
        </div>
        
        <div className="text-white/80 text-center mb-4">
          Select a route for your {activityType} session
        </div>
      </div>

      {/* AI Suggestion */}
      <div className="p-6">
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">AI Suggestion</span>
          </div>
          <p className="text-white/70 text-sm">
            Based on your fitness level and previous activities, we recommend the Riverside Trail for optimal results.
          </p>
        </div>

        {/* Routes List */}
        <div className="space-y-4 mb-8">
          {routes.map((route, index) => (
            <div key={index} className="bg-dark-secondary p-4 rounded-2xl">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-white font-semibold">{route.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  route.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  route.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {route.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {route.distance}
                </div>
                <span>•</span>
                <span>{route.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <Button 
          onClick={onContinue}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange/90 text-white rounded-2xl py-4 text-lg font-semibold"
        >
          Continue to Route Selection
        </Button>
      </div>
    </div>
  );
}

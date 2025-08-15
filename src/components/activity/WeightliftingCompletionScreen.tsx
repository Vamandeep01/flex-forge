
import { Trophy, Calendar, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Activity } from '@/pages/ActivityTrackerPage';

interface WeightliftingCompletionScreenProps {
  activity: Activity;
  onViewActivities: () => void;
  onAddAnother: () => void;
}

export function WeightliftingCompletionScreen({ 
  activity, 
  onViewActivities, 
  onAddAnother 
}: WeightliftingCompletionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">Workout Complete!</h1>
        <p className="text-white/80">Great job on your weightlifting session</p>
      </div>

      {/* Stats */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        {/* Calories Circle */}
        <div className="text-center mb-8">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-dark-tertiary"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - 0.75)}`}
                className="text-FlexForge-orange"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-3xl font-bold">{activity.calories}</div>
                <div className="text-white/70 text-sm">calories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-dark-secondary rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-FlexForge-orange mx-auto mb-3" />
            <div className="text-white text-xl font-bold">{activity.duration}m</div>
            <div className="text-white/70 text-sm">Duration</div>
          </div>

          <div className="bg-dark-secondary rounded-xl p-6 text-center">
            <Target className="w-8 h-8 text-FlexForge-orange mx-auto mb-3" />
            <div className="text-white text-xl font-bold">3</div>
            <div className="text-white/70 text-sm">Sets Completed</div>
          </div>
        </div>

        {/* Achievement */}
        <div className="bg-gradient-to-r from-FlexForge-orange/20 to-FlexForge-orange-light/20 rounded-xl p-6 mb-8 border border-FlexForge-orange/30">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-FlexForge-orange rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Strength Builder</h3>
              <p className="text-white/70 text-sm">You've completed a great strength training session!</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-dark-secondary rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">Next Steps</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Post-workout stretching (5-10 mins)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Hydrate and refuel with protein</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Rest 48-72 hours before next session</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={onViewActivities}
            className="w-full bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light text-white font-semibold py-4 text-lg"
          >
            View My Activities
          </Button>
          
          <Button
            onClick={onAddAnother}
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10 py-4 text-lg"
          >
            Add Another Activity
          </Button>
        </div>
      </div>
    </div>
  );
}

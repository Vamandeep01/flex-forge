
import { Button } from '@/components/ui/button';
import { Check, Plus, TrendingUp } from 'lucide-react';
import { Activity } from '@/pages/ActivityTrackerPage';

interface ActivityCompletionScreenProps {
  activity: Activity;
  onViewActivities: () => void;
  onAddAnother: () => void;
}

export function ActivityCompletionScreen({ activity, onViewActivities, onAddAnother }: ActivityCompletionScreenProps) {
  const completionPercentage = Math.min((activity.calories / 300) * 100, 100);
  
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-500 to-green-600 px-6 py-12 pt-16 text-center rounded-b-3xl">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">Great Job!</h1>
        <p className="text-white/80">Activity completed successfully</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        {/* Calories Chart */}
        <div className="text-center mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-dark-tertiary"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${completionPercentage * 2.51} 251`}
                className="text-FlexForge-orange"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{activity.calories}</div>
                <div className="text-white/70 text-sm">Calories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-dark-secondary rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {Math.floor(activity.duration / 60)}:{(activity.duration % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-white/70 text-sm">Duration</div>
          </div>
          <div className="bg-dark-secondary rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-white mb-1">{activity.steps}</div>
            <div className="text-white/70 text-sm">Steps</div>
          </div>
        </div>

        {/* Next Activity Suggestion */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-4 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Next Suggestion</span>
          </div>
          <p className="text-white/70 text-sm mb-3">
            Try some post-{activity.type} stretches to improve recovery and flexibility.
          </p>
          <Button size="sm" variant="outline" className="border-blue-400 text-blue-400">
            Start Stretching
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-8 space-y-3">
        <Button
          onClick={onViewActivities}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange/90 text-white rounded-2xl py-4"
        >
          View My Activities
        </Button>
        <Button
          onClick={onAddAnother}
          variant="outline"
          className="w-full border-white/20 text-white hover:bg-white/10 rounded-2xl py-4"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Another Activity
        </Button>
      </div>
    </div>
  );
}

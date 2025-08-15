
import { ArrowLeft, Play, Clock, Zap, Target, Award } from 'lucide-react';
import { Activity } from '@/pages/ActivityTrackerPage';
import { Button } from '@/components/ui/button';

interface ActivityDetailScreenProps {
  activity: Activity;
  onBack: () => void;
  onStartSimilar: () => void;
}

export function ActivityDetailScreen({ activity, onBack, onStartSimilar }: ActivityDetailScreenProps) {
  const performanceScore = Math.floor(Math.random() * 30) + 70; // Mock score 70-100

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-xl font-bold">Activity Details</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        {/* Activity Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-FlexForge-orange rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">
              {activity.type === 'jogging' ? '🏃‍♂️' :
               activity.type === 'walking' ? '🚶‍♂️' :
               activity.type === 'cycling' ? '🚴‍♂️' :
               activity.type === 'lifting' ? '💪' : '🏃‍♂️'}
            </span>
          </div>
          <h2 className="text-white text-2xl font-bold capitalize mb-2">{activity.name}</h2>
          <p className="text-white/70">{activity.date.toDateString()}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-dark-secondary rounded-xl p-4 text-center">
            <Clock className="w-6 h-6 text-FlexForge-orange mx-auto mb-2" />
            <div className="text-white text-lg font-semibold">{activity.duration}m</div>
            <div className="text-white/70 text-sm">Duration</div>
          </div>
          <div className="bg-dark-secondary rounded-xl p-4 text-center">
            <Zap className="w-6 h-6 text-FlexForge-orange mx-auto mb-2" />
            <div className="text-white text-lg font-semibold">{activity.calories}</div>
            <div className="text-white/70 text-sm">Calories</div>
          </div>
          {activity.distance && (
            <div className="bg-dark-secondary rounded-xl p-4 text-center">
              <Target className="w-6 h-6 text-FlexForge-orange mx-auto mb-2" />
              <div className="text-white text-lg font-semibold">{activity.distance}km</div>
              <div className="text-white/70 text-sm">Distance</div>
            </div>
          )}
          {activity.steps && (
            <div className="bg-dark-secondary rounded-xl p-4 text-center">
              <div className="text-FlexForge-orange text-2xl mb-2">👣</div>
              <div className="text-white text-lg font-semibold">{activity.steps}</div>
              <div className="text-white/70 text-sm">Steps</div>
            </div>
          )}
        </div>

        {/* Performance Score */}
        <div className="bg-dark-secondary rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Performance Score</h3>
            <Award className="w-5 h-5 text-FlexForge-orange" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-dark-tertiary rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light h-3 rounded-full"
                style={{ width: `${performanceScore}%` }}
              />
            </div>
            <span className="text-white font-bold text-lg">{performanceScore}%</span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-dark-secondary rounded-xl p-6 mb-8">
          <h3 className="text-white font-semibold mb-4">Activity Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Improved cardiovascular health</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Enhanced endurance and stamina</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
              <span className="text-white/80">Better mood and mental clarity</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={onStartSimilar}
          className="w-full bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light text-white font-semibold py-4 text-lg"
        >
          <Play className="w-5 h-5 mr-2" />
          Start Similar Activity
        </Button>
      </div>
    </div>
  );
}

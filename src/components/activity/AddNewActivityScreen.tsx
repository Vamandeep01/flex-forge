
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ActivityType } from '@/pages/ActivityTrackerPage';
import { 
  MapPin, 
  Footprints, 
  Mountain, 
  Zap, 
  Bike, 
  Waves, 
  Dumbbell, 
  MoreHorizontal 
} from 'lucide-react';

interface AddNewActivityScreenProps {
  onSelectActivity: (activity: ActivityType) => void;
  onBack: () => void;
}

const activities = [
  { type: 'jogging' as ActivityType, name: 'Jogging', icon: MapPin, color: 'bg-blue-500' },
  { type: 'walking' as ActivityType, name: 'Walking', icon: Footprints, color: 'bg-green-500' },
  { type: 'hiking' as ActivityType, name: 'Hiking', icon: Mountain, color: 'bg-emerald-600' },
  { type: 'running' as ActivityType, name: 'Running', icon: Zap, color: 'bg-red-500' },
  { type: 'cycling' as ActivityType, name: 'Cycling', icon: Bike, color: 'bg-yellow-500' },
  { type: 'rowing' as ActivityType, name: 'Rowing', icon: Waves, color: 'bg-cyan-500' },
  { type: 'lifting' as ActivityType, name: 'Lifting', icon: Dumbbell, color: 'bg-purple-500' },
  { type: 'other' as ActivityType, name: 'Other', icon: MoreHorizontal, color: 'bg-gray-500' },
];

export function AddNewActivityScreen({ onSelectActivity, onBack }: AddNewActivityScreenProps) {
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
          <h1 className="text-white text-xl font-semibold">Add New Activity</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Activities Grid */}
      <div className="p-6 pt-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {activities.map((activity) => (
            <button
              key={activity.type}
              onClick={() => onSelectActivity(activity.type)}
              className="bg-dark-secondary p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-dark-tertiary transition-colors"
            >
              <div className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center`}>
                <activity.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">{activity.name}</span>
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <Button 
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange/90 text-white rounded-2xl py-4 text-lg font-semibold flex items-center gap-2"
          disabled
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

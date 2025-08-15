
import { Button } from '@/components/ui/button';
import { Plus, Activity } from 'lucide-react';

interface NoActivitiesScreenProps {
  onAddActivity: () => void;
}

export function NoActivitiesScreen({ onAddActivity }: NoActivitiesScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <h1 className="text-white text-2xl font-bold">Activity Tracker</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Empty state illustration */}
        <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-8">
          <Activity className="w-16 h-16 text-white/70" />
        </div>

        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          No Activities
        </h2>
        
        <p className="text-white/70 text-center mb-8 max-w-sm">
          Start your fitness journey by adding your first activity. Track your progress and achieve your goals!
        </p>

        <Button
          onClick={onAddActivity}
          className="bg-white text-FlexForge-orange hover:bg-white/90 rounded-2xl px-8 py-4 text-lg font-semibold flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Activity
        </Button>
      </div>
    </div>
  );
}

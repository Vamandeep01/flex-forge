
import { ArrowLeft, Calendar, TrendingUp } from 'lucide-react';
import { Activity } from '@/pages/ActivityTrackerPage';

interface ActivityStatsScreenProps {
  activities: Activity[];
  onBack: () => void;
}

export function ActivityStatsScreen({ activities, onBack }: ActivityStatsScreenProps) {
  const totalActivities = activities.length;
  const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0);
  const totalDuration = activities.reduce((sum, activity) => sum + activity.duration, 0);

  const activityStats = activities.reduce((stats, activity) => {
    stats[activity.type] = (stats[activity.type] || 0) + 1;
    return stats;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-xl font-bold">Activity Stats</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-dark-secondary rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/70 text-sm">Total Activities</span>
              <TrendingUp className="w-5 h-5 text-FlexForge-orange" />
            </div>
            <span className="text-white text-2xl font-bold">{totalActivities}</span>
          </div>

          <div className="bg-dark-secondary rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/70 text-sm">Calories Burned</span>
              <Calendar className="w-5 h-5 text-FlexForge-orange" />
            </div>
            <span className="text-white text-2xl font-bold">{totalCalories}</span>
          </div>
        </div>

        <div className="bg-dark-secondary rounded-2xl p-6 mb-6">
          <span className="text-white/70 text-sm">Total Duration</span>
          <div className="text-white text-2xl font-bold mt-2">
            {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
          </div>
        </div>

        {/* Activity Breakdown */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Activity Breakdown</h3>
          {Object.entries(activityStats).map(([type, count]) => (
            <div key={type} className="bg-dark-secondary rounded-xl p-4 flex items-center justify-between">
              <span className="text-white capitalize">{type}</span>
              <span className="text-FlexForge-orange font-semibold">{count} sessions</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

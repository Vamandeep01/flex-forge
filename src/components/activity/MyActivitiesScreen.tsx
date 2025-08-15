
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Filter, BarChart3, Calendar, MapPin } from 'lucide-react';
import { Activity } from '@/pages/ActivityTrackerPage';
import { ActivityFilterModal } from './ActivityFilterModal';

interface MyActivitiesScreenProps {
  activities: Activity[];
  onViewStats: () => void;
  onViewActivity: (activity: Activity) => void;
  onBack: () => void;
}

export function MyActivitiesScreen({ activities, onViewStats, onViewActivity, onBack }: MyActivitiesScreenProps) {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getActivityColor = (type: string) => {
    const colors = {
      jogging: 'bg-blue-500',
      walking: 'bg-green-500',
      hiking: 'bg-emerald-600',
      running: 'bg-red-500',
      cycling: 'bg-yellow-500',
      rowing: 'bg-cyan-500',
      lifting: 'bg-purple-500',
      other: 'bg-gray-500',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange/80 px-6 py-4 pt-12 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-white text-xl font-semibold">My Activities</h1>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onViewStats}
              className="text-white hover:bg-white/10"
            >
              <BarChart3 className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowFilter(true)}
              className="text-white hover:bg-white/10"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-4 overflow-x-auto">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const date = new Date();
            date.setDate(date.getDate() + offset);
            const isSelected = offset === 0;
            
            return (
              <button
                key={offset}
                onClick={() => setSelectedDate(date)}
                className={`flex-shrink-0 p-3 rounded-2xl text-center min-w-[70px] ${
                  isSelected 
                    ? 'bg-FlexForge-orange text-white' 
                    : 'bg-dark-secondary text-white/70 hover:bg-dark-tertiary'
                }`}
              >
                <div className="text-xs mb-1">{formatDate(date).split(' ')[0]}</div>
                <div className="text-lg font-semibold">{date.getDate()}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Activities List */}
      <div className="px-6 pb-8">
        {activities.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/70">No activities for this date</p>
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => onViewActivity(activity)}
                className="w-full bg-dark-secondary rounded-2xl p-4 text-left hover:bg-dark-tertiary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${getActivityColor(activity.type)} rounded-xl flex items-center justify-center`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{activity.name}</h3>
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <span>{Math.floor(activity.duration / 60)}min</span>
                      <span>•</span>
                      <span>{activity.calories} cal</span>
                      {activity.distance && (
                        <>
                          <span>•</span>
                          <span>{activity.distance} km</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-FlexForge-orange font-semibold">98%</div>
                    <div className="text-white/50 text-xs">Match</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <ActivityFilterModal 
        isOpen={showFilter}
        onClose={() => setShowFilter(false)}
        onApplyFilter={() => setShowFilter(false)}
      />
    </div>
  );
}

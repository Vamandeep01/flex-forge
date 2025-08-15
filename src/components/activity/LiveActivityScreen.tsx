
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Pause, Square, Play } from 'lucide-react';
import { ActivityType, Activity } from '@/pages/ActivityTrackerPage';

interface LiveActivityScreenProps {
  activityType: ActivityType;
  onComplete: (activity: Activity) => void;
  onPause: () => void;
}

export function LiveActivityScreen({ activityType, onComplete, onPause }: LiveActivityScreenProps) {
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
        setCalories(prev => prev + 0.2);
        setDistance(prev => prev + 0.01);
        setSteps(prev => prev + 2);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleComplete = () => {
    const activity: Activity = {
      id: Date.now().toString(),
      type: activityType,
      name: activityType.charAt(0).toUpperCase() + activityType.slice(1),
      duration: elapsedTime,
      calories: Math.round(calories),
      distance: parseFloat(distance.toFixed(2)),
      steps: Math.round(steps),
      date: new Date(),
    };
    onComplete(activity);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange/80 px-6 py-8 pt-16 text-center rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-2">
          {activityType.charAt(0).toUpperCase() + activityType.slice(1)} Session
        </h1>
        <p className="text-white/70">Keep going! You're doing great</p>
      </div>

      {/* Main Stats */}
      <div className="flex-1 px-6 py-8">
        {/* Time Display */}
        <div className="text-center mb-12">
          <div className="text-6xl font-bold text-white mb-2">
            {formatTime(elapsedTime)}
          </div>
          <div className="text-white/70">Elapsed Time</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-dark-secondary rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-FlexForge-orange mb-2">
              {Math.round(calories)}
            </div>
            <div className="text-white/70">Calories</div>
          </div>
          <div className="bg-dark-secondary rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-FlexForge-orange mb-2">
              {distance.toFixed(2)}
            </div>
            <div className="text-white/70">km</div>
          </div>
          <div className="bg-dark-secondary rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-FlexForge-orange mb-2">
              {Math.round(steps)}
            </div>
            <div className="text-white/70">Steps</div>
          </div>
          <div className="bg-dark-secondary rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-FlexForge-orange mb-2">
              {elapsedTime > 0 ? ((distance / (elapsedTime / 3600)).toFixed(1)) : '0.0'}
            </div>
            <div className="text-white/70">km/h</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-6 pb-8">
        <div className="flex gap-4">
          <Button
            onClick={() => {
              setIsRunning(!isRunning);
              onPause();
            }}
            variant="outline"
            className="flex-1 py-4 rounded-2xl border-white/20 bg-dark-secondary hover:bg-dark-tertiary text-white"
          >
            {isRunning ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {isRunning ? 'Pause' : 'Resume'}
          </Button>
          <Button
            onClick={handleComplete}
            className="flex-1 py-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white"
          >
            <Square className="w-5 h-5 mr-2" />
            Stop
          </Button>
        </div>
      </div>
    </div>
  );
}

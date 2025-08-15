
import { useState, useEffect } from 'react';
import { Pause, Play, Square, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Activity } from '@/pages/ActivityTrackerPage';

interface LiveWeightliftingScreenProps {
  onComplete: (activity: Activity) => void;
}

export function LiveWeightliftingScreen({ onComplete }: LiveWeightliftingScreenProps) {
  const [currentSet, setCurrentSet] = useState(1);
  const [currentRep, setCurrentRep] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(60);
  const [totalTime, setTotalTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSets = 3;
  const repsPerSet = 12;
  const estimatedCalories = 280;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        if (isResting && restTime > 0) {
          setRestTime(prev => prev - 1);
        } else if (isResting && restTime === 0) {
          setIsResting(false);
          setRestTime(60);
        } else {
          setTotalTime(prev => prev + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused, isResting, restTime]);

  const completeRep = () => {
    if (currentRep < repsPerSet) {
      setCurrentRep(prev => prev + 1);
    } else if (currentSet < totalSets) {
      setCurrentSet(prev => prev + 1);
      setCurrentRep(0);
      setIsResting(true);
    } else {
      // Workout complete
      const activity: Activity = {
        id: Date.now().toString(),
        type: 'lifting',
        name: 'Weightlifting Session',
        duration: Math.floor(totalTime / 60),
        calories: estimatedCalories,
        date: new Date()
      };
      onComplete(activity);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 text-center">
        <h1 className="text-white text-2xl font-bold mb-2">Weightlifting Session</h1>
        <div className="flex items-center justify-center space-x-2">
          <Timer className="w-5 h-5 text-white/80" />
          <span className="text-white/80 text-lg">{formatTime(totalTime)}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        {isResting ? (
          // Rest Screen
          <div className="text-center">
            <div className="w-32 h-32 bg-dark-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="text-center">
                <div className="text-FlexForge-orange text-3xl font-bold">{restTime}</div>
                <div className="text-white/70 text-sm">Rest Time</div>
              </div>
            </div>
            
            <h2 className="text-white text-2xl font-bold mb-4">Take a Rest</h2>
            <p className="text-white/70 mb-8">Great job! Rest before your next set</p>
            
            <div className="bg-dark-secondary rounded-xl p-6 mb-8">
              <div className="text-center">
                <span className="text-white/70">Next: Set {currentSet}</span>
                <div className="text-white text-xl font-bold">{repsPerSet} reps</div>
              </div>
            </div>
          </div>
        ) : (
          // Workout Screen
          <div className="text-center">
            <div className="mb-8">
              <div className="text-white/70 text-lg mb-2">Set {currentSet} of {totalSets}</div>
              <div className="text-white text-6xl font-bold mb-4">{currentRep}</div>
              <div className="text-white/70 text-lg">of {repsPerSet} reps</div>
            </div>

            {/* Progress Bar */}
            <div className="bg-dark-secondary rounded-full h-4 mb-8">
              <div 
                className="bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light h-4 rounded-full transition-all duration-300"
                style={{ width: `${(currentRep / repsPerSet) * 100}%` }}
              />
            </div>

            {/* Rep Button */}
            <button
              onClick={completeRep}
              className="w-32 h-32 bg-FlexForge-orange rounded-full flex items-center justify-center mx-auto mb-8 hover:bg-FlexForge-orange/90 transition-colors"
            >
              <span className="text-white text-xl font-bold">Complete Rep</span>
            </button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-dark-secondary rounded-xl p-4">
                <div className="text-FlexForge-orange text-2xl font-bold">{estimatedCalories}</div>
                <div className="text-white/70 text-sm">Calories</div>
              </div>
              <div className="bg-dark-secondary rounded-xl p-4">
                <div className="text-FlexForge-orange text-2xl font-bold">{currentSet - 1 + (currentRep / repsPerSet)}</div>
                <div className="text-white/70 text-sm">Sets Done</div>
              </div>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setIsPaused(!isPaused)}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
          >
            {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
          </Button>
          
          <Button
            onClick={() => {
              const activity: Activity = {
                id: Date.now().toString(),
                type: 'lifting',
                name: 'Weightlifting Session',
                duration: Math.floor(totalTime / 60),
                calories: Math.floor(estimatedCalories * ((currentSet - 1) / totalSets)),
                date: new Date()
              };
              onComplete(activity);
            }}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Square className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}

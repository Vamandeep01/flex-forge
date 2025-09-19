import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Flame, Trophy, AlertTriangle, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WorkoutCompletionScreen() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(true);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Simulate workout data save on component mount
  useEffect(() => {
    saveWorkoutData();
    
    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const saveWorkoutData = async () => {
    try {
      setIsSaving(true);
      setSaveError(null);
      
      // Simulate API call with potential failure
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 30% chance of failure for demonstration
          if (Math.random() > 0.7 && isOnline) {
            reject(new Error('Server temporarily unavailable'));
          } else if (!isOnline) {
            reject(new Error('No internet connection'));
          } else {
            resolve(true);
          }
        }, 2000);
      });
      
      setIsSaving(false);
    } catch (error) {
      setIsSaving(false);
      setSaveError(error instanceof Error ? error.message : 'Failed to save workout data');
    }
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    await saveWorkoutData();
    setIsRetrying(false);
  };

  // Show loading state while saving
  if (isSaving && !saveError) {
    return (
      <div className="min-h-screen bg-black p-4 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-FlexForge-orange border-t-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-white text-xl font-semibold mb-2">Saving Your Workout...</h2>
        <p className="text-white/60 text-center">Please don't close the app while we save your progress</p>
      </div>
    );
  }

  // Show error state if save failed
  if (saveError) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="text-center pt-16 pb-8">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            {!isOnline ? (
              <WifiOff className="w-12 h-12 text-red-500" />
            ) : (
              <AlertTriangle className="w-12 h-12 text-red-500" />
            )}
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">
            {!isOnline ? 'No Internet Connection' : 'Save Failed'}
          </h1>
          <p className="text-white/60 mb-6">
            {!isOnline 
              ? 'Your workout data will be saved once you\'re back online' 
              : saveError
            }
          </p>
          
          {isOnline && (
            <Button 
              className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-3 px-6 rounded-xl mb-4"
              onClick={handleRetry}
              disabled={isRetrying}
            >
              {isRetrying ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Retrying...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </div>
              )}
            </Button>
          )}
          
          <Button 
            variant="outline" 
            className="border-dark-tertiary text-white hover:bg-dark-secondary py-3 px-6 rounded-xl"
            onClick={() => navigate('/dashboard')}
          >
            Continue Anyway
          </Button>
        </div>

        {/* Connection Status */}
        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            {isOnline ? (
              <Wifi className="w-5 h-5 text-green-500" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-500" />
            )}
            <div>
              <p className="text-white font-medium">
                {isOnline ? 'Connected' : 'Offline'}
              </p>
              <p className="text-white/60 text-sm">
                {isOnline 
                  ? 'You can retry saving your workout' 
                  : 'Data will sync when connection is restored'
                }
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Success state - original content with success feedback
  return (
    <div className="min-h-screen bg-black p-4">
      {/* Success Icon */}
      <div className="text-center pt-16 pb-8">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-white text-3xl font-bold mb-2">Workout Complete!</h1>
        <p className="text-white/60">Great job finishing your session</p>
        
        {/* Save Success Indicator */}
        <div className="mt-4 inline-flex items-center space-x-2 bg-green-500/10 rounded-lg px-3 py-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-green-500 text-sm font-medium">Workout saved successfully</span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4 mb-8">
        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">45</div>
              <div className="text-white/60 text-sm">Minutes</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Flame className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">420</div>
              <div className="text-white/60 text-sm">Calories</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-FlexForge-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-6 h-6 text-FlexForge-orange" />
              </div>
              <div className="text-white text-2xl font-bold">8</div>
              <div className="text-white/60 text-sm">Exercises</div>
            </div>
          </div>
        </Card>

        <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Personal Best!</h3>
          <p className="text-white/60 text-sm mb-4">
            You've completed this workout faster than before. Keep up the great work!
          </p>
          <div className="bg-FlexForge-orange/10 rounded-lg p-3">
            <p className="text-FlexForge-orange text-sm font-medium">+25 XP earned</p>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg"
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-dark-tertiary text-white hover:bg-dark-secondary py-4 rounded-2xl text-lg"
          onClick={() => navigate('/workout-library')}
        >
          Browse More Workouts
        </Button>
      </div>
    </div>
  );
}

import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface WeightliftingSetupScreenProps {
  onStartWorkout: () => void;
  onBack: () => void;
}

export function WeightliftingSetupScreen({ onStartWorkout, onBack }: WeightliftingSetupScreenProps) {
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>(['chest']);
  const [reps, setReps] = useState(12);
  const [sets, setSets] = useState(3);
  const [weight, setWeight] = useState(50);

  const muscleGroups = [
    { id: 'chest', name: 'Chest', icon: '💪' },
    { id: 'back', name: 'Back', icon: '🏋️' },
    { id: 'legs', name: 'Legs', icon: '🦵' },
    { id: 'arms', name: 'Arms', icon: '💪' },
    { id: 'shoulders', name: 'Shoulders', icon: '🤸' },
    { id: 'core', name: 'Core', icon: '🎯' }
  ];

  const toggleMuscle = (muscleId: string) => {
    setSelectedMuscles(prev => 
      prev.includes(muscleId) 
        ? prev.filter(id => id !== muscleId)
        : [...prev, muscleId]
    );
  };

  const estimatedCalories = Math.round((sets * reps * weight * 0.05) + 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-xl font-bold">Setup Weightlifting</h1>
          <div className="w-10" />
        </div>
        <p className="text-white/80 text-center">Customize your weightlifting session</p>
      </div>

      {/* Content */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        {/* Target Muscles */}
        <div className="mb-8">
          <h3 className="text-white font-semibold text-lg mb-4">Target Muscles</h3>
          <div className="grid grid-cols-2 gap-3">
            {muscleGroups.map((muscle) => (
              <button
                key={muscle.id}
                onClick={() => toggleMuscle(muscle.id)}
                className={`p-4 rounded-xl border-2 transition-colors ${
                  selectedMuscles.includes(muscle.id)
                    ? 'border-FlexForge-orange bg-FlexForge-orange/10'
                    : 'border-dark-tertiary hover:border-FlexForge-orange/50'
                }`}
              >
                <div className="text-2xl mb-2">{muscle.icon}</div>
                <span className="text-white text-sm font-medium">{muscle.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workout Parameters */}
        <div className="space-y-6 mb-8">
          {/* Reps */}
          <div className="bg-dark-secondary rounded-xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Reps per Set</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setReps(Math.max(1, reps - 1))}
                  className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>
                <span className="text-white text-xl font-bold w-8 text-center">{reps}</span>
                <button
                  onClick={() => setReps(reps + 1)}
                  className="w-10 h-10 bg-FlexForge-orange rounded-full flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Sets */}
          <div className="bg-dark-secondary rounded-xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Number of Sets</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSets(Math.max(1, sets - 1))}
                  className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>
                <span className="text-white text-xl font-bold w-8 text-center">{sets}</span>
                <button
                  onClick={() => setSets(sets + 1)}
                  className="w-10 h-10 bg-FlexForge-orange rounded-full flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div className="bg-dark-secondary rounded-xl p-6">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Weight (kg)</span>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setWeight(Math.max(5, weight - 5))}
                  className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>
                <span className="text-white text-xl font-bold w-12 text-center">{weight}</span>
                <button
                  onClick={() => setWeight(weight + 5)}
                  className="w-10 h-10 bg-FlexForge-orange rounded-full flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calories Estimate */}
        <div className="bg-dark-secondary rounded-xl p-6 mb-8">
          <div className="text-center">
            <span className="text-white/70 text-sm">Estimated Calories</span>
            <div className="text-FlexForge-orange text-3xl font-bold">{estimatedCalories}</div>
            <span className="text-white/70 text-sm">cal burned</span>
          </div>
        </div>

        {/* Start Button */}
        <Button
          onClick={onStartWorkout}
          className="w-full bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light text-white font-semibold py-4 text-lg"
        >
          Start Weightlifting
        </Button>
      </div>
    </div>
  );
}

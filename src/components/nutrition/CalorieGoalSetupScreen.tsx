import { useState } from 'react';
import { ArrowLeft, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { NutritionScreen } from '@/pages/NutritionPage';

interface CalorieGoalSetupScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
  onUpdate: (updates: any) => void;
}

export default function CalorieGoalSetupScreen({ data, onNavigate, onUpdate }: CalorieGoalSetupScreenProps) {
  const [calorieGoal, setCalorieGoal] = useState([data.dailyCalorieGoal]);
  
  // Calculate macro targets based on calorie goal
  const proteinCalories = Math.round(calorieGoal[0] * 0.25); // 25% protein
  const carbCalories = Math.round(calorieGoal[0] * 0.45); // 45% carbs  
  const fatCalories = Math.round(calorieGoal[0] * 0.30); // 30% fat

  const proteinGrams = Math.round(proteinCalories / 4);
  const carbGrams = Math.round(carbCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);

  const handleSetGoal = () => {
    onUpdate({
      dailyCalorieGoal: calorieGoal[0],
      macros: {
        protein: proteinGrams,
        carbs: carbGrams,
        fat: fatGrams
      }
    });
    onNavigate('dashboard');
  };

  const progressPercentage = Math.min((data.currentCalories / calorieGoal[0]) * 100, 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-orange p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('dashboard')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Set Calorie Goal</h1>
        </div>

        {/* Current Goal Display */}
        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-2">{calorieGoal[0]}</div>
          <p className="text-white/80 text-lg">kcal daily target</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Goal Slider */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-FlexForge-orange" />
              <h3 className="text-white text-lg font-semibold">Daily Calorie Target</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">1200 kcal</span>
                <span className="text-white/60">4000 kcal</span>
              </div>
              <Slider
                value={calorieGoal}
                onValueChange={setCalorieGoal}
                min={1200}
                max={4000}
                step={50}
                className="w-full"
              />
              <div className="text-center">
                <span className="text-FlexForge-orange font-semibold text-xl">{calorieGoal[0]} kcal</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Current Progress */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Today's Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Consumed</span>
              <span className="text-white">{data.currentCalories} / {calorieGoal[0]} kcal</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="text-center">
              <span className="text-FlexForge-orange text-sm">
                {calorieGoal[0] - data.currentCalories > 0 
                  ? `${calorieGoal[0] - data.currentCalories} kcal remaining`
                  : 'Goal reached!'
                }
              </span>
            </div>
          </div>
        </Card>

        {/* Macro Targets */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Macro Targets</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-dark-tertiary rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded bg-green-accent" />
                <span className="text-white">Protein</span>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">{proteinGrams}g</div>
                <div className="text-white/60 text-sm">25%</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-dark-tertiary rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded bg-blue-accent" />
                <span className="text-white">Carbs</span>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">{carbGrams}g</div>
                <div className="text-white/60 text-sm">45%</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-dark-tertiary rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded bg-FlexForge-orange" />
                <span className="text-white">Fat</span>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">{fatGrams}g</div>
                <div className="text-white/60 text-sm">30%</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Set Goal Button */}
        <Button 
          onClick={handleSetGoal}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-4 rounded-2xl"
        >
          Set Calorie Goal
        </Button>
      </div>
    </div>
  );
}
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NutritionScreen } from '@/pages/NutritionPage';

interface MealAddedConfirmationScreenProps {
  onNavigate: (screen: NutritionScreen) => void;
}

export default function MealAddedConfirmationScreen({ onNavigate }: MealAddedConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="bg-dark-secondary border-dark-tertiary p-8 w-full max-w-sm text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-accent/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-accent" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h2 className="text-white text-2xl font-bold">Meal Added!</h2>
          <p className="text-white/70">
            Your meal has been successfully added to your daily nutrition tracking.
          </p>
        </div>

        {/* Added Meal Summary */}
        <div className="bg-dark-tertiary rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-sm">Calories added</span>
            <span className="text-FlexForge-orange font-semibold">+320 kcal</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-sm">Meal type</span>
            <span className="text-white text-sm">Lunch</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60 text-sm">Time</span>
            <span className="text-white text-sm">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-green-accent text-lg font-bold">12g</div>
            <p className="text-white/60 text-xs">Protein</p>
          </div>
          <div className="text-center">
            <div className="text-blue-accent text-lg font-bold">45g</div>
            <p className="text-white/60 text-xs">Carbs</p>
          </div>
          <div className="text-center">
            <div className="text-FlexForge-orange text-lg font-bold">15g</div>
            <p className="text-white/60 text-xs">Fat</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={() => onNavigate('my-meals')}
            className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-3 rounded-xl"
          >
            View My Meals
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            onClick={() => onNavigate('dashboard')}
            variant="outline"
            className="w-full border-dark-tertiary text-white hover:bg-dark-tertiary"
          >
            Great, thanks!
          </Button>
        </div>

        {/* Achievement Badge */}
        <div className="bg-gradient-orange p-3 rounded-xl">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">🎯</span>
            </div>
            <span className="text-white text-sm font-medium">Daily goal: 75% complete</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
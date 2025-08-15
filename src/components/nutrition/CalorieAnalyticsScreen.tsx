import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { NutritionScreen } from '@/pages/NutritionPage';

interface CalorieAnalyticsScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function CalorieAnalyticsScreen({ data, onNavigate }: CalorieAnalyticsScreenProps) {
  const chartData = [
    { day: 'Mon', calories: 1650 },
    { day: 'Tue', calories: 1800 },
    { day: 'Wed', calories: 1745 },
    { day: 'Thu', calories: 1920 },
    { day: 'Fri', calories: 1680 },
    { day: 'Sat', calories: 1750 },
    { day: 'Sun', calories: 1845 }
  ];

  const macros = [
    { name: 'Carbs', amount: 185, unit: 'g', color: 'bg-blue-accent', percentage: 45 },
    { name: 'Protein', amount: 120, unit: 'g', color: 'bg-green-accent', percentage: 25 },
    { name: 'Fat', amount: 65, unit: 'g', color: 'bg-FlexForge-orange', percentage: 30 }
  ];

  const remainingCalories = data.dailyCalorieGoal - data.currentCalories;

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
          <h1 className="text-white text-xl font-semibold">Calorie Intake</h1>
        </div>

        {/* Current Status */}
        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-2">{data.currentCalories}</div>
          <p className="text-white/80 text-lg mb-1">kcal consumed</p>
          <div className="flex items-center justify-center space-x-2 text-white/70">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">{remainingCalories} calories left</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Weekly Chart */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-6">7-Day Trend</h3>
          
          {/* Chart */}
          <div className="h-40 mb-4">
            <svg viewBox="0 0 350 120" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--FlexForge-orange))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--FlexForge-orange))" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              
              {/* Area fill */}
              <path
                d="M 30 90 Q 80 70 130 75 T 230 65 T 320 70 L 320 110 L 30 110 Z"
                fill="url(#orangeGradient)"
              />
              
              {/* Line */}
              <path
                d="M 30 90 Q 80 70 130 75 T 230 65 T 320 70"
                stroke="hsl(var(--FlexForge-orange))"
                strokeWidth="3"
                fill="none"
              />
              
              {/* Data points */}
              {chartData.map((_, index) => (
                <circle
                  key={index}
                  cx={30 + index * 45}
                  cy={110 - (chartData[index].calories / 25)}
                  r="4"
                  fill="hsl(var(--FlexForge-orange))"
                />
              ))}
            </svg>
          </div>
          
          <div className="flex justify-between text-white/60 text-xs">
            {chartData.map((item) => (
              <span key={item.day}>{item.day}</span>
            ))}
          </div>
        </Card>

        {/* Macronutrients Breakdown */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-6">Macronutrients</h3>
          
          <div className="space-y-4">
            {macros.map((macro) => (
              <div key={macro.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded ${macro.color}`} />
                    <span className="text-white font-medium">{macro.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-semibold">{macro.amount}{macro.unit}</span>
                    <span className="text-white/60 text-sm ml-2">({macro.percentage}%)</span>
                  </div>
                </div>
                <Progress value={macro.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
            <div className="text-FlexForge-orange text-2xl font-bold">7</div>
            <p className="text-white/60 text-sm">Days tracked</p>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
            <div className="text-green-accent text-2xl font-bold">12</div>
            <p className="text-white/60 text-sm">Meals logged</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { Search, User, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { NutritionScreen } from '@/pages/NutritionPage';

interface NutritionDashboardScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function NutritionDashboardScreen({ data, onNavigate }: NutritionDashboardScreenProps) {
  const categories = [
    { name: 'Vegetable', icon: '🥬', color: 'bg-green-accent' },
    { name: 'Fruit', icon: '🍎', color: 'bg-FlexForge-orange' },
    { name: 'Meat', icon: '🥩', color: 'bg-purple-accent' }
  ];

  const mealSuggestions = [
    {
      name: 'Avocado Toast',
      calories: '320kcal',
      time: '15min',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Greek Salad',
      calories: '280kcal', 
      time: '10min',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const progressPercentage = (data.currentCalories / data.dailyCalorieGoal) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-orange p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Hello, Makise!</p>
              <p className="text-white text-lg font-semibold">Ready for healthy meals?</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('analytics')}
            className="text-white hover:bg-white/20"
          >
            <Search className="w-6 h-6" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          <Input 
            placeholder="Search food database..."
            className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-xl"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Browse Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Browse Category</h3>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <p className="text-white text-sm font-medium">{category.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Calorie Goal */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white text-lg font-semibold">Daily Goal</h3>
              <p className="text-white/60 text-sm">Track your daily intake</p>
            </div>
            <Button 
              onClick={() => onNavigate('calorie-goal')}
              variant="ghost" 
              size="sm"
              className="text-FlexForge-orange hover:bg-FlexForge-orange/20"
            >
              Edit
            </Button>
          </div>
          
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-FlexForge-orange">{data.dailyCalorieGoal}</div>
            <p className="text-white/60 text-sm">kcal daily goal</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Progress</span>
              <span className="text-white">{data.currentCalories} / {data.dailyCalorieGoal} kcal</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-FlexForge-orange text-xs text-center">
              {data.dailyCalorieGoal - data.currentCalories} kcal remaining
            </p>
          </div>
        </Card>

        {/* Meal Suggestions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">Suggested Meals</h3>
            <Button 
              onClick={() => onNavigate('my-meals')}
              variant="ghost" 
              size="sm"
              className="text-FlexForge-orange hover:bg-FlexForge-orange/20"
            >
              See All
            </Button>
          </div>

          <div className="space-y-3">
            {mealSuggestions.map((meal, index) => (
              <Card key={index} className="bg-dark-secondary border-dark-tertiary p-4">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${meal.image})` }}
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{meal.name}</h4>
                    <div className="flex items-center space-x-4 text-white/60 text-sm mt-1">
                      <span>{meal.calories}</span>
                      <span>{meal.time}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => onNavigate('add-meal')}
                    size="sm"
                    className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button 
        onClick={() => onNavigate('food-analysis')}
        className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark shadow-orange"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
}
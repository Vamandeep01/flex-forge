import { useState } from 'react';
import { ArrowLeft, Camera, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { NutritionScreen } from '@/pages/NutritionPage';

interface AddMealScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
  onUpdate: (updates: any) => void;
}

export default function AddMealScreen({ data, onNavigate, onUpdate }: AddMealScreenProps) {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [protein, setProtein] = useState([25]);
  const [carbs, setCarbs] = useState([40]);
  const [fat, setFat] = useState([15]);
  const [calories, setCalories] = useState([350]);
  const [aiSuggestions, setAiSuggestions] = useState(true);

  const handleContinue = () => {
    const newMeal = {
      name: mealName,
      type: mealType,
      nutrition: {
        protein: protein[0],
        carbs: carbs[0],
        fat: fat[0],
        calories: calories[0]
      },
      timestamp: new Date().toISOString()
    };
    
    onUpdate({
      meals: [...data.meals, newMeal],
      currentCalories: data.currentCalories + calories[0]
    });
    
    onNavigate('meal-added');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-orange p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('my-meals')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Add New Meal</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Photo Upload */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-dark-tertiary rounded-2xl flex items-center justify-center">
              <Camera className="w-10 h-10 text-white/40" />
            </div>
            <div className="text-center">
              <p className="text-white font-medium">Upload meal photo</p>
              <p className="text-white/60 text-sm">Help AI analyze your food</p>
            </div>
            <Button 
              variant="outline" 
              className="border-FlexForge-orange text-FlexForge-orange hover:bg-FlexForge-orange hover:text-white"
            >
              Take Photo
            </Button>
          </div>
        </Card>

        {/* Meal Information */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="meal-name" className="text-white">Meal Name</Label>
            <Input
              id="meal-name"
              placeholder="e.g., Grilled Chicken Salad"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              className="bg-dark-secondary border-dark-tertiary text-white"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white">Meal Type</Label>
            <Select value={mealType} onValueChange={setMealType}>
              <SelectTrigger className="bg-dark-secondary border-dark-tertiary text-white">
                <SelectValue placeholder="Select meal type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Nutritional Information */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6 space-y-6">
          <h3 className="text-white text-lg font-semibold">Nutritional Info</h3>
          
          {/* Protein */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-white">Protein</Label>
              <span className="text-FlexForge-orange font-semibold">{protein[0]}g</span>
            </div>
            <Slider
              value={protein}
              onValueChange={setProtein}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          {/* Carbs */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-white">Carbs</Label>
              <span className="text-blue-accent font-semibold">{carbs[0]}g</span>
            </div>
            <Slider
              value={carbs}
              onValueChange={setCarbs}
              max={150}
              step={1}
              className="w-full"
            />
          </div>

          {/* Fat */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-white">Fat</Label>
              <span className="text-green-accent font-semibold">{fat[0]}g</span>
            </div>
            <Slider
              value={fat}
              onValueChange={setFat}
              max={50}
              step={1}
              className="w-full"
            />
          </div>

          {/* Total Calories */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-white">Total Calories</Label>
              <span className="text-white font-bold text-lg">{calories[0]} kcal</span>
            </div>
            <Slider
              value={calories}
              onValueChange={setCalories}
              max={1000}
              step={10}
              className="w-full"
            />
          </div>
        </Card>

        {/* AI Suggestions Toggle */}
        <Card className="bg-dark-secondary border-dark-tertiary p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">AI Suggestions</h4>
              <p className="text-white/60 text-sm">Get personalized meal recommendations</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setAiSuggestions(!aiSuggestions)}
              className="text-FlexForge-orange hover:bg-FlexForge-orange/20"
            >
              {aiSuggestions ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
            </Button>
          </div>
        </Card>

        {/* Continue Button */}
        <Button 
          onClick={handleContinue}
          disabled={!mealName || !mealType}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-4 rounded-2xl"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { ArrowLeft, Clock, ChefHat, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { NutritionScreen } from '@/pages/NutritionPage';

interface MealRecipeDetailScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function MealRecipeDetailScreen({ data, onNavigate }: MealRecipeDetailScreenProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<boolean[]>([]);

  const recipeData = {
    name: 'North Texas Salad With Nutmeg & Radish',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&crop=center',
    prepTime: '15 min',
    calories: 342,
    servings: 2,
    difficulty: 'Easy',
    nutrition: {
      protein: 18,
      carbs: 25,
      fat: 20,
      fiber: 8
    },
    ingredients: [
      { name: 'Mixed greens', amount: '4 cups', checked: false },
      { name: 'Cherry tomatoes', amount: '1 cup', checked: false },
      { name: 'Radish, sliced', amount: '1/2 cup', checked: false },
      { name: 'Avocado', amount: '1 medium', checked: false },
      { name: 'Feta cheese', amount: '1/4 cup', checked: false },
      { name: 'Olive oil', amount: '2 tbsp', checked: false },
      { name: 'Lemon juice', amount: '1 tbsp', checked: false },
      { name: 'Ground nutmeg', amount: '1/4 tsp', checked: false }
    ],
    steps: [
      {
        step: 1,
        instruction: 'Wash and dry the mixed greens thoroughly. Place in a large salad bowl.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center'
      },
      {
        step: 2,
        instruction: 'Slice the radishes thinly and halve the cherry tomatoes. Add to the greens.',
        image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=300&h=200&fit=crop&crop=center'
      },
      {
        step: 3,
        instruction: 'Cut the avocado into cubes and add to the salad along with crumbled feta cheese.',
        image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=300&h=200&fit=crop&crop=center'
      },
      {
        step: 4,
        instruction: 'Whisk together olive oil, lemon juice, and nutmeg. Drizzle over salad and toss gently.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center'
      }
    ]
  };

  const handleIngredientCheck = (index: number) => {
    const newChecked = [...checkedIngredients];
    newChecked[index] = !newChecked[index];
    setCheckedIngredients(newChecked);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${recipeData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        
        {/* Header */}
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('dashboard')}
            className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>

        {/* Recipe Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white text-2xl font-bold mb-2 leading-tight">{recipeData.name}</h1>
          <div className="flex items-center space-x-4 text-white/80 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{recipeData.prepTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipeData.difficulty}</span>
            </div>
            <span>{recipeData.calories} kcal</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-6 pb-0">
        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-dark-secondary border-dark-tertiary p-3 text-center">
            <div className="text-FlexForge-orange text-lg font-bold">{recipeData.nutrition.protein}g</div>
            <p className="text-white/60 text-xs">Protein</p>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-3 text-center">
            <div className="text-blue-accent text-lg font-bold">{recipeData.nutrition.carbs}g</div>
            <p className="text-white/60 text-xs">Carbs</p>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-3 text-center">
            <div className="text-green-accent text-lg font-bold">{recipeData.nutrition.fat}g</div>
            <p className="text-white/60 text-xs">Fat</p>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-3 text-center">
            <div className="text-white text-lg font-bold">{recipeData.servings}</div>
            <p className="text-white/60 text-xs">Servings</p>
          </Card>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="p-6">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-dark-secondary">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="recipe">Recipe</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6 mt-6">
            {/* Description */}
            <Card className="bg-dark-secondary border-dark-tertiary p-6">
              <h3 className="text-white text-lg font-semibold mb-3">About this recipe</h3>
              <p className="text-white/80 leading-relaxed">
                A fresh and vibrant salad combining crisp mixed greens with the peppery crunch of radishes and the creamy richness of avocado. The subtle warmth of nutmeg in the dressing adds an unexpected twist that elevates this simple salad to something special.
              </p>
            </Card>

            {/* Ingredients */}
            <Card className="bg-dark-secondary border-dark-tertiary p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Ingredients ({recipeData.servings} servings)</h3>
              <div className="space-y-3">
                {recipeData.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox
                      checked={checkedIngredients[index] || false}
                      onCheckedChange={() => handleIngredientCheck(index)}
                      className="border-FlexForge-orange data-[state=checked]:bg-FlexForge-orange"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <span className={`text-white ${checkedIngredients[index] ? 'line-through opacity-60' : ''}`}>
                        {ingredient.name}
                      </span>
                      <span className="text-white/60 text-sm">{ingredient.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Nutritional Benefits */}
            <Card className="bg-dark-secondary border-dark-tertiary p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Nutritional Benefits</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-accent rounded-full" />
                  <span className="text-white/80 text-sm">High in healthy fats from avocado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-accent rounded-full" />
                  <span className="text-white/80 text-sm">Rich in vitamins A, C, and K</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
                  <span className="text-white/80 text-sm">Good source of dietary fiber</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-accent rounded-full" />
                  <span className="text-white/80 text-sm">Low in calories, high in nutrients</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="recipe" className="space-y-6 mt-6">
            {/* Cooking Steps */}
            <div className="space-y-4">
              {recipeData.steps.map((step, index) => (
                <Card key={index} className="bg-dark-secondary border-dark-tertiary p-6">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-FlexForge-orange rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white mb-3 leading-relaxed">{step.instruction}</p>
                      <div 
                        className="w-full h-24 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Cooking Tips */}
            <Card className="bg-dark-secondary border-dark-tertiary p-6">
              <h3 className="text-white text-lg font-semibold mb-3">Pro Tips</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-FlexForge-orange mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Chill the salad bowl in the refrigerator for 10 minutes before serving</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-FlexForge-orange mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Add the avocado just before serving to prevent browning</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-FlexForge-orange mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Toast the nutmeg lightly in a dry pan for enhanced flavor</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Meal Button */}
        <Button 
          onClick={() => onNavigate('add-meal')}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-4 rounded-2xl mt-6"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add to Meal Plan
        </Button>
      </div>
    </div>
  );
}
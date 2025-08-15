import { ArrowLeft, Plus, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NutritionScreen } from '@/pages/NutritionPage';

interface FoodDetailScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function FoodDetailScreen({ data, onNavigate }: FoodDetailScreenProps) {
  const foodData = {
    name: 'Mandarin Orange',
    image: 'https://images.unsplash.com/photo-1547035520-de7be8d70b9b?w=400&h=400&fit=crop&crop=center',
    calories: 47,
    servingSize: '100g',
    nutrition: {
      protein: 0.8,
      carbs: 11.7,
      fat: 0.3,
      fiber: 1.6,
      sugar: 9.3,
      sodium: 2,
      potassium: 166,
      vitamin_c: 26.7,
      calcium: 37
    },
    benefits: [
      'High in Vitamin C',
      'Good source of fiber',
      'Low in calories',
      'Natural antioxidants',
      'Supports immune system'
    ],
    tags: ['Citrus', 'Vitamin C', 'Low Calorie', 'Natural']
  };

  const macroData = [
    { name: 'Protein', value: foodData.nutrition.protein, unit: 'g', color: 'bg-green-accent', percentage: 7 },
    { name: 'Carbs', value: foodData.nutrition.carbs, unit: 'g', color: 'bg-blue-accent', percentage: 82 },
    { name: 'Fat', value: foodData.nutrition.fat, unit: 'g', color: 'bg-FlexForge-orange', percentage: 11 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foodData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        
        {/* Header Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onNavigate('dashboard')}
            className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
            >
              <Heart className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
            >
              <Share2 className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Food Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white text-3xl font-bold mb-2">{foodData.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="bg-FlexForge-orange px-3 py-1 rounded-lg">
              <span className="text-white font-semibold">{foodData.calories} kcal</span>
            </div>
            <span className="text-white/80">per {foodData.servingSize}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {foodData.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-dark-tertiary text-white">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Macronutrient Breakdown */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Macronutrients</h3>
          
          {/* Macro Pie Chart Visual */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--green-accent))"
                  strokeWidth="12"
                  strokeDasharray={`${macroData[0].percentage * 2.51} 251`}
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--blue-accent))"
                  strokeWidth="12"
                  strokeDasharray={`${macroData[1].percentage * 2.51} 251`}
                  strokeDashoffset={`-${macroData[0].percentage * 2.51}`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--FlexForge-orange))"
                  strokeWidth="12"
                  strokeDasharray={`${macroData[2].percentage * 2.51} 251`}
                  strokeDashoffset={`-${(macroData[0].percentage + macroData[1].percentage) * 2.51}`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{foodData.calories}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {macroData.map((macro) => (
              <div key={macro.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${macro.color}`} />
                  <span className="text-white">{macro.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold">{macro.value}{macro.unit}</span>
                  <span className="text-white/60 text-sm ml-2">({macro.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Detailed Nutrition */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Nutrition Facts</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-dark-tertiary">
              <span className="text-white/60">Fiber</span>
              <span className="text-white font-semibold">{foodData.nutrition.fiber}g</span>
            </div>
            <div className="flex justify-between py-2 border-b border-dark-tertiary">
              <span className="text-white/60">Sugar</span>
              <span className="text-white font-semibold">{foodData.nutrition.sugar}g</span>
            </div>
            <div className="flex justify-between py-2 border-b border-dark-tertiary">
              <span className="text-white/60">Sodium</span>
              <span className="text-white font-semibold">{foodData.nutrition.sodium}mg</span>
            </div>
            <div className="flex justify-between py-2 border-b border-dark-tertiary">
              <span className="text-white/60">Potassium</span>
              <span className="text-white font-semibold">{foodData.nutrition.potassium}mg</span>
            </div>
            <div className="flex justify-between py-2 border-b border-dark-tertiary">
              <span className="text-white/60">Vitamin C</span>
              <span className="text-white font-semibold">{foodData.nutrition.vitamin_c}mg</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-white/60">Calcium</span>
              <span className="text-white font-semibold">{foodData.nutrition.calcium}mg</span>
            </div>
          </div>
        </Card>

        {/* Health Benefits */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Health Benefits</h3>
          <div className="space-y-2">
            {foodData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-FlexForge-orange rounded-full" />
                <span className="text-white/80">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Add Meal Button */}
        <Button 
          onClick={() => onNavigate('add-meal')}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-4 rounded-2xl"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add to Meal
        </Button>
      </div>
    </div>
  );
}
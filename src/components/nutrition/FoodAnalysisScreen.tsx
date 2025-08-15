import { useState } from 'react';
import { ArrowLeft, Camera, Scan, Zap, Leaf, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NutritionScreen } from '@/pages/NutritionPage';

interface FoodAnalysisScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function FoodAnalysisScreen({ data, onNavigate }: FoodAnalysisScreenProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  const analysisData = {
    foodName: 'Mandarin Orange',
    calories: 47,
    nutrition: {
      protein: 0.8,
      carbs: 11.7,
      fat: 0.3,
      fiber: 1.6,
      sugar: 9.3,
      vitamin_c: 26.7
    },
    highlights: ['High in Vitamin C', 'Low Calorie', 'Good Source of Fiber']
  };

  if (analysisComplete) {
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
            <h1 className="text-white text-xl font-semibold">Food Analysis</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Food Image */}
          <Card className="bg-dark-secondary border-dark-tertiary overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1547035520-de7be8d70b9b?w=400&h=300&fit=crop&crop=center')"
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white text-2xl font-bold">{analysisData.foodName}</h2>
                <p className="text-white/80">AI Analysis Complete</p>
              </div>
            </div>
          </Card>

          {/* Nutrition Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {analysisData.highlights.map((highlight, index) => {
              const icons = [Leaf, Zap, Dumbbell];
              const colors = ['text-green-accent', 'text-FlexForge-orange', 'text-blue-accent'];
              const Icon = icons[index];
              
              return (
                <Card key={index} className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                  <Icon className={`w-8 h-8 ${colors[index]} mx-auto mb-2`} />
                  <p className="text-white text-xs font-medium">{highlight}</p>
                </Card>
              );
            })}
          </div>

          {/* Calorie Info */}
          <Card className="bg-dark-secondary border-dark-tertiary p-6 text-center">
            <div className="text-4xl font-bold text-FlexForge-orange mb-2">
              {analysisData.calories}
            </div>
            <p className="text-white/60">kcal per 100g</p>
          </Card>

          {/* Detailed Nutrition */}
          <Card className="bg-dark-secondary border-dark-tertiary p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Nutritional Breakdown</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/60">Protein</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Carbs</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Fat</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.fat}g</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/60">Fiber</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.fiber}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sugar</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.sugar}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Vitamin C</span>
                  <span className="text-white font-semibold">{analysisData.nutrition.vitamin_c}mg</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => onNavigate('add-meal')}
              className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-4 rounded-2xl"
            >
              Add to Meal
            </Button>
            <Button 
              onClick={() => onNavigate('food-detail')}
              variant="outline"
              className="w-full border-FlexForge-orange text-FlexForge-orange hover:bg-FlexForge-orange hover:text-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-white text-xl font-semibold">AI Food Scanner</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Camera Viewfinder */}
        <Card className="bg-dark-secondary border-dark-tertiary aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-tertiary to-dark-secondary flex items-center justify-center">
            <div className="text-center space-y-4">
              {isScanning ? (
                <>
                  <Scan className="w-16 h-16 text-FlexForge-orange mx-auto animate-pulse" />
                  <p className="text-white">Analyzing your food...</p>
                  <div className="w-32 h-2 bg-dark-tertiary rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-FlexForge-orange rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </>
              ) : (
                <>
                  <Camera className="w-16 h-16 text-white/40 mx-auto" />
                  <p className="text-white/60">Position food in the frame</p>
                  <p className="text-white/40 text-sm">Point camera at your meal for instant analysis</p>
                </>
              )}
            </div>
          </div>
          
          {/* Scanning Frame */}
          <div className="absolute inset-4 border-2 border-FlexForge-orange rounded-2xl border-dashed opacity-50" />
          
          {/* Corner Indicators */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-FlexForge-orange" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-FlexForge-orange" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-FlexForge-orange" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-FlexForge-orange" />
        </Card>

        {/* Instructions */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <h3 className="text-white text-lg font-semibold mb-4">How it works</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-FlexForge-orange rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <p className="text-white/80 text-sm">Position your food in the camera frame</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-FlexForge-orange rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <p className="text-white/80 text-sm">Tap scan to analyze nutritional content</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-FlexForge-orange rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <p className="text-white/80 text-sm">Get instant calories and macro breakdown</p>
            </div>
          </div>
        </Card>

        {/* Scan Button */}
        <Button 
          onClick={handleScan}
          disabled={isScanning}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark font-semibold py-6 rounded-2xl text-lg shadow-orange"
        >
          {isScanning ? (
            <>
              <Scan className="w-6 h-6 mr-2 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Camera className="w-6 h-6 mr-2" />
              Scan Food
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
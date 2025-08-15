import { useState } from 'react';
import { ArrowLeft, Calendar, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NutritionScreen } from '@/pages/NutritionPage';

interface MyMealsScreenProps {
  data: any;
  onNavigate: (screen: NutritionScreen) => void;
}

export default function MyMealsScreen({ data, onNavigate }: MyMealsScreenProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 3 + i);
    return date;
  });

  const meals = {
    breakfast: [
      {
        name: 'Avocado Toast',
        calories: 320,
        time: '8:30 AM',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=200&h=150&fit=crop&crop=center'
      },
      {
        name: 'Greek Yogurt',
        calories: 150,
        time: '9:15 AM',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=150&fit=crop&crop=center'
      }
    ],
    lunch: [
      {
        name: 'Quinoa Salad',
        calories: 420,
        time: '12:30 PM',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=150&fit=crop&crop=center'
      }
    ],
    dinner: [
      {
        name: 'Grilled Salmon',
        calories: 485,
        time: '7:00 PM',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=150&fit=crop&crop=center'
      }
    ],
    snack: [
      {
        name: 'Mixed Nuts',
        calories: 180,
        time: '3:30 PM',
        image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=200&h=150&fit=crop&crop=center'
      }
    ]
  };

  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'] as const;

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
          <h1 className="text-white text-xl font-semibold">My Meals</h1>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-white/80" />
            <span className="text-white/80 text-sm">Week View</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Week Calendar */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {currentWeek.map((date, index) => {
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = date.toDateString() === selectedDate.toDateString();
            
            return (
              <Button
                key={index}
                variant={isSelected ? "default" : "ghost"}
                className={`min-w-[60px] flex-col space-y-1 h-16 ${
                  isSelected 
                    ? 'bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="text-xs">{weekDays[index]}</span>
                <span className={`text-lg font-semibold ${isToday ? 'text-FlexForge-orange' : ''}`}>
                  {date.getDate()}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Meal Tabs */}
        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-dark-secondary">
            <TabsTrigger value="breakfast" className="text-xs">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch" className="text-xs">Lunch</TabsTrigger>
            <TabsTrigger value="dinner" className="text-xs">Dinner</TabsTrigger>
            <TabsTrigger value="snack" className="text-xs">Snack</TabsTrigger>
          </TabsList>

          {mealTypes.map((mealType) => (
            <TabsContent key={mealType} value={mealType} className="space-y-3">
              {meals[mealType].length > 0 ? (
                meals[mealType].map((meal, index) => (
                  <Card key={index} className="bg-dark-secondary border-dark-tertiary p-4">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-20 h-16 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${meal.image})` }}
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{meal.name}</h4>
                        <div className="flex items-center space-x-4 text-white/60 text-sm mt-1">
                          <span>{meal.calories} kcal</span>
                          <span>{meal.time}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => onNavigate('food-detail')}
                        variant="ghost" 
                        size="sm"
                        className="text-FlexForge-orange hover:bg-FlexForge-orange/20"
                      >
                        View
                      </Button>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="bg-dark-secondary border-dark-tertiary p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-dark-tertiary rounded-2xl flex items-center justify-center mx-auto">
                      <Plus className="w-8 h-8 text-white/40" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">No {mealType} added</h3>
                      <p className="text-white/60 text-sm mb-4">Start tracking your {mealType} today</p>
                      <Button 
                        onClick={() => onNavigate('add-meal')}
                        className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark"
                      >
                        Add {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Floating Action Button */}
      <Button 
        onClick={() => onNavigate('add-meal')}
        className="fixed bottom-20 right-6 w-14 h-14 rounded-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark shadow-orange"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
}
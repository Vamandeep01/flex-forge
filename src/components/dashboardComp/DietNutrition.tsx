import React from 'react';
import { ArrowRight, Flame, Clock, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface Meal {
    name: string;
    protein?: string;
    fat?: string;
    calories: string;
    time?: string;
    image: string;
}

const DietNutrition: React.FC = () => {
    const meals: Meal[] = [
        {
            name: "Salad & Egg",
            protein: "25g",
            fat: "17g",
            calories: "548kcal",
            time: "20min",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIc6qE3qcnBASIrz9kiKbz3UTJRiehoENqA&s"
        },
        {
            name: "Avocado Toast",
            protein: "12g",
            fat: "15g",
            calories: "320kcal",
            time: "15min",
            image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&crop=center"
        },
        {
            name: "Quinoa Bowl",
            protein: "18g",
            fat: "8g",
            calories: "420kcal",
            time: "25min",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center"
        }
    ];

    return (
        <div className="py-2">
            <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-white text-lg font-semibold">Diet & Nutrition</h2>
                <Link to={'/nutrition'} className="text-FlexForge-orange text-sm font-medium">See All</Link>
            </div>

            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-3 px-4 pb-2">
                    {meals.map((meal, index) => (
                        <div
                            key={index}
                            className="bg-dark-secondary border border-dark-tertiary rounded-2xl max-w-[280px] w-full overflow-hidden relative flex-shrink-0 shadow-card"
                            style={{ height: '210px' }}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${meal.image})` }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

                            {/* Nutrition Info - Top Left */}
                            {meal.protein && meal.fat && (
                                <div className="absolute top-4 left-4 space-y-1">
                                    <div className='bg-gray-500 p-1 text-center rounded-md'>
                                        <div className="text-white text-xs font-semibold">{meal.protein}</div>
                                        <div className="text-white/70 text-xs">Protein</div>
                                    </div>
                                    <div className='bg-gray-500 p-1 text-center rounded-md'>
                                        <div className="text-white text-xs font-semibold">{meal.fat}</div>
                                        <div className="text-white/70 text-xs">Fat</div>
                                    </div>
                                </div>
                            )}

                            {/* Bottom Content */}
                            <div className="absolute bottom-3 left-3 right-2">
                                <h3 className="text-white font-bold text-lg ">{meal.name}</h3>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                                        <div className="flex items-center space-x-1">
                                            <Flame className="w-4 h-4" />
                                            <span>{meal.calories}</span>
                                        </div>
                                        {meal.time && (
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{meal.time}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>


                            <Button className="absolute right-3 bottom-3 bg-FlexForge-orange hover:bg-FlexForge-orange-dark rounded-2xl w-12 h-12 p-0">
                                <ArrowRight className="text-white fill-white" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DietNutrition;
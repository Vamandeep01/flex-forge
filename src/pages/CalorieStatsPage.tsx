
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function CalorieStatsPage() {
    const categories = [
        { name: 'Fat', value: 35, color: 'bg-FlexForge-orange', percentage: '35%' },
        { name: 'Protein', value: 25, color: 'bg-blue-accent', percentage: '25%' },
        { name: 'Carbs', value: 40, color: 'bg-green-accent', percentage: '40%' },
    ];

    const nutrients = [
        { name: 'Fat', amount: '7g', color: 'bg-FlexForge-orange' },
        { name: 'Protein', amount: '30g', color: 'bg-blue-accent' },
        { name: 'Carbs', amount: '1g', color: 'bg-green-accent' },
    ];

    return (
        <ProfileLayout title="Calorie Stats">
            <div className="p-4 space-y-6">
                {/* Header Stats */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white/60 text-sm">28% ↑</p>
                    </div>
                </div>

                {/* Bar Chart */}
                <Card className="bg-dark-secondary border-dark-tertiary p-6">
                    <div className="space-y-4">
                        {categories.map((category) => (
                            <div key={category.name} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-white text-sm">{category.name}</span>
                                    <span className="text-white/60 text-sm">{category.percentage}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-3">
                                    <div
                                        className={`${category.color} h-3 rounded-full`}
                                        style={{ width: `${category.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Nutrition Info */}
                <div className="space-y-3">
                    {nutrients.map((nutrient) => (
                        <Card key={nutrient.name} className="bg-dark-secondary border-dark-tertiary p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-4 h-4 rounded ${nutrient.color}`}></div>
                                    <span className="text-white">{nutrient.name}</span>
                                </div>
                                <span className="text-white font-semibold">{nutrient.amount}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </ProfileLayout>
    );
}


import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function BMIIndexPage() {
    const bmiColors = [
        ['bg-blue-accent', 'bg-blue-accent', 'bg-blue-accent', 'bg-blue-accent', 'bg-blue-accent'],
        ['bg-green-accent', 'bg-green-accent', 'bg-green-accent', 'bg-green-accent', 'bg-green-accent'],
        ['bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500'],
        ['bg-FlexForge-orange', 'bg-FlexForge-orange', 'bg-FlexForge-orange', 'bg-FlexForge-orange', 'bg-FlexForge-orange'],
        ['bg-red-500', 'bg-red-500', 'bg-red-500', 'bg-red-500', 'bg-red-500'],
    ];

    return (
        <ProfileLayout title="BMI Index">
            <div className="p-4 space-y-6">
                {/* BMI Score */}
                <div className="text-center py-8">
                    <div className="text-white text-6xl font-bold mb-2">29.8</div>
                    <p className="text-white text-lg mb-2">pt</p>
                    <p className="text-white/60">You are slightly overweight.</p>
                </div>

                {/* BMI Grid */}
                <Card className="bg-dark-secondary border-dark-tertiary p-6">
                    <div className="grid grid-cols-5 gap-2 mb-4">
                        {bmiColors.map((row, rowIndex) => (
                            <div key={rowIndex} className="space-y-2">
                                {row.map((color, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={`w-full h-6 rounded ${color} ${
                                            rowIndex === 3 && colIndex === 2 ? 'ring-2 ring-white' : ''
                                        }`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* BMI Categories */}
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-accent rounded"></div>
                                <span className="text-white">Underweight</span>
                            </div>
                            <span className="text-white/60">< 18.5</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-accent rounded"></div>
                                <span className="text-white">Normal</span>
                            </div>
                            <span className="text-white/60">18.5 - 24.9</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-FlexForge-orange rounded"></div>
                                <span className="text-white">Overweight</span>
                            </div>
                            <span className="text-white/60">25 - 29.9</span>
                        </div>
                    </div>
                </Card>

                {/* White Circle Indicator */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}

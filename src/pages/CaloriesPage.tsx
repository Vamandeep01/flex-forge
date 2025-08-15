
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function CaloriesPage() {
    const chartData = [
        { label: 'Mon', value: 280 },
        { label: 'Tue', value: 320 },
        { label: 'Wed', value: 310 },
        { label: 'Thu', value: 340 },
        { label: 'Fri', value: 318 },
        { label: 'Sat', value: 295 },
        { label: 'Sun', value: 305 },
    ];

    return (
        <ProfileLayout title="Calorie">
            <div className="p-4 space-y-6">
                {/* Current Calories */}
                <div className="text-center py-8">
                    <div className="text-FlexForge-orange text-6xl font-bold mb-2">318</div>
                    <p className="text-white text-lg mb-2">kcal</p>
                    <p className="text-white/60">Burn 250 calorie left.</p>
                </div>

                {/* Chart */}
                <Card className="bg-dark-secondary border-dark-tertiary p-6">
                    <div className="h-48 mb-4">
                        <svg viewBox="0 0 400 200" className="w-full h-full">
                            {/* Chart lines */}
                            <path
                                d="M 50 150 Q 100 120 150 130 T 250 110 T 350 125"
                                stroke="#FF6B35"
                                strokeWidth="3"
                                fill="none"
                            />
                            {/* Fill area */}
                            <path
                                d="M 50 150 Q 100 120 150 130 T 250 110 T 350 125 L 350 200 L 50 200 Z"
                                fill="url(#orangeGradient)"
                                opacity="0.3"
                            />
                            <defs>
                                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FF6B35" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Data points */}
                            {chartData.map((_, index) => (
                                <circle
                                    key={index}
                                    cx={50 + index * 50}
                                    cy={150 - (chartData[index].value - 280) * 2}
                                    r="4"
                                    fill="#FF6B35"
                                />
                            ))}
                        </svg>
                    </div>
                    
                    <div className="flex justify-between text-white/60 text-xs">
                        {chartData.map((item) => (
                            <span key={item.label}>{item.label}</span>
                        ))}
                    </div>
                </Card>
            </div>
        </ProfileLayout>
    );
}

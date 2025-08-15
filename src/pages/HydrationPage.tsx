
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HydrationPage() {
    return (
        <ProfileLayout title="Hydration">
            <div className="p-4 space-y-6">
                {/* Current Hydration */}
                <div className="text-center py-8">
                    <div className="text-blue-accent text-6xl font-bold mb-2">500</div>
                    <p className="text-white text-lg mb-2">ml</p>
                    <p className="text-white/60">You need 1500ml for today.</p>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mb-8">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Water Target Card */}
                <Card className="bg-blue-accent p-6 rounded-3xl">
                    <div className="flex items-center justify-between text-white">
                        <div>
                            <p className="text-sm opacity-90 mb-1">2024ml</p>
                            <p className="text-2xl font-bold">Complete targets</p>
                        </div>
                        <Button
                            variant="secondary"
                            className="bg-white text-blue-accent hover:bg-white/90 rounded-2xl px-6"
                        >
                            Complete targets
                        </Button>
                    </div>
                </Card>

                {/* Daily Progress */}
                <div className="text-center">
                    <p className="text-white/60 text-sm mb-4">2024ml</p>
                    
                    {/* Progress Circles */}
                    <div className="relative w-32 h-32 mx-auto">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                            <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                stroke="#4A90E2"
                                strokeWidth="8"
                                strokeDasharray={`${(500/2024) * 314} 314`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-white text-xl font-bold">25%</div>
                                <div className="text-white/60 text-xs">Complete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}

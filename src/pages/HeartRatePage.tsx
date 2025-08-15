
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function HeartRatePage() {
    return (
        <ProfileLayout title="Heart Rate">
            <div className="p-4 space-y-6">
                {/* Current Heart Rate */}
                <div className="text-center py-8">
                    <div className="flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-red-500 mr-2 animate-pulse" />
                        <span className="text-red-500 text-6xl font-bold">112</span>
                        <span className="text-white/60 text-lg ml-2">bpm</span>
                    </div>
                    <p className="text-white text-lg">Currently doing Boxing</p>
                    
                    {/* Circular Progress */}
                    <div className="relative w-32 h-32 mx-auto mt-8">
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
                                stroke="#ef4444"
                                strokeWidth="8"
                                strokeDasharray={`${(112/200) * 314} 314`}
                                className="animate-pulse"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                        <div className="text-white text-sm mb-1">Pressure</div>
                        <div className="text-white text-2xl font-bold">112</div>
                        <div className="text-white/60 text-xs">mmHg</div>
                    </Card>
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                        <div className="text-white text-sm mb-1">Oxygen</div>
                        <div className="text-white text-2xl font-bold">95</div>
                        <div className="text-white/60 text-xs">SpO2</div>
                    </Card>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center py-4">
                    <button className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </ProfileLayout>
    );
}

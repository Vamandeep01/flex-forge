
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function SandowScorePage() {
    return (
        <ProfileLayout title="Sandow Score">
            <div className="p-4 space-y-6">
                {/* Score Display */}
                <div className="flex flex-col items-center py-8">
                    <div className="relative w-48 h-48 mb-6">
                        {/* Hexagonal Score Display */}
                        <div className="w-full h-full relative">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                {/* Background hexagon */}
                                <polygon
                                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.1)"
                                    strokeWidth="2"
                                />
                                {/* Progress hexagon */}
                                <polygon
                                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                                    fill="none"
                                    stroke="#FF6B35"
                                    strokeWidth="4"
                                    strokeDasharray="480"
                                    strokeDashoffset="120"
                                    className="animate-pulse"
                                />
                                {/* Inner hexagon */}
                                <polygon
                                    points="100,40 150,70 150,130 100,160 50,130 50,70"
                                    fill="rgba(255, 107, 53, 0.1)"
                                    stroke="#FF6B35"
                                    strokeWidth="1"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="text-6xl font-bold text-white mb-2">88</div>
                                <div className="text-white/60 text-sm">Sandow Score</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-white text-lg font-medium">You are a healthy individual.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3">
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                        <div className="text-FlexForge-orange text-2xl font-bold">7</div>
                        <div className="text-white/60 text-sm">STRENGTH</div>
                    </Card>
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                        <div className="text-blue-accent text-2xl font-bold">8</div>
                        <div className="text-white/60 text-sm">AGILITY</div>
                    </Card>
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center">
                        <div className="text-green-accent text-2xl font-bold">9</div>
                        <div className="text-white/60 text-sm">ENDURANCE</div>
                    </Card>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center py-4">
                    <button className="w-10 h-10 rounded-full bg-dark-secondary flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-FlexForge-orange"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
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

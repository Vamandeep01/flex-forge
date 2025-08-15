
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function StepsPage() {
    return (
        <ProfileLayout title="Steps Taken">
            <div className="p-4 space-y-6">
                {/* Current Steps */}
                <div className="text-center py-8">
                    <div className="text-white text-6xl font-bold mb-4">2,574</div>
                    <p className="text-white/60 mb-2">total steps</p>
                    
                    {/* Circular Progress */}
                    <div className="relative w-40 h-40 mx-auto mt-8">
                        <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 160 160">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                fill="none"
                                stroke="#FF6B35"
                                strokeWidth="8"
                                strokeDasharray={`${(2574/10000) * 440} 440`}
                                strokeLinecap="round"
                            />
                        </svg>
                        
                        {/* Inner content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-center">
                                <div className="text-white text-sm mb-2">Progress</div>
                                <div className="text-white text-2xl font-bold">26%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3">
                    <Card className="bg-FlexForge-orange p-4 text-center rounded-2xl">
                        <div className="text-white text-2xl font-bold">578</div>
                        <div className="text-white/80 text-xs">Active</div>
                    </Card>
                    <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
                        <div className="text-white text-2xl font-bold">7.5</div>
                        <div className="text-white/60 text-xs">Distance</div>
                    </Card>
                    <Card className="bg-blue-accent p-4 text-center rounded-2xl">
                        <div className="text-white text-2xl font-bold">25</div>
                        <div className="text-white/80 text-xs">Floors</div>
                    </Card>
                </div>
            </div>
        </ProfileLayout>
    );
}


import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function HeartRateStatsPage() {
    const chartData = [
        { day: 'Mon', value: 65 },
        { day: 'Tue', value: 72 },
        { day: 'Wed', value: 68 },
        { day: 'Thu', value: 75 },
        { day: 'Fri', value: 70 },
        { day: 'Sat', value: 67 },
        { day: 'Sun', value: 69 },
    ];

    const workoutTypes = [
        { name: 'Pre-Workout Stretch', duration: '5 mins', color: 'bg-FlexForge-orange' },
        { name: 'HIIT Cardio Interval', duration: '20 mins', color: 'bg-white' },
        { name: 'Lower Body Training', duration: '30 mins', color: 'bg-blue-accent' },
    ];

    return (
        <ProfileLayout title="Heart Rate Stats">
            <div className="p-4 space-y-6">
                {/* Current Stats */}
                <Card className="bg-dark-secondary border-dark-tertiary p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white text-lg font-semibold">67bpm</h3>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-FlexForge-orange rounded-full"></div>
                            <span className="text-white/60 text-xs">4°</span>
                        </div>
                    </div>
                    
                    {/* Chart */}
                    <div className="h-40 mb-4">
                        <div className="flex items-end justify-between h-full px-2">
                            {chartData.map((item, index) => (
                                <div key={item.day} className="flex flex-col items-center">
                                    <div
                                        className="w-8 bg-white rounded-t-lg"
                                        style={{ height: `${(item.value / 80) * 100}%` }}
                                    ></div>
                                    <span className="text-white/60 text-xs mt-2">{item.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-white/60 text-sm">
                        Resting Heart Rate History
                    </div>
                </Card>

                {/* Workout Types */}
                <div className="space-y-3">
                    {workoutTypes.map((workout, index) => (
                        <Card key={index} className="bg-dark-secondary border-dark-tertiary p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-3 h-3 rounded-full ${workout.color}`}></div>
                                    <div>
                                        <p className="text-white font-medium">{workout.name}</p>
                                        <p className="text-white/60 text-sm">{workout.duration}</p>
                                    </div>
                                </div>
                                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Bottom Action */}
                <Card className="bg-dark-secondary border-dark-tertiary p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-black text-sm font-bold">⚡</span>
                            </div>
                            <span className="text-white">Switch for re-calibration...</span>
                        </div>
                        <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </Card>
            </div>
        </ProfileLayout>
    );
}

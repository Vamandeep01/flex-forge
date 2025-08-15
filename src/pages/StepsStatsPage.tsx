
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Card } from "@/components/ui/card";

export default function StepsStatsPage() {
    const activities = [
        {
            icon: '🏃‍♂️',
            title: 'Jogging to McDonald\'s',
            time: '05 Jan - 06:30',
            color: 'bg-FlexForge-orange'
        },
        {
            icon: '🚶‍♂️',
            title: 'Walking to Mt. Rushmore',
            time: '04 Jan - 07:15',
            color: 'bg-blue-accent'
        },
        {
            icon: '🚶‍♂️',
            title: 'Walking to Central Park',
            time: '03 Jan - 05:45',
            color: 'bg-red-500'
        }
    ];

    const chartData = [50, 75, 60, 90, 85, 70, 80];

    return (
        <ProfileLayout title="Steps Stats">
            <div className="p-4 space-y-6">
                {/* Header Stats */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-white text-2xl font-bold">1,187<span className="text-lg text-white/60 ml-1">avg</span></p>
                        <p className="text-white/60 text-sm">7 days</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-white/60 text-sm">1 month</span>
                        <span className="text-white/60 text-sm">3 month</span>
                        <span className="text-white/60 text-sm">1 year</span>
                    </div>
                </div>

                {/* Chart */}
                <Card className="bg-dark-secondary border-dark-tertiary p-6">
                    <div className="h-32 mb-4">
                        <svg viewBox="0 0 350 120" className="w-full h-full">
                            {/* Chart line */}
                            <path
                                d="M 25 90 L 75 60 L 125 75 L 175 30 L 225 40 L 275 70 L 325 50"
                                stroke="#FF6B35"
                                strokeWidth="3"
                                fill="none"
                            />
                            {/* Fill area */}
                            <path
                                d="M 25 90 L 75 60 L 125 75 L 175 30 L 225 40 L 275 70 L 325 50 L 325 120 L 25 120 Z"
                                fill="url(#orangeGradient)"
                                opacity="0.2"
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
                                    cx={25 + index * 50}
                                    cy={120 - chartData[index]}
                                    r="3"
                                    fill="#FF6B35"
                                />
                            ))}
                        </svg>
                    </div>
                </Card>

                {/* Achievements Header */}
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold">All Suggestion Breakthroughs</h3>
                </div>

                {/* Activity List */}
                <div className="space-y-3">
                    {activities.map((activity, index) => (
                        <Card key={index} className="bg-dark-secondary border-dark-tertiary p-4">
                            <div className="flex items-center space-x-4">
                                <div className={`w-10 h-10 ${activity.color} rounded-2xl flex items-center justify-center`}>
                                    <span className="text-xl">{activity.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-medium">{activity.title}</p>
                                    <p className="text-white/60 text-sm">{activity.time}</p>
                                </div>
                                <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Sleep History */}
                <Card className="bg-dark-secondary border-dark-tertiary p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-accent rounded-2xl flex items-center justify-center">
                                <span className="text-xl">😴</span>
                            </div>
                            <span className="text-white">Sleep History</span>
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

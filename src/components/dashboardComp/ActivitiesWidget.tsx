import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, User } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, ReferenceDot } from 'recharts';

// Chart data matching the image pattern with multiple peaks
const chartData = [
    { time: 0, value: 800 },
    { time: 1, value: 750 },
    { time: 2, value: 650 },
    { time: 3, value: 720 },
    { time: 4, value: 900 },
    { time: 5, value: 880 },
    { time: 6, value: 850 },
    { time: 7, value: 500 },
    { time: 8, value: 450 },
    { time: 9, value: 850 },
    { time: 10, value: 900 },
    { time: 11, value: 780 },
];

const ActivitiesWidget = () => {
    const days = ['1d', '1w', '1m', '1y', 'All'];
    const [selectedDay, setSelectedDay] = useState('1d');

    return (
        <div className="px-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 px-1">
                <h2 className="text-white text-xl font-semibold">Activities</h2>
                <Button
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-400 hover:bg-transparent p-0 h-auto font-medium text-sm"
                >
                    See All
                </Button>
            </div>

            {/* Main Activity Card */}
            <Card className="rounded-3xl">
                <CardContent className="p-3">
                    {/* Tab Navigation Inside Card */}
                    <div className="flex bg-dark-tertiary rounded-2xl p-1 mb-4">
                        {days.map((day) => (
                            <Button
                                key={day}
                                variant={selectedDay === day ? "secondary" : "ghost"}
                                onClick={() => setSelectedDay(day)}
                                className={`flex-1 h-auto py-2 rounded-xl text-sm font-medium transition-all duration-200 text-white ${selectedDay === day
                                    ? 'bg-FlexForge-orange hover:bg-FlexForge-orange/80'
                                    : 'text-gray-400'
                                    }`}
                            >
                                {day}
                            </Button>
                        ))}
                    </div>

                    {/* Chart Container */}
                    <div className="h-44 mb-4 relative overflow-hidden">
                        {/* Y-axis labels */}
                        <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-2 text-xs text-gray-500">
                            <span>900</span>
                            <span>800</span>
                            <span>700</span>
                            <span>600</span>
                            <span>500</span>
                        </div>

                        {/* Dotted Grid Lines */}
                        <div className="absolute inset-0 ml-8 opacity-30 pointer-events-none">
                            {/* Horizontal lines */}
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="absolute w-full border-t border-dotted border-gray-600"
                                    style={{ top: `${10 + i * 20}%` }}
                                />
                            ))}
                        </div>

                        {/* Chart */}
                        <div className="absolute inset-0 ml-8 p-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#f97316" stopOpacity={0.6} />
                                            <stop offset="50%" stopColor="#f97316" stopOpacity={0.3} />
                                            <stop offset="100%" stopColor="#f97316" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#f97316"
                                        strokeWidth={3}
                                        fill="url(#areaGradient)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    {/* Highlight point at one of the peaks */}
                                    <ReferenceDot x={5} y={880} r={4} fill="#f97316" stroke="white" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Floating Value Badge with pointer */}
                        <div className="absolute top-6 right-12">
                            <div className="bg-orange-500 text-white text-sm px-3 py-1.5 rounded-lg font-bold shadow-lg relative">
                                880
                                {/* Pointer/tail */}
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-500"></div>
                            </div>
                            {/* Line connecting to dot */}
                            <div className="absolute top-8 left-1/2 w-px h-4 bg-orange-500"></div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            {/* Main Calorie Count */}
                            <div className="text-white text-3xl font-bold mb-2">
                                1,548 kcal
                            </div>

                            {/* Stats Row */}
                            <div className="flex items-center text-gray-400 text-sm space-x-6">
                                {/* Progress Indicator with checkered pattern icon */}
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 flex">
                                        <div className="w-1.5 h-1.5 bg-green-500"></div>
                                        <div className="w-1.5 h-1.5 bg-green-300"></div>
                                        <div className="w-1.5 h-1.5 bg-green-300 -ml-1.5 mt-1.5"></div>
                                        <div className="w-1.5 h-1.5 bg-green-500 -ml-1.5 mt-1.5"></div>
                                    </div>
                                    <span className="font-medium text-white">+285</span>
                                </div>

                                {/* Suggestions */}
                                <div className="flex items-center space-x-2">
                                    <Target className="w-4 h-4 text-gray-400" />
                                    <span>8 Suggestions</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Button - rounded rectangle with running user */}
                        <Button
                            className="bg-white hover:bg-gray-100 text-gray-900 rounded-2xl w-14 h-14 p-0 shadow-lg transition-all duration-200 hover:scale-105"
                            onClick={() => console.log('Add activity clicked')}
                        >
                            <User className="w-6 h-6" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ActivitiesWidget;
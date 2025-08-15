import { Activity, Calculator, Clock, Droplets, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';


// Reusable Chart Components
const BarChart = ({ heights, colors }) => (
    <div className="flex items-end justify-center space-x-1 h-8">
        {heights.map((height, index) => (
            <div
                key={index}
                className={`w-2 rounded-full animate-pulse ${colors[index]}`}
                style={{
                    height: `${height}px`,
                    animationDelay: `${index * 100}ms`
                }}
            />
        ))}
    </div>
);

const WaveChart = ({ animated = true }) => (
    <div className="h-8 relative overflow-hidden">
        <svg viewBox="0 0 100 30" className="w-full h-full">
            <path
                d="M0,20 Q25,8 50,15 T100,12"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
                className="opacity-90"
            />
            <path
                d="M0,25 Q25,13 50,20 T100,17 L100,30 L0,30 Z"
                fill="white"
                className="opacity-20"
            />
            {animated && (
                <circle cx="75" cy="12" r="2" fill="white" className="opacity-80">
                    <animate attributeName="cy" values="12;8;12" dur="2s" repeatCount="indefinite" />
                </circle>
            )}
        </svg>
    </div>
);

const DotChart = ({ dotSizes, colors }) => (
    <div className="h-8 flex items-center justify-center">
        <div className="flex items-center space-x-1.5">
            {dotSizes.map((size, index) => (
                <div
                    key={index}
                    className={`rounded-full animate-bounce ${colors[index]}`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        animationDelay: `${index * 200}ms`
                    }}
                />
            ))}
        </div>
    </div>
);

const ArcChart = ({ progress = 70 }) => (
    <div className="h-8 flex items-center justify-center">
        <svg viewBox="0 0 60 30" className="w-full h-full">
            <path
                d="M 10 25 A 20 20 0 0 1 50 25"
                stroke="white"
                strokeWidth="3"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
            />
            <path
                d={`M 10 25 A 20 20 0 0 1 ${10 + (progress / 100) * 32} ${25 - (progress / 100) * 10}`}
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
            />
            <circle
                cx={10 + (progress / 100) * 32}
                cy={25 - (progress / 100) * 10}
                r="2.5"
                fill="white"
            >
                <animate attributeName="r" values="2.5;3.5;2.5" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
);

const FlowChart = ({ animated = true }) => (
    <div className="h-8 flex items-center justify-center">
        <svg viewBox="0 0 80 20" className="w-full h-full">
            <path
                d="M5,15 Q15,8 25,12 Q35,16 45,10 Q55,6 65,12 Q75,18 80,14"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
                strokeLinecap="round"
            >
                {animated && (
                    <animate
                        attributeName="d"
                        values="M5,15 Q15,8 25,12 Q35,16 45,10 Q55,6 65,12 Q75,18 80,14;M5,12 Q15,6 25,10 Q35,14 45,8 Q55,4 65,10 Q75,16 80,12;M5,15 Q15,8 25,12 Q35,16 45,10 Q55,6 65,12 Q75,18 80,14"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                )}
            </path>
        </svg>
    </div>
);

const HeartbeatChart = () => (
    <div className="h-8 flex items-center justify-center">
        <svg viewBox="0 0 80 20" className="w-full h-full">
            <path
                d="M0,10 L15,10 L20,5 L25,15 L30,0 L35,20 L40,10 L55,10 L60,8 L65,12 L80,10"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="opacity-90"
            >
                <animate attributeName="stroke-dasharray" values="0 200;200 0;0 200" dur="2s" repeatCount="indefinite" />
            </path>
        </svg>
    </div>
);

// Reusable MetricCard Component
const MetricCard = ({
    title,
    value,
    icon: Icon,
    bgColor,
    chartType,
    chartProps = {},
    linkTo
}) => {
    const renderChart = () => {
        switch (chartType) {
            case 'bar':
                return <BarChart heights={undefined} colors={undefined} {...chartProps} />;
            case 'wave':
                return <WaveChart {...chartProps} />;
            case 'dots':
                return <DotChart dotSizes={undefined} colors={undefined} {...chartProps} />;
            case 'arc':
                return <ArcChart {...chartProps} />;
            case 'flow':
                return <FlowChart {...chartProps} />;
            case 'heartbeat':
                return <HeartbeatChart {...chartProps} />;
            default:
                return null;
        }
    };

    const CardContent = () => (
        <Card className={`${bgColor} p-3 flex flex-col justify-between rounded-3xl gap-3 w-[140px] h-[160px] flex-shrink-0`}>
            <div className="flex justify-between items-center">
                <div className="text-white/90 text-sm font-medium">{title}</div>
                <Icon className="w-5 h-5 text-white" />
            </div>

            {renderChart()}

            <div className="text-white text-xl font-bold">{value}</div>
        </Card>
    );

    return linkTo ? (
        <Link to={linkTo} className='flex'>
            <CardContent />
        </Link>
    ) : (
        <CardContent />
    );
};

const FitnessMetrics = () => {
    const metricsData = [
        {
            title: "Score",
            value: "88%",
            icon: Activity,
            bgColor: "bg-orange-500",
            chartType: "bar",
            linkTo: "/sandow-score",
            chartProps: {
                heights: [12, 20, 32, 24, 16, 28, 20],
                colors: [
                    'bg-white/40', 'bg-white/60', 'bg-white',
                    'bg-white/80', 'bg-white/60', 'bg-white', 'bg-white/70'
                ]
            }
        },
        {
            title: "Heart",
            value: "78 BPM",
            icon: Heart,
            bgColor: "bg-red-500",
            chartType: "heartbeat",
            linkTo: "/heart-rate"
        },
        {
            title: "Hydration",
            value: "781ml",
            icon: Droplets,
            bgColor: "bg-blue-500",
            chartType: "wave",
            linkTo: "/hydration",
            chartProps: { animated: true }
        },
        {
            title: "Calories",
            value: "1.5k",
            icon: Calculator,
            bgColor: "bg-gray-700 border border-gray-600",
            chartType: "dots",
            linkTo: "/calories",
            chartProps: {
                dotSizes: [10, 10, 12, 10, 8],
                colors: [
                    'bg-white/30', 'bg-white/50', 'bg-white',
                    'bg-white/50', 'bg-white/30'
                ]
            }
        },
        {
            title: "Steps",
            value: "8.2k",
            icon: Target,
            bgColor: "bg-purple-500",
            chartType: "arc",
            linkTo: "/steps",
            chartProps: { progress: 75 }
        },
        {
            title: "Sleep",
            value: "7.5h",
            icon: Clock,
            bgColor: "bg-green-500",
            chartType: "flow",
            linkTo: "/steps-stats",
            chartProps: { animated: true }
        },
    ];

    return (
        <div className="px-4 py-2">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-lg font-semibold">Fitness Metrics</h2>
                <Link to={'/analytics'} className="text-orange-500 text-sm font-medium">See All</Link>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {metricsData.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </div>

            <style>{`
                .scrollbar-hide {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 1; }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
            `}</style>
        </div>
    );
};

export default FitnessMetrics;
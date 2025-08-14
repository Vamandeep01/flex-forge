
import { ArrowLeft, MoreVertical } from "lucide-react";

interface SearchResultsScreenProps {
  onFilter: () => void;
  onBack: () => void;
}

export default function SearchResultsScreen({ onFilter, onBack }: SearchResultsScreenProps) {
  const results = [
    {
      title: "Virtual AI Coach",
      subtitle: "Fitness",
      match: "90% Match",
      color: "bg-green-500",
      icon: "🤖"
    },
    {
      title: "Activity Tracker", 
      subtitle: "Fitness",
      match: "88% Match",
      color: "bg-blue-500",
      icon: "📊"
    },
    {
      title: "Coach Farnese Vandimion",
      subtitle: "Personal",
      match: "78% Match", 
      color: "bg-red-500",
      icon: "👨‍🏫"
    },
    {
      title: "AI Fitness Assistant",
      subtitle: "Fitness",
      match: "65% Match",
      color: "bg-gray-500",
      icon: "🤖"
    },
    {
      title: "Workout Course Suggestion",
      subtitle: "Workout Schedule",
      match: "48% Match",
      color: "bg-purple-500",
      icon: "💪"
    },
    {
      title: "AI Workout Assessment",
      subtitle: "PT Assessment",
      match: "34% Match",
      color: "bg-yellow-500",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange via-FlexForge-orange to-dark-primary">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-6">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-medium ml-2">Search</h1>
        </div>
        <button onClick={onFilter} className="p-2">
          <MoreVertical className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center">
          <span className="text-white text-base">Fitness AI Assistant</span>
          <div className="ml-auto p-1">
            <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mb-6">
        <div className="flex space-x-3">
          <div className="bg-white/20 rounded-full px-4 py-2 flex items-center">
            <div className="w-4 h-4 bg-FlexForge-orange rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium">Workouts</span>
          </div>
          <div className="bg-white/20 rounded-full px-4 py-2 flex items-center">
            <div className="w-4 h-4 bg-white/30 rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium">Meals</span>
          </div>
          <div className="bg-white/20 rounded-full px-4 py-2 flex items-center">
            <div className="w-4 h-4 bg-white/30 rounded-full mr-2"></div>
            <span className="text-white text-sm font-medium">Community</span>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-4 mb-4">
        <span className="text-white text-base font-medium">9 results found.</span>
        <button className="flex items-center text-white text-sm">
          <span className="mr-2">Matches</span>
          <div className="w-4 h-3 flex items-center">
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-white"></div>
          </div>
        </button>
      </div>

      {/* Results List */}
      <div className="px-4 space-y-3 pb-8">
        {results.map((result, index) => (
          <div key={index} className="bg-dark-secondary rounded-xl p-4 flex items-center">
            <div className={`w-12 h-12 ${result.color} rounded-full flex items-center justify-center mr-4`}>
              <span className="text-2xl">{result.icon}</span>
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-medium text-base">{result.title}</h3>
              <p className="text-white/60 text-sm">{result.subtitle}</p>
            </div>

            <div className="flex items-center">
              <span className={`text-xs px-3 py-1 rounded-full ${result.color} text-white font-medium mr-3`}>
                {result.match}
              </span>
              <div className="text-white/60 text-xl">›</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

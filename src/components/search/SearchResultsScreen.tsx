
import { ArrowLeft, Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchResultsScreenProps {
  onFilter: () => void;
  onBack: () => void;
  searchQuery: string;
}

export default function SearchResultsScreen({ onFilter, onBack, searchQuery }: SearchResultsScreenProps) {
  const results = [
    {
      id: 1,
      title: "Virtual AI Coach",
      subtitle: "AI-powered fitness coaching",
      category: "Fitness",
      match: 95,
      icon: "🤖",
      categoryColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "HIIT Workout Plan", 
      subtitle: "High intensity interval training",
      category: "Workout",
      match: 88,
      icon: "💪",
      categoryColor: "bg-FlexForge-orange"
    },
    {
      id: 3,
      title: "Protein Meal Prep",
      subtitle: "High protein meal planning",
      category: "Meal",
      match: 78,
      icon: "🍽️",
      categoryColor: "bg-green-500"
    },
    {
      id: 4,
      title: "Fitness Community",
      subtitle: "Connect with fitness enthusiasts",
      category: "Community",
      match: 72,
      icon: "👥",
      categoryColor: "bg-purple-500"
    },
    {
      id: 5,
      title: "Yoga Sessions",
      subtitle: "Mindful yoga practices",
      category: "Workout",
      match: 65,
      icon: "🧘‍♀️",
      categoryColor: "bg-FlexForge-orange"
    },
    {
      id: 6,
      title: "Nutrition Tracker",
      subtitle: "Track your daily nutrition",
      category: "Meal",
      match: 58,
      icon: "📊",
      categoryColor: "bg-green-500"
    }
  ];

  const categories = [
    { name: "Workouts", active: true, color: "bg-FlexForge-orange" },
    { name: "Meals", active: false, color: "bg-white/30" },
    { name: "Community", active: false, color: "bg-white/30" }
  ];

  const getMatchColor = (match: number) => {
    if (match >= 80) return "bg-green-500";
    if (match >= 60) return "bg-FlexForge-orange";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Orange Header Section (3/4 of screen) */}
      <div className="h-[75vh] bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-dark">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-12 pb-6">
          <div className="flex items-center">
            <button onClick={onBack} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-white text-lg font-medium ml-2">Search Results</h1>
          </div>
          <button onClick={onFilter} className="p-2">
            <Filter className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-4">
          <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center shadow-lg">
            <Search className="w-5 h-5 text-white/60 mr-3" />
            <span className="text-white text-base flex-1">{searchQuery}</span>
            <div className="w-8 h-8 bg-FlexForge-orange rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="px-4 mb-4">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/20 rounded-full px-4 py-2 flex items-center whitespace-nowrap backdrop-blur-sm">
                <div className={`w-3 h-3 ${category.color} rounded-full mr-2`}></div>
                <span className="text-white text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between px-4 mb-4">
          <span className="text-white text-base font-medium">{results.length} results found</span>
          <div className="flex items-center text-white/80 text-sm">
            <span className="mr-2">Sort by Match</span>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-white"></div>
          </div>
        </div>

        {/* Results List - Scrollable */}
        <div className="px-4 space-y-3 overflow-y-auto max-h-64 scrollbar-hide">
          {results.map((result) => (
            <div key={result.id} className="bg-dark-secondary/80 backdrop-blur-sm rounded-xl p-4 flex items-center">
              <div className={`w-12 h-12 ${result.categoryColor} rounded-full flex items-center justify-center mr-4 text-2xl`}>
                {result.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-medium text-base">{result.title}</h3>
                <p className="text-white/60 text-sm">{result.subtitle}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Badge 
                  className={`${result.categoryColor} text-white text-xs px-2 py-1`}
                >
                  {result.category}
                </Badge>
                <div className={`${getMatchColor(result.match)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {result.match}%
                </div>
                <div className="text-white/60 text-xl">›</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Black Bottom Section */}
      <div className="h-[25vh] bg-dark-primary px-4 pt-6">
        <div className="text-center">
          <p className="text-white/60 text-sm">Showing results for "{searchQuery}"</p>
          <p className="text-white/40 text-xs mt-1">Tap on any result to view details</p>
        </div>
      </div>
    </div>
  );
}

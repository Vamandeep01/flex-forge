
import { ArrowLeft, Search } from "lucide-react";

export default function SearchLoadingScreen() {
  const categories = [
    { name: "Workouts", active: true, color: "bg-FlexForge-orange" },
    { name: "Meals", active: false, color: "bg-white/30" },
    { name: "Community", active: false, color: "bg-white/30" }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Orange Header Section (3/4 of screen) */}
      <div className="h-[75vh] bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-dark">
        {/* Header */}
        <div className="flex items-center px-4 pt-12 pb-6">
          <button className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-medium ml-2">Search</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-6">
          <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center shadow-lg">
            <Search className="w-5 h-5 text-white/60 mr-3" />
            <span className="text-white/50 text-base flex-1">Searching...</span>
            <div className="w-8 h-8 bg-FlexForge-orange rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="px-4 mb-12">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/20 rounded-full px-4 py-2 flex items-center whitespace-nowrap backdrop-blur-sm">
                <div className={`w-3 h-3 ${category.color} rounded-full mr-2 ${category.active ? 'animate-pulse' : ''}`}></div>
                <span className="text-white text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center justify-center px-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[...Array(9)].map((_, index) => (
              <div 
                key={index}
                className="w-4 h-4 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
          </div>
          <p className="text-white text-lg font-medium animate-pulse">Searching...</p>
        </div>
      </div>

      {/* Black Bottom Section */}
      <div className="h-[25vh] bg-dark-primary flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-FlexForge-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60 text-sm">Finding the best results for you...</p>
        </div>
      </div>
    </div>
  );
}

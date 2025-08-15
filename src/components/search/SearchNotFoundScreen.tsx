
import { ArrowLeft, Search } from "lucide-react";

interface SearchNotFoundScreenProps {
  onBack: () => void;
  searchQuery: string;
}

export default function SearchNotFoundScreen({ onBack, searchQuery }: SearchNotFoundScreenProps) {
  const categories = [
    { name: "Workouts", active: true, color: "bg-FlexForge-orange" },
    { name: "Meals", active: false, color: "bg-white/30" },
    { name: "Community", active: false, color: "bg-white/30" }
  ];

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Orange Header Section (1/2 of screen for no results) */}
      <div className="h-[50vh] bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-dark">
        {/* Header */}
        <div className="flex items-center px-4 pt-12 pb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-medium ml-2">Search</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-6">
          <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center shadow-lg">
            <Search className="w-5 h-5 text-white/60 mr-3" />
            <span className="text-white text-base flex-1">{searchQuery}</span>
            <div className="w-8 h-8 bg-FlexForge-orange rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Category Tags */}
        <div className="px-4">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/20 rounded-full px-4 py-2 flex items-center whitespace-nowrap backdrop-blur-sm">
                <div className={`w-3 h-3 ${category.color} rounded-full mr-2`}></div>
                <span className="text-white text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Black Bottom Section with No Results */}
      <div className="h-[50vh] bg-dark-primary flex flex-col items-center justify-center px-8 text-center">
        {/* Illustration */}
        <div className="w-32 h-32 mb-8 relative">
          <div className="w-full h-full bg-dark-secondary rounded-full flex items-center justify-center">
            <Search className="w-16 h-16 text-white/30" />
          </div>
        </div>

        <h2 className="text-white text-2xl font-bold mb-4">
          No Results Found 😔
        </h2>
        
        <p className="text-white/60 text-base leading-relaxed max-w-sm mb-6">
          We couldn't find anything matching "{searchQuery}". Try searching with different keywords or check your spelling.
        </p>

        <div className="space-y-2 text-white/40 text-sm">
          <p>• Try different keywords</p>
          <p>• Check spelling</p>
          <p>• Use broader search terms</p>
        </div>
      </div>
    </div>
  );
}

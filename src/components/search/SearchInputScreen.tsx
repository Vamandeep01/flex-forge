
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

interface SearchInputScreenProps {
  onSearch: (query: string) => void;
  onBack: () => void;
}

export default function SearchInputScreen({ onSearch, onBack }: SearchInputScreenProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "My Fitness Schedule",
    "Fitness AI Assistant", 
    "Virtual AI Coach",
    "AR/VR Fitness Videos",
    "Fitness App",
    "Workout Plans",
    "Nutrition Guide",
    "Community Challenges"
  ];

  const filteredSuggestions = suggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(query.toLowerCase()) && query.length > 0
  );

  const categories = [
    { name: "Workouts", active: true, color: "bg-FlexForge-orange" },
    { name: "Meals", active: false, color: "bg-white/30" },
    { name: "Community", active: false, color: "bg-white/30" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Orange Header Section (3/4 of screen) */}
      <div className="h-[75vh] bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-dark relative">
        {/* Header */}
        <div className="flex items-center px-4 pt-12 pb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-medium ml-2">Search</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-6">
          <form onSubmit={handleSubmit}>
            <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center shadow-lg">
              <Search className="w-5 h-5 text-white/60 mr-3" />
              <input 
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(query.length > 0)}
                placeholder="Search for workouts, meals, community..."
                className="bg-transparent text-white text-base flex-1 outline-none placeholder-white/50"
                autoFocus
              />
              <button type="submit" className="ml-2 p-1">
                <div className="w-8 h-8 bg-FlexForge-orange rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>
          </form>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="mt-2 bg-dark-secondary rounded-xl shadow-lg border border-dark-tertiary max-h-64 overflow-y-auto">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-dark-tertiary transition-colors border-b border-dark-tertiary last:border-b-0 flex items-center"
                >
                  <Search className="w-4 h-4 text-white/60 mr-3" />
                  <span className="text-sm">{suggestion}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Tags - Horizontally Scrollable */}
        <div className="px-4 mb-8">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/20 rounded-full px-4 py-2 flex items-center whitespace-nowrap backdrop-blur-sm">
                <div className={`w-3 h-3 ${category.color} rounded-full mr-2`}></div>
                <span className="text-white text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Black Bottom Section (1/4 of screen) */}
      <div className="h-[25vh] bg-dark-primary px-4 pt-8">
        <div className="text-center">
          <h3 className="text-white text-lg font-medium mb-2">Start Searching</h3>
          <p className="text-white/60 text-sm">Enter your search query above to find workouts, meals, and community content</p>
        </div>
      </div>
    </div>
  );
}

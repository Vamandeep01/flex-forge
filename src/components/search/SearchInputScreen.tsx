
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface SearchInputScreenProps {
  onSearch: (query: string) => void;
}

export default function SearchInputScreen({ onSearch }: SearchInputScreenProps) {
  const [query, setQuery] = useState('');

  const suggestions = [
    "My Fitness Schedule",
    "Fitness AI Assistant", 
    "Virtual AI Coach",
    "AR/VR Fitness Videos",
    "Fitness App"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange via-FlexForge-orange to-dark-primary">
      {/* Header */}
      <div className="flex items-center px-4 pt-12 pb-6">
        <button className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-white text-lg font-medium ml-2">Search</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center">
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Fitness AI Assistant"
              className="bg-transparent text-white text-base flex-1 outline-none placeholder-white/70"
              autoFocus
            />
            <button type="submit" className="ml-auto p-1">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </button>
          </div>
        </form>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mb-8">
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

      {/* Suggestions */}
      <div className="px-4 space-y-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSearch(suggestion)}
            className="w-full bg-dark-secondary rounded-xl px-4 py-4 text-left hover:bg-dark-tertiary transition-colors"
          >
            <span className="text-white text-base font-medium">{suggestion}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

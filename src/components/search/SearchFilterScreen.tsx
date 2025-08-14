
import { ArrowLeft, HelpCircle } from "lucide-react";
import { useState } from "react";

interface SearchFilterScreenProps {
  onApply: () => void;
  onBack: () => void;
}

export default function SearchFilterScreen({ onApply, onBack }: SearchFilterScreenProps) {
  const [dateFrom, setDateFrom] = useState('2025/12/16');
  const [dateTo, setDateTo] = useState('2025/12/16');
  const [searchLimit, setSearchLimit] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState('Meal');
  const [includeAI, setIncludeAI] = useState(true);

  const categories = ['Workout', 'Meal', 'Community'];

  return (
    <div className="min-h-screen bg-dark-primary px-4 pt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-lg font-medium ml-2">Filter Search Results</h1>
        </div>
        <button className="p-2">
          <HelpCircle className="w-6 h-6 text-white/60" />
        </button>
      </div>

      {/* From Section */}
      <div className="mb-6">
        <label className="text-white text-base font-medium mb-3 block">From</label>
        <div className="bg-dark-secondary rounded-xl p-4 flex items-center">
          <div className="w-6 h-6 bg-white/20 rounded mr-3 flex items-center justify-center">
            <div className="w-4 h-4 border border-white/60 rounded"></div>
          </div>
          <span className="text-white text-base">2025/12/16</span>
        </div>
      </div>

      {/* To Section */}
      <div className="mb-6">
        <label className="text-white text-base font-medium mb-3 block">To</label>
        <div className="bg-dark-secondary rounded-xl p-4 flex items-center">
          <div className="w-6 h-6 bg-white/20 rounded mr-3 flex items-center justify-center">
            <div className="w-4 h-4 border border-white/60 rounded"></div>
          </div>
          <span className="text-white text-base">2025/12/16</span>
        </div>
      </div>

      {/* Search Limit */}
      <div className="mb-6">
        <label className="text-white text-base font-medium mb-3 block">Search Limit</label>
        <div className="bg-dark-secondary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm">0</span>
            <span className="text-white/60 text-sm">15</span>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-dark-tertiary rounded-full">
              <div 
                className="h-2 bg-FlexForge-orange rounded-full"
                style={{ width: `${(searchLimit / 15) * 100}%` }}
              ></div>
            </div>
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-FlexForge-orange rounded-full"
              style={{ left: `${(searchLimit / 15) * 100}%`, marginLeft: '-8px' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Search Category */}
      <div className="mb-6">
        <label className="text-white text-base font-medium mb-3 block">Search Category</label>
        <div className="flex space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-dark-secondary text-white/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Include AI Suggestions */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="text-white text-base font-medium">Include AI Suggestions</span>
          <button
            onClick={() => setIncludeAI(!includeAI)}
            className={`w-12 h-6 rounded-full transition-colors ${
              includeAI ? 'bg-FlexForge-orange' : 'bg-dark-tertiary'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                includeAI ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Apply Filter Button */}
      <button
        onClick={onApply}
        className="w-full bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light text-white font-medium py-4 rounded-xl flex items-center justify-center"
      >
        <span>Apply Filter (25)</span>
        <div className="ml-2 w-6 h-6 bg-white/20 rounded flex items-center justify-center">
          <div className="w-3 h-3 border border-white rounded"></div>
        </div>
      </button>
    </div>
  );
}

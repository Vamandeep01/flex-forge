
import { ArrowLeft, Clock, Zap, Star } from 'lucide-react';
import { ActivityType } from '@/pages/ActivityTrackerPage';

interface AIActivitySuggestionsScreenProps {
  onSelectSuggestion: (activity: ActivityType) => void;
  onBack: () => void;
}

export function AIActivitySuggestionsScreen({ onSelectSuggestion, onBack }: AIActivitySuggestionsScreenProps) {
  const suggestions = [
    {
      id: 1,
      title: 'Morning Boost',
      type: 'running' as ActivityType,
      duration: '20 min',
      calories: '180 cal',
      description: 'Start your day with energy',
      difficulty: 'Medium',
      icon: '🏃‍♂️'
    },
    {
      id: 2,
      title: 'Midday Stretch',
      type: 'other' as ActivityType,
      duration: '15 min',
      calories: '80 cal',
      description: 'Perfect break from work',
      difficulty: 'Easy',
      icon: '🧘‍♀️'
    },
    {
      id: 3,
      title: 'Strength Focus',
      type: 'lifting' as ActivityType,
      duration: '45 min',
      calories: '320 cal',
      description: 'Build muscle and power',
      difficulty: 'Hard',
      icon: '💪'
    },
    {
      id: 4,
      title: 'Evening Ride',
      type: 'cycling' as ActivityType,
      duration: '30 min',
      calories: '250 cal',
      description: 'Unwind with a scenic ride',
      difficulty: 'Medium',
      icon: '🚴‍♂️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-light">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-white text-xl font-bold">AI Suggestions</h1>
          <div className="w-10" />
        </div>
        <p className="text-white/80 text-center">Personalized recommendations just for you</p>
      </div>

      {/* Suggestions List */}
      <div className="flex-1 bg-dark-primary rounded-t-3xl px-6 py-8">
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => onSelectSuggestion(suggestion.type)}
              className="bg-dark-secondary rounded-2xl p-6 cursor-pointer hover:bg-dark-tertiary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{suggestion.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{suggestion.title}</h3>
                    <p className="text-white/70 text-sm">{suggestion.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-FlexForge-orange fill-current" />
                  <span className="text-white/70 text-sm">AI</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-white/50" />
                    <span className="text-white/70 text-sm">{suggestion.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-4 h-4 text-white/50" />
                    <span className="text-white/70 text-sm">{suggestion.calories}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  suggestion.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  suggestion.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {suggestion.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

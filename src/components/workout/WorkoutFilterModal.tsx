
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface WorkoutFilterModalProps {
  onClose: () => void;
  onApplyFilter: () => void;
}

export default function WorkoutFilterModal({ onClose, onApplyFilter }: WorkoutFilterModalProps) {
  const [selectedSort, setSelectedSort] = useState("Most Popular");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string[]>([]);
  const [calorieRange, setCalorieRange] = useState([100, 500]);

  const sortOptions = ["Most Popular", "Newest", "Duration", "Calories"];
  const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];
  const bodyParts = ["Upper Body", "Lower Body", "Full Body", "Core", "Cardio"];

  const toggleSelection = (item: string, list: string[], setList: (items: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="w-full bg-dark-primary rounded-t-3xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-tertiary">
          <h2 className="text-white text-xl font-semibold">Filter Workouts</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-white/60" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Sort By */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Sort By</h3>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedSort(option)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                    selectedSort === option
                      ? 'bg-FlexForge-orange/20 border border-FlexForge-orange'
                      : 'bg-dark-secondary border border-dark-tertiary'
                  }`}
                >
                  <span className="text-white">{option}</span>
                  {selectedSort === option && (
                    <Check className="w-5 h-5 text-FlexForge-orange" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficultyLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => toggleSelection(level, selectedDifficulty, setSelectedDifficulty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDifficulty.includes(level)
                      ? 'bg-FlexForge-orange text-white'
                      : 'bg-dark-secondary text-white/60 border border-dark-tertiary'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Body Part */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Body Part</h3>
            <div className="flex flex-wrap gap-2">
              {bodyParts.map((part) => (
                <button
                  key={part}
                  onClick={() => toggleSelection(part, selectedBodyPart, setSelectedBodyPart)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedBodyPart.includes(part)
                      ? 'bg-FlexForge-orange text-white'
                      : 'bg-dark-secondary text-white/60 border border-dark-tertiary'
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>

          {/* Calorie Burn Range */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Calorie Burn Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-white/60 text-sm">
                <span>{calorieRange[0]} cal</span>
                <span>{calorieRange[1]} cal</span>
              </div>
              <div className="relative">
                <div className="w-full h-2 bg-dark-tertiary rounded-full">
                  <div 
                    className="h-2 bg-FlexForge-orange rounded-full"
                    style={{ width: `${((calorieRange[1] - calorieRange[0]) / 400) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Filter */}
          <div className="pt-4">
            <Button
              onClick={onApplyFilter}
              className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-medium py-4 text-base rounded-2xl"
            >
              Apply Filter (24 workouts)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Calendar } from '@/components/ui/calendar';
import { 
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from '@/components/ui/drawer';
import { CalendarIcon, X } from 'lucide-react';
import { DateRange } from 'react-day-picker';

interface ActivityFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: () => void;
}

export function ActivityFilterModal({ isOpen, onClose, onApplyFilter }: ActivityFilterModalProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [searchLimit, setSearchLimit] = useState([50]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  const categories = [
    { id: 'workout', name: 'Workout', color: 'bg-blue-500' },
    { id: 'meal', name: 'Meal', color: 'bg-green-500' },
    { id: 'cardio', name: 'Cardio', color: 'bg-red-500' },
    { id: 'strength', name: 'Strength', color: 'bg-purple-500' },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-dark-primary border-dark-tertiary">
        <DrawerHeader className="border-b border-dark-tertiary">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-white">Activity Filters</DrawerTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5 text-white" />
            </Button>
          </div>
        </DrawerHeader>

        <div className="p-6 space-y-6">
          {/* Date Range */}
          <div>
            <h3 className="text-white font-semibold mb-3">Date Range</h3>
            <Button
              variant="outline"
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full justify-start border-dark-tertiary text-white hover:bg-dark-secondary"
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {dateRange?.from ? (
                dateRange.to ? (
                  `${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
                ) : (
                  dateRange.from.toLocaleDateString()
                )
              ) : (
                'Select date range'
              )}
            </Button>
            
            {showCalendar && (
              <div className="mt-3 bg-dark-secondary rounded-lg p-3">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  className="pointer-events-auto"
                />
              </div>
            )}
          </div>

          {/* Search Limit */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold">Search Limit</h3>
              <span className="text-FlexForge-orange font-semibold">{searchLimit[0]}</span>
            </div>
            <Slider
              value={searchLimit}
              onValueChange={setSearchLimit}
              max={100}
              min={10}
              step={10}
              className="w-full"
            />
          </div>

          {/* Category Selection */}
          <div>
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`p-3 rounded-xl border-2 transition-colors ${
                    selectedCategories.includes(category.id)
                      ? 'border-FlexForge-orange bg-FlexForge-orange/10'
                      : 'border-dark-tertiary hover:border-FlexForge-orange/50'
                  }`}
                >
                  <div className={`w-8 h-8 ${category.color} rounded-lg mx-auto mb-2`} />
                  <span className="text-white text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Suggestions Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">AI Suggestions</h3>
              <p className="text-white/70 text-sm">Include AI-driven recommendations</p>
            </div>
            <Switch
              checked={aiSuggestions}
              onCheckedChange={setAiSuggestions}
            />
          </div>
        </div>

        <DrawerFooter className="border-t border-dark-tertiary">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-dark-tertiary text-white hover:bg-dark-secondary"
            >
              Cancel
            </Button>
            <Button
              onClick={onApplyFilter}
              className="flex-1 bg-FlexForge-orange hover:bg-FlexForge-orange/90"
            >
              Apply Filter
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

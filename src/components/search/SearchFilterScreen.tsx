
import { ArrowLeft, Calendar, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface SearchFilterScreenProps {
  onApply: () => void;
  onBack: () => void;
}

export default function SearchFilterScreen({ onApply, onBack }: SearchFilterScreenProps) {
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [searchLimit, setSearchLimit] = useState([10]);
  const [selectedCategory, setSelectedCategory] = useState('Workout');
  const [includeAI, setIncludeAI] = useState(true);

  const categories = ['Workout', 'Meal', 'Community'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end z-50">
      <div className="w-full bg-dark-primary rounded-t-3xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-tertiary">
          <h2 className="text-white text-xl font-semibold">Filter Results</h2>
          <button onClick={onBack} className="p-2">
            <X className="w-6 h-6 text-white/60" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Date Range Picker */}
          <div>
            <label className="text-white text-base font-medium mb-4 block">Date Range</label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white/60 text-sm mb-2 block">From</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-dark-secondary border-dark-tertiary",
                        !dateFrom && "text-white/50"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateFrom ? format(dateFrom, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-dark-secondary border-dark-tertiary" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="text-white/60 text-sm mb-2 block">To</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-dark-secondary border-dark-tertiary",
                        !dateTo && "text-white/50"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-dark-secondary border-dark-tertiary" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Search Limit Slider */}
          <div>
            <label className="text-white text-base font-medium mb-4 block">Search Limit</label>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-white/60 text-sm">
                <span>0</span>
                <span className="text-white font-medium">{searchLimit[0]} results</span>
                <span>50</span>
              </div>
              <Slider
                value={searchLimit}
                onValueChange={setSearchLimit}
                max={50}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <label className="text-white text-base font-medium mb-4 block">Category</label>
            <div className="flex space-x-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-FlexForge-orange text-white'
                      : 'bg-dark-secondary text-white/60 hover:bg-dark-tertiary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* AI Suggestions Toggle */}
          <div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white text-base font-medium">Include AI Suggestions</span>
                <p className="text-white/60 text-sm mt-1">Get AI-powered recommendations</p>
              </div>
              <button
                onClick={() => setIncludeAI(!includeAI)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  includeAI ? 'bg-FlexForge-orange' : 'bg-dark-tertiary'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    includeAI ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>
          </div>

          {/* Apply Filter Button */}
          <div className="pt-4">
            <Button
              onClick={onApply}
              className="w-full bg-gradient-to-r from-FlexForge-orange to-FlexForge-orange-light text-white font-medium py-4 text-base"
            >
              Apply Filters (25 results)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

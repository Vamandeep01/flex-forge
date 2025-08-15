
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Edit3, MapPin } from 'lucide-react';
import { ActivityType } from '@/pages/ActivityTrackerPage';

interface RouteSelectionScreenProps {
  activityType: ActivityType;
  onStartActivity: () => void;
  onBack: () => void;
}

export function RouteSelectionScreen({ activityType, onStartActivity, onBack }: RouteSelectionScreenProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange/80 px-6 py-4 pt-12 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-white text-xl font-semibold">Route Preview</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Map Area */}
      <div className="h-96 bg-dark-secondary m-6 rounded-2xl relative overflow-hidden">
        {/* Simulated Map View */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20">
          <div className="absolute inset-4 border-2 border-FlexForge-orange border-dashed rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-FlexForge-orange mx-auto mb-2" />
              <p className="text-white/70">Interactive Map View</p>
              <p className="text-white/50 text-sm">Route visualization</p>
            </div>
          </div>
        </div>

        {/* Route Controls */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl p-2">
          <Button variant="ghost" size="sm" className="text-white">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Route
          </Button>
        </div>
      </div>

      {/* Route Info */}
      <div className="px-6 mb-6">
        <div className="bg-dark-secondary rounded-2xl p-4">
          <h3 className="text-white font-semibold mb-3">Riverside Trail</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-FlexForge-orange text-xl font-bold">5.1</div>
              <div className="text-white/70 text-sm">km</div>
            </div>
            <div className="text-center">
              <div className="text-FlexForge-orange text-xl font-bold">25</div>
              <div className="text-white/70 text-sm">min</div>
            </div>
            <div className="text-center">
              <div className="text-FlexForge-orange text-xl font-bold">180</div>
              <div className="text-white/70 text-sm">cal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="px-6 pb-8">
        <Button 
          onClick={onStartActivity}
          className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange/90 text-white rounded-2xl py-4 text-lg font-semibold flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" />
          Start {activityType.charAt(0).toUpperCase() + activityType.slice(1)}
        </Button>
      </div>
    </div>
  );
}

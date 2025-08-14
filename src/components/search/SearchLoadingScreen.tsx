
import { ArrowLeft } from "lucide-react";

export default function SearchLoadingScreen() {
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
        <div className="bg-dark-primary rounded-2xl px-4 py-3 flex items-center">
          <span className="text-white text-base">Fitness AI Assistant</span>
          <div className="ml-auto p-1">
            <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mb-12">
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

      {/* Loading Animation */}
      <div className="flex flex-col items-center justify-center px-8 mt-20">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="w-5 h-5 bg-FlexForge-orange rounded-full animate-pulse"></div>
          <div className="w-5 h-5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-5 h-5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-5 h-5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="w-5 h-5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="w-5 h-5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}


import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, Play, Clock, Flame, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import WorkoutFilterModal from "@/components/workout/WorkoutFilterModal";

export default function WorkoutLibraryScreen() {
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredWorkouts = [
    {
      id: 1,
      title: "Upper Body Circuit",
      trainer: "John Smith",
      duration: "25min",
      calories: "412kcal",
      difficulty: "Intermediate",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "HIIT Cardio Blast",
      trainer: "Sarah Wilson",
      duration: "20min",
      calories: "380kcal",
      difficulty: "Advanced",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    }
  ];

  const strengthWorkouts = [
    {
      id: 3,
      title: "Back Workout",
      trainer: "Mike Johnson",
      duration: "30min",
      calories: "350kcal",
      difficulty: "Intermediate",
      equipment: "Dumbbells",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Chest & Triceps",
      trainer: "Alex Brown",
      duration: "35min",
      calories: "420kcal",
      difficulty: "Advanced",
      equipment: "Barbell",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    }
  ];

  const beginnerWorkouts = [
    {
      id: 5,
      title: "Body Weight Basics",
      trainer: "Emma Davis",
      duration: "15min",
      calories: "180kcal",
      difficulty: "Beginner",
      equipment: "None",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
    }
  ];

  return (
    <ProfileLayout title="Workouts" showBackButton={true}>
      <div className="px-4 py-4 space-y-6">
        {/* Search Bar */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search workouts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-secondary border border-dark-tertiary rounded-2xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-FlexForge-orange"
            />
          </div>
          <Button
            variant="outline"
            className="px-4 py-3 rounded-2xl border-dark-tertiary"
            onClick={() => setShowFilter(true)}
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        {/* Featured Workouts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">Featured</h2>
            <span className="text-FlexForge-orange text-sm">See All</span>
          </div>
          
          <div className="space-y-4">
            {featuredWorkouts.map((workout) => (
              <Link key={workout.id} to={`/workout-detail/${workout.id}`}>
                <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {workout.duration}
                      </span>
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        <Flame className="w-3 h-3 inline mr-1" />
                        {workout.calories}
                      </span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute bottom-3 right-3">
                      <Button className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark rounded-full w-12 h-12 p-0">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-white font-bold text-lg">{workout.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-white/80 text-sm">{workout.trainer}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white/80 text-sm ml-1">{workout.rating}</span>
                        </div>
                      </div>
                      <span className="bg-FlexForge-orange/80 text-white text-xs px-2 py-1 rounded-full mt-2 inline-block">
                        {workout.difficulty}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Strength Training */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">Strength Training</h2>
            <span className="text-FlexForge-orange text-sm">See All</span>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {strengthWorkouts.map((workout) => (
              <Link key={workout.id} to={`/workout-detail/${workout.id}`} className="flex-shrink-0">
                <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl overflow-hidden w-48">
                  <img
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-white font-semibold text-sm mb-1">{workout.title}</h3>
                    <p className="text-white/60 text-xs mb-2">{workout.trainer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{workout.duration}</span>
                      </div>
                      <span className="bg-FlexForge-orange/20 text-FlexForge-orange text-xs px-2 py-1 rounded-full">
                        {workout.difficulty}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Beginner Sessions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">Beginner Sessions</h2>
            <span className="text-FlexForge-orange text-sm">See All</span>
          </div>
          
          <div className="space-y-3">
            {beginnerWorkouts.map((workout) => (
              <Link key={workout.id} to={`/workout-detail/${workout.id}`}>
                <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{workout.title}</h3>
                      <p className="text-white/60 text-sm mb-2">{workout.trainer}</p>
                      <div className="flex items-center gap-3 text-white/60 text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{workout.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          <span>{workout.calories}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark rounded-full w-10 h-10 p-0">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* My Workouts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">My Workouts</h2>
            <Link to="/my-workouts" className="text-FlexForge-orange text-sm">View Schedule</Link>
          </div>
          
          <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-4">
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-white/40 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Create Your First Workout</h3>
              <p className="text-white/60 text-sm mb-4">Start building your personalized workout routine</p>
              <Button className="bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white rounded-xl">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {showFilter && (
        <WorkoutFilterModal
          onClose={() => setShowFilter(false)}
          onApplyFilter={() => setShowFilter(false)}
        />
      )}

      <style>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </ProfileLayout>
  );
}

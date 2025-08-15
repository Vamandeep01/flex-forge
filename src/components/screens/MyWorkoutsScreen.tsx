
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plus, Clock, Flame, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MyWorkoutsScreen() {
  const navigate = useNavigate();

  const myWorkouts = [
    {
      id: 1,
      title: "Morning Strength",
      duration: "45 min",
      calories: "420 cal",
      nextScheduled: "Tomorrow 8:00 AM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Cardio Blast",
      duration: "30 min",
      calories: "380 cal",
      nextScheduled: "Friday 6:00 PM",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-dark-tertiary">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-white">My Workouts</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-dark-secondary"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">12</div>
            <div className="text-white/60 text-sm">Saved</div>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">8</div>
            <div className="text-white/60 text-sm">Completed</div>
          </Card>
          <Card className="bg-dark-secondary border-dark-tertiary p-4 text-center rounded-2xl">
            <div className="text-FlexForge-orange text-2xl font-bold">4</div>
            <div className="text-white/60 text-sm">Scheduled</div>
          </Card>
        </div>

        {/* Workout List */}
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">Scheduled Workouts</h2>
          {myWorkouts.map((workout) => (
            <Card key={workout.id} className="bg-dark-secondary border-dark-tertiary rounded-2xl overflow-hidden">
              <div className="flex">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1 p-4">
                  <h3 className="text-white font-semibold mb-1">{workout.title}</h3>
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-2">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>{workout.calories}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-FlexForge-orange text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{workout.nextScheduled}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

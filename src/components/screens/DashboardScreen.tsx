import { User, Target, TrendingUp, Apple, Award, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function DashboardScreen() {
  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="bg-gradient-orange p-6 rounded-b-3xl">
        <div className="flex items-center justify-between text-white">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-white/80">Ready for today's workout?</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 -mt-6">
        {/* Today's Progress */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Today's Progress</h2>
            <Target className="h-6 w-6 text-sandow-orange" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">Calories Burned</span>
                <span className="text-white font-medium">450 / 600</span>
              </div>
              <Progress value={75} className="h-2 bg-dark-tertiary" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">Workout Time</span>
                <span className="text-white font-medium">25 / 45 min</span>
              </div>
              <Progress value={55} className="h-2 bg-dark-tertiary" />
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-orange p-6 text-center text-white">
            <TrendingUp className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Start Workout</h3>
            <p className="text-white/80 text-sm">Begin your session</p>
          </Card>
          
          <Card className="bg-blue-accent p-6 text-center text-white">
            <Apple className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Nutrition</h3>
            <p className="text-white/80 text-sm">Track your meals</p>
          </Card>
        </div>

        {/* Weekly Stats */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">This Week</h2>
            <Award className="h-6 w-6 text-green-accent" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-white/60 text-sm">Workouts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2.5k</div>
              <div className="text-white/60 text-sm">Calories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">12h</div>
              <div className="text-white/60 text-sm">Active Time</div>
            </div>
          </div>
        </Card>

        {/* Next Workout */}
        <Card className="bg-dark-secondary border-dark-tertiary p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Next Workout</h2>
            <Calendar className="h-6 w-6 text-purple-accent" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-medium">Upper Body Strength</h3>
                <p className="text-white/60 text-sm">45 minutes • Intermediate</p>
              </div>
              <Button size="sm" className="bg-sandow-orange hover:bg-sandow-orange-dark">
                Start
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
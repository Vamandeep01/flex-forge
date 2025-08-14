import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TrendingUp, User, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const scoreVariants = [
  {
    score: 88,
    level: "FIT Individual",
    description: "You are a FIT Individual. Ready to TRAIN! Let's Go!",
    color: "gray",
    bgColor: "bg-gray-600",
    textColor: "text-gray-100"
  },
  {
    score: 55,
    level: "Average Individual",
    description: "You are Average Individual. Ready to TRAIN! Let's Go!",
    color: "blue",
    bgColor: "bg-blue-600",
    textColor: "text-blue-100"
  },
  {
    score: 21,
    level: "Weak Individual",
    description: "You are a Weak Individual. Ready to TRAIN! Let's Go!",
    color: "red",
    bgColor: "bg-red-600",
    textColor: "text-red-100"
  }
]

export default function ProfileScorePage() {
  const [currentScore, setCurrentScore] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const navigate = useNavigate()

  // Simulate score calculation and display random score
  useEffect(() => {
    const randomVariant = Math.floor(Math.random() * scoreVariants.length)
    setSelectedVariant(randomVariant)

    // Animate score counting up
    const targetScore = scoreVariants[randomVariant].score
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetScore / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetScore) {
        setCurrentScore(targetScore)
        clearInterval(timer)
      } else {
        setCurrentScore(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const currentVariant = scoreVariants[selectedVariant]

  const handleContinue = () => {
    // Mark profile as completed
    localStorage.setItem('profileCompleted', 'true');

    // Navigate to profile settings
    navigate('/profile/settings');
  };

  return (
    <div className={`min-h-screen ${currentVariant.bgColor} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-16 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 p-6 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo/Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>

        {/* Main Score Display */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-white">Sandow Score</h1>

          {/* Score Circle */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full border-8 border-white/30 flex items-center justify-center relative overflow-hidden">
              {/* Progress Circle */}
              <div
                className="absolute inset-2 rounded-full border-8 border-white transition-all duration-1000"
                style={{
                  background: `conic-gradient(white 0deg, white ${(currentScore / 100) * 360}deg, transparent ${(currentScore / 100) * 360}deg)`
                }}
              />

              {/* Score Number */}
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-white">
                  {currentScore}
                </div>
                <div className="text-white/60 text-sm">out of 100</div>
              </div>
            </div>
          </div>

          {/* Score Description */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">
              {currentVariant.level}
            </h2>
            <p className={`text-lg ${currentVariant.textColor} max-w-xs mx-auto leading-relaxed`}>
              {currentVariant.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 w-full max-w-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">+7.5</div>
            <div className="text-white/60 text-xs">Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4 weeks</div>
            <div className="text-white/60 text-xs">Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">85% Success</div>
            <div className="text-white/60 text-xs">Rate</div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={handleContinue}
          className="w-full max-w-sm h-12 bg-white text-gray-900 hover:bg-white/90 font-semibold rounded-xl"
        >
          Let's Go Challenge! →
        </Button>
      </div>
    </div>
  )
}
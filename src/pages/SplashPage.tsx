
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Plus } from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-orange flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-40 right-8 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="relative">
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-2xl animate-bounce-in">
            <Plus className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          <div className="absolute -inset-4 bg-white/10 rounded-3xl -z-10 animate-pulse" />
        </div>

        {/* Brand */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">sandow.ai</h1>
          <p className="text-white/80 text-lg font-medium">
            Your personal AI fitness coach
          </p>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-16 flex flex-col items-center space-y-4">
        <LoadingSpinner className="text-white" size="lg" />
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-slide-in-right" />
        </div>
      </div>
    </div>
  )
}

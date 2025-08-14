import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { ProgressDots } from "@/components/ui/progress-dots"
import gymBg from "@/assets/gym-bg.jpg"
import fitnessWoman from "@/assets/fitness-woman.jpg"

interface OnboardingScreenProps {
  onComplete: () => void
}

const onboardingSlides = [
  {
    title: "Welcome To",
    subtitle: "FlexForge UI Kit!",
    description: "Your personal AI fitness assistant",
    image: gymBg,
    showButton: true
  },
  {
    title: "Personalized",
    subtitle: "Fitness Plans",
    description: "Choose your own fitness journey with AI",
    image: fitnessWoman,
    showButton: false
  },
  {
    title: "Extensive Workout",
    subtitle: "Libraries",
    description: "Explore +100K exercises made for you! 💪",
    image: gymBg,
    showButton: false
  },
  {
    title: "Health Metrics &",
    subtitle: "Fitness Analytics",
    description: "Monitor your health profile with ease. 📊",
    image: fitnessWoman,
    showButton: false
  },
  {
    title: "Nutrition & Diet",
    subtitle: "Guidance",
    description: "Lose weight and get fit with FlexForge! 🥗",
    image: gymBg,
    showButton: false
  },
  {
    title: "Virtual AI Coach",
    subtitle: "Mentoring",
    description: "Say goodbye to manual coaching! 🤖",
    image: fitnessWoman,
    showButton: false
  }
]

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = onboardingSlides[currentSlide]

  return (
    <div className="min-h-screen bg-dark-primary relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <button
            onClick={() => onComplete()}
            className="text-white/60 hover:text-white transition-colors"
          >
            Skip
          </button>
          <ProgressDots
            total={onboardingSlides.length}
            current={currentSlide}
          />
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-end p-6 pb-32">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {slide.subtitle}
              </h2>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-sm">
              {slide.description}
            </p>

            {slide.showButton && (
              <Button
                onClick={nextSlide}
                variant="default"
                size="lg"
                className="bg-gradient-orange text-white font-semibold rounded-xl px-8 shadow-orange hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
          <IconButton
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            className="text-white disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            variant="ghost"
            className="text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SplashOne from "@/components/splash/SplashOne"
import SplashTwo from "@/components/splash/SplashTwo"
import SplashThree from "@/components/splash/SplashThree"
import SplashFour from "@/components/splash/SplashFour"

export default function SplashPage() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const splashComponents = [
    <SplashOne key="splash1" />,
    <SplashTwo key="splash2" />,
    <SplashThree key="splash3" />,
    <SplashFour key="splash4" />
  ]

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentSlide((prevSlide) => {
          const nextSlide = prevSlide + 1

          // If we've shown all slides, navigate to onboarding
          if (nextSlide >= splashComponents.length) {
            navigate('/onboarding')
            return prevSlide
          }

          return nextSlide
        })
        setIsTransitioning(false)
      }, 300) // Half of transition duration for smooth effect

    }, 2500) // 2.5 seconds per slide

    return () => {
      clearInterval(slideTimer)
    }
  }, [navigate, splashComponents.length])

  // Handle manual swipe/touch for better UX (optional)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    const startX = touch.clientX

    const handleTouchEnd = (endEvent: TouchEvent) => {
      const endX = endEvent.changedTouches[0].clientX
      const diff = startX - endX

      // Swipe left (next slide)
      if (diff > 50 && currentSlide < splashComponents.length - 1) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(prev => prev + 1)
          setIsTransitioning(false)
        }, 150)
      }
      // Swipe right (previous slide)
      else if (diff < -50 && currentSlide > 0) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(prev => prev - 1)
          setIsTransitioning(false)
        }, 150)
      }

      document.removeEventListener('touchend', handleTouchEnd)
    }

    document.addEventListener('touchend', handleTouchEnd)
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
    >
      {/* Slides Container */}
      <div
        className={`flex w-full h-full transition-transform duration-600 ease-in-out ${isTransitioning ? 'opacity-90' : 'opacity-100'
          }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {splashComponents.map((component, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >
            {component}
          </div>
        ))}
      </div>

      {/* Skip Button (Optional) */}
      <button
        onClick={() => navigate('/onboarding')}
        className="absolute top-4 right-4 z-30 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
      >
        Skip
      </button>
    </div>
  )
}
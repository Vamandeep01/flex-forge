
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, User, Scale, Calendar, Target, Activity, Moon, Zap, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ValidationMessage } from "@/components/ui/validation-message"

const assessmentQuestions = [
  {
    id: 'fitness-level',
    question: "What's your fitness level?",
    type: 'choice',
    icon: Activity,
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  },
  {
    id: 'gender',
    question: "What is your gender?",
    type: 'choice',
    icon: User,
    options: ['Male', 'Female', 'Other', 'Prefer not to say']
  },
  {
    id: 'weight',
    question: "What is your weight?",
    type: 'input',
    icon: Scale,
    placeholder: "Enter weight in kg",
    unit: "kg",
    min: 30,
    max: 300
  },
  {
    id: 'age',
    question: "What is your age?",
    type: 'input',
    icon: Calendar,
    placeholder: "Enter your age",
    unit: "years",
    min: 13,
    max: 100
  },
  {
    id: 'experience',
    question: "Do you have previous fitness experience?",
    type: 'choice',
    icon: Target,
    options: ['Never exercised', 'Some experience', 'Regular exerciser', 'Fitness enthusiast']
  },
  {
    id: 'rate-yourself',
    question: "How would you rate yourself on fitness?",
    type: 'scale',
    icon: Activity,
    scale: { min: 1, max: 10 }
  },
  {
    id: 'activity-level',
    question: "What's your current activity level?",
    type: 'choice',
    icon: Zap,
    options: ['Sedentary', 'Lightly active', 'Moderately active', 'Very active', 'Extremely active']
  },
  {
    id: 'sleep',
    question: "How many hours do you sleep?",
    type: 'input',
    icon: Moon,
    placeholder: "Average hours per night",
    unit: "hours",
    min: 4,
    max: 12
  },
  {
    id: 'workout-days',
    question: "How many days can you workout?",
    type: 'choice',
    icon: Calendar,
    options: ['1-2 days', '3-4 days', '5-6 days', 'Every day']
  },
  {
    id: 'goals',
    question: "What are your fitness goals?",
    type: 'multiple',
    icon: Target,
    options: ['Lose weight', 'Build muscle', 'Improve endurance', 'Increase strength', 'Better health', 'Sport performance']
  },
  {
    id: 'focus-areas',
    question: "Looking for specific areas?",
    type: 'multiple',
    icon: Target,
    options: ['Upper body', 'Lower body', 'Core', 'Cardio', 'Flexibility', 'Full body']
  },
  {
    id: 'nutrition',
    question: "Any dietary preferences?",
    type: 'multiple',
    icon: Apple,
    options: ['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Mediterranean', 'No restrictions']
  },
  {
    id: 'calories',
    question: "What's your daily calorie target?",
    type: 'input',
    icon: Target,
    placeholder: "Daily calorie goal",
    unit: "calories",
    min: 1000,
    max: 5000
  }
]

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()

  const currentQuestion = assessmentQuestions[currentStep]
  const progress = ((currentStep + 1) / assessmentQuestions.length) * 100

  const validateInput = (value: string) => {
    const question = currentQuestion
    if (question.type === 'input') {
      const num = parseFloat(value)
      if (isNaN(num)) {
        return `Please enter a valid ${question.unit}`
      }
      if (question.min && num < question.min) {
        return `Minimum value is ${question.min} ${question.unit}`
      }
      if (question.max && num > question.max) {
        return `Maximum value is ${question.max} ${question.unit}`
      }
    }
    return ''
  }

  const handleAnswer = (answer: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }))
    setErrors(prev => ({ ...prev, [currentQuestion.id]: '' }))
  }

  const handleMultipleChoice = (option: string) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter(o => o !== option)
      : [...selectedOptions, option]
    setSelectedOptions(newSelection)
    handleAnswer(newSelection)
  }

  const handleNext = () => {
    // Validate current answer
    if (currentQuestion.type === 'input') {
      const value = answers[currentQuestion.id]
      if (!value) {
        setErrors(prev => ({ ...prev, [currentQuestion.id]: `${currentQuestion.unit} is required` }))
        return
      }
      const validationError = validateInput(value)
      if (validationError) {
        setErrors(prev => ({ ...prev, [currentQuestion.id]: validationError }))
        return
      }
    } else if (!answers[currentQuestion.id] || (currentQuestion.type === 'multiple' && selectedOptions.length === 0)) {
      setErrors(prev => ({ ...prev, [currentQuestion.id]: 'Please make a selection' }))
      return
    }

    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedOptions(answers[assessmentQuestions[currentStep + 1]?.id] || [])
    } else {
      // Store both onboarding status and assessment answers
      localStorage.setItem('hasAssessmentCompleted', 'true')
      localStorage.setItem('assessmentAnswers', JSON.stringify(answers))

      // Optional: Store completion timestamp
      localStorage.setItem('assessmentCompletedAt', new Date().toISOString())

      navigate('/dashboard')
    }
  }
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedOptions(answers[assessmentQuestions[currentStep - 1]?.id] || [])
    }
  }

  const renderQuestion = () => {
    const IconComponent = currentQuestion.icon

    switch (currentQuestion.type) {
      case 'choice':
        return (
          <div className="space-y-4 max-h-[44vh] overflow-y-auto scrollbar-hide">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${answers[currentQuestion.id] === option
                  ? 'border-FlexForge-orange bg-FlexForge-orange/10 text-white'
                  : 'border-dark-tertiary bg-dark-secondary text-white hover:border-FlexForge-orange/50'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        )

      case 'multiple':
        return (
          <div className="space-y-4 max-h-[44vh] overflow-y-auto scrollbar-hide">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleMultipleChoice(option)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${selectedOptions.includes(option)
                  ? 'border-FlexForge-orange bg-FlexForge-orange/10 text-white'
                  : 'border-dark-tertiary bg-dark-secondary text-white hover:border-FlexForge-orange/50'
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        )

      case 'input':
        return (
          <div className="space-y-4">
            <Input
              type="number"
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              min={currentQuestion.min}
              max={currentQuestion.max}
              className={`h-14 bg-dark-secondary text-white text-lg text-center ${errors[currentQuestion.id] ? 'border-red-500' : 'border-dark-tertiary'
                }`}
            />
            {currentQuestion.unit && (
              <p className="text-center text-white/60">{currentQuestion.unit}</p>
            )}
            {errors[currentQuestion.id] && (
              <ValidationMessage message={errors[currentQuestion.id]} />
            )}
          </div>
        )

      case 'scale':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handleAnswer(num)}
                  className={`aspect-square rounded-xl border-2 transition-all duration-200 ${answers[currentQuestion.id] === num
                    ? 'border-FlexForge-orange bg-FlexForge-orange text-white'
                    : 'border-dark-tertiary bg-dark-secondary text-white hover:border-FlexForge-orange/50'
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-sm text-white/60">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <IconButton
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="ghost"
            className="text-white disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </IconButton>

          <span className="text-white/60 text-sm font-medium">
            {currentStep + 1} of {assessmentQuestions.length}
          </span>

          <div className="w-10" />
        </div>

        <Progress value={progress} className="h-2 bg-dark-secondary" />
      </div>

      {/* Content */}
      <div className="px-6 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center mx-auto">
            <currentQuestion.icon className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white leading-tight">
            {currentQuestion.question}
          </h1>
        </div>

        {renderQuestion()}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-6 right-6">
        <Button
          onClick={handleNext}
          className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          {currentStep === assessmentQuestions.length - 1 ? 'Complete Assessment' : 'Continue'}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

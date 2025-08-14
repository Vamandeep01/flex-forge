
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, User, Heart, Shield, Bell, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

const profileSetupSteps = [
  { id: 'avatar', title: 'Select your Avatar 🔥', subtitle: 'Choose an avatar to make your profile stand out' },
  { id: 'profile', title: 'Profile Setup', subtitle: 'Tell us about yourself' },
  { id: 'password', title: 'Password Setup', subtitle: 'Create a secure password' },
  { id: 'otp', title: 'OTP Setup', subtitle: 'Secure your account' },
  { id: 'otp-verify', title: 'OTP Verification', subtitle: 'Enter the 4-digit OTP Code!' },
  { id: 'fingerprint', title: 'Fingerprint Setup 👆', subtitle: 'Use your biometric or passcode to make sign in faster and more secure' },
  { id: 'notifications', title: 'Notification Setup', subtitle: 'Customize your notification preferences' },
  { id: 'generating', title: 'Generating Score', subtitle: 'Please wait... We\'re calculating the right workout for you' }
]

const avatarOptions = [
  { id: '1', emoji: '🔥', color: 'bg-orange-500' },
  { id: '2', emoji: '💪', color: 'bg-blue-500' },
  { id: '3', emoji: '⚡', color: 'bg-purple-500' },
  { id: '4', emoji: '🎯', color: 'bg-green-500' },
  { id: '5', emoji: '🚀', color: 'bg-red-500' },
  { id: '6', emoji: '💎', color: 'bg-cyan-500' }
]

export default function ProfileSetupPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    avatar: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
    fingerprintEnabled: false,
    notifications: {
      push: true,
      email: true,
      sms: false
    }
  })
  const navigate = useNavigate()

  const currentStepData = profileSetupSteps[currentStep]
  const progress = ((currentStep + 1) / profileSetupSteps.length) * 100

  const handleNext = () => {
    if (currentStep < profileSetupSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete setup and navigate to score page
      navigate('/profile-score')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStepData.id) {
      case 'avatar':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => setFormData(prev => ({ ...prev, avatar: avatar.id }))}
                  className={`aspect-square rounded-2xl ${avatar.color} flex items-center justify-center text-3xl transition-all duration-200 ${
                    formData.avatar === avatar.id 
                      ? 'ring-4 ring-orange-500 scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  {avatar.emoji}
                </button>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm">
              or upload from Social Pics
            </p>
          </div>
        )

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <Input
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12"
              />
            </div>
          </div>
        )

      case 'password':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="h-12"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Password Strength</p>
              <div className="flex gap-2">
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-green-500 rounded-full"></div>
                <div className="h-2 w-full bg-muted rounded-full"></div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Must have at least 8</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Must have at least 1 number</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'otp':
        return (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-10 h-10 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                We will send you a <strong>One Time Password</strong> on this mobile number
              </p>
              <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-xl">
                <span className="text-foreground">+1 ••• ••• •••2</span>
              </div>
            </div>
          </div>
        )

      case 'otp-verify':
        return (
          <div className="space-y-8 text-center">
            <p className="text-muted-foreground">
              Enter your One Time Password to secure your account and verify your number
            </p>
            <div className="flex justify-center gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center text-xl font-bold"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Didn't receive the OTP code? <button className="text-orange-500 font-semibold">Resend</button>
            </p>
          </div>
        )

      case 'fingerprint':
        return (
          <div className="space-y-8 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Fingerprint className="w-16 h-16 text-white" />
            </div>
            <p className="text-muted-foreground">
              Use your biometric or passcode to make sign in faster and more secure
            </p>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Push Notifications</span>
                </div>
                <div className="w-12 h-6 bg-orange-500 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Personalized Fitness</span>
                </div>
                <div className="w-12 h-6 bg-orange-500 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">Nutrition & Diet</span>
                </div>
                <div className="w-12 h-6 bg-muted-foreground rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'generating':
        return (
          <div className="space-y-8 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Generating Score</h3>
              <p className="text-muted-foreground">
                Please wait... We're calculating the right workout for you
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <p className="font-semibold text-foreground">{currentStepData.title}</p>
            <p className="text-xs text-muted-foreground">{currentStep + 1} of {profileSetupSteps.length}</p>
          </div>

          <div className="w-10" />
        </div>
        
        <div className="mt-4">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="max-w-sm mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {currentStepData.subtitle}
            </p>
          </div>

          {renderStepContent()}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background border-t">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={handleNext}
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
          >
            {currentStep === profileSetupSteps.length - 1 ? 'Complete Setup' : 'Continue'}
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

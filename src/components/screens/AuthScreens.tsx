import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, Instagram, Facebook, Linkedin, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconButton } from "@/components/ui/icon-button"
import gymBg from "@/assets/gym-bg.jpg"

interface AuthScreensProps {
  onComplete: () => void
}

export function AuthScreens({ onComplete }: AuthScreensProps) {
  const [currentScreen, setCurrentScreen] = useState<'signin' | 'signup' | 'reset' | 'sent'>('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [passwordError, setPasswordError] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (field === 'confirmPassword' && passwordError) {
      setPasswordError('')
    }
  }

  const handleSignUp = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("ERROR: Password Don't Match!")
      return
    }
    onComplete()
  }

  const handleResetPassword = () => {
    setCurrentScreen('sent')
  }

  const renderSignInScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Sign In To FlexForge</h1>
        <p className="text-white/70">Let's personalize your fitness with AI</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              type="email"
              placeholder="elementary221b@gmail.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-12 bg-dark-secondary border-dark-tertiary text-white placeholder:text-white/50 h-14 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="************"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="pl-12 pr-12 bg-dark-secondary border-dark-tertiary text-white placeholder:text-white/50 h-14 rounded-xl"
            />
            <IconButton
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </IconButton>
          </div>
        </div>
      </div>

      <Button
        onClick={onComplete}
        className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Sign In
      </Button>

      <div className="flex items-center justify-center space-x-4">
        <IconButton variant="ghost" className="text-white/60 hover:text-white">
          <Instagram className="h-6 w-6" />
        </IconButton>
        <IconButton variant="ghost" className="text-white/60 hover:text-white">
          <Facebook className="h-6 w-6" />
        </IconButton>
        <IconButton variant="ghost" className="text-white/60 hover:text-white">
          <Linkedin className="h-6 w-6" />
        </IconButton>
      </div>

      <div className="text-center space-y-2">
        <p className="text-white/70">
          Don't have an account?{' '}
          <button
            onClick={() => setCurrentScreen('signup')}
            className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium"
          >
            Sign Up.
          </button>
        </p>
        <button
          onClick={() => setCurrentScreen('reset')}
          className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium"
        >
          Forgot Password
        </button>
      </div>
    </div>
  )

  const renderSignUpScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Sign Up For Free</h1>
        <p className="text-white/70">Quickly make your account in 1 minute</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              type="email"
              placeholder="elementary221b@gmail.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-12 bg-dark-secondary border-dark-tertiary text-white placeholder:text-white/50 h-14 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="*************"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="pl-12 pr-12 bg-dark-secondary border-dark-tertiary text-white placeholder:text-white/50 h-14 rounded-xl"
            />
            <IconButton
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </IconButton>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white text-sm font-medium">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="elementary221"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`pl-12 pr-12 bg-dark-secondary text-white placeholder:text-white/50 h-14 rounded-xl ${passwordError ? 'border-red-500' : 'border-dark-tertiary'
                }`}
            />
            <IconButton
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </IconButton>
          </div>
          {passwordError && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-red-400 text-sm font-medium">{passwordError}</span>
            </div>
          )}
        </div>
      </div>

      <Button
        onClick={handleSignUp}
        className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Sign Up
      </Button>

      <div className="text-center">
        <p className="text-white/70">
          Already have an account?{' '}
          <button
            onClick={() => setCurrentScreen('signin')}
            className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium"
          >
            Sign In.
          </button>
        </p>
      </div>
    </div>
  )

  const renderResetScreen = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-white">Reset Password</h1>
        <p className="text-white/70">Select what method you'd like to reset.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-dark-secondary rounded-xl p-4 flex items-center space-x-4 hover:bg-dark-tertiary transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Send via Email</h3>
            <p className="text-white/60 text-sm">Seamlessly reset your password via email address.</p>
          </div>
        </div>

        <div className="bg-dark-secondary rounded-xl p-4 flex items-center space-x-4 hover:bg-dark-tertiary transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-blue-accent rounded-xl flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Send via 2FA</h3>
            <p className="text-white/60 text-sm">Seamlessly reset your password via 2 Factors.</p>
          </div>
        </div>

        <div className="bg-dark-secondary rounded-xl p-4 flex items-center space-x-4 hover:bg-dark-tertiary transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-purple-accent rounded-xl flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Send via Google Auth</h3>
            <p className="text-white/60 text-sm">Seamlessly reset your password via gAuth.</p>
          </div>
        </div>
      </div>

      <Button
        onClick={handleResetPassword}
        className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Reset Password
      </Button>
    </div>
  )

  const renderSentScreen = () => (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <div className="w-24 h-24 bg-green-accent rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Password Sent!</h1>
        <p className="text-white/70 max-w-sm mx-auto">
          We've sent the password to **221b@gmail.com. Resend if the password is not received! 🔥
        </p>
      </div>

      <Button
        onClick={() => setCurrentScreen('reset')}
        className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Re-Send Password
      </Button>

      <IconButton
        onClick={() => setCurrentScreen('signin')}
        variant="ghost"
        className="absolute top-6 right-6 text-white/60 hover:text-white"
      >
        <X className="h-6 w-6" />
      </IconButton>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-primary relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/90 to-dark-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-sm animate-fade-in">
          {currentScreen === 'signin' && renderSignInScreen()}
          {currentScreen === 'signup' && renderSignUpScreen()}
          {currentScreen === 'reset' && renderResetScreen()}
          {currentScreen === 'sent' && renderSentScreen()}
        </div>
      </div>
    </div>
  )
}
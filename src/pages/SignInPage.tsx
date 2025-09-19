import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconButton } from "@/components/ui/icon-button"
import { ValidationMessage } from "@/components/ui/validation-message"
import gymBg from "@/assets/gym-bg.jpg"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [announceMessage, setAnnounceMessage] = useState('') // For screen reader announcements
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    
    // Announce validation results to screen readers
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join('. ')
      setAnnounceMessage(`Form validation failed. ${errorMessages}`)
    } else {
      setAnnounceMessage('')
    }
    
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
      // Clear announcement when user starts fixing errors
      setAnnounceMessage('')
    }
  }

  const handleSignIn = () => {
    if (validateForm()) {
      setAnnounceMessage("Sign in successful. Redirecting to dashboard...")
      localStorage.setItem('isLoggedIn', 'true')
      setTimeout(() => {
        navigate('/dashboard')
      }, 200)
    }
  }

  // Handle form submission with Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSignIn()
    }
  }

  return (
    <div className="min-h-screen bg-dark-primary relative overflow-hidden">
      {/* Skip link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-FlexForge-orange text-white px-4 py-2 rounded z-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gymBg})` }}
        role="img"
        aria-label="Gym equipment background image"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/90 to-dark-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <main id="main-content" className="w-full max-w-sm animate-fade-in space-y-6">
          <header className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">Sign In To FlexForge</h1>
            <p className="text-white/70">Let's personalize your fitness with AI</p>
          </header>

          {/* Screen reader announcements */}
          <div aria-live="assertive" aria-atomic="true" className="sr-only">
            {announceMessage}
          </div>

          <form 
            className="space-y-4" 
            onKeyDown={handleKeyDown}
            noValidate // We handle validation ourselves
            role="form"
            aria-labelledby="signin-title"
          >
            <div className="space-y-2">
              <label 
                htmlFor="email-input" 
                className="text-white text-sm font-medium"
              >
                Email Address *
              </label>
              <div className="relative">
                <Mail 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" 
                  aria-hidden="true"
                />
                <Input
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="elementary221b@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  aria-describedby={errors.email ? "email-error" : "email-help"}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-required="true"
                  className={`pl-12 bg-dark-secondary text-white placeholder:text-white/50 h-14 rounded-xl focus-visible:ring-2 focus-visible:ring-FlexForge-orange focus-visible:border-FlexForge-orange ${
                    errors.email ? 'border-red-500' : 'border-dark-tertiary'
                  }`}
                />
              </div>
              <div id="email-help" className="sr-only">
                Enter your email address to sign in to your FlexForge account
              </div>
              {errors.email && (
                <div id="email-error" role="alert" className="text-red-500 text-sm">
                  <ValidationMessage message={errors.email} />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password-input" 
                className="text-white text-sm font-medium"
              >
                Password *
              </label>
              <div className="relative">
                <Lock 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" 
                  aria-hidden="true"
                />
                <Input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="************"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  aria-describedby={errors.password ? "password-error" : "password-help"}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-required="true"
                  className={`pl-12 pr-12 bg-dark-secondary text-white placeholder:text-white/50 h-14 rounded-xl focus-visible:ring-2 focus-visible:ring-FlexForge-orange focus-visible:border-FlexForge-orange ${
                    errors.password ? 'border-red-500' : 'border-dark-tertiary'
                  }`}
                />
                <IconButton
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-describedby="password-toggle-help"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-FlexForge-orange"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </IconButton>
              </div>
              <div id="password-help" className="sr-only">
                Enter your password. Must be at least 6 characters long.
              </div>
              <div id="password-toggle-help" className="sr-only">
                Toggle password visibility
              </div>
              {errors.password && (
                <div id="password-error" role="alert" className="text-red-500 text-sm">
                  <ValidationMessage message={errors.password} />
                </div>
              )}
            </div>

            <Button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-primary"
              aria-describedby="signin-button-help"
            >
              Sign In
            </Button>
            <div id="signin-button-help" className="sr-only">
              Sign in to your FlexForge account and access your personalized fitness dashboard
            </div>
          </form>

          <div className="flex items-center justify-center space-x-4" role="group" aria-label="Social media login options">
            <IconButton 
              variant="ghost" 
              className="text-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-FlexForge-orange"
              aria-label="Sign in with Instagram"
            >
              <Instagram className="h-6 w-6" />
            </IconButton>
            <IconButton 
              variant="ghost" 
              className="text-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-FlexForge-orange"
              aria-label="Sign in with Facebook"
            >
              <Facebook className="h-6 w-6" />
            </IconButton>
            <IconButton 
              variant="ghost" 
              className="text-white/60 hover:text-white focus-visible:ring-2 focus-visible:ring-FlexForge-orange"
              aria-label="Sign in with LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </IconButton>
          </div>

          <nav className="text-center space-y-2" aria-label="Account actions">
            <p className="text-white/70">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium focus-visible:ring-2 focus-visible:ring-FlexForge-orange rounded"
              >
                Sign Up.
              </Link>
            </p>
            <Link
              to="/reset-password"
              className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium focus-visible:ring-2 focus-visible:ring-FlexForge-orange rounded"
            >
              Forgot Password
            </Link>
          </nav>
        </main>
      </div>
    </div>
  )
}
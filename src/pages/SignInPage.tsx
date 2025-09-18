
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
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      // stricter validation: Email regex is very loose (\S+@\S+\.\S+), so something like a@b.c passes.
      // Change the regex for stricter validation
      newErrors.email = "Please enter a valid email address"
    }


    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSignIn = () => {
    if (validateForm()) {
      console.log("Sign in successful")
      localStorage.setItem('isLoggedIn', 'true')
      setTimeout(() => {
        navigate('/dashboard')
      }, 200)
    }
  }

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
        <div className="w-full max-w-sm animate-fade-in space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">Sign In To FlexForge</h1>
            <p className="text-white/70">Let's personalize your fitness with AI</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  // Expected behavior: pressing Enter in a field should also submit.
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                  className={`pl-12 bg-dark-secondary text-white placeholder:text-white/50 h-14 rounded-xl ${errors.email ? 'border-red-500' : 'border-dark-tertiary'
                    }`}
                />
              </div>
              {errors.email && <ValidationMessage message={errors.email} />}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  // Expected behavior: pressing Enter in a field should also submit.
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                  className={`pl-12 pr-12 bg-dark-secondary text-white placeholder:text-white/50 h-14 rounded-xl ${errors.password ? 'border-red-500' : 'border-dark-tertiary'
                    }`}
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
              {errors.password && <ValidationMessage message={errors.password} />}
            </div>
          </div>

          <Button
            onClick={handleSignIn}
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
              <Link
                to="/signup"
                className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium"
              >
                Sign Up.
              </Link>
            </p>
            <Link
              to="/reset-password"
              className="text-FlexForge-orange hover:text-FlexForge-orange-light transition-colors font-medium"
            >
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

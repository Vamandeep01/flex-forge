
import { useNavigate } from "react-router-dom"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import gymBg from "@/assets/gym-bg.jpg"

export default function PasswordSentPage() {
  const navigate = useNavigate()

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
        <div className="w-full max-w-sm animate-fade-in space-y-8 text-center">
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
            onClick={() => navigate('/reset-password')}
            className="w-full bg-gradient-orange text-white font-semibold h-14 rounded-xl shadow-orange hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Re-Send Password
          </Button>

          <IconButton
            onClick={() => navigate('/signin')}
            variant="ghost"
            className="absolute top-6 right-6 text-white/60 hover:text-white"
          >
            <X className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

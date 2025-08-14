
import { useNavigate } from "react-router-dom"
import { Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import gymBg from "@/assets/gym-bg.jpg"

export default function ResetPasswordPage() {
  const navigate = useNavigate()

  const handleResetPassword = () => {
    navigate('/password-sent')
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
      </div>
    </div>
  )
}

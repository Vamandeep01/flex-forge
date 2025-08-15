import { Button } from '@/components/ui/button';
import { NutritionScreen } from '@/pages/NutritionPage';

interface NutritionOnboardingScreenProps {
  onNavigate: (screen: NutritionScreen) => void;
}

export default function NutritionOnboardingScreen({ onNavigate }: NutritionOnboardingScreenProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=1200&fit=crop&crop=center')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen p-6 pb-12">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Nutrition & Diet,
            </h1>
            <h2 className="text-3xl font-bold text-FlexForge-orange">
              Tailored for you.
            </h2>
            <p className="text-white/80 text-lg max-w-sm mx-auto">
              Discover personalized nutrition plans and track your daily intake with AI-powered insights.
            </p>
          </div>
          
          <Button 
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl shadow-orange transition-all duration-300"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
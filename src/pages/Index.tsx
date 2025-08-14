import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/screens/SplashScreen"
import { OnboardingScreen } from "@/components/screens/OnboardingScreen"
import { AuthScreens } from "@/components/screens/AuthScreens"
import { AssessmentFlow } from "@/components/screens/AssessmentFlow"
import { DashboardScreen } from "@/components/screens/DashboardScreen"

type AppFlow = 'splash' | 'onboarding' | 'auth' | 'assessment' | 'dashboard'

const Index = () => {
  const [currentFlow, setCurrentFlow] = useState<AppFlow>('splash')

  // Add PWA install prompt handling
  useEffect(() => {
    let deferredPrompt: any;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleFlowComplete = (nextFlow: AppFlow) => {
    setCurrentFlow(nextFlow)
  }

  const renderCurrentFlow = () => {
    switch (currentFlow) {
      case 'splash':
        return <SplashScreen onComplete={() => handleFlowComplete('onboarding')} />
      case 'onboarding':
        return <OnboardingScreen onComplete={() => handleFlowComplete('auth')} />
      case 'auth':
        return <AuthScreens onComplete={() => handleFlowComplete('assessment')} />
      case 'assessment':
        return <AssessmentFlow onComplete={() => handleFlowComplete('dashboard')} />
      case 'dashboard':
        return <DashboardScreen />
      default:
        return <SplashScreen onComplete={() => handleFlowComplete('onboarding')} />
    }
  }

  return (
    <div className="min-h-screen bg-dark-primary">
      {renderCurrentFlow()}
    </div>
  );
};

export default Index;

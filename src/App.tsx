import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import AddWorkoutPage from './pages/AddWorkoutPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AssessmentPage from './pages/AssessmentPage';
import BMIIndexPage from './pages/BMIIndexPage';
import CaloriesPage from './pages/CaloriesPage';
import CalorieStatsPage from './pages/CalorieStatsPage';
import DashboardPage from './pages/DashboardPage';
import HeartRatePage from './pages/HeartRatePage';
import HeartRateStatsPage from './pages/HeartRateStatsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import HydrationPage from './pages/HydrationPage';
import NotFound from './pages/NotFound';
import NotificationSettingsPage from './pages/NotificationSettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import OnboardingPage from './pages/OnboardingPage';
import PasswordSentPage from './pages/PasswordSentPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import ProfileScorePage from './pages/ProfileScorePage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SandowScorePage from './pages/SandowScorePage';
import SearchPage from './pages/SearchPage';
import SecuritySettingsPage from './pages/SecuritySettingsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SplashPage from './pages/SplashPage';
import StepsPage from './pages/StepsPage';
import StepsStatsPage from './pages/StepsStatsPage';
import ActivityTrackerPage from './pages/ActivityTrackerPage';
import NutritionPage from "./pages/NutritionPage";

// Import error screens
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { FeatureLockedScreen } from "./components/error/FeatureLockedScreen";
import { MaintenanceScreen } from "./components/error/MaintenanceScreen";
import { NetworkHandler } from './components/error/NetworkHandler';
import { NotAllowedScreen } from "./components/error/NotAllowedScreen";
import { AuthGuard } from './components/guardComp/AuthGuard';
import { MobileLayout } from './components/layout/MobileLayout';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { NotificationProvider } from './contexts/NotificationContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.status >= 400 && error?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});
function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <NetworkHandler>
          <NotificationProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />

              <BrowserRouter>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Navigate to="/splash" replace />} />

                  {/* Public routes (no auth required) */}
                  <Route path="/splash" element={
                    <AuthGuard requireAuth={false}>
                      <SplashPage />
                    </AuthGuard>
                  } />

                  <Route path="/onboarding" element={<OnboardingPage />} />

                  <Route path="/signin" element={
                    <AuthGuard requireAuth={false}>
                      <SignInPage />
                    </AuthGuard>
                  } />

                  <Route path="/signup" element={
                    <AuthGuard requireAuth={false}>
                      <SignUpPage />
                    </AuthGuard>
                  } />

                  <Route path="/reset-password" element={
                    <AuthGuard requireAuth={false}>
                      <ResetPasswordPage />
                    </AuthGuard>
                  } />

                  <Route path="/password-sent" element={
                    <AuthGuard requireAuth={false}>
                      <PasswordSentPage />
                    </AuthGuard>
                  } />

                  {/* Protected routes (auth required) */}
                  <Route path="/profile-setup" element={
                    <AuthGuard>
                      <ProfileSetupPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile-score" element={
                    <AuthGuard>
                      <ProfileScorePage />
                    </AuthGuard>
                  } />

                  <Route path="/assessment" element={
                    <AuthGuard>
                      <AssessmentPage />
                    </AuthGuard>
                  } />

                  <Route path="/dashboard" element={
                    <AuthGuard>
                      <MobileLayout showBottomNav={true}>
                        <DashboardPage />
                      </MobileLayout>
                    </AuthGuard>
                  } />

                  <Route path="/search" element={
                    <AuthGuard>
                      <SearchPage />
                    </AuthGuard>
                  } />

                  <Route path="/notifications" element={
                    <AuthGuard>
                      <NotificationsPage />
                    </AuthGuard>
                  } />

                  <Route path="/activity-tracker" element={
                    <AuthGuard>
                      <ActivityTrackerPage />
                    </AuthGuard>
                  } />

                  {/* Navigation pages */}
                  <Route path="/analytics" element={
                    <AuthGuard>
                      <MobileLayout showBottomNav={true}>
                        <AnalyticsPage />
                      </MobileLayout>
                    </AuthGuard>
                  } />

                  {/* Fitness Metrics Detail Pages */}
                  <Route path="/sandow-score" element={
                    <AuthGuard>
                      <SandowScorePage />
                    </AuthGuard>
                  } />

                  <Route path="/heart-rate" element={
                    <AuthGuard>
                      <HeartRatePage />
                    </AuthGuard>
                  } />

                  <Route path="/heart-rate-stats" element={
                    <AuthGuard>
                      <HeartRateStatsPage />
                    </AuthGuard>
                  } />

                  <Route path="/bmi-index" element={
                    <AuthGuard>
                      <BMIIndexPage />
                    </AuthGuard>
                  } />

                  <Route path="/hydration" element={
                    <AuthGuard>
                      <HydrationPage />
                    </AuthGuard>
                  } />

                  <Route path="/calories" element={
                    <AuthGuard>
                      <CaloriesPage />
                    </AuthGuard>
                  } />

                  <Route path="/calorie-stats" element={
                    <AuthGuard>
                      <CalorieStatsPage />
                    </AuthGuard>
                  } />

                  <Route path="/steps" element={
                    <AuthGuard>
                      <StepsPage />
                    </AuthGuard>
                  } />

                  <Route path="/steps-stats" element={
                    <AuthGuard>
                      <StepsStatsPage />
                    </AuthGuard>
                  } />


                  <Route path="/add-workout" element={
                    <AuthGuard>
                      <AddWorkoutPage />
                    </AuthGuard>
                  } />
                  <Route path="/nutrition" element={
                    <AuthGuard>
                      <NutritionPage />
                    </AuthGuard>
                  } />

                  {/* Catch all */}
                  <Route path="/profile/setup" element={
                    <AuthGuard>
                      <ProfileSetupPage />
                    </AuthGuard>
                  } />
                  {/* Catch all */}
                  <Route path="/profile/score" element={
                    <AuthGuard>
                      <ProfileScorePage />
                    </AuthGuard>
                  } />
                  {/* Catch all */}
                  <Route path="/profile/settings" element={
                    <AuthGuard>
                      <ProfileSettingsPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/account-settings" element={
                    <AuthGuard>
                      <AccountSettingsPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/personal-info" element={
                    <AuthGuard>
                      <PersonalInfoPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/notification-settings" element={
                    <AuthGuard>
                      <NotificationSettingsPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/security-settings" element={
                    <AuthGuard>
                      <SecuritySettingsPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/about-us" element={
                    <AuthGuard>
                      <AboutUsPage />
                    </AuthGuard>
                  } />

                  <Route path="/profile/help-center" element={
                    <AuthGuard>
                      <HelpCenterPage />
                    </AuthGuard>
                  } />

                  {/* Error and Utility Routes */}
                  <Route path="/error/maintenance" element={<MaintenanceScreen />} />
                  <Route path="/error/not-allowed" element={<NotAllowedScreen />} />
                  <Route path="/error/feature-locked" element={<FeatureLockedScreen />} />

                  <Route path="*" element={<NotFound />} />

                  {/* Catch all */}
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </NotificationProvider>
        </NetworkHandler>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Keep these imports as non-lazy since they're critical infrastructure
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

// Loading Screen Component
const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center text-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
    <div className="text-lg font-medium">Loading...</div>
  </div>
);

// Lazy load all page components
// Auth & Onboarding Pages (High Priority)
const SplashPage = lazy(() => import('./pages/SplashPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const PasswordSentPage = lazy(() => import('./pages/PasswordSentPage'));

// Core App Pages (High Priority)
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfileSetupPage = lazy(() => import('./pages/ProfileSetupPage'));
const ProfileScorePage = lazy(() => import('./pages/ProfileScorePage'));
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'));

// Main Feature Pages (Medium Priority)
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage'));
const ActivityTrackerPage = lazy(() => import('./pages/ActivityTrackerPage'));

// Health & Fitness Pages (Medium Priority)
const SandowScorePage = lazy(() => import('./pages/SandowScorePage'));
const HeartRatePage = lazy(() => import('./pages/HeartRatePage'));
const HeartRateStatsPage = lazy(() => import('./pages/HeartRateStatsPage'));
const BMIIndexPage = lazy(() => import('./pages/BMIIndexPage'));
const HydrationPage = lazy(() => import('./pages/HydrationPage'));
const CaloriesPage = lazy(() => import('./pages/CaloriesPage'));
const CalorieStatsPage = lazy(() => import('./pages/CalorieStatsPage'));
const StepsPage = lazy(() => import('./pages/StepsPage'));
const StepsStatsPage = lazy(() => import('./pages/StepsStatsPage'));
const NutritionPage = lazy(() => import("./pages/NutritionPage"));

// Workout Pages (Medium Priority)
const WorkoutPage = lazy(() => import("./pages/WorkoutPage"));
const WorkoutLibraryPage = lazy(() => import("./pages/WorkoutLibraryPage"));
const WorkoutDetailPage = lazy(() => import("./pages/WorkoutDetailPage"));
const MyWorkoutsPage = lazy(() => import("./pages/MyWorkoutsPage"));
const WorkoutCompletionPage = lazy(() => import("./pages/WorkoutCompletionPage"));

// Coaching Pages (Low Priority)
const CoachOnboardingPage = lazy(() => import("./pages/CoachOnboardingPage"));
const CoachSelectionPage = lazy(() => import("./pages/CoachSelectionPage"));
const CoachDetailPage = lazy(() => import("./pages/CoachDetailPage"));
const CoachBookingPage = lazy(() => import("./pages/CoachBookingPage"));
const CoachPaymentPage = lazy(() => import("./pages/CoachPaymentPage"));
const CoachMessagingPage = lazy(() => import("./pages/CoachMessagingPage"));
const CoachRatingPage = lazy(() => import("./pages/CoachRatingPage"));

// Profile & Settings Pages (Low Priority)
const ProfileSettingsPage = lazy(() => import('./pages/ProfileSettingsPage'));
const AccountSettingsPage = lazy(() => import('./pages/AccountSettingsPage'));
const PersonalInfoPage = lazy(() => import('./pages/PersonalInfoPage'));
const NotificationSettingsPage = lazy(() => import('./pages/NotificationSettingsPage'));
const SecuritySettingsPage = lazy(() => import('./pages/SecuritySettingsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'));

// Utility Pages (Lowest Priority)
const NotFound = lazy(() => import('./pages/NotFound'));

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

// Higher-order component to wrap routes with Suspense
const withSuspense = (Component: React.ComponentType<any>) => {
  return function SuspenseWrapper(props: any) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

// Higher-order component to wrap protected routes
const withAuthGuard = (Component: React.ComponentType<any>, requireAuth = true) => {
  return function AuthWrapper(props: any) {
    return (
      <AuthGuard requireAuth={requireAuth}>
        <Component {...props} />
      </AuthGuard>
    );
  };
};

// Higher-order component to wrap routes with MobileLayout
const withMobileLayout = (Component: React.ComponentType<any>, showBottomNav = false) => {
  return function MobileLayoutWrapper(props: any) {
    return (
      <MobileLayout showBottomNav={showBottomNav}>
        <Component {...props} />
      </MobileLayout>
    );
  };
};

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
                  <Route
                    path="/splash"
                    element={withSuspense(withAuthGuard(SplashPage, false))({})}
                  />

                  <Route
                    path="/onboarding"
                    element={withSuspense(OnboardingPage)({})}
                  />

                  <Route
                    path="/signin"
                    element={withSuspense(withAuthGuard(SignInPage, false))({})}
                  />

                  <Route
                    path="/signup"
                    element={withSuspense(withAuthGuard(SignUpPage, false))({})}
                  />

                  <Route
                    path="/reset-password"
                    element={withSuspense(withAuthGuard(ResetPasswordPage, false))({})}
                  />

                  <Route
                    path="/password-sent"
                    element={withSuspense(withAuthGuard(PasswordSentPage, false))({})}
                  />

                  {/* Protected routes (auth required) */}
                  <Route
                    path="/profile-setup"
                    element={withSuspense(withAuthGuard(ProfileSetupPage))({})}
                  />

                  <Route
                    path="/profile-score"
                    element={withSuspense(withAuthGuard(ProfileScorePage))({})}
                  />

                  <Route
                    path="/assessment"
                    element={withSuspense(withAuthGuard(AssessmentPage))({})}
                  />

                  <Route
                    path="/dashboard"
                    element={withSuspense(withAuthGuard(withMobileLayout(DashboardPage, true)))({})}
                  />

                  <Route
                    path="/search"
                    element={withSuspense(withAuthGuard(SearchPage))({})}
                  />

                  <Route
                    path="/notifications"
                    element={withSuspense(withAuthGuard(NotificationsPage))({})}
                  />

                  <Route
                    path="/activity-tracker"
                    element={withSuspense(withAuthGuard(ActivityTrackerPage))({})}
                  />

                  {/* Navigation pages */}
                  <Route
                    path="/analytics"
                    element={withSuspense(withAuthGuard(withMobileLayout(AnalyticsPage, true)))({})}
                  />

                  {/* Fitness Metrics Detail Pages */}
                  <Route
                    path="/sandow-score"
                    element={withSuspense(withAuthGuard(SandowScorePage))({})}
                  />

                  <Route
                    path="/heart-rate"
                    element={withSuspense(withAuthGuard(HeartRatePage))({})}
                  />

                  <Route
                    path="/heart-rate-stats"
                    element={withSuspense(withAuthGuard(HeartRateStatsPage))({})}
                  />

                  <Route
                    path="/bmi-index"
                    element={withSuspense(withAuthGuard(BMIIndexPage))({})}
                  />

                  <Route
                    path="/hydration"
                    element={withSuspense(withAuthGuard(HydrationPage))({})}
                  />

                  <Route
                    path="/calories"
                    element={withSuspense(withAuthGuard(CaloriesPage))({})}
                  />

                  <Route
                    path="/calorie-stats"
                    element={withSuspense(withAuthGuard(CalorieStatsPage))({})}
                  />

                  <Route
                    path="/steps"
                    element={withSuspense(withAuthGuard(StepsPage))({})}
                  />

                  <Route
                    path="/steps-stats"
                    element={withSuspense(withAuthGuard(StepsStatsPage))({})}
                  />

                  {/* Workout Routes */}
                  <Route
                    path="/workout"
                    element={withSuspense(withAuthGuard(WorkoutPage))({})}
                  />

                  <Route
                    path="/workout-library"
                    element={withSuspense(withAuthGuard(WorkoutLibraryPage))({})}
                  />

                  <Route
                    path="/workout-detail/:id"
                    element={withSuspense(withAuthGuard(WorkoutDetailPage))({})}
                  />

                  <Route
                    path="/my-workouts"
                    element={withSuspense(withAuthGuard(MyWorkoutsPage))({})}
                  />

                  <Route
                    path="/workout-completion"
                    element={withSuspense(withAuthGuard(WorkoutCompletionPage))({})}
                  />

                  <Route
                    path="/nutrition"
                    element={withSuspense(withAuthGuard(NutritionPage))({})}
                  />

                  {/* Coaching Routes */}
                  <Route
                    path="/coach-onboarding"
                    element={withSuspense(withAuthGuard(CoachOnboardingPage))({})}
                  />

                  <Route
                    path="/coach-selection"
                    element={withSuspense(withAuthGuard(CoachSelectionPage))({})}
                  />

                  <Route
                    path="/coach-detail/:id"
                    element={withSuspense(withAuthGuard(CoachDetailPage))({})}
                  />

                  <Route
                    path="/coach-booking/:id"
                    element={withSuspense(withAuthGuard(CoachBookingPage))({})}
                  />

                  <Route
                    path="/coach-payment/:id"
                    element={withSuspense(withAuthGuard(CoachPaymentPage))({})}
                  />

                  <Route
                    path="/coach-messaging/:id"
                    element={withSuspense(withAuthGuard(CoachMessagingPage))({})}
                  />

                  <Route
                    path="/coach-rating/:id"
                    element={withSuspense(withAuthGuard(CoachRatingPage))({})}
                  />

                  {/* Profile Routes */}
                  <Route
                    path="/profile/setup"
                    element={withSuspense(withAuthGuard(ProfileSetupPage))({})}
                  />

                  <Route
                    path="/profile/score"
                    element={withSuspense(withAuthGuard(ProfileScorePage))({})}
                  />

                  <Route
                    path="/profile/settings"
                    element={withSuspense(withAuthGuard(ProfileSettingsPage))({})}
                  />

                  <Route
                    path="/profile/account-settings"
                    element={withSuspense(withAuthGuard(AccountSettingsPage))({})}
                  />

                  <Route
                    path="/profile/personal-info"
                    element={withSuspense(withAuthGuard(PersonalInfoPage))({})}
                  />

                  <Route
                    path="/profile/notification-settings"
                    element={withSuspense(withAuthGuard(NotificationSettingsPage))({})}
                  />

                  <Route
                    path="/profile/security-settings"
                    element={withSuspense(withAuthGuard(SecuritySettingsPage))({})}
                  />

                  <Route
                    path="/profile/about-us"
                    element={withSuspense(withAuthGuard(AboutUsPage))({})}
                  />

                  <Route
                    path="/profile/help-center"
                    element={withSuspense(withAuthGuard(HelpCenterPage))({})}
                  />

                  {/* Error and Utility Routes */}
                  <Route path="/error/maintenance" element={<MaintenanceScreen />} />
                  <Route path="/error/not-allowed" element={<NotAllowedScreen />} />
                  <Route path="/error/feature-locked" element={<FeatureLockedScreen />} />

                  <Route path="*" element={withSuspense(NotFound)({})} />
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthGuard } from "@/components/auth/AuthGuard";

// Import all page components
import SplashPage from "./pages/SplashPage";
import OnboardingPage from "./pages/OnboardingPage";
import ProfileSetupPage from "./pages/ProfileSetupPage";
import ProfileScorePage from "./pages/ProfileScorePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PasswordSentPage from "./pages/PasswordSentPage";
import AssessmentPage from "./pages/AssessmentPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

// Import Profile Settings pages
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import NotificationSettingsPage from "./pages/NotificationSettingsPage";
import SecuritySettingsPage from "./pages/SecuritySettingsPage";
import AboutUsPage from "./pages/AboutUsPage";
import HelpCenterPage from "./pages/HelpCenterPage";

// Import new navigation pages
import AnalyticsPage from "./pages/AnalyticsPage";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import NutritionPage from "./pages/NutritionPage";
import SearchPage from "./pages/SearchPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Default route redirects to splash */}
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
              <DashboardPage />
            </AuthGuard>
          } />

          <Route path="/search" element={
            <AuthGuard>
              <SearchPage />
            </AuthGuard>
          } />

          {/* Navigation pages */}
          <Route path="/analytics" element={
            <AuthGuard>
              <AnalyticsPage />
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

          {/* Profile Settings Routes */}
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

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

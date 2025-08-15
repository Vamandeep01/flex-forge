import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SplashPage from './pages/SplashPage';
import OnboardingPage from './pages/OnboardingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PasswordSentPage from './pages/PasswordSentPage';
import AssessmentPage from './pages/AssessmentPage';
import DashboardPage from './pages/DashboardPage';
import SandowScorePage from './pages/SandowScorePage';
import HeartRatePage from './pages/HeartRatePage';
import HeartRateStatsPage from './pages/HeartRateStatsPage';
import BMIIndexPage from './pages/BMIIndexPage';
import HydrationPage from './pages/HydrationPage';
import CaloriesPage from './pages/CaloriesPage';
import CalorieStatsPage from './pages/CalorieStatsPage';
import StepsPage from './pages/StepsPage';
import StepsStatsPage from './pages/StepsStatsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import NutritionPage from './pages/NutritionPage';
import SearchPage from './pages/SearchPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import ProfileSetupPage from './pages/ProfileSetupPage';
import ProfileScorePage from './pages/ProfileScorePage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import SecuritySettingsPage from './pages/SecuritySettingsPage';
import NotificationSettingsPage from './pages/NotificationSettingsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import AboutUsPage from './pages/AboutUsPage';
import AddWorkoutPage from './pages/AddWorkoutPage';
import WorkoutPage from './pages/WorkoutPage';
import WorkoutLibraryPage from './pages/WorkoutLibraryPage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import ExercisePlayerPage from './pages/ExercisePlayerPage';
import WorkoutCompletionPage from './pages/WorkoutCompletionPage';
import MyWorkoutsPage from './pages/MyWorkoutsPage';
import AIWorkoutSuggestionsPage from './pages/AIWorkoutSuggestionsPage';
import FormAnalysisPage from './pages/FormAnalysisPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/splash" element={<SplashPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password-sent" element={<PasswordSentPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Fitness Metrics Detail Pages */}
        <Route path="/sandow-score" element={<SandowScorePage />} />
        <Route path="/heart-rate" element={<HeartRatePage />} />
        <Route path="/heart-rate-stats" element={<HeartRateStatsPage />} />
        <Route path="/bmi-index" element={<BMIIndexPage />} />
        <Route path="/hydration" element={<HydrationPage />} />
        <Route path="/calories" element={<CaloriesPage />} />
        <Route path="/calorie-stats" element={<CalorieStatsPage />} />
        <Route path="/steps" element={<StepsPage />} />
        <Route path="/steps-stats" element={<StepsStatsPage />} />
        
        {/* Workout & Training Pages */}
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/workout-library" element={<WorkoutLibraryPage />} />
        <Route path="/workout-detail/:id" element={<WorkoutDetailPage />} />
        <Route path="/exercise-player/:id" element={<ExercisePlayerPage />} />
        <Route path="/workout-completion" element={<WorkoutCompletionPage />} />
        <Route path="/my-workouts" element={<MyWorkoutsPage />} />
        <Route path="/ai-workout-suggestions" element={<AIWorkoutSuggestionsPage />} />
        <Route path="/form-analysis" element={<FormAnalysisPage />} />
        
        {/* Other Pages */}
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile/settings" element={<ProfileSettingsPage />} />
        <Route path="/profile/setup" element={<ProfileSetupPage />} />
        <Route path="/profile/score" element={<ProfileScorePage />} />
        <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
        <Route path="/profile/account-settings" element={<AccountSettingsPage />} />
        <Route path="/profile/security-settings" element={<SecuritySettingsPage />} />
        <Route path="/profile/notification-settings" element={<NotificationSettingsPage />} />
        <Route path="/profile/help-center" element={<HelpCenterPage />} />
        <Route path="/profile/about-us" element={<AboutUsPage />} />
        <Route path="/add-workout" element={<AddWorkoutPage />} />
        
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

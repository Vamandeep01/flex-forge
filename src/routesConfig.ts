// src/routesConfig.ts
import { lazy } from "react";

// ===== Lazy imports =====
// Auth & Onboarding Pages
const SplashPage = lazy(() => import('./pages/SplashPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'));
const PasswordSentPage = lazy(() => import('./pages/PasswordSentPage'));

// Core App Pages
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfileSetupPage = lazy(() => import('./pages/ProfileSetupPage'));
const ProfileScorePage = lazy(() => import('./pages/ProfileScorePage'));
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'));

// Main Feature Pages
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage'));
const ActivityTrackerPage = lazy(() => import('./pages/ActivityTrackerPage'));

// Health & Fitness Pages
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

// Workout Pages
const WorkoutPage = lazy(() => import("./pages/WorkoutPage"));
const WorkoutLibraryPage = lazy(() => import("./pages/WorkoutLibraryPage"));
const WorkoutDetailPage = lazy(() => import("./pages/WorkoutDetailPage"));
const MyWorkoutsPage = lazy(() => import("./pages/MyWorkoutsPage"));
const WorkoutCompletionPage = lazy(() => import("./pages/WorkoutCompletionPage"));

// Coaching Pages
const CoachOnboardingPage = lazy(() => import("./pages/CoachOnboardingPage"));
const CoachSelectionPage = lazy(() => import("./pages/CoachSelectionPage"));
const CoachDetailPage = lazy(() => import("./pages/CoachDetailPage"));
const CoachBookingPage = lazy(() => import("./pages/CoachBookingPage"));
const CoachPaymentPage = lazy(() => import("./pages/CoachPaymentPage"));
const CoachMessagingPage = lazy(() => import("./pages/CoachMessagingPage"));
const CoachRatingPage = lazy(() => import("./pages/CoachRatingPage"));

// Profile & Settings Pages
const ProfileSettingsPage = lazy(() => import('./pages/ProfileSettingsPage'));
const AccountSettingsPage = lazy(() => import('./pages/AccountSettingsPage'));
const PersonalInfoPage = lazy(() => import('./pages/PersonalInfoPage'));
const NotificationSettingsPage = lazy(() => import('./pages/NotificationSettingsPage'));
const SecuritySettingsPage = lazy(() => import('./pages/SecuritySettingsPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'));

// Utility Pages
const NotFound = lazy(() => import('./pages/NotFound'));

// ===== Route Config =====
export interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
  auth?: boolean;          // should wrap with AuthGuard
  layout?: "mobile";       // should wrap with MobileLayout
  showBottomNav?: boolean; // if layout is mobile
}

export const routesConfig: RouteConfig[] = [
  { path: "/", component: SplashPage, auth: false },
  { path: "/splash", component: SplashPage, auth: false },
  { path: "/onboarding", component: OnboardingPage, auth: false },
  { path: "/signin", component: SignInPage, auth: false },
  { path: "/signup", component: SignUpPage, auth: false },
  { path: "/reset-password", component: ResetPasswordPage, auth: false },
  { path: "/password-sent", component: PasswordSentPage, auth: false },

  { path: "/profile-setup", component: ProfileSetupPage, auth: true },
  { path: "/profile-score", component: ProfileScorePage, auth: true },
  { path: "/assessment", component: AssessmentPage, auth: true },
  { path: "/dashboard", component: DashboardPage, auth: true, layout: "mobile", showBottomNav: true },
  { path: "/search", component: SearchPage, auth: true },
  { path: "/notifications", component: NotificationsPage, auth: true },
  { path: "/activity-tracker", component: ActivityTrackerPage, auth: true },
  { path: "/analytics", component: AnalyticsPage, auth: true, layout: "mobile", showBottomNav: true },

  { path: "/sandow-score", component: SandowScorePage, auth: true },
  { path: "/heart-rate", component: HeartRatePage, auth: true },
  { path: "/heart-rate-stats", component: HeartRateStatsPage, auth: true },
  { path: "/bmi-index", component: BMIIndexPage, auth: true },
  { path: "/hydration", component: HydrationPage, auth: true },
  { path: "/calories", component: CaloriesPage, auth: true },
  { path: "/calorie-stats", component: CalorieStatsPage, auth: true },
  { path: "/steps", component: StepsPage, auth: true },
  { path: "/steps-stats", component: StepsStatsPage, auth: true },

  { path: "/workout", component: WorkoutPage, auth: true },
  { path: "/workout-library", component: WorkoutLibraryPage, auth: true },
  { path: "/workout-detail/:id", component: WorkoutDetailPage, auth: true },
  { path: "/my-workouts", component: MyWorkoutsPage, auth: true },
  { path: "/workout-completion", component: WorkoutCompletionPage, auth: true },
  { path: "/nutrition", component: NutritionPage, auth: true },

  { path: "/coach-onboarding", component: CoachOnboardingPage, auth: true },
  { path: "/coach-selection", component: CoachSelectionPage, auth: true },
  { path: "/coach-detail/:id", component: CoachDetailPage, auth: true },
  { path: "/coach-booking/:id", component: CoachBookingPage, auth: true },
  { path: "/coach-payment/:id", component: CoachPaymentPage, auth: true },
  { path: "/coach-messaging/:id", component: CoachMessagingPage, auth: true },
  { path: "/coach-rating/:id", component: CoachRatingPage, auth: true },

  { path: "/profile/setup", component: ProfileSetupPage, auth: true },
  { path: "/profile/score", component: ProfileScorePage, auth: true },
  { path: "/profile/settings", component: ProfileSettingsPage, auth: true },
  { path: "/profile/account-settings", component: AccountSettingsPage, auth: true },
  { path: "/profile/personal-info", component: PersonalInfoPage, auth: true },
  { path: "/profile/notification-settings", component: NotificationSettingsPage, auth: true },
  { path: "/profile/security-settings", component: SecuritySettingsPage, auth: true },
  { path: "/profile/about-us", component: AboutUsPage, auth: true },
  { path: "/profile/help-center", component: HelpCenterPage, auth: true },

  // Error / Utility
  { path: "*", component: NotFound },
];

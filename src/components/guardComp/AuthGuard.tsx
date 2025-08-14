import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export const AuthGuard = ({ children, requireAuth = true }: AuthGuardProps) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const hasAssessmentCompleted = localStorage.getItem('hasAssessmentCompleted') === 'true';

  // If authentication is required but user is not logged in
  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // If user is logged in but hasn't completed onboarding
  // Allow access to assessment and profile setup pages, redirect others
  if (requireAuth && isLoggedIn && !hasAssessmentCompleted) {
    const allowedOnboardingPaths = ['/assessment', '/profile-setup', '/profile-score'];
    if (!allowedOnboardingPaths.includes(location.pathname)) {
      return <Navigate to="/assessment" replace />;
    }
  }

  // If authentication is not required but user is logged in, redirect to dashboard
  if (!requireAuth && isLoggedIn && hasAssessmentCompleted) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
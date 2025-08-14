
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
}

export const AuthGuard = ({ children, requireAuth = true }: AuthGuardProps) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const hasOnboarded = localStorage.getItem('hasOnboarded') === 'true';

  // If authentication is required but user is not logged in
  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // If user is logged in but hasn't completed onboarding
  if (requireAuth && isLoggedIn && !hasOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  // If authentication is not required but user is logged in, redirect to dashboard
  if (!requireAuth && isLoggedIn && hasOnboarded) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

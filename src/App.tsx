import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

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

import { routesConfig, RouteConfig } from './routesConfig';

// Loading Screen Component
const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center text-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
    <div className="text-lg font-medium">Loading...</div>
  </div>
);

// React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) =>
        error?.status >= 400 && error?.status < 500 ? false : failureCount < 3,
    },
  },
});

// Wrappers
const withSuspense = (Component: React.ComponentType<any>) => (props: any) =>
  <Suspense fallback={<LoadingScreen />}><Component {...props} /></Suspense>;

const withAuthGuard = (Component: React.ComponentType<any>, requireAuth = true) => (props: any) =>
  <AuthGuard requireAuth={requireAuth}><Component {...props} /></AuthGuard>;

const withMobileLayout = (Component: React.ComponentType<any>, showBottomNav = false) => (props: any) =>
  <MobileLayout showBottomNav={showBottomNav}><Component {...props} /></MobileLayout>;

export default function App() {
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
                  <Route path="/" element={<Navigate to="/splash" replace />} />

                  {routesConfig.map((route: RouteConfig) => {
                    let Component = route.component;

                    if (route.layout) {
                      Component = withMobileLayout(Component, route.showBottomNav);
                    }

                    Component = withSuspense(withAuthGuard(Component, route.auth ?? true));

                    return <Route key={route.path} path={route.path} element={<Component />} />;
                  })}

                  {/* Error routes */}
                  <Route path="/error/maintenance" element={<MaintenanceScreen />} />
                  <Route path="/error/not-allowed" element={<NotAllowedScreen />} />
                  <Route path="/error/feature-locked" element={<FeatureLockedScreen />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </NotificationProvider>
        </NetworkHandler>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

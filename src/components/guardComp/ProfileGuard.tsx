import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProfileGuardProps {
    children: ReactNode;
}

export const ProfileGuard = ({ children }: ProfileGuardProps) => {
    const location = useLocation();
    const [isProfileComplete, setIsProfileComplete] = useState<boolean | null>(null);

    useEffect(() => {
        // Check if user has completed profile setup
        // This would typically check against your backend/auth state
        const checkProfileCompletion = () => {
            // For now, checking localStorage - replace with your actual logic
            const profileCompleted = localStorage.getItem('profileCompleted') === 'true';
            setIsProfileComplete(profileCompleted);
        };

        checkProfileCompletion();
    }, []);

    // Show loading state while checking
    if (isProfileComplete === null) {
        return (
            <div className="min-h-screen bg-dark-primary flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-FlexForge-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // If profile is not complete, redirect to profile setup
    if (!isProfileComplete) {
        return <Navigate to="/profile-setup" state={{ from: location }} replace />;
    }

    // Profile is complete, render children
    return <>{children}</>;
};
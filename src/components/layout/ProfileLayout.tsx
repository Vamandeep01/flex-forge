
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileLayoutProps {
    children: ReactNode;
    title: string;
    showBackButton?: boolean;
    onBackClick?: () => void;
}

export const ProfileLayout = ({
    children,
    title,
    showBackButton = true,
    onBackClick
}: ProfileLayoutProps) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (onBackClick) {
            onBackClick();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Fixed Header */}
            <div className="sticky top-0 z-10 bg-black border-b border-dark-tertiary">
                <div className="flex items-center justify-between p-2">
                    {showBackButton ? (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleBackClick}
                            className="text-white hover:bg-dark-secondary"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                    ) : (
                        <div className="w-10" />
                    )}
                    <h1 className="text-xl font-semibold text-white">{title}</h1>
                    <div className="w-10" />
                </div>
            </div>

            {/* Scrollable Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
};

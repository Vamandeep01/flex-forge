
import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BaseErrorScreenProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline";
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  statusCode?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const BaseErrorScreen: React.FC<BaseErrorScreenProps> = ({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  statusCode,
  showBackButton = true,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-dark-primary flex flex-col">
      {/* Header with back button */}
      {showBackButton && (
        <div className="flex items-center p-4 pt-12">
          <button 
            onClick={onBack}
            className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Icon/Image */}
        <div className="w-48 h-48 mb-8 flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl font-bold mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
          {description}
        </p>

        {/* Status Code */}
        {statusCode && (
          <div className="mb-6">
            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium border border-red-500/30">
              Status Code: {statusCode}
            </span>
          </div>
        )}

        {/* Secondary Action Button */}
        {secondaryAction && (
          <div className="mb-4 w-full max-w-sm">
            <Button
              onClick={secondaryAction.onClick}
              variant="outline"
              className="w-full bg-transparent border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500"
            >
              {secondaryAction.label}
            </Button>
          </div>
        )}

        {/* Primary Action Button */}
        {primaryAction && (
          <div className="w-full max-w-sm">
            <Button
              onClick={primaryAction.onClick}
              variant={primaryAction.variant || "default"}
              className="w-full bg-gradient-orange text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              {primaryAction.label}
            </Button>
          </div>
        )}
      </div>

      {/* Bottom indicator */}
      <div className="pb-8 flex justify-center">
        <div className="w-32 h-1 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

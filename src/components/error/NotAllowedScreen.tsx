
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseErrorScreen } from './BaseErrorScreen';

export const NotAllowedScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-8 h-16 bg-gradient-to-t from-FlexForge-orange to-FlexForge-orange-light transform rotate-12"
            style={{ height: `${64 + i * 8}px` }}
          />
        ))}
      </div>
    </div>
  );

  const handleContactSupport = () => {
    navigate('/profile/help-center');
  };

  return (
    <BaseErrorScreen
      title="Not Allowed"
      description="Hey! You don't have permission."
      icon={icon}
      secondaryAction={{
        label: "Contact Support",
        onClick: handleContactSupport
      }}
      primaryAction={{
        label: "Take Me Home",
        onClick: () => navigate('/dashboard')
      }}
      onBack={() => navigate(-1)}
    />
  );
};

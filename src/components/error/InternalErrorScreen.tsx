
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseErrorScreen } from './BaseErrorScreen';

export const InternalErrorScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="w-16 h-16 bg-white/20 rounded backdrop-blur-sm flex items-center justify-center">
          <div className="w-8 h-8 bg-red-500 rounded"></div>
        </div>
      </div>
    </div>
  );

  const handleContactSupport = () => {
    navigate('/profile/help-center');
  };

  return (
    <BaseErrorScreen
      title="Internal Error"
      description="Whoops! Our server seems to error."
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

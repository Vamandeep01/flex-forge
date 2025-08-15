
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseErrorScreen } from './BaseErrorScreen';

export const MaintenanceScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 bg-dark-secondary rounded-full flex items-center justify-center relative">
        <div className="w-20 h-16 bg-white rounded-lg flex items-center justify-center">
          <div className="w-12 h-8 bg-gray-800 rounded-sm"></div>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-600 rounded transform rotate-45"></div>
      </div>
    </div>
  );

  const handleComeback = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <BaseErrorScreen
      title="Maintenance"
      description="We're undergoing maintenance :("
      icon={icon}
      secondaryAction={{
        label: "Come back in 8h 12m",
        onClick: handleComeback
      }}
      primaryAction={{
        label: "Take Me Home",
        onClick: () => navigate('/dashboard')
      }}
      onBack={() => navigate(-1)}
    />
  );
};

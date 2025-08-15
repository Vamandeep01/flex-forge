
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wifi } from 'lucide-react';
import { BaseErrorScreen } from './BaseErrorScreen';

export const NoInternetScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 bg-dark-secondary rounded-full flex items-center justify-center">
        <Wifi className="w-16 h-16 text-white" />
      </div>
    </div>
  );

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <BaseErrorScreen
      title="No Internet"
      description="It seems you don't have internet."
      icon={icon}
      secondaryAction={{
        label: "Refresh or try again!",
        onClick: handleRefresh
      }}
      primaryAction={{
        label: "Take Me Home",
        onClick: () => navigate('/dashboard')
      }}
      onBack={() => navigate(-1)}
    />
  );
};

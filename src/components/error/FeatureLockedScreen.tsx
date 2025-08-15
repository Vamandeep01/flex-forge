
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Crown } from 'lucide-react';
import { BaseErrorScreen } from './BaseErrorScreen';

export const FeatureLockedScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 bg-dark-secondary rounded-2xl flex items-center justify-center relative">
        <Lock className="w-16 h-16 text-white/60" />
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-FlexForge-orange rounded-full flex items-center justify-center">
          <Crown className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );

  const handleGoPro = () => {
    // Navigate to pro upgrade page or show upgrade modal
    navigate('/profile/account-settings');
  };

  return (
    <BaseErrorScreen
      title="Feature Locked"
      description="Unfortunately, this feature is only available for pro users. Go Pro, Now!"
      icon={icon}
      primaryAction={{
        label: "Go Pro, Now! ⭐",
        onClick: handleGoPro,
        variant: "default"
      }}
      onBack={() => navigate(-1)}
    />
  );
};

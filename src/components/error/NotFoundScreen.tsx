
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseErrorScreen } from './BaseErrorScreen';

export const NotFoundScreen: React.FC = () => {
  const navigate = useNavigate();

  const icon = (
    <img 
      src="/lovable-uploads/3adee1b2-f776-4923-924c-2bedd7053580.png" 
      alt="Not Found"
      className="w-full h-full object-contain"
    />
  );

  return (
    <BaseErrorScreen
      title="Not Found"
      description="Whoops! Coach S can't find this page :("
      icon={icon}
      statusCode="404"
      primaryAction={{
        label: "Take Me Home",
        onClick: () => navigate('/dashboard')
      }}
      onBack={() => navigate(-1)}
    />
  );
};

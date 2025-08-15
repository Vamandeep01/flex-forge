
import React from 'react';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { NoInternetScreen } from './NoInternetScreen';

interface NetworkHandlerProps {
  children: React.ReactNode;
}

export const NetworkHandler: React.FC<NetworkHandlerProps> = ({ children }) => {
  const isOnline = useNetworkStatus();

  if (!isOnline) {
    return <NoInternetScreen />;
  }

  return <>{children}</>;
};

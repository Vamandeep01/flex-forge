import React, { useState } from 'react';
import { Shield, Lock, Fingerprint, Eye, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ProfileLayout } from '../components/layout/ProfileLayout';

const SecuritySettingsPage = () => {
  const [securitySettings, setSecuritySettings] = useState({
    biometricAuth: true,
    twoFactorAuth: false,
    autoLock: true,
    loginAlerts: true
  });

  const securityItems = [
    {
      title: 'Change Password',
      subtitle: 'Update your account password',
      icon: Lock,
      hasToggle: false,
      action: 'navigate'
    },
    {
      title: 'Biometric Authentication',
      subtitle: 'Use fingerprint or face ID',
      icon: Fingerprint,
      hasToggle: true,
      toggleKey: 'biometricAuth'
    },
    {
      title: 'Two-Factor Authentication',
      subtitle: 'Add extra security to your account',
      icon: Shield,
      hasToggle: true,
      toggleKey: 'twoFactorAuth'
    },
    {
      title: 'Auto-Lock',
      subtitle: 'Lock app when inactive',
      icon: Eye,
      hasToggle: true,
      toggleKey: 'autoLock'
    },
    {
      title: 'Login Alerts',
      subtitle: 'Get notified of new logins',
      icon: Shield,
      hasToggle: true,
      toggleKey: 'loginAlerts'
    }
  ];

  const handleToggle = (key: string) => {
    setSecuritySettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <ProfileLayout title="Security">
      {/* Security Status */}
      <div className="p-4">
        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-green-500 font-medium">Account Secure</p>
              <p className="text-green-400/70 text-sm">Your account is well protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="p-4 space-y-2">
        {securityItems.map((item, index) => (
          <div
            key={index}
            className="bg-dark-secondary rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center">
                <item.icon className="h-5 w-5 text-FlexForge-orange" />
              </div>
              <div>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-white/60 text-sm">{item.subtitle}</p>
              </div>
            </div>
            {item.hasToggle && item.toggleKey ? (
              <Switch
                checked={securitySettings[item.toggleKey as keyof typeof securitySettings]}
                onCheckedChange={() => handleToggle(item.toggleKey!)}
              />
            ) : (
              <ChevronRight className="h-5 w-5 text-white/40" />
            )}
          </div>
        ))}
      </div>

      {/* Security Tips */}
      <div className="p-4 mt-6">
        <h3 className="text-white font-semibold mb-4">Security Tips</h3>
        <div className="bg-dark-secondary rounded-xl p-4 space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-FlexForge-orange rounded-full mt-2" />
            <p className="text-white/80 text-sm">Use a strong, unique password</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-FlexForge-orange rounded-full mt-2" />
            <p className="text-white/80 text-sm">Enable two-factor authentication</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-FlexForge-orange rounded-full mt-2" />
            <p className="text-white/80 text-sm">Keep your app updated</p>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default SecuritySettingsPage;
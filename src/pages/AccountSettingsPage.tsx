
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const AccountSettingsPage = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    locationAccess: true,
    dataSync: true
  });

  const accountItems = [
    {
      id: 'profile',
      title: 'Profile Information',
      subtitle: 'Name, email, phone number',
      icon: User,
      hasToggle: false
    },
    {
      id: 'email',
      title: 'Email Preferences',
      subtitle: 'Manage email notifications',
      icon: Mail,
      hasToggle: true,
      toggleKey: 'emailNotifications'
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      subtitle: 'Control your data and privacy',
      icon: MapPin,
      hasToggle: true,
      toggleKey: 'locationAccess'
    },
    {
      id: 'sync',
      title: 'Data Synchronization',
      subtitle: 'Sync across devices',
      icon: Calendar,
      hasToggle: true,
      toggleKey: 'dataSync'
    }
  ];

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-dark-primary border-b border-dark-tertiary">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Account Settings</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Settings List */}
      <div className="p-4 space-y-2">
        {accountItems.map((item) => (
          <div
            key={item.id}
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
                checked={settings[item.toggleKey as keyof typeof settings]}
                onCheckedChange={() => handleToggle(item.toggleKey!)}
              />
            ) : (
              <ChevronRight className="h-5 w-5 text-white/40" />
            )}
          </div>
        ))}
      </div>

      {/* Account Actions */}
      <div className="p-4 mt-8 space-y-3">
        <Button
          variant="outline"
          className="w-full border-FlexForge-orange text-FlexForge-orange hover:bg-FlexForge-orange hover:text-white"
        >
          Export Data
        </Button>
        <Button
          variant="outline"
          className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
        >
          Deactivate Account
        </Button>
        <Button
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default AccountSettingsPage;

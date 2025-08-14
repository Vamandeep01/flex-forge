
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Mail, MessageSquare, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const NotificationSettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: true,
    workoutReminders: true,
    progressUpdates: false,
    socialUpdates: true,
    appUpdates: true
  });

  const notificationCategories = [
    {
      title: 'Push Notifications',
      subtitle: 'Receive notifications on your device',
      icon: Bell,
      key: 'pushNotifications'
    },
    {
      title: 'Email Notifications',
      subtitle: 'Get updates via email',
      icon: Mail,
      key: 'emailNotifications'
    },
    {
      title: 'SMS Notifications',
      subtitle: 'Receive text messages',
      icon: MessageSquare,
      key: 'smsNotifications'
    },
    {
      title: 'Workout Reminders',
      subtitle: 'Daily workout reminders',
      icon: Calendar,
      key: 'workoutReminders'
    },
    {
      title: 'Progress Updates',
      subtitle: 'Weekly progress reports',
      icon: Zap,
      key: 'progressUpdates'
    },
    {
      title: 'Social Updates',
      subtitle: 'Friend activities and achievements',
      icon: Bell,
      key: 'socialUpdates'
    },
    {
      title: 'App Updates',
      subtitle: 'New features and updates',
      icon: Bell,
      key: 'appUpdates'
    }
  ];

  const handleToggle = (key: string) => {
    setNotifications(prev => ({
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
          <h1 className="text-xl font-semibold text-white">Notifications</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Notification Categories */}
      <div className="p-4 space-y-2">
        {notificationCategories.map((category) => (
          <div
            key={category.key}
            className="bg-dark-secondary rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center">
                <category.icon className="h-5 w-5 text-FlexForge-orange" />
              </div>
              <div>
                <p className="text-white font-medium">{category.title}</p>
                <p className="text-white/60 text-sm">{category.subtitle}</p>
              </div>
            </div>
            <Switch
              checked={notifications[category.key as keyof typeof notifications]}
              onCheckedChange={() => handleToggle(category.key)}
            />
          </div>
        ))}
      </div>

      {/* Notification Schedule */}
      <div className="p-4 mt-6">
        <h3 className="text-white font-semibold mb-4">Quiet Hours</h3>
        <div className="bg-dark-secondary rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white">Enable Quiet Hours</span>
            <Switch defaultChecked={false} />
          </div>
          <div className="grid grid-cols-2 gap-4 opacity-50">
            <div>
              <label className="text-white/70 text-sm">From</label>
              <p className="text-white">22:00</p>
            </div>
            <div>
              <label className="text-white/70 text-sm">To</label>
              <p className="text-white">07:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsPage;

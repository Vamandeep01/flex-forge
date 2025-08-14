import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, User, Shield, Bell, Info, HelpCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileLayout } from '../components/layout/ProfileLayout';

const ProfileSettingsPage = () => {
  const navigate = useNavigate();

  const settingsItems = [
    {
      id: 'account',
      title: 'Account Settings',
      subtitle: 'Manage your account preferences',
      icon: Settings,
      route: '/profile/account-settings'
    },
    {
      id: 'personal',
      title: 'Personal Info',
      subtitle: 'Update your personal details',
      icon: User,
      route: '/profile/personal-info'
    },
    {
      id: 'notifications',
      title: 'Notification Settings',
      subtitle: 'Configure your notifications',
      icon: Bell,
      route: '/profile/notification-settings'
    },
    {
      id: 'security',
      title: 'Security Settings',
      subtitle: 'Manage security and privacy',
      icon: Shield,
      route: '/profile/security-settings'
    },
    {
      id: 'about',
      title: 'About Us',
      subtitle: 'Learn more about our app',
      icon: Info,
      route: '/profile/about-us'
    },
    {
      id: 'help',
      title: 'Help Center',
      subtitle: 'Get help and support',
      icon: HelpCircle,
      route: '/profile/help-center'
    }
  ];

  return (
    <ProfileLayout
      title="Profile Settings"
      onBackClick={() => navigate('/dashboard')}
    >
      {/* Profile Header */}
      <div className="p-6 border-b border-dark-tertiary">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">John Doe</h2>
            <p className="text-white/70">Premium Member</p>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="p-4 space-y-2">
        {settingsItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.route)}
            className="w-full bg-dark-secondary rounded-xl p-4 flex items-center justify-between hover:bg-dark-tertiary transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center">
                <item.icon className="h-5 w-5 text-FlexForge-orange" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-white/60 text-sm">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-white/40" />
          </button>
        ))}
      </div>

      {/* Sign Out Button */}
      <div className="p-4 mt-8">
        <Button
          variant="outline"
          className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          onClick={() => {
            // Handle sign out
            localStorage.removeItem('profileCompleted');
            navigate('/signin');
          }}
        >
          Sign Out
        </Button>
      </div>
    </ProfileLayout>
  );
};

export default ProfileSettingsPage;
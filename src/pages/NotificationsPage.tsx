
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, MessageSquare, TrendingUp, Footprints, Droplets, Apple, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileLayout } from '@/components/layout/MobileLayout';

interface Notification {
  id: string;
  type: 'chatbot' | 'score' | 'steps' | 'hydration' | 'nutrition' | 'workout' | 'schedule';
  title: string;
  description: string;
  value: string;
  progress?: number;
  time: string;
  isRead: boolean;
  actionText: string;
  bgColor: string;
  textColor: string;
  icon: any;
}

const NotificationsPage = () => {
  const navigate = useNavigate();

  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'chatbot',
      title: '187+',
      description: 'Fitness Chatbot Messages',
      value: 'You have new messages from coach. Time to check them out!',
      time: '2 hours ago',
      isRead: false,
      actionText: 'See Fitness Chatbot',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      icon: MessageSquare
    },
    {
      id: '2',
      type: 'score',
      title: '+8.5',
      description: 'Sandow Score Increased',
      value: "You're now healthier than average person. Keep pushing forward!",
      time: '4 hours ago',
      isRead: false,
      actionText: 'See My Score',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      icon: TrendingUp
    },
    {
      id: '3',
      type: 'steps',
      title: '+1,121',
      description: 'Steps Taken',
      value: 'You got 658 steps to complete your daily goal. Great work!',
      time: '6 hours ago',
      isRead: true,
      actionText: 'See Steps Taken',
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
      textColor: 'text-white',
      icon: Footprints
    },
    {
      id: '4',
      type: 'hydration',
      title: '+250ml',
      description: 'Water Intake',
      value: 'You still need 570ml of water for today. Don\'t forget to drink it!',
      progress: 45,
      time: '8 hours ago',
      isRead: true,
      actionText: 'See Hydration',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
      textColor: 'text-white',
      icon: Droplets
    },
    {
      id: '5',
      type: 'nutrition',
      title: '+128kcal',
      description: 'Nutrition Intake',
      value: 'You need to eat 1,250kcal for today',
      time: '10 hours ago',
      isRead: true,
      actionText: 'See Nutrition',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
      textColor: 'text-white',
      icon: Apple
    },
    {
      id: '6',
      type: 'workout',
      title: '-502kcal',
      description: 'Workout Completed',
      value: 'You completed the Chest Workout training. And burned 502kcal total.',
      time: '12 hours ago',
      isRead: true,
      actionText: 'See Workout',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-700',
      textColor: 'text-white',
      icon: Zap
    },
    {
      id: '7',
      type: 'schedule',
      title: 'Jogging',
      description: 'At 05:00 AM',
      value: 'You have a jogging schedule with Coach Farnese. Don\'t forget to do it! 🏃‍♀️',
      time: '1 day ago',
      isRead: true,
      actionText: 'See Activities',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
      textColor: 'text-white',
      icon: Clock
    }
  ]);

  const todayNotifications = notifications.filter(n =>
    n.time.includes('hours ago') || n.time.includes('minutes ago')
  );

  const pastNotifications = notifications.filter(n =>
    n.time.includes('day ago') || n.time.includes('days ago') || n.time.includes('week')
  );

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const NotificationCard = ({ notification }: { notification: Notification }) => {
    const Icon = notification.icon;

    return (
      <div className={`${notification.bgColor} rounded-3xl p-6 relative overflow-hidden`}>
        {/* Background decoration for some cards */}
        {notification.type === 'steps' && (
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <img
              src="/lovable-uploads/a0f40d5c-8e16-4eb3-b19e-639bea78ac2a.png"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}

        <div className="flex flex-col h-full justify-between min-h-[200px]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon className={`w-5 h-5 ${notification.textColor}`} />
              {!notification.isRead && (
                <div className="w-2 h-2 bg-FlexForge-orange rounded-full"></div>
              )}
            </div>

            <h2 className={`text-4xl font-bold ${notification.textColor} mb-1`}>
              {notification.title}
            </h2>
            <p className={`text-lg font-medium ${notification.textColor} mb-3`}>
              {notification.description}
            </p>
            <p className={`text-sm ${notification.textColor} opacity-80 leading-relaxed`}>
              {notification.value}
            </p>

            {notification.progress && (
              <div className="mt-4">
                <div className={`w-full bg-black/20 rounded-full h-1.5`}>
                  <div
                    className="bg-white h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${notification.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <Button
            variant="secondary"
            size="sm"
            className={`mt-4 self-start ${notification.type === 'chatbot' || notification.type === 'score'
                ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                : 'bg-black/20 text-white border-transparent hover:bg-black/30'
              }`}
            onClick={() => {
              // Handle navigation based on notification type
              switch (notification.type) {
                case 'chatbot':
                  // Navigate to chatbot
                  break;
                case 'score':
                  // Navigate to score page
                  break;
                case 'steps':
                  navigate('/analytics');
                  break;
                case 'hydration':
                  navigate('/nutrition');
                  break;
                case 'nutrition':
                  navigate('/nutrition');
                  break;
                case 'workout':
                  navigate('/workout');
                  break;
                case 'schedule':
                  navigate('/dashboard');
                  break;
              }
            }}
          >
            {notification.actionText}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <MobileLayout showBottomNav={false}>
      <div className="min-h-screen bg-dark-primary">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-dark-primary/95 backdrop-blur-sm border-b border-dark-tertiary">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-white hover:bg-dark-secondary"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-semibold text-white">Notifications</h1>
              {unreadCount > 0 && (
                <span className="text-xs text-FlexForge-orange">
                  {unreadCount} unread
                </span>
              )}
            </div>
            <div className="w-10" />
          </div>
        </div>

        <div className="p-4">
          {/* Today Section */}
          {todayNotifications.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-lg">Today</h2>
                <div className="bg-dark-secondary px-3 py-1 rounded-full">
                  <span className="text-white/60 text-sm">{todayNotifications.length}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {todayNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          )}

          {/* Past Section */}
          {pastNotifications.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-lg">Past</h2>
                <div className="bg-dark-secondary px-3 py-1 rounded-full">
                  <span className="text-white/60 text-sm">{pastNotifications.length}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {pastNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            </div>
          )}

          {notifications.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <Bell className="w-16 h-16 text-white/30 mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">No notifications</h3>
              <p className="text-white/60">You're all caught up! Check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default NotificationsPage;

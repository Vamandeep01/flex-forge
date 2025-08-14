
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MessageCircle, Book, Video, Phone, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HelpCenterPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: 'Getting Started',
      subtitle: 'Basic setup and first steps',
      icon: Book,
      articles: 12
    },
    {
      title: 'Workout Plans',
      subtitle: 'Creating and following workouts',
      icon: HelpCircle,
      articles: 8
    },
    {
      title: 'Nutrition Tracking',
      subtitle: 'Food logging and meal plans',
      icon: HelpCircle,
      articles: 15
    },
    {
      title: 'Progress Tracking',
      subtitle: 'Monitoring your fitness journey',
      icon: HelpCircle,
      articles: 6
    },
    {
      title: 'Account & Settings',
      subtitle: 'Profile and app configuration',
      icon: HelpCircle,
      articles: 10
    },
    {
      title: 'Troubleshooting',
      subtitle: 'Common issues and solutions',
      icon: HelpCircle,
      articles: 7
    }
  ];

  const quickActions = [
    {
      title: 'Live Chat',
      subtitle: 'Chat with our support team',
      icon: MessageCircle,
      available: true
    },
    {
      title: 'Video Tutorials',
      subtitle: 'Watch step-by-step guides',
      icon: Video,
      available: true
    },
    {
      title: 'Phone Support',
      subtitle: 'Call us for immediate help',
      icon: Phone,
      available: false,
      hours: '9 AM - 6 PM EST'
    }
  ];

  const popularArticles = [
    'How to create your first workout plan',
    'Setting up your fitness goals',
    'Tracking your daily calories',
    'Using the progress tracker',
    'Connecting wearable devices'
  ];

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
          <h1 className="text-xl font-semibold text-white">Help Center</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
          <Input
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Get Help Now</h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`w-full bg-dark-secondary rounded-xl p-4 flex items-center justify-between hover:bg-dark-tertiary transition-colors ${!action.available ? 'opacity-60' : ''}`}
              disabled={!action.available}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center">
                  <action.icon className="h-5 w-5 text-FlexForge-orange" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{action.title}</p>
                  <p className="text-white/60 text-sm">
                    {action.available ? action.subtitle : `Available ${action.hours}`}
                  </p>
                </div>
              </div>
              {action.available && <ChevronRight className="h-5 w-5 text-white/40" />}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Popular Articles</h3>
        <div className="bg-dark-secondary rounded-xl p-4 space-y-3">
          {popularArticles.map((article, index) => (
            <button
              key={index}
              className="w-full text-left flex items-center justify-between py-2 hover:bg-dark-tertiary rounded-lg px-2 transition-colors"
            >
              <span className="text-white/80">{article}</span>
              <ChevronRight className="h-4 w-4 text-white/40" />
            </button>
          ))}
        </div>
      </div>

      {/* Help Categories */}
      <div className="px-4">
        <h3 className="text-lg font-semibold text-white mb-3">Browse by Category</h3>
        <div className="space-y-2">
          {helpCategories.map((category, index) => (
            <button
              key={index}
              className="w-full bg-dark-secondary rounded-xl p-4 flex items-center justify-between hover:bg-dark-tertiary transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-FlexForge-orange" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{category.title}</p>
                  <p className="text-white/60 text-sm">
                    {category.subtitle} • {category.articles} articles
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-white/40" />
            </button>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="p-4 mt-8">
        <div className="bg-FlexForge-orange/10 border border-FlexForge-orange/30 rounded-xl p-4 text-center">
          <p className="text-white font-medium mb-2">Still need help?</p>
          <p className="text-white/70 text-sm mb-4">
            Our support team is here to help you with any questions
          </p>
          <Button className="bg-gradient-orange text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;

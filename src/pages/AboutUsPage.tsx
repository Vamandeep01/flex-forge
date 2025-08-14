
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Target, Award, Mail, Globe, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Personalized Goals',
      description: 'Custom fitness plans tailored to your needs'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with like-minded fitness enthusiasts'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Professional trainers and nutritionists'
    }
  ];

  const socialLinks = [
    { icon: Globe, label: 'Website', url: 'https://flexforge.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/flexforge' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/flexforge' },
    { icon: Mail, label: 'Email', url: 'mailto:hello@flexforge.com' }
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
          <h1 className="text-xl font-semibold text-white">About Us</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* App Logo & Intro */}
      <div className="p-6 text-center border-b border-dark-tertiary">
        <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Heart className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">FlexForge Fitness</h2>
        <p className="text-white/70 text-sm">Version 2.1.0</p>
      </div>

      {/* Mission Statement */}
      <div className="p-6 border-b border-dark-tertiary">
        <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
        <p className="text-white/80 leading-relaxed">
          FlexForge Fitness is dedicated to empowering individuals on their fitness journey. 
          We believe that everyone deserves access to personalized, effective, and enjoyable 
          fitness solutions that fit their lifestyle.
        </p>
      </div>

      {/* Key Features */}
      <div className="p-6 border-b border-dark-tertiary">
        <h3 className="text-lg font-semibold text-white mb-4">What We Offer</h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-FlexForge-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-5 w-5 text-FlexForge-orange" />
              </div>
              <div>
                <p className="text-white font-medium">{feature.title}</p>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Social */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((link, index) => (
            <button
              key={index}
              className="bg-dark-secondary rounded-xl p-4 flex items-center space-x-3 hover:bg-dark-tertiary transition-colors"
              onClick={() => window.open(link.url, '_blank')}
            >
              <link.icon className="h-5 w-5 text-FlexForge-orange" />
              <span className="text-white font-medium">{link.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="p-6 pt-0 space-y-3">
        <Button
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-dark-secondary"
        >
          Privacy Policy
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-dark-secondary"
        >
          Terms of Service
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-white/80 hover:text-white hover:bg-dark-secondary"
        >
          End User License Agreement
        </Button>
      </div>

      {/* Copyright */}
      <div className="p-6 pt-0 text-center">
        <p className="text-white/50 text-xs">
          © 2024 FlexForge Fitness. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

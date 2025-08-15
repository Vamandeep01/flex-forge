import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bell,
  Calendar,
  Clock,
  Flame,
  MoreVertical,
  Play,
  Users
} from "lucide-react";
import React from 'react';
import { Link } from "react-router-dom";
import ActivitiesWidget from "../dashboardComp/ActivitiesWidget";
import DietNutrition from "../dashboardComp/DietNutrition";
import FitnessMetrics from "../dashboardComp/FitnessMetrics";


// Date Header
const DateHeader: React.FC = () => {
  return (
    <div className="px-4 py-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-white/70 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
        <Link to={'/notifications'} className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center relative">
          <Bell className="w-4 h-4 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-md"></div>
        </Link>
      </div>
    </div>
  );
};

// User Profile Header
const UserProfileHeader: React.FC = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8a351f5-d609-4ccc-b199-29b466084bd7/dfjz5j6-b06338e1-8b78-4592-a53b-f01757b90802.png/v1/fill/w_674,h_1066,q_80,strp/bjarnson_73_by_jaxzonmapiele_dfjz5j6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NiIsInBhdGgiOiJcL2ZcL2Q4YTM1MWY1LWQ2MDktNGNjYy1iMTk5LTI5YjQ2NjA4NGJkN1wvZGZqejVqNi1iMDYzMzhlMS04Yjc4LTQ1OTItYTUzYi1mMDE3NTdiOTA4MDIucG5nIiwid2lkdGgiOiI8PTY3NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.It6jKdiHBAVDbDtar43z4tizOG_YbT00fjLLBZA2L5A"
            alt="Profile"
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h1 className="text-white text-xl font-bold">Hello, Kasim!</h1>
            <div className="flex items-center mt-1">
              <div className="flex items-center py-0.5">
                <span className="text-white text-xs font-medium">88% Healthy</span>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/profile/settings'}>
          <ArrowRight className="w-5 h-5 text-white/60" />
        </Link>
      </div>
    </div>
  );
};


// Workouts Section
const WorkoutsSection: React.FC = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-white text-lg font-semibold">Workouts</h2>
          <span className="bg-dark-tertiary text-white/60 text-xs px-2 py-1 rounded-full font-medium">(25)</span>
        </div>
        <MoreVertical className="w-5 h-5 text-white/60" />
      </div>

      <Card className="bg-dark-secondary border-dark-tertiary rounded-3xl overflow-hidden">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZw5lVvZoEdwMZVmRUv_mx-_fEBMrrray1kg&s"
            alt="Upper Body Workout"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

          {/* Top Stats */}
          <div className="absolute top-4 left-4 flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">25min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">412kcal</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-3 left-3 right-2">
            <h3 className="text-white text-lg font-bold">Upper Strength 2</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 my-1">
                <span className="text-white/80 text-sm">8 Series Workout</span>
                <span className="text-white text-xs px-2 py-1 rounded-md bg-white/20 font-medium">Intense</span>
              </div>
            </div>
          </div>

          <Button className="absolute right-3 bottom-3 bg-FlexForge-orange hover:bg-FlexForge-orange-dark rounded-2xl w-12 h-12 p-0">
            <Play className="w-5 h-5 text-white fill-white" />
          </Button>
        </div>
      </Card>
    </div>
  );
};


// Virtual AI Coach
const VirtualAICoach: React.FC = () => {
  return (
    <div className="px-4 py-2">
      <Card className="bg-gradient-to-br from-FlexForge-orange via-FlexForge-orange to-FlexForge-orange-dark rounded-2xl p-4 overflow-hidden relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">GPT-5</span>
              <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">2M LLMs</span>
            </div>
            <div className="text-white text-3xl font-bold mb-1">1,879+</div>
            <div className="text-white/90 text-sm">AI Conversations</div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=120&fit=crop"
              alt="AI Coach"
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <Button className="absolute -bottom-2 -right-2 bg-white text-FlexForge-orange rounded-full w-8 h-8 p-0">
              <Users className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      </Card>
    </div>
  );
};

// Fitness Resources
const FitnessResources: React.FC = () => {
  const resources = [
    {
      title: "Stretching and Recovery Sessions",
      author: "Mai Sakurajima Sensei",
      rating: 4.1,
      views: "121K",
      duration: "251",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&h=80&fit=crop"
    },
    {
      title: "Advanced Core Strengthening Pilates",
      author: "Alan D. Turing",
      rating: 3.5,
      views: "18K",
      duration: "19",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop"
    },
    {
      title: "Full Body Resistance Band Workout",
      author: "Nagi Sone",
      rating: 4.2,
      views: "45K",
      duration: "32",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=80&h=80&fit=crop"
    }
  ];

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-semibold">Fitness Resources</h2>
        <span className="text-FlexForge-orange text-sm font-medium">See All</span>
      </div>

      <div className="space-y-3">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-dark-secondary border-dark-tertiary rounded-2xl p-4">
            <div className="flex items-center space-x-4">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm leading-tight mb-1">{resource.title}</h3>
                <p className="text-white/60 text-xs mb-2">{resource.author}</p>
                <div className="flex items-center space-x-3 text-white/60 text-xs">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>👁</span>
                    <span>{resource.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⏱</span>
                    <span>{resource.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};


const DashboardScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-black py-3">
      <DateHeader />
      <UserProfileHeader />

      <div className="space-y-6 pb-24">
        <FitnessMetrics />
        <WorkoutsSection />
        <DietNutrition />
        <ActivitiesWidget />
        <VirtualAICoach />
        <FitnessResources />
      </div>
    </div>
  );
};

export default DashboardScreen;
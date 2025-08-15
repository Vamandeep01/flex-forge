
import { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { NoActivitiesScreen } from '@/components/activity/NoActivitiesScreen';
import { AddNewActivityScreen } from '@/components/activity/AddNewActivityScreen';
import { ChooseRouteScreen } from '@/components/activity/ChooseRouteScreen';
import { RouteSelectionScreen } from '@/components/activity/RouteSelectionScreen';
import { LiveActivityScreen } from '@/components/activity/LiveActivityScreen';
import { ActivityCompletionScreen } from '@/components/activity/ActivityCompletionScreen';
import { MyActivitiesScreen } from '@/components/activity/MyActivitiesScreen';
import { ActivityStatsScreen } from '@/components/activity/ActivityStatsScreen';
import { AIActivitySuggestionsScreen } from '@/components/activity/AIActivitySuggestionsScreen';
import { ActivityDetailScreen } from '@/components/activity/ActivityDetailScreen';
import { WeightliftingSetupScreen } from '@/components/activity/WeightliftingSetupScreen';
import { LiveWeightliftingScreen } from '@/components/activity/LiveWeightliftingScreen';
import { WeightliftingCompletionScreen } from '@/components/activity/WeightliftingCompletionScreen';

export type ActivityType = 'jogging' | 'walking' | 'hiking' | 'running' | 'cycling' | 'rowing' | 'lifting' | 'other';

export interface Activity {
  id: string;
  type: ActivityType;
  name: string;
  duration: number;
  calories: number;
  distance?: number;
  steps?: number;
  date: Date;
}

export type ActivityScreen = 
  | 'noActivities'
  | 'addNew'
  | 'chooseRoute'
  | 'routeSelection'
  | 'liveTracking'
  | 'completion'
  | 'myActivities'
  | 'stats'
  | 'aiSuggestions'
  | 'detail'
  | 'weightliftingSetup'
  | 'liveWeightlifting'
  | 'weightliftingCompletion';

export default function ActivityTrackerPage() {
  const [currentScreen, setCurrentScreen] = useState<ActivityScreen>('noActivities');
  const [selectedActivity, setSelectedActivity] = useState<ActivityType | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivityDetail, setSelectedActivityDetail] = useState<Activity | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'noActivities':
        return <NoActivitiesScreen onAddActivity={() => setCurrentScreen('addNew')} />;
      case 'addNew':
        return (
          <AddNewActivityScreen
            onSelectActivity={(activity) => {
              setSelectedActivity(activity);
              if (activity === 'lifting') {
                setCurrentScreen('weightliftingSetup');
              } else {
                setCurrentScreen('chooseRoute');
              }
            }}
            onBack={() => setCurrentScreen('noActivities')}
          />
        );
      case 'chooseRoute':
        return (
          <ChooseRouteScreen
            activityType={selectedActivity!}
            onContinue={() => setCurrentScreen('routeSelection')}
            onBack={() => setCurrentScreen('addNew')}
          />
        );
      case 'routeSelection':
        return (
          <RouteSelectionScreen
            activityType={selectedActivity!}
            onStartActivity={() => setCurrentScreen('liveTracking')}
            onBack={() => setCurrentScreen('chooseRoute')}
          />
        );
      case 'liveTracking':
        return (
          <LiveActivityScreen
            activityType={selectedActivity!}
            onComplete={(activity) => {
              setActivities(prev => [...prev, activity]);
              setCurrentScreen('completion');
            }}
            onPause={() => {}}
          />
        );
      case 'completion':
        return (
          <ActivityCompletionScreen
            activity={activities[activities.length - 1]}
            onViewActivities={() => setCurrentScreen('myActivities')}
            onAddAnother={() => setCurrentScreen('addNew')}
          />
        );
      case 'myActivities':
        return (
          <MyActivitiesScreen
            activities={activities}
            onViewStats={() => setCurrentScreen('stats')}
            onViewActivity={(activity) => {
              setSelectedActivityDetail(activity);
              setCurrentScreen('detail');
            }}
            onBack={() => setCurrentScreen('noActivities')}
          />
        );
      case 'stats':
        return (
          <ActivityStatsScreen
            activities={activities}
            onBack={() => setCurrentScreen('myActivities')}
          />
        );
      case 'aiSuggestions':
        return (
          <AIActivitySuggestionsScreen
            onSelectSuggestion={(activity) => {
              setSelectedActivity(activity);
              setCurrentScreen('chooseRoute');
            }}
            onBack={() => setCurrentScreen('myActivities')}
          />
        );
      case 'detail':
        return (
          <ActivityDetailScreen
            activity={selectedActivityDetail!}
            onBack={() => setCurrentScreen('myActivities')}
            onStartSimilar={() => setCurrentScreen('addNew')}
          />
        );
      case 'weightliftingSetup':
        return (
          <WeightliftingSetupScreen
            onStartWorkout={() => setCurrentScreen('liveWeightlifting')}
            onBack={() => setCurrentScreen('addNew')}
          />
        );
      case 'liveWeightlifting':
        return (
          <LiveWeightliftingScreen
            onComplete={(activity) => {
              setActivities(prev => [...prev, activity]);
              setCurrentScreen('weightliftingCompletion');
            }}
          />
        );
      case 'weightliftingCompletion':
        return (
          <WeightliftingCompletionScreen
            activity={activities[activities.length - 1]}
            onViewActivities={() => setCurrentScreen('myActivities')}
            onAddAnother={() => setCurrentScreen('addNew')}
          />
        );
      default:
        return <NoActivitiesScreen onAddActivity={() => setCurrentScreen('addNew')} />;
    }
  };

  return (
    <MobileLayout showBottomNav={false}>
      {renderScreen()}
    </MobileLayout>
  );
}

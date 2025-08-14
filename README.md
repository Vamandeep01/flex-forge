# FlexForge Fitness PWA - Complete Development Guide

## 🎯 Project Overview

**FlexForge** is a comprehensive Progressive Web App (PWA) for fitness tracking, health monitoring, nutrition management, and AI-powered personal coaching. The app features a sleek dark theme with vibrant orange accents and provides a complete ecosystem for users to achieve their fitness goals.

### ⚡ Key Features
- **AI-Powered Virtual Coaching** with real-time chat support
- **Comprehensive Fitness Assessment** and personalized scoring
- **Activity Tracking** with GPS and real-time metrics
- **Smart Nutrition Management** with calorie tracking and meal planning
- **Community Platform** for fitness enthusiasts
- **Health Analytics** with detailed progress visualization
- **Workout Libraries** with extensive exercise databases
- **PWA Functionality** for offline access and native app experience
---

## 🎨 Design System & Brand Guidelines

### Color Palette
```css
/* Primary Colors */
--primary-orange: #FF6B35;    /* Main brand color */
--dark-bg-primary: #1a1a1a;   /* Main background */
--dark-bg-secondary: #2a2a2a; /* Card backgrounds */
--white-text: #FFFFFF;        /* Primary text */

/* Accent Colors */
--accent-blue: #4A90E2;       /* Water/hydration tracking */
--accent-green: #28a745;      /* Nutrition/success states */
--accent-red: #dc3545;        /* Alerts/calorie burn */
--accent-purple: #8E44AD;     /* Premium/special features */

/* Gradients */
--orange-gradient: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
--dark-gradient: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
```

### Typography
- **Primary Font**: Modern sans-serif (System fonts preferred for performance)
- **Base Font Size**: 16px minimum for mobile readability
- **Line Height**: 1.5 for optimal readability
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)

### UI Component Standards
- **Border Radius**: 12px for cards, 8px for buttons, 6px for small elements
- **Shadows**: Subtle dark theme appropriate shadows with low opacity
- **Touch Targets**: Minimum 44px for interactive elements
- **Spacing System**: 8px base unit (8px, 16px, 24px, 32px, 48px)

---

## 📱 Complete Application Flow

### Phase 1: User Onboarding Journey

#### 1.1 Splash Screen
```css
/* Key Requirements */
- Orange background (#FF6B35)
- White medical cross icon (centered)
- "FlexForge" branding
- "Your personal AI fitness coach" tagline
- Loading progress indicator
- Auto-redirect after 3 seconds
- Smooth fade transitions
```

#### 1.2 Welcome/Onboarding Screens (6 screens)
```
Screen Flow:
1. "Welcome To FlexForge UI Kit" → Get Started CTA
2. "Personalized Fitness Plans" → AI-driven customization
3. "Extensive Workout Libraries" → 100K+ exercises
4. "Health Metrics & Fitness Analytics" → Data visualization
5. "Nutrition & Diet Guidance" → Meal planning
6. "Virtual AI Coach Mentoring" → 24/7 support
```

**Technical Requirements:**
- Swipe navigation with touch gestures
- Progress dots indicator
- Skip option available
- Smooth animations between screens
- High-quality fitness imagery with dark overlays

#### 1.3 Authentication System

##### Sign In Screen
```html
<!-- Key Elements -->
- Dark background with gym equipment imagery
- Email input with validation
- Password input with show/hide toggle
- Orange "Sign In" button
- Social login options (Instagram, Facebook, LinkedIn)
- "Forgot Password" and "Sign Up" links
- Form validation with real-time feedback
```

##### Sign Up Screen
```html
<!-- Validation Requirements -->
- Email format validation
- Password strength indicator
- Confirm password matching
- Real-time error display
- Terms and conditions acceptance
- Progressive enhancement for accessibility
```

##### Password Reset Flow
```
Options Available:
1. 📧 Send via Email (Orange theme)
2. 🔐 Send via 2FA (Blue theme)
3. 🔗 Send via Google Auth (Purple theme)

Confirmation: Password sent with re-send option
```

### Phase 2: Profile Setup & Account Completion

#### 2.1 Avatar Selection
- Multiple avatar options with diverse representation
- Custom photo upload capability
- Image cropping and resizing
- Default avatars as fallback

#### 2.2 Personal Information Setup
```
Required Fields:
- Full Name
- Email Address (pre-filled)
- Date of Birth
- Gender Selection
- Height and Weight
- Activity Level
- Fitness Goals
```

#### 2.3 Security Setup
```
Security Features:
- Password strength validation
- OTP verification (4-digit code)
- Biometric authentication setup
- 2FA configuration
- Device registration
```

#### 2.4 FlexForge Score Generation
```
Score Ranges:
- 🔥 Excellent: 80-100 (Green theme)
- 💪 Good: 60-79 (Orange theme)
- 📊 Average: 40-59 (Blue theme)
- 🎯 Needs Improvement: 0-39 (Red theme)
```

### Phase 3: Comprehensive Fitness Assessment (18+ Questions)

```javascript
// Assessment Categories
const assessmentFlow = {
  personalInfo: ['fitness_level', 'gender', 'weight', 'age'],
  experience: ['previous_experience', 'self_rating', 'activity_days'],
  preferences: ['sleep_patterns', 'workout_focus', 'diet_preferences'],
  goals: ['specific_targets', 'timeline', 'motivation_factors'],
  analytics: ['body_analysis', 'sleep_analysis', 'ai_recommendations']
};
```

---

## 🏠 Core Application Sections

### 3.1 Home Dashboard & Smart Metrics

#### Main Dashboard Features
```
Widget Components:
- Personal greeting with user avatar
- Quick stats overview (progress circles)
- Activity timeline with graphs
- Strength tracking (Upper/Lower body)
- Nutrition overview (meals, calories)
- Social feed integration
- Quick action buttons
```

#### Smart Fitness Metrics Screens
```
Tracking Modules:
1. 📊 FlexForge Score: Detailed radar chart breakdown
2. ❤️ Heart Rate: Real-time monitoring (BPM tracking)
3. 📏 BMI Index: Progress visualization
4. 💧 Hydration: Daily water intake (bottle animation)
5. 🔥 Calorie Stats: Burn/intake with colorful charts
6. 😴 Sleep Tracking: Quality and duration metrics
7. 👟 Steps Counter: Daily step goals and trends
8. 🤖 AI Suggestions: Personalized recommendations
```

### 3.2 Activity Tracker System

#### Core Tracking Features
```javascript
// Activity Types
const activityTypes = [
  'running', 'jogging', 'walking', 'cycling',
  'weightlifting', 'yoga', 'swimming', 'boxing',
  'cardio', 'strength_training', 'flexibility'
];

// Tracking Capabilities
- GPS route mapping
- Real-time metrics (pace, distance, calories)
- Live workout timers
- Heart rate monitoring
- Rep and set counting
- Form analysis with AI
- Progress photography
- Session summaries
```

#### Workout Session Flow
```
1. Activity Selection → Choose workout type
2. Route Planning → GPS-based routing (outdoor activities)
3. Live Tracking → Real-time metrics display
4. Session Complete → Summary with achievements
5. Data Analysis → Progress trends and insights
```

### 3.3 Workout & Training Library

#### Exercise Database Structure
```javascript
const workoutLibrary = {
  categories: [
    'strength_training', 'cardio', 'flexibility',
    'sports_specific', 'rehabilitation', 'bodyweight'
  ],
  filters: {
    difficulty: ['beginner', 'intermediate', 'advanced'],
    duration: ['5-15min', '15-30min', '30-60min', '60min+'],
    equipment: ['no_equipment', 'dumbbells', 'barbell', 'machines'],
    muscle_groups: ['chest', 'back', 'legs', 'arms', 'core', 'full_body']
  }
};
```

#### Personalized Workout Features
- AI-generated custom routines
- Progressive overload tracking
- Form correction with visual guides
- Video demonstrations
- Alternative exercise suggestions
- Workout scheduling and reminders

### 3.4 Diet & Nutrition Management

#### Comprehensive Nutrition Tracking
```javascript
const nutritionFeatures = {
  calorieTracking: {
    dailyGoals: 'Customizable calorie targets',
    macroBreakdown: 'Protein, carbs, fats visualization',
    mealPlanning: 'Breakfast, lunch, dinner, snacks',
    foodDatabase: 'Extensive ingredient library'
  },
  smartFeatures: {
    barcodeScanning: 'Product recognition',
    photoAnalysis: 'AI food identification',
    recipeBuilder: 'Custom recipe creation',
    nutritionInsights: 'Deficiency detection'
  }
};
```

#### Meal Management System
- Recipe database with nutritional information
- Meal prep planning and scheduling
- Grocery list generation
- Dietary restriction filters
- Cultural cuisine options
- Portion size guidance

---

## 🤖 AI-Powered Features

### 4.1 Virtual Fitness AI Chatbot

#### Comprehensive Chat Interface
```javascript
const chatFeatures = {
  textChat: 'Natural language processing for fitness queries',
  voiceIntegration: 'Speech-to-text and text-to-speech',
  multiModal: 'Text, voice, and visual responses',
  contextAware: 'Remembers user history and preferences',
  realTimeCoaching: 'Live workout guidance and motivation',
  progressDiscussion: 'AI analysis of user achievements'
};
```

#### Chat Capabilities
- Workout form correction
- Nutrition advice and meal suggestions
- Motivation and goal setting
- Exercise modifications for injuries
- Progress celebration and encouragement
- 24/7 availability with context retention

### 4.2 Personalized Coaching System

#### AI Coach Features
```
Coach Specializations:
- 💪 Strength Training Specialist
- 🏃 Cardio and Endurance Expert
- 🧘 Flexibility and Mobility Coach
- 🥗 Nutrition and Diet Specialist
- 🏥 Rehabilitation and Injury Prevention
- 🎯 Goal-Specific Training Programs
```

#### Adaptive Program Management
- Programs adjust based on progress
- Injury accommodation and modifications
- Plateau breakthrough strategies
- Performance optimization recommendations
- Schedule flexibility and rearrangement

---

## 👥 Community & Social Features

### 5.1 Fitness Community Platform

#### Social Features
```javascript
const communityFeatures = {
  userProfiles: 'Fitness achievements and statistics',
  socialFeed: 'Workout updates and progress sharing',
  challenges: 'Group fitness challenges and competitions',
  forums: 'Topic-based discussion boards',
  mentorship: 'Experienced users guiding beginners',
  events: 'Local fitness meetups and virtual classes'
};
```

#### Content Management
- User-generated workout content
- Recipe sharing and rating system
- Progress photo sharing (optional)
- Achievement badges and recognition
- Expert articles and fitness tips

### 5.2 Resource Library

#### Educational Content
- Comprehensive fitness articles
- Nutrition science explanations
- Exercise technique tutorials
- Injury prevention guides
- Mental health and wellness content
- Evidence-based fitness research

---

## 🔧 Technical Implementation Requirements

### 6.1 Progressive Web App (PWA) Specifications

#### Core PWA Features
```json
// manifest.json requirements
{
  "name": "FlexForge Fitness Coach",
  "short_name": "FlexForge",
  "description": "Your personal AI fitness coach",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1a1a",
  "theme_color": "#FF6B35",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

#### Service Worker Requirements
```javascript
// Critical caching strategies
const cacheStrategies = {
  appShell: 'Cache First - Core app structure',
  userData: 'Network First - Real-time updates',
  workoutVideos: 'Cache First - Large media files',
  staticAssets: 'Stale While Revalidate - Images, CSS, JS',
  apiData: 'Network First with Cache Fallback'
};
```

### 6.2 Responsive Design Implementation

#### Mobile-First Breakpoint Strategy
```css
/* Mobile First Approach */
.container {
  /* Base styles for mobile (320px+) */
  padding: 16px;
  max-width: 100%;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Laptop (1024px+) */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 1024px;
  }
}

/* Desktop (1440px+) */
@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
```

#### Touch-Friendly Design Requirements
```css
/* Essential touch targets */
.button, .tap-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
  margin: 8px 0;
}

/* Gesture support */
.swipeable {
  touch-action: pan-x;
  user-select: none;
}

/* Accessibility focus indicators */
.interactive:focus {
  outline: 2px solid #FF6B35;
  outline-offset: 2px;
}
```

### 6.3 Performance Optimization Strategy

#### Critical Performance Metrics
```javascript
const performanceTargets = {
  firstContentfulPaint: '< 1.5s',
  largestContentfulPaint: '< 2.5s',
  timeToInteractive: '< 3.5s',
  cumulativeLayoutShift: '< 0.1',
  firstInputDelay: '< 100ms'
};
```

#### Loading Strategy Implementation
```javascript
// Skeleton loader for smooth UX
const SkeletonLoader = {
  showFor: 'minimum 500ms to avoid flashing',
  fadeIn: 'gradual content replacement',
  matchLayout: 'exact content dimensions',
  animation: 'subtle shimmer effect'
};

// Progressive image loading
const imageOptimization = {
  lazyLoading: 'Below-the-fold images',
  responsiveImages: 'Multiple size variants',
  webpSupport: 'Modern format with fallbacks',
  blurredPlaceholders: 'Low-quality image previews'
};
```

---

## 🛡️ Security & Privacy Implementation

### 7.1 Authentication & Authorization

#### Multi-Factor Security
```javascript
const securityLayers = {
  passwords: {
    minLength: 8,
    complexity: 'uppercase, lowercase, number, special char',
    strength: 'real-time strength indicator',
    hashing: 'bcrypt with salt rounds'
  },
  biometric: {
    fingerprint: 'WebAuthn API integration',
    faceID: 'Platform-specific implementation',
    fallback: 'PIN/password backup'
  },
  twoFactor: {
    authenticatorApp: 'TOTP support',
    smsBackup: 'Fallback verification',
    backupCodes: 'Recovery codes generation'
  }
};
```

### 7.2 Data Protection & Privacy

#### Privacy Compliance
```javascript
const privacyFeatures = {
  dataMinimization: 'Collect only necessary information',
  encryption: 'End-to-end encryption for sensitive data',
  anonymization: 'Remove personally identifiable information',
  userControl: 'Data export and deletion options',
  consent: 'Granular privacy preference management',
  auditLog: 'User data access tracking'
};
```

---

## 🧪 Error Handling & Edge Cases

### 8.1 Comprehensive Error States

#### User-Friendly Error Screens
```javascript
const errorStates = {
  notFound: {
    icon: 'magnifying_glass',
    message: 'Whoops! Coach S can\'t find this page :(',
    action: 'Take Me Home',
    statusCode: '404'
  },
  noInternet: {
    icon: 'wifi_off',
    message: 'It seems you don\'t have internet',
    action: 'Refresh or try again!',
    offlineMode: 'Show cached content'
  },
  serverError: {
    icon: 'server_error',
    message: 'Whoops! Our server seems to error',
    action: 'Contact Support',
    fallback: 'Offline functionality'
  },
  maintenance: {
    icon: 'hard_hat',
    message: 'We\'re undergoing maintenance :(',
    action: 'Come back in 15min',
    estimate: 'Real-time countdown'
  },
  accessDenied: {
    icon: 'traffic_cones',
    message: 'Hey! You don\'t have permission',
    action: 'Contact Support',
    upgrade: 'Feature unlock options'
  },
  featureLocked: {
    icon: 'padlock',
    message: 'This feature is only available for pro users',
    action: 'Go Pro, Now!',
    preview: 'Feature demonstration'
  }
};
```

### 8.2 Form Validation & Input Handling

#### Comprehensive Validation Strategy
```javascript
const validationRules = {
  email: {
    format: 'RFC 5322 compliant regex',
    domain: 'DNS validation (optional)',
    length: 'Maximum 254 characters',
    disposable: 'Block temporary email services'
  },
  password: {
    length: '8-128 characters',
    complexity: 'Mixed case, numbers, symbols',
    dictionary: 'Common password prevention',
    personal: 'No personal information inclusion'
  },
  fitness: {
    weight: '1-1000 lbs/kg with unit conversion',
    height: '2-9 feet or 50-300 cm',
    age: '13-120 years with parental consent',
    heartRate: '30-250 BPM with medical warnings'
  },
  uploads: {
    images: 'JPEG, PNG, WebP < 10MB',
    videos: 'MP4, WebM < 100MB',
    malware: 'Server-side scanning',
    dimensions: 'Minimum/maximum resolution limits'
  }
};
```

---

## 🚀 Development Roadmap & Implementation Phases

### Phase 1: Core Infrastructure (Weeks 1-3)
- [ ] PWA setup with service worker
- [ ] Responsive design system implementation
- [ ] Authentication system with security
- [ ] Basic user onboarding flow
- [ ] Database schema and API design

### Phase 2: Essential Features (Weeks 4-7)
- [ ] Fitness assessment and scoring system
- [ ] Basic activity tracking
- [ ] User profile and settings
- [ ] Core dashboard with metrics
- [ ] Workout library foundation

### Phase 3: Advanced Features (Weeks 8-12)
- [ ] AI chatbot integration
- [ ] Advanced nutrition tracking
- [ ] Community platform development
- [ ] Personalized coaching system
- [ ] GPS and real-time tracking

### Phase 4: Polish & Optimization (Weeks 13-16)
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Accessibility compliance
- [ ] Security audit and penetration testing
- [ ] Beta user feedback integration

---

## 📋 Quality Assurance Checklist

### Functional Testing
- [ ] All user flows work seamlessly
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox, Edge)
- [ ] Touch gestures work properly
- [ ] Offline functionality operates correctly
- [ ] Data synchronization works when back online

### Performance Testing
- [ ] Page load times meet targets
- [ ] Smooth animations at 60fps
- [ ] Memory usage remains optimal
- [ ] Battery usage is minimized
- [ ] Large dataset handling is efficient

### Security Testing
- [ ] Authentication cannot be bypassed
- [ ] User data is properly encrypted
- [ ] Input sanitization prevents XSS
- [ ] API endpoints are secured
- [ ] Rate limiting prevents abuse

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works completely
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible
- [ ] Alternative text provided for images

---

## 🎯 Success Metrics & KPIs

### User Engagement Metrics
```javascript
const successMetrics = {
  retention: {
    day1: '> 70%',
    day7: '> 40%',
    day30: '> 20%'
  },
  engagement: {
    sessionDuration: '> 8 minutes average',
    screensPerSession: '> 12 screens',
    weeklyActiveUsers: '> 60% of monthly users'
  },
  feature: {
    workoutCompletion: '> 85% of started workouts',
    chatbotUsage: '> 3 messages per session',
    communityParticipation: '> 25% monthly posting'
  }
};
```

---

## 📞 Support & Maintenance

### Help Center Implementation
- Comprehensive FAQ system
- Video tutorials for key features
- Live chat support integration
- Community-driven help forums
- Detailed troubleshooting guides
- Multi-language support preparation

### Continuous Improvement
- User feedback collection and analysis
- A/B testing for feature improvements
- Performance monitoring and optimization
- Security updates and vulnerability patching
- Regular feature updates based on user needs

---

## 🏁 Conclusion

This comprehensive guide provides the foundation for building a world-class fitness PWA that prioritizes user experience, performance, and accessibility. The modular approach allows for iterative development while maintaining consistency across all features.

**Remember**: Every implementation decision should prioritize mobile users first, ensure seamless offline functionality, and maintain the high-quality user experience that modern fitness enthusiasts expect.

### Key Development Principles to Follow:
1. **Mobile-First Always** - Design and code for mobile, then enhance
2. **Performance is Non-Negotiable** - Every feature must load fast and feel smooth
3. **Accessibility from Day One** - Build inclusive experiences for all users
4. **Security by Design** - Protect user data at every layer
5. **Progressive Enhancement** - Ensure core functionality works everywhere

Build something amazing! 💪🚀


### Search Screen UI Overview

1. Initial Search Screen
   The first screen features a clean layout with a vibrant orange header occupying the top section (approximately 3/4 width), while the lower part uses a sleek black background. It includes a prominent search bar at the top for user queries.

2. Category Tags
   Just below the search bar, horizontally scrollable category chips are displayed (e.g., *Workouts*, *Meals*, *Community*), allowing quick filtering options.

3. Search Suggestions
   As the user types in the search bar, real-time suggestions appear in a dropdown list, making it easier to select relevant terms.

4. No Results State
   If no matches are found, a dedicated “No Results” screen is shown, featuring an illustrated graphic and a friendly message prompting the user to try another keyword.

5. Search Results List
   When results are available, they appear in a list format with the following elements:

   * Icon representing the item type.
   * Title/Label of the result.
   * Colored badges (e.g., *Fitness*, *Workout*) for quick categorization.
   * Match Percentage to indicate relevance.

6. Filter Options
   A bottom drawer modal is used for advanced filtering. It includes:

   * Date Range Picker for narrowing results by date.
   * Search Limit Slider to control the number of results.
   * Category Selection with toggle buttons (e.g., *Workout*, *Meal*).
   * AI Suggestions Toggle for including AI-driven recommendations.
   * Apply Filter Button to update results.



### Notifications & Reminders UI Overview

1. Notifications List Screen

   * Displays all user notifications categorized under Today and Past sections.
   * Each notification includes:

     * Title (e.g., *Drink More Water!*)
     * Brief description
     * Icons for quick identification
     * Progress indicators for tasks (e.g., *Nutrition Update – 20% completed*).
   * Unread notifications are highlighted for better visibility.

2. Fitness Chatbot Notification

   * A detailed view showing the number of chatbot messages (e.g., *187+ Fitness Chatbot Messages*).
   * Includes an action button: “See Fitness Chatbot” for quick access.

3. Score Update Notification

   * Highlights improvement in Sandow Score (e.g., *+8.5 Sandow Score Increased*).
   * Includes motivational text and an action button “See More”.

4. Steps Tracking Reminder

   * Displays the number of steps taken and remaining steps to meet the daily goal (e.g., *+1,121 Steps Taken*).
   * Action button: “See Steps Taken” to review progress.

5. Hydration Reminder

   * Encourages water intake by showing the remaining goal (e.g., *+250ml Water Intake*).
   * Includes a progress bar and button: “See Hydration”.

6. Nutrition Update Reminder

   * Shows nutrition intake progress (e.g., *+128kcal Nutrition Intake*).
   * Displays macros like protein and carbs along with an action button: “See Nutrition”.

7. Workout Completion Notification

   * Indicates workout sessions completed and calories burned (e.g., *-502kcal Workout Completed*).
   * Action button: “See Workout” for details.

8. Jogging Schedule Reminder

   * Displays upcoming or scheduled jogging activity with time and coach details (e.g., *Jogging at 05:00 AM with Coach Farnese*).
   * Action button: “See Activities”.


### Activity Tracker UI Overview

1. No Activities Screen

   * Displays an empty state with a motivating visual when the user has no logged activities.
   * Includes a prominent “Add New Activity” button to start tracking.

2. Add New Activity Screen

   * A grid layout showcasing different activity options:

     * Jogging, Walking, Hiking, Running, Cycling, Rowing, Lifting, Other
   * Bottom action button: Continue →.

3. Choose Route Screen

   * Allows the user to select a route for the chosen activity.
   * Features AI-powered suggestion for optimal routes.

4. Route Selection & Preview

   * Displays a map view for selecting and adjusting the jogging or running route.
   * Users can edit the route, view distance, and confirm by tapping Start Jogging.

5. Live Activity Tracking

   * Real-time tracking interface showing:

     * Elapsed time
     * Calories burned
     * Distance covered
     * Steps count
   * Includes pause and stop controls for activity tracking.

6. Activity Completion Summary

   * Post-activity screen with:

     * Calories burned (visualized in a circular progress chart)
     * Duration & Steps
     * Next action options (e.g., *Post Jogging Stretches*).

7. My Activities Dashboard

   * Calendar view for quick navigation of activity history.
   * Displays completed activities with color-coded indicators and stats.

8. Activity Filter Modal

   * Bottom sheet filter to refine activity history based on:

     * Date range
     * Activity type (Jogging, Weightlifting, etc.)
     * AI suggestions toggle
   * Action button: Apply Filter.

9. Activity Stats Overview

   * Summarized statistics of user activities with visual cards showing total hours spent per activity type.

10. AI Activity Suggestions

    * Personalized suggestions for new activities like Morning Boost, Midday Stretch.
    * Includes session duration and quick-start options.

11. Activity Detail View

    * Detailed description of the activity, impact metrics, video guide, and benefits section.
    * Includes performance score and AI suggestion button.

12. Weightlifting Setup Screen

    * Users can customize their weightlifting session by selecting:

      * Target muscles
      * Reps & sets
      * Weight options
      * Calories estimate
    * Action button: Start Weightlifting.

13. Live Weightlifting Session

    * Timer-based interface with remaining sets and reps tracking.

14. Weightlifting Completion Summary

    * Displays calories burned, sets, and reps completed in a visually engaging layout.
    * Option to add another activity or finish the session.


### Workout & Training UI Overview

1. Personalized Workout Screen

   * Displays a welcome section with motivational imagery and text promoting personalized workouts.
   * CTA button: “Browse Workouts” to explore available sessions.

2. Workout Library (Home Screen)

   * Categorized sections like:

     * Featured workouts
     * Strength Training
     * Beginner Sessions
     * My Workouts (personalized list).
   * Includes workout cards with:

     * Title, Duration, Calorie info
     * Play icon for quick access.

3. Workout Search Screen

   * Provides search functionality for finding workouts by name or category.
   * Displays results in a card layout with thumbnail, title, and quick-start option.

4. Filter Workout Modal

   * Bottom drawer filter with:

     * Sort options (Most Popular, Newest)
     * Difficulty levels (Beginner, Intermediate, Advanced)
     * Body part filters (e.g., Lower Body, Upper Body)
     * Calorie Burn range selector
   * Action button: Apply Filter.

5. Workout Detail Screen

   * Shows workout information such as:

     * Workout Name, Trainer, Duration, Calories, Equipment
   * Start Workout button at the bottom.

6. Exercise Sequence View

   * Displays a list of exercises within the selected workout session.
   * Each exercise shows duration and instructions.
   * Button to Start the full workout.

7. Exercise Player Screen

   * Full-screen exercise execution mode with:

     * Exercise name
     * Current and next exercise details
     * Timer and rep counter
     * Pause/Resume controls.

8. Workout Completion Summary

   * Post-workout summary highlighting:

     * Calories burned, Time spent, Sets completed
   * CTA: Complete and option to review session.

9. My Workouts Schedule

   * Displays a calendar view with planned workouts.
   * Includes details like scheduled date, time, and workout type.

10. AI Suggestions Screen

    * Personalized workout recommendations such as:

      * Correct Your Form
      * Do proper stretching
    * Cards include difficulty, time, and benefit tags.

11. Workout Guidance Detail Screen

    * Provides detailed instructions on form correction, benefits, and tips.
    * Includes step-by-step guidance with illustrations.
    * CTA: Scan Reward Points and Apply AI Help.

12. Form Analysis Screen

    * Uses AI pose detection to analyze user posture during workout.
    * Displays real-time feedback with highlighted body parts for correction.
    * Shows status: Scanning → Completed.



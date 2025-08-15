import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Calendar, MessageCircle, Award, Users, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function CoachDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const coach = {
    name: "X-AE-A-XII",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=200&fit=crop",
    rating: 4.8,
    reviews: 124,
    specializations: ["AI", "Strength", "Endurance", "Form Correction"],
    experience: "5+ Years",
    clients: "500+",
    sessions: "2000+",
    description: "Advanced AI coach specializing in personalized training programs with real-time form analysis and adaptive workout plans.",
    achievements: [
      "Certified AI Fitness Specialist",
      "Advanced Form Analysis Expert",
      "Top Rated Coach 2024"
    ],
    price: "$49/session"
  };

  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Amazing coach! The AI form corrections helped me improve my technique significantly.",
      date: "2 days ago"
    },
    {
      id: 2,
      user: "Mike R.",
      rating: 5,
      comment: "Best investment I've made for my fitness journey. Highly personalized approach.",
      date: "1 week ago"
    },
    {
      id: 3,
      user: "Emma L.",
      rating: 4,
      comment: "Great experience overall. The workout plans are challenging but achievable.",
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-foreground hover:bg-muted"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Coach Profile</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-48">
        <img
          src={coach.coverImage}
          alt="Coach background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="p-6 -mt-16 relative z-10">
        <div className="flex items-end space-x-4 mb-6">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-24 h-24 rounded-full border-4 border-background object-cover"
          />
          <div className="flex-1 pb-2">
            <h2 className="text-2xl font-bold text-foreground">{coach.name}</h2>
            <div className="flex items-center space-x-2 mt-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-foreground">{coach.rating}</span>
              <span className="text-sm text-muted-foreground">({coach.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Users className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-medium text-foreground">{coach.clients}</p>
            <p className="text-xs text-muted-foreground">Clients</p>
          </div>
          <div className="text-center">
            <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-medium text-foreground">{coach.sessions}</p>
            <p className="text-xs text-muted-foreground">Sessions</p>
          </div>
          <div className="text-center">
            <Award className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-sm font-medium text-foreground">{coach.experience}</p>
            <p className="text-xs text-muted-foreground">Experience</p>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {coach.specializations.map((spec, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-primary/10 text-primary border-primary/20"
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
          <p className="text-muted-foreground leading-relaxed">{coach.description}</p>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Achievements</h3>
          <div className="space-y-2">
            {coach.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Reviews */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Reviews ({coach.reviews})</h3>
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-card border-border p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-foreground">{review.user}</span>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4 space-y-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-foreground">{coach.price}</span>
          <span className="text-sm text-muted-foreground">Per session</span>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 border-border hover:bg-muted"
            onClick={() => navigate(`/coach-messaging/${id}`)}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Message
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => navigate(`/coach-booking/${id}`)}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Session
          </Button>
        </div>
      </div>
    </div>
  );
}
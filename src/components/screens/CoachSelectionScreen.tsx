import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MessageCircle, Calendar, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CoachSelectionScreen() {
  const navigate = useNavigate();

  const coaches = [
    {
      id: 1,
      name: "X-AE-A-XII",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      rating: 4.8,
      reviews: 124,
      specializations: ["AI", "Strength", "Endurance"],
      isPremium: true,
      experience: "5+ Years",
      description: "Advanced AI coach specializing in personalized training programs"
    },
    {
      id: 2,
      name: "Farnese Vandimion",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face",
      rating: 4.9,
      reviews: 89,
      specializations: ["Pro", "Flexibility", "Yoga"],
      isPremium: true,
      experience: "8+ Years",
      description: "Professional coach with expertise in flexibility and mindfulness"
    },
    {
      id: 3,
      name: "Marcus Steel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      rating: 4.7,
      reviews: 156,
      specializations: ["Strength", "Powerlifting"],
      isPremium: false,
      experience: "6+ Years",
      description: "Strength specialist focused on building raw power"
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
          <h1 className="text-xl font-semibold text-foreground">Choose Your Coach</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted"
          >
            <Filter className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Coach Cards */}
      <div className="p-4 space-y-4">
        {coaches.map((coach) => (
          <Card 
            key={coach.id} 
            className="bg-card border-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/coach-detail/${coach.id}`)}
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{coach.name}</h3>
                      <p className="text-sm text-muted-foreground">{coach.experience}</p>
                    </div>
                    {coach.isPremium && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Premium
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium text-foreground">{coach.rating}</span>
                      <span className="text-sm text-muted-foreground">({coach.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {coach.specializations.map((spec, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-border bg-muted/50"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {coach.description}
                  </p>

                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-border hover:bg-muted"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/coach-messaging/${coach.id}`);
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/coach-booking/${coach.id}`);
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Browse More */}
      <div className="p-4">
        <Button 
          variant="outline" 
          className="w-full h-12 border-dashed border-border hover:bg-muted text-muted-foreground"
        >
          Browse More Coaches
        </Button>
      </div>
    </div>
  );
}
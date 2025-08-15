import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Star, ThumbsUp, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CoachRatingScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const coach = {
    name: "X-AE-A-XII",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    specialization: "AI Strength Coach"
  };

  const handleSubmitRating = () => {
    if (rating > 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Thank You!</h2>
            <p className="text-muted-foreground">
              Your feedback has been submitted successfully. It helps us improve our coaching services.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-xl font-semibold text-foreground">Rate Your Coach</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Coach Info */}
        <div className="text-center space-y-4">
          <img
            src={coach.avatar}
            alt={coach.name}
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-foreground">{coach.name}</h2>
            <p className="text-muted-foreground">{coach.specialization}</p>
          </div>
        </div>

        {/* Rating Section */}
        <Card className="bg-card border-border p-6">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How was your session?
              </h3>
              <p className="text-muted-foreground">
                Rate your experience with this coach
              </p>
            </div>

            {/* Star Rating */}
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 p-0"
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  />
                </Button>
              ))}
            </div>

            {/* Rating Labels */}
            {rating > 0 && (
              <div className="text-center">
                <p className="text-lg font-medium text-foreground">
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Feedback Section */}
        <Card className="bg-card border-border p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Share Your Experience (Optional)
            </h3>
            <Textarea
              placeholder="Tell us about your session. What did you like? How can we improve?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-24 bg-background border-border resize-none"
              rows={4}
            />
          </div>
        </Card>

        {/* Quick Feedback Options */}
        <Card className="bg-card border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Feedback</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Great form corrections",
              "Very motivating",
              "Clear instructions",
              "Professional approach",
              "Good time management",
              "Helpful tips"
            ].map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-3 text-left justify-start border-border hover:bg-muted"
              >
                <ThumbsUp className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm">{option}</span>
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Submit Button */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <Button
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl disabled:opacity-50"
          onClick={handleSubmitRating}
          disabled={rating === 0}
        >
          <Star className="w-5 h-5 mr-2" />
          Submit Rating
        </Button>
      </div>
    </div>
  );
}
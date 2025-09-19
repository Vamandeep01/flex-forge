import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ArrowLeft, Clock, User, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CoachBookingScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isBooking, setIsBooking] = useState(false);

  const timeSlots = [
    "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  const coach = {
    name: "X-AE-A-XII",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    price: 49,
    specialization: "AI Strength Coach"
  };

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      setIsBooking(true);
      
      // Simulate booking API call
      setTimeout(() => {
        navigate(`/coach-payment/${id}`, {
          state: {
            coach,
            date: selectedDate,
            time: selectedTime,
            price: coach.price
          }
        });
        setIsBooking(false);
      }, 1000);
    }
  };

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
          <h1 className="text-xl font-semibold text-foreground">Book Session</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Coach Info */}
        <Card className="bg-card border-border p-4">
          <div className="flex items-center space-x-4">
            <img
              src={coach.avatar}
              alt={coach.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">{coach.name}</h3>
              <p className="text-sm text-muted-foreground">{coach.specialization}</p>
              <p className="text-lg font-bold text-primary">${coach.price}/session</p>
            </div>
          </div>
        </Card>

        {/* Date Selection */}
        <Card className="bg-card border-border p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
            Select Date
          </h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => date < new Date()}
            className="rounded-md border-0"
          />
        </Card>

        {/* Time Selection */}
        <Card className="bg-card border-border p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            Select Time
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`h-12 text-sm ${
                  selectedTime === time 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border hover:bg-muted"
                }`}
                onClick={() => setSelectedTime(time)}
                disabled={isBooking}
              >
                {time}
              </Button>
            ))}
          </div>
        </Card>

        {/* Session Summary */}
        {selectedDate && selectedTime && (
          <Card className="bg-card border-border p-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Session Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Coach</span>
                <span className="text-foreground font-medium">{coach.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Date</span>
                <span className="text-foreground font-medium">
                  {selectedDate.toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Time</span>
                <span className="text-foreground font-medium">{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Duration</span>
                <span className="text-foreground font-medium">60 minutes</span>
              </div>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">${coach.price}</span>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Book Button */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <Button
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl disabled:opacity-50"
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || isBooking}
        >
          {isBooking ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Booking Session...</span>
            </div>
          ) : (
            <>
              <User className="w-5 h-5 mr-2" />
              Book Session - ${coach.price}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
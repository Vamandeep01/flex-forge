import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Paperclip, Mic, MoreVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CoachMessagingScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const coach = {
    name: "X-AE-A-XII",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    isOnline: true
  };

  const messages = [
    {
      id: 1,
      text: "Hi! I'm excited to start working with you. Let's discuss your fitness goals.",
      sender: "coach",
      timestamp: "10:30 AM",
      isRead: true
    },
    {
      id: 2,
      text: "Hello! I want to focus on building strength and improving my form.",
      sender: "user",
      timestamp: "10:32 AM",
      isRead: true
    },
    {
      id: 3,
      text: "Perfect! I can help you with that. What's your current experience with weightlifting?",
      sender: "coach",
      timestamp: "10:33 AM",
      isRead: true
    },
    {
      id: 4,
      text: "I've been lifting for about a year but I think my form needs work.",
      sender: "user",
      timestamp: "10:35 AM",
      isRead: true
    },
    {
      id: 5,
      text: "Great! I'll analyze your form during our sessions and provide real-time feedback. We can schedule your first session whenever you're ready.",
      sender: "coach",
      timestamp: "10:36 AM",
      isRead: false
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-foreground hover:bg-muted"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {coach.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
                )}
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">{coach.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {coach.isOnline ? "Online" : "Last seen recently"}
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted text-foreground rounded-bl-md"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === "user"
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-muted"
          >
            <Paperclip className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="pr-12 bg-muted border-0 rounded-full focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:bg-muted-foreground/10"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
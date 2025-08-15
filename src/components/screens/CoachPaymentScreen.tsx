import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, Smartphone, Wallet, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function CoachPaymentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const bookingData = location.state || {
    coach: { name: "X-AE-A-XII", avatar: "" },
    date: new Date(),
    time: "10:00 AM",
    price: 49
  };

  const paymentMethods = [
    {
      id: "digital",
      name: "Digital Pay",
      icon: Smartphone,
      description: "Quick payment via digital wallet"
    },
    {
      id: "card",
      name: "Credit Card",
      icon: CreditCard,
      description: "Visa, MasterCard, American Express"
    },
    {
      id: "apple",
      name: "Apple Pay",
      icon: Wallet,
      description: "Pay with Touch ID or Face ID"
    }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-sm">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Payment Completed!</h2>
            <p className="text-muted-foreground">
              Your coaching session has been booked successfully. You'll receive a confirmation email shortly.
            </p>
          </div>
          <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop" 
              alt="Success" 
              className="w-24 h-24 rounded-lg object-cover"
            />
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
          <h1 className="text-xl font-semibold text-foreground">Payment</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Booking Summary */}
        <Card className="bg-card border-border p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Session Details</h3>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={bookingData.coach.avatar}
              alt={bookingData.coach.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-foreground">{bookingData.coach.name}</p>
              <p className="text-sm text-muted-foreground">
                {bookingData.date.toLocaleDateString()} at {bookingData.time}
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-4 flex items-center justify-between">
            <span className="text-lg font-semibold text-foreground">Total Amount</span>
            <span className="text-2xl font-bold text-primary">${bookingData.price}</span>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="bg-card border-border p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Payment Method</h3>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={method.id} id={method.id} />
                  <method.icon className="w-6 h-6 text-foreground" />
                  <div className="flex-1">
                    <Label htmlFor={method.id} className="text-foreground font-medium cursor-pointer">
                      {method.name}
                    </Label>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </Card>

        {/* Card Details (when card is selected) */}
        {paymentMethod === "card" && (
          <Card className="bg-card border-border p-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Card Information</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-foreground">Card Number</Label>
                <div className="mt-1 p-3 border border-border rounded-lg bg-background">
                  <span className="text-muted-foreground">**** **** **** 1234</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground">Expiry</Label>
                  <div className="mt-1 p-3 border border-border rounded-lg bg-background">
                    <span className="text-muted-foreground">12/25</span>
                  </div>
                </div>
                <div>
                  <Label className="text-foreground">CVV</Label>
                  <div className="mt-1 p-3 border border-border rounded-lg bg-background">
                    <span className="text-muted-foreground">***</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Payment Summary */}
        <Card className="bg-card border-border p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Payment Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Session Fee</span>
              <span className="text-foreground">${bookingData.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service Fee</span>
              <span className="text-foreground">$2</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="text-lg font-semibold text-foreground">Total</span>
              <span className="text-xl font-bold text-primary">${bookingData.price + 2}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Pay Button */}
      <div className="sticky bottom-0 bg-background border-t border-border p-4">
        <Button
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl disabled:opacity-50"
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>Processing...</>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Pay ${bookingData.price + 2}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
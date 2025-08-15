
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Scan, CheckCircle, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormAnalysisScreen() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm border-b border-dark-tertiary">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Form Analysis</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {!scanComplete ? (
          <>
            {/* Camera View */}
            <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl overflow-hidden mb-6">
              <div className="relative h-80">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                  alt="Camera view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-FlexForge-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white font-semibold">Analyzing your form...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-white mb-4 mx-auto" />
                      <p className="text-white font-semibold">Position yourself in frame</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Instructions */}
            <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6 mb-6">
              <h3 className="text-white font-semibold mb-4">Instructions</h3>
              <div className="space-y-3 text-white/60 text-sm">
                <p>• Stand 3-4 feet away from your device</p>
                <p>• Ensure good lighting and clear background</p>
                <p>• Perform the exercise slowly and controlled</p>
                <p>• Keep your entire body visible in frame</p>
              </div>
            </Card>

            {/* Start Button */}
            <Button 
              className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg"
              onClick={handleStartScan}
              disabled={isScanning}
            >
              {isScanning ? (
                <div className="flex items-center justify-center space-x-2">
                  <Scan className="w-5 h-5 animate-pulse" />
                  <span>Scanning...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Scan className="w-5 h-5" />
                  <span>Start Analysis</span>
                </div>
              )}
            </Button>
          </>
        ) : (
          <>
            {/* Analysis Results */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-white text-xl font-bold mb-2">Analysis Complete</h2>
              <p className="text-white/60">Here's your form assessment</p>
            </div>

            {/* Results */}
            <div className="space-y-4 mb-6">
              <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Overall Score</h3>
                  <div className="text-2xl font-bold text-green-500">8.5/10</div>
                </div>
                <div className="w-full bg-dark-tertiary rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </Card>

              <Card className="bg-dark-secondary border-dark-tertiary rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Areas for Improvement</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <div>
                      <p className="text-white font-medium">Knee Alignment</p>
                      <p className="text-white/60 text-sm">Keep knees aligned with toes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-white font-medium">Back Posture</p>
                      <p className="text-white/60 text-sm">Excellent form maintained</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-FlexForge-orange hover:bg-FlexForge-orange-dark text-white font-semibold py-4 rounded-2xl text-lg">
                Get Corrective Exercises
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-dark-tertiary text-white hover:bg-dark-secondary py-4 rounded-2xl text-lg"
                onClick={() => setScanComplete(false)}
              >
                Analyze Again
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

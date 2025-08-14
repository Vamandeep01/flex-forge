
import { MobileLayout } from "@/components/layout/MobileLayout";

export default function AnalyticsPage() {
  return (
    <MobileLayout>
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Analytics</h1>
          <p className="text-white/70">Your fitness analytics and progress tracking will be displayed here.</p>
        </div>
      </div>
    </MobileLayout>
  );
}


import { MobileLayout } from "@/components/layout/MobileLayout";

export default function AddWorkoutPage() {
  return (
    <MobileLayout>
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Add Workout</h1>
          <p className="text-white/70">Create and customize your workout routines here.</p>
        </div>
      </div>
    </MobileLayout>
  );
}

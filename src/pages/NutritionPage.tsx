
import { MobileLayout } from "@/components/layout/MobileLayout";

export default function NutritionPage() {
  return (
    <MobileLayout>
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Nutrition</h1>
          <p className="text-white/70">Track your meals, calories, and nutritional goals here.</p>
        </div>
      </div>
    </MobileLayout>
  );
}

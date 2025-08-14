
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Plus,
  Target,
  User,
  Utensils
} from "lucide-react";

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Target, path: '/dashboard', label: 'Dashboard' },
    { icon: BarChart3, path: '/analytics', label: 'Analytics' },
    { icon: Plus, path: '/add-workout', label: 'Add', special: true },
    { icon: Utensils, path: '/nutrition', label: 'Nutrition' },
    { icon: User, path: '/profile/settings', label: 'Profile' }
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-dark-tertiary px-4 py-3 z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`p-3 rounded-2xl transition-colors ${item.special
                ? 'bg-FlexForge-orange text-white shadow-lg'
                : isActive(item.path)
                  ? 'bg-FlexForge-orange/20 text-FlexForge-orange'
                  : 'text-white/60 hover:text-white'
              }`}
            aria-label={item.label}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};

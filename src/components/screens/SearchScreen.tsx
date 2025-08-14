
import { useState } from "react";
import SearchLoadingScreen from "@/components/search/SearchLoadingScreen";
import SearchInputScreen from "@/components/search/SearchInputScreen";
import SearchNotFoundScreen from "@/components/search/SearchNotFoundScreen";
import SearchResultsScreen from "@/components/search/SearchResultsScreen";
import SearchFilterScreen from "@/components/search/SearchFilterScreen";

type SearchScreenType = 'loading' | 'input' | 'notFound' | 'results' | 'filter';

export default function SearchScreen() {
  const [currentScreen, setCurrentScreen] = useState<SearchScreenType>('loading');
  const [searchQuery, setSearchQuery] = useState('');

  const handleScreenChange = (screen: SearchScreenType) => {
    setCurrentScreen(screen);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('loading');
    
    // Simulate search delay
    setTimeout(() => {
      if (query.toLowerCase().includes('fitness')) {
        setCurrentScreen('results');
      } else {
        setCurrentScreen('notFound');
      }
    }, 2000);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <SearchLoadingScreen />;
      case 'input':
        return <SearchInputScreen onSearch={handleSearch} />;
      case 'notFound':
        return <SearchNotFoundScreen onBack={() => setCurrentScreen('input')} />;
      case 'results':
        return <SearchResultsScreen onFilter={() => setCurrentScreen('filter')} onBack={() => setCurrentScreen('input')} />;
      case 'filter':
        return <SearchFilterScreen onApply={() => setCurrentScreen('results')} onBack={() => setCurrentScreen('results')} />;
      default:
        return <SearchLoadingScreen />;
    }
  };

  // Auto transition from loading to input after 3 seconds
  useState(() => {
    const timer = setTimeout(() => {
      if (currentScreen === 'loading') {
        setCurrentScreen('input');
      }
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-FlexForge-orange to-FlexForge-orange-dark">
      {renderScreen()}
    </div>
  );
}

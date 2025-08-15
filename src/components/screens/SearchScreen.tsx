
import { useState } from "react";
import SearchLoadingScreen from "@/components/search/SearchLoadingScreen";
import SearchInputScreen from "@/components/search/SearchInputScreen";
import SearchNotFoundScreen from "@/components/search/SearchNotFoundScreen";
import SearchResultsScreen from "@/components/search/SearchResultsScreen";
import SearchFilterScreen from "@/components/search/SearchFilterScreen";

type SearchScreenType = 'loading' | 'input' | 'notFound' | 'results' | 'filter';

export default function SearchScreen() {
  const [currentScreen, setCurrentScreen] = useState<SearchScreenType>('input');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen('loading');
    
    // Simulate search delay
    setTimeout(() => {
      if (query.toLowerCase().includes('fitness') || 
          query.toLowerCase().includes('workout') || 
          query.toLowerCase().includes('meal') ||
          query.toLowerCase().includes('coach')) {
        setCurrentScreen('results');
      } else {
        setCurrentScreen('notFound');
      }
    }, 2000);
  };

  const handleBack = () => {
    if (currentScreen === 'results' || currentScreen === 'notFound') {
      setCurrentScreen('input');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'loading':
        return <SearchLoadingScreen />;
      case 'input':
        return <SearchInputScreen onSearch={handleSearch} onBack={handleBack} />;
      case 'notFound':
        return <SearchNotFoundScreen onBack={handleBack} searchQuery={searchQuery} />;
      case 'results':
        return (
          <SearchResultsScreen 
            onFilter={() => setCurrentScreen('filter')} 
            onBack={handleBack}
            searchQuery={searchQuery}
          />
        );
      case 'filter':
        return (
          <SearchFilterScreen 
            onApply={() => setCurrentScreen('results')} 
            onBack={() => setCurrentScreen('results')} 
          />
        );
      default:
        return <SearchInputScreen onSearch={handleSearch} onBack={handleBack} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderScreen()}
    </div>
  );
}

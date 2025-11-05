import { useState } from 'react';
import HomePage from './components/HomePage';
import ConversionSimulator from './components/ConversionSimulator';
import LearnConcepts from './components/LearnConcepts';
import AboutProject from './components/AboutProject';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';

type Page = 'home' | 'converter' | 'learn' | 'about' | 'quiz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'converter':
        return <ConversionSimulator onNavigate={setCurrentPage} />;
      case 'learn':
        return <LearnConcepts onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutProject onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizSection onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

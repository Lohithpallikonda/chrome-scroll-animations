import React, { useState } from 'react';
import Home from './sections/Home.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    // APP JSX START
    <div className="app">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main>
        <Home />
      </main>
    </div>
  )
}

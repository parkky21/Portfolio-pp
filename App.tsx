import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Blogs from './components/Blogs';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#111111] text-gray-800 dark:text-gray-200 min-h-screen">
      <ThemeToggle />
      <main>
        <Hero />
        <Projects />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
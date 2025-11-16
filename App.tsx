import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] text-gray-800 min-h-screen">
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

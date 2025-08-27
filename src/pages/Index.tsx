import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { WorkSection } from '../components/WorkSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <CustomCursor />
        
        {/* Geometric Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="geometric-grid" />
          <div className="geometric-dots" />
        </div>
        
        <main className="relative z-10">
          <Header />
          <WorkSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;

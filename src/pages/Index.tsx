import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/Header';
import { WorkSection } from '../components/WorkSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroBackground from '../assets/hero-bg.jpg';

const Index = () => {
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <CustomCursor />
        
        {/* Hero background image */}
        <div 
          className="fixed inset-0 opacity-5 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-glow opacity-20 pointer-events-none z-0" />
        
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

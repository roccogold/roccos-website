import React from 'react';
import { useTheme } from './ThemeProvider';

const SunIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container-custom py-8 relative z-10">
      <div className="flex flex-col items-center space-y-6 reveal">
        <div className="text-center">
          <h1 className="text-hero gradient-text mb-2">
            Ciao, I'm Rocco Goldschmidt
          </h1>
          <p className="text-body text-text-secondary">
            [Product Manager — building things that make life easier]
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={toggleTheme}
            className="theme-toggle-modern group relative overflow-hidden"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${theme === 'light' ? 'toggle-thumb-light' : ''}`}>
                <div className="toggle-icon">
                  {theme === 'dark' ? (
                    <MoonIcon className="w-3 h-3" />
                  ) : (
                    <SunIcon className="w-3 h-3" />
                  )}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-surface/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-lg">
                {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
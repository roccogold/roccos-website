import React from 'react';

export function Header() {
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
      </div>
    </header>
  );
}
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    // Observe all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Initial check for elements already in view
    const checkInitialVisibility = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 80;
      
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - revealPoint) {
          el.classList.add('visible');
        }
      });
    };

    checkInitialVisibility();
    window.addEventListener('scroll', checkInitialVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkInitialVisibility);
    };
  }, []);
}
import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const animateTrail = () => {
      // Initialize trail if empty
      if (trailRef.current.length === 0) {
        for (let i = 0; i < 8; i++) {
          trailRef.current.push({ x: mousePosition.x, y: mousePosition.y });
        }
      }

      // Update trail positions with smooth interpolation
      trailRef.current.forEach((point, index) => {
        const factor = (index + 1) * 0.08;
        point.x += (mousePosition.x - point.x) * factor;
        point.y += (mousePosition.y - point.y) * factor;
      });

      // Update DOM elements
      const trailElements = document.querySelectorAll('.cursor-trail-dot');
      trailElements.forEach((el, index) => {
        const point = trailRef.current[index];
        if (point && el instanceof HTMLElement) {
          el.style.left = `${point.x}px`;
          el.style.top = `${point.y}px`;
        }
      });

      animationRef.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition.x, mousePosition.y]);

  // Only show cursor on devices with hover capability
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none), (pointer: coarse)').matches);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`cursor-main ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="cursor-trail-dot"
          style={{
            opacity: (8 - index) * 0.1,
            transform: `scale(${(8 - index) * 0.08 + 0.2})`,
          }}
        />
      ))}
    </>
  );
}
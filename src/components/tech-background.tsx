import { useEffect, useState, useRef } from 'react';

export default function TechBackground() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initialize theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Add event listeners
    const container = containerRef.current;
    if (container) {
      const handleMouseEnter = () => {
        container.style.transform = 'translate(-50%, -50%) scale(1.25)';
      };

      const handleMouseLeave = () => {
        container.style.transform = 'translate(-50%, -50%) scale(1)';
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Neon-orange brand glow, echoing the AD logo halo */}
      <div className="absolute left-[270px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-glow/10 blur-3xl" />

      <div
        ref={containerRef}
        className="absolute left-[270px] top-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src="/assets/images/tech-background.svg"
          alt="Tech Background"
          className="w-full h-full opacity-50"
        />
      </div>
    </div>
  );
} 
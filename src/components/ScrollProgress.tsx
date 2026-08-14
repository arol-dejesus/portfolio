'use client';

import { useEffect, useState } from 'react';

/**
 * Thin brand-gradient bar pinned to the top of the viewport that grows
 * from left to right as the page is scrolled. Pure CSS transform (cheap).
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? scrollTop / height : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 pointer-events-none">
      <div
        className="scroll-progress h-full w-full bg-gradient-to-r from-brand-green via-brand-500 to-brand-glow"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

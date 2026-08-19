'use client';

import { useEffect, useRef, useState } from 'react';

// Compte de 0 jusqu'à `value` quand l'élément entre dans le viewport.
// Respecte prefers-reduced-motion (affiche directement la valeur finale).
export default function Counter({
  value,
  plus,
  duration = 1400,
}: {
  value: string;
  plus?: boolean;
  duration?: number;
}) {
  const target = parseInt(value, 10);
  const isNumeric = !Number.isNaN(target);
  const [display, setDisplay] = useState<number>(isNumeric ? 0 : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
              setDisplay(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [isNumeric, target, duration]);

  if (!isNumeric) {
    return (
      <span ref={ref}>
        {value}
        {plus && <span className="text-brand-green dark:text-brand-green-light">+</span>}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display}
      {plus && <span className="text-brand-green dark:text-brand-green-light">+</span>}
    </span>
  );
}

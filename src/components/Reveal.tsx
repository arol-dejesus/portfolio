'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the reveal transition starts, in ms (useful for staggering). */
  delay?: number;
  /** Entrance direction / effect. Defaults to a fade + slide up. */
  variant?: RevealVariant;
}

const variantClass: Record<RevealVariant, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  blur: 'reveal-blur',
};

/**
 * Fades + slides its children in when they scroll into view.
 * Pure CSS transition driven by an IntersectionObserver (no external library).
 */
export default function Reveal({ children, className = '', delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${variantClass[variant]}${visible ? ' reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

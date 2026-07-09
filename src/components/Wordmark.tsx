import Link from 'next/link';

interface WordmarkProps {
  className?: string;
}

/**
 * Arol Dejesus brand wordmark.
 * "Arol" in brand green, "Dejesus" in brand orange, echoing the AD hexagon logo.
 */
export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={`group relative z-30 inline-flex items-center gap-2 font-semibold whitespace-nowrap select-none ${className}`}
    >
      <img
        src="/assets/images/favicon.png"
        alt="Arol Dejesus logo"
        className="w-8 h-8 object-cover rounded-md group-hover:-rotate-12 group-hover:scale-[1.15] ease-in-out duration-300"
      />
      <span className="text-base tracking-tight leading-none">
        <span className="text-brand-green dark:text-brand-green-light">Arol</span>
        <span className="text-brand-500">Dejesus</span>
      </span>
    </Link>
  );
}

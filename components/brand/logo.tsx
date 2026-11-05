import Image from 'next/image';

const W = 1129;
const H = 252;

/**
 * ReadyMynd wordmark, taken from the existing brand logo.
 *
 * Two pre-rendered variants on transparent backgrounds:
 *  - logo-ink   : ink lettering + brand red    (for light surfaces)
 *  - logo-light : white lettering + bright red (for dark surfaces)
 *
 * They cross-fade on the `.dark` class, so the swap is instant, has no
 * layout shift, and never waits on a React re-render.
 */
export function Logo({
  className = 'h-8 w-auto',
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`relative block ${className}`} style={{ aspectRatio: `${W} / ${H}` }}>
      <Image
        src="/images/brand/logo-ink.png"
        alt="ReadyMynd"
        width={W}
        height={H}
        priority={priority}
        className="h-full w-full object-contain object-left dark:opacity-0"
      />
      <Image
        src="/images/brand/logo-light.png"
        alt=""
        aria-hidden
        width={W}
        height={H}
        priority={priority}
        className="absolute inset-0 h-full w-full object-contain object-left opacity-0 dark:opacity-100"
      />
    </span>
  );
}

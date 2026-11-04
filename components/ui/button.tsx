import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ink' | 'outline' | 'outlineLight' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white shadow-[0_10px_30px_-12px_rgba(229,62,62,0.65)] hover:bg-brand-600 hover:shadow-[0_16px_40px_-14px_rgba(229,62,62,0.8)] active:translate-y-px',
  secondary:
    'bg-ink text-white hover:bg-ink-800 shadow-soft hover:shadow-lift active:translate-y-px dark:border dark:border-line dark:bg-surface-raised dark:text-heading dark:hover:bg-surface-sunken',
  ink: 'bg-ink text-white hover:bg-ink-700 active:translate-y-px dark:border dark:border-line dark:bg-surface-raised dark:text-heading dark:hover:bg-surface-sunken',
  outline:
    'border border-line-strong bg-surface-raised text-heading shadow-soft hover:border-accent hover:bg-accent-soft hover:text-accent active:translate-y-px',
  outlineLight:
    'border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10',
  ghost: 'text-heading hover:bg-surface-sunken',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[0.8125rem]',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.9375rem]',
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps & Omit<ComponentProps<typeof Link>, 'href' | 'className'> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps & Omit<ComponentProps<'button'>, 'className'>) {
  return (
    <button type="button" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

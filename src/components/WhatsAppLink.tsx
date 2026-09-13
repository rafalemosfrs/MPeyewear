import { type ReactNode } from 'react';
import { wa, type WhatsAppMessageKey } from '@/config/site';

type WhatsAppLinkProps = {
  messageKey: WhatsAppMessageKey;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'astros';
  'aria-label'?: string;
};

export default function WhatsAppLink({
  messageKey,
  children,
  className = '',
  variant = 'primary',
  'aria-label': ariaLabel,
}: WhatsAppLinkProps) {
  const baseClass =
    variant === 'primary' ? 'btn-primary' :
    variant === 'secondary' ? 'btn-secondary' :
    variant === 'astros' ? 'btn-astros' :
    'btn-ghost';

  return (
    <a
      href={wa(messageKey)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

import { type ReactNode } from 'react';

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'princess' | 'astros' | 'dark';
};

export default function GlassPanel({ children, className = '', variant = 'default' }: GlassPanelProps) {
  const glassClass =
    variant === 'princess' ? 'glass-princess' :
    variant === 'astros' ? 'glass-astros' :
    variant === 'dark' ? 'glass-dark' :
    'glass';
  return (
    <div className={`${glassClass} ${className}`}>
      {children}
    </div>
  );
}

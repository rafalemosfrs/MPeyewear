import { type ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, subtitle, center = false, children }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-mp-700 mb-2">{eyebrow}</p>
      )}
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-mp-950">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-mp-600 text-sm sm:text-base leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

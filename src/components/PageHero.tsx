import { type ReactNode } from 'react';
import { ArrowDownRight } from 'lucide-react';
export default function PageHero({ number, eyebrow, title, description, children }: { number: string; eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="container-max">
    <div className="page-hero-top"><span className="eyebrow">MP EYEWEAR / {eyebrow}</span><span className="edition-number">{number}</span></div>
    <div className="page-hero-grid"><h1>{title}</h1><div><p>{description}</p>{children}</div></div>
    <ArrowDownRight className="page-hero-arrow" size={32} aria-hidden="true" />
  </div></section>;
}

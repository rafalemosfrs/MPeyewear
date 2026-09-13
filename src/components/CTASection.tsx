import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { type WhatsAppMessageKey } from '@/config/site';
type CTASectionProps = { title: string; message: string; buttonLabel: string; messageKey: WhatsAppMessageKey; icon?: LucideIcon; variant?: 'default' | 'astros' };
export default function CTASection({ title, message, buttonLabel, messageKey, icon: Icon, variant = 'default' }: CTASectionProps) {
  return <div className={`contact-panel${variant === 'astros' ? ' contact-panel-astros' : ''}`}>
    {Icon && <Icon size={30} strokeWidth={1.2} aria-hidden="true" />}
    <h3>{title}</h3><p>{message}</p>
    <WhatsAppLink messageKey={messageKey} variant={variant === 'astros' ? 'astros' : 'primary'}>{buttonLabel}<ArrowUpRight size={18} /></WhatsAppLink>
  </div>;
}

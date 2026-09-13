import { type LucideIcon } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { type WhatsAppMessageKey } from '@/config/site';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  messageKey: WhatsAppMessageKey;
  linkLabel: string;
  variant?: 'default' | 'astros';
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  messageKey,
  linkLabel,
  variant = 'default',
}: ServiceCardProps) {
  const iconColor = variant === 'astros' ? 'text-astros-500' : 'text-mp-800';
  const bgTint = variant === 'astros' ? 'bg-astros-50' : 'bg-mp-100';

  return (
    <div className="glass-princess p-6 flex flex-col gap-3 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
      <div className={`${bgTint} rounded-xl p-3 w-fit`}>
        <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-semibold text-mp-950">{title}</h3>
      <p className="text-sm text-mp-700 leading-relaxed flex-grow">{description}</p>
      <WhatsAppLink
        messageKey={messageKey}
        variant={variant === 'astros' ? 'astros' : 'ghost'}
        className="self-start mt-1 text-xs"
      >
        {linkLabel}
      </WhatsAppLink>
    </div>
  );
}

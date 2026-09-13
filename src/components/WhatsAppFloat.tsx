import { wa } from '@/config/site';
import { MessageCircle } from 'lucide-react';
export default function WhatsAppFloat() {
  return <a href={wa('general')} target="_blank" rel="noopener noreferrer" aria-label="Falar com a MP Eyewear pelo WhatsApp" className="whatsapp-float"><MessageCircle size={22} strokeWidth={1.7} /><span>Vamos conversar?</span><span className="online-dot" aria-hidden="true" /></a>;
}

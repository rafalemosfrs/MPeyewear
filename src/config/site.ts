export const WHATSAPP_NUMBER = '558597560004';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: 'Olá, My Princess! Vim pelo site e gostaria de atendimento. Podem me ajudar?',
  presencial: 'Olá, My Princess! Gostaria de informações sobre o atendimento presencial e os horários da loja.',
  visitas: 'Olá, My Princess! Vim pelo site e gostaria de saber como funcionam as visitas e quais opções de atendimento estão disponíveis.',
  armações: 'Olá, My Princess! Gostaria de ajuda para escolher uma armação.',
  lentes: 'Olá, My Princess! Gostaria de conhecer as opções de lentes e entender qual pode atender à minha necessidade.',
  multifocais: 'Olá, My Princess! Estou com dúvidas sobre a adaptação aos meus óculos multifocais e gostaria de orientação.',
  manutenção: 'Olá, My Princess! Meus óculos precisam de uma avaliação para ajuste ou conserto. Como posso proceder?',
  higienização: 'Olá, My Princess! Gostaria de informações sobre a higienização dos meus óculos na loja.',
  garantia: 'Olá, My Princess! Gostaria de solicitar uma avaliação dos meus óculos e consultar as condições de garantia aplicáveis à minha compra.',
  infantil: 'Olá, My Princess! Vim pelo Espaço Infantil e gostaria de ajuda com óculos para uma criança.',
  exploradores: 'Olá, My Princess! Gostaria de saber mais sobre o Pequenos Exploradores e os materiais disponíveis.',
  avaliar: 'Olá, My Princess! Vim pelo site e gostaria de compartilhar minha avaliação sobre o atendimento que recebi.',
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export function wa(key: WhatsAppMessageKey): string {
  return getWhatsAppUrl(whatsappMessages[key]);
}

export const siteConfig = {
  name: 'MP Eyewear',
  shortName: 'MP Eyewear',
  whatsappDisplay: '(85) 99756-0004',
  whatsappNumber: WHATSAPP_NUMBER,
address: {
  street: 'Av. I, 730 - Prefeito José Walter',
  city: 'Fortaleza',
  state: 'CE',
  zip: '60750-080',
  fullAddress:
    'Av. I, 730 - Prefeito José Walter, Fortaleza - CE, 60750-080',
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=-3.8305299223115252,-38.552421208997856',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=-3.8305299223115252,-38.552421208997856&z=18&output=embed',
},
instagram: 'https://www.instagram.com/myprincess.store_/',
hours:
  'Segunda a sexta: 14:30–18:30 | Sábado: 09:30–15:00 | Domingo: fechado',
googleReviewUrl: 'https://g.page/r/Cb-J_r2HF-TGEA0/review',
  tagline: 'Cuidado com a visão, conforto e escolha dos óculos',
} as const;

export const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/lentes', label: 'Lentes e visão' },
  { to: '/cuidados-e-garantias', label: 'Cuidados e garantias' },
  { to: '/espaco-infantil', label: 'Espaço Infantil' },
  { to: '/contato', label: 'Contato e visitas' },
] as const;

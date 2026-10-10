
import type { FAQItem } from '@/components/FAQ';

export const faqHome: FAQItem[] = [
  {
    question: 'Preciso agendar para ser atendido?',
    answer:
      'Você pode visitar a MP Eyewear durante nosso horário de atendimento. Se preferir um atendimento com horário reservado, também pode agendar pelo WhatsApp.',
  },
  {
    question: 'Vocês fazem exame de vista?',
    answer:
      'Temos parceria com clínica para realização do exame de vista e nossa equipe pode orientar você sobre horários e agendamento.',
  },
  {
    question: 'Vocês fazem ajustes e consertos em óculos?',
    answer:
      'Sim. Fazemos ajustes e avaliamos consertos de acordo com a necessidade de cada óculos. Fale conosco para saber se o serviço pode ser realizado.',
  },
];

export const faqMore: FAQItem[] = [
  {
    question:
      'Posso fazer óculos com uma receita de outro profissional?',
    answer:
      'Sim. Você pode trazer sua receita e nós cuidamos da escolha das lentes e da armação de acordo com a sua prescrição e suas necessidades.',
  },
  {
    question:
      'Quanto tempo demora para meus óculos ficarem prontos?',
    answer:
      'O prazo varia de acordo com o tipo de lente escolhida. No momento do pedido, informamos a previsão de entrega dos seus óculos.',
  },
  {
    question: 'Posso colocar grau em óculos solar?',
    answer:
      'Sim. Muitos modelos podem receber lentes solares com grau. Avaliamos sua receita e a armação para indicar a opção mais adequada para você.',
  },
  {
    question: 'Como funciona a garantia?',
    answer:
      'Seus óculos contam com garantia conforme o produto adquirido. Prazos, coberturas e orientações estão disponíveis na nossa página de Garantias.',
    link: {
      label: 'Consultar garantias',
      to: '/cuidados-e-garantias#garantias',
    },
  },
  {
    question: 'Minha armação quebrou. O que devo fazer?',
    answer:
      'Fale com a gente. Nossa equipe avaliará a armação para verificar a possibilidade de ajuste, conserto ou outras soluções disponíveis.',
  },
  {
    question: 'Como devo limpar meus óculos?',
    answer:
      'Lave com água e sabão neutro e seque com um pano de microfibra limpo. Para mais orientações, consulte nosso Guia de Cuidados.',
    link: {
      label: 'Ver cuidados com meus óculos',
      to: '/cuidados-e-garantias#cuidados',
    },
  },
  {
    question: 'Vocês fazem atendimento domiciliar?',
    answer:
      'Sim. A MP Eyewear também vai até você. Nosso atendimento domiciliar é realizado mediante agendamento. Fale com a gente para consultar disponibilidade.',
    link: {
      label: 'Agendar atendimento',
      whatsappKey: 'visitas',
    },
  },
];

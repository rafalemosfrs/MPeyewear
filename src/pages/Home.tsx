import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, MapPin, Eye, Glasses, Wrench, Sparkles, Heart, Compass } from 'lucide-react';
import SEO from '@/components/SEO';
import WhatsAppLink from '@/components/WhatsAppLink';
import FAQ from '@/components/FAQ';
import { siteConfig, type WhatsAppMessageKey } from '@/config/site';

const services: { title: string; description: string; key: WhatsAppMessageKey; icon: typeof Eye }[] = [
  { title: 'Escolhas com orientação', description: 'Armações e lentes que fazem sentido para seu rosto, sua rotina e sua prescrição.', key: 'armações', icon: Glasses },
  { title: 'Atendimento de perto', description: 'Uma conversa para entender o que você precisa, com tempo e atenção de verdade.', key: 'presencial', icon: Heart },
  { title: 'Ajustes e consertos', description: 'Conforto também está nos detalhes. Conte com a gente para avaliar seus óculos.', key: 'manutenção', icon: Wrench },
  { title: 'Cuidado que continua', description: 'Higienização, conservação e apoio na adaptação. Estamos por aqui depois da compra.', key: 'higienização', icon: Sparkles },
];
const faqItems = [
  { question: 'Preciso agendar meu atendimento?', answer: 'Fale com a gente pelo WhatsApp para consultar os horários e combinar sua visita. Assim, orientamos você antes de chegar.' },
  { question: 'Vocês fazem ajustes e consertos?', answer: 'Sim. Avaliamos a armação na loja para indicar os ajustes ou reparos possíveis. Conte o que aconteceu pelo WhatsApp e orientaremos o próximo passo.' },
  { question: 'Como escolher as lentes certas?', answer: 'A escolha depende da sua prescrição e de como você usa os óculos no dia a dia. Nosso guia de lentes apresenta as opções; na loja, ajudamos você a entender cada uma.' },
  { question: 'Como é o atendimento após a compra?', answer: 'Seguimos à disposição para ajustes, orientações sobre conservação e dúvidas de adaptação. É só entrar em contato.' },
];
export default function Home() {
  return <>
    <SEO title="Um novo olhar começa aqui" description="MP Eyewear. Óculos, orientação e cuidado próximo em Fortaleza. Descubra um novo jeito de olhar." path="/" />
    <section className="home-hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="small-line" /> MY PRINCESS · MP EYEWEAR</div>
        <h1>Um novo<br />olhar começa<br /><em>aqui.</em><span className="hero-period" aria-hidden="true">✳</span></h1>
        <p>Óculos que acompanham quem você é.<br className="desktop-break" /> Cuidado para tudo o que você quer ver.</p>
        <div className="hero-actions"><WhatsAppLink messageKey="armações">Encontre seu novo olhar <ArrowUpRight size={18} /></WhatsAppLink><a href="#nosso-jeito" className="text-link">Conheça a MP <ArrowDown size={15} /></a></div>
        <div className="hero-location"><MapPin size={13} /> FORTALEZA, CE <span>ATENDIMENTO PRÓXIMO. ESCOLHAS COM CALMA.</span></div>
      </div>
      <div className="hero-art">
        <img src="/assets/images/eyewear-editorial.jpg" alt="Óculos de sol redondos com armação dourada sobre uma superfície clara" width="1600" height="1600" loading="eager" />
        <span className="hero-art-label">O ESSENCIAL É O SEU OLHAR.</span>
        <div className="optical-disc" aria-hidden="true" />
        <div className="hero-glass-note"><span className="note-icon"><Eye size={23} strokeWidth={1.3} /></span><div><span>ESTILO & CUIDADO</span><p>Feitos para acompanhar<br />seu jeito de ver a vida.</p></div><ArrowUpRight size={21} /></div>
        <span className="photo-caption">UM NOVO PONTO DE VISTA — MP EYEWEAR</span>
      </div>
    </section>
    <div className="brand-strip" aria-label="Estilo, conforto e cuidado"><span>Seu estilo.</span><span aria-hidden="true">✳</span><span>Seu conforto.</span><span aria-hidden="true">✳</span><span>Seu novo olhar.</span><span aria-hidden="true">✳</span><span className="strip-signature">MP EYEWEAR</span></div>
    <section id="nosso-jeito" className="section-padding about-section"><div className="container-max about-grid">
      <div className="about-photo" data-reveal><img src="/assets/images/eyewear-portrait.jpg" alt="Detalhe de uma armação de óculos sobre um livro aberto" width="1600" height="1067" loading="lazy" /><span className="photo-index">01 / NOSSO JEITO DE CUIDAR</span></div>
      <div className="about-copy" data-reveal><span className="eyebrow">MUITO ALÉM DA ARMAÇÃO</span><h2>É sobre você.<br /><em>E como você vê.</em></h2><p>Tem o óculos que combina com seu rosto. O que fica confortável o dia inteiro. E aquele que faz você se reconhecer no espelho.</p><p>Na MP Eyewear, a gente ajuda a encontrar esse encontro. Com escuta, orientação e cuidado que continua depois da escolha.</p><Link to="/contato" className="text-link">Vamos nos conhecer <ArrowUpRight size={18} /></Link></div>
    </div></section>
    <section id="servicos" className="section-padding services-section"><div className="container-max">
      <div className="section-intro"><div><span className="eyebrow">DA ESCOLHA AO DIA A DIA</span><h2>O cuidado está<br /><em>nos detalhes.</em></h2></div><p>Uma ótica por perto.<br />Em cada etapa dos seus óculos.</p></div>
      <div className="service-list">{services.map((service, i) => <WhatsAppLink key={service.title} messageKey={service.key} variant="ghost" className="service-row"><span className="service-number">0{i + 1}</span><service.icon className="service-icon" size={26} strokeWidth={1.3} /><h3>{service.title}</h3><p>{service.description}</p><span className="round-arrow"><ArrowUpRight size={22} /></span></WhatsAppLink>)}</div>
      <div className="service-footnote"><Compass size={17} /><p>Precisa de uma visita ou atendimento combinado?</p><WhatsAppLink messageKey="visitas" variant="ghost">Consulte as opções <ArrowUpRight size={15} /></WhatsAppLink></div>
    </div></section>
    <section className="section-padding guide-section"><div className="container-max">
      <div className="section-intro"><div><span className="eyebrow">UM POUCO MAIS DE CLAREZA</span><h2>Para ver.<br /><em>Para entender.</em></h2></div><p>Informação simples para escolher melhor<br />e cuidar do que faz parte de você.</p></div>
      <div className="guide-grid"><Link to="/lentes" className="guide-feature"><img src="/assets/images/eyewear-portrait.jpg" alt="Armação de óculos com lentes transparentes" width="1600" height="1067" loading="lazy" /><div className="guide-feature-content"><span className="eyebrow">GUIA 01 / LENTES E VISÃO</span><h3>Cada rotina,<br />uma forma de ver.</h3><span className="text-link">Entenda suas lentes <ArrowUpRight size={20} /></span></div></Link>
      <div className="guide-side"><Link to="/cuidados-e-garantias" className="guide-small"><span className="eyebrow">GUIA 02 / CUIDADOS</span><Sparkles size={29} strokeWidth={1} /><h3>Pequenos hábitos.<br />Óculos bem cuidados.</h3><span>Aprenda a conservar <ArrowUpRight size={21} /></span></Link><Link to="/cuidados-e-garantias#garantias" className="guide-small guide-small-dark"><span className="eyebrow">GUIA 03 / GARANTIAS</span><h3>A gente continua<br />aqui por você.</h3><span>Entenda como pedir ajuda <ArrowUpRight size={21} /></span></Link></div></div>
    </div></section>
    <section className="kids-invitation"><div className="container-max kids-invitation-grid">
      <div><span className="eyebrow">ASTRO MP / ESPAÇO INFANTIL</span><h2>Pequenos olhares.<br /><em>Grandes descobertas.</em></h2><p>Conheça o Astro e um universo de cuidado, imaginação e novas aventuras com os óculos.</p><Link to="/espaco-infantil" className="btn-primary">Explorar esse universo <ArrowUpRight size={18} /></Link></div>
      <div className="astro-duo"><div className="astro-orbit" aria-hidden="true" /><img src="/assets/images/astro-blue.jpeg" alt="Astro MP azul e vermelho, mascote de óculos em formato de foguete" width="1024" height="1024" loading="lazy" /><img src="/assets/images/astro-pink.jpeg" alt="Astro MP rosa e lilás" width="1024" height="1024" loading="lazy" /><span className="astro-spark" aria-hidden="true">✦</span></div>
    </div></section>
    <section className="section-padding faq-section"><div className="container-max faq-grid"><div><span className="eyebrow">PODE PERGUNTAR</span><h2>Uma boa conversa<br /><em>esclarece tudo.</em></h2><WhatsAppLink messageKey="general" variant="ghost" className="text-link">Tenho outra dúvida <ArrowUpRight size={18} /></WhatsAppLink></div><FAQ items={faqItems} /></div></section>
    <section className="visit-strip"><div className="container-max"><div><span className="eyebrow">DE PORTAS ABERTAS, EM FORTALEZA</span><h2>Seu próximo olhar<br />pode começar com um <em>olá.</em></h2></div><a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Venha nos visitar <ArrowUpRight size={18} /></a></div></section>
  </>;
}

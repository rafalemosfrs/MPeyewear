import { useState } from 'react';
import { Star, ArrowUpRight, Package, Hand, Bell, Heart, Sparkles, ShieldCheck, Compass, Check, RotateCcw } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import WhatsAppLink from '@/components/WhatsAppLink';
const missions = [
  { id: 'case', title: 'Cada nave tem sua base.', text: 'Guardar os óculos no estojo quando não estiver usando.', icon: Package },
  { id: 'clean', title: 'Visão pronta para decolar.', text: 'Pedir ajuda a um adulto para limpar os óculos.', icon: Sparkles },
  { id: 'hands', title: 'Duas mãos, muito cuidado.', text: 'Usar as duas mãos ao colocar e retirar os óculos.', icon: Hand },
  { id: 'help', title: 'Pedir ajuda também é missão.', text: 'Avisar quando os óculos apertarem ou escorregarem.', icon: Bell },
];
const parentTips = [
  { icon: Heart, title: 'Acolha cada descoberta', description: 'Valorize o uso dos óculos de forma positiva. Respeite o tempo da criança, sem pressão ou cobrança.' },
  { icon: Star, title: 'Deixe a criança participar', description: 'Quando possível, inclua a criança na escolha da armação. Reconhecer-se nos óculos faz parte da adaptação.' },
  { icon: ShieldCheck, title: 'Observe e acompanhe', description: 'Respeite as sensibilidades sensoriais. Se houver desconforto, procure a loja para avaliar o ajuste.' },
  { icon: Compass, title: 'Cuidado em equipe', description: 'Crie uma rotina de cuidados e mantenha o acompanhamento com o profissional de saúde ocular.' },
];
export default function Kids() {
  const [theme, setTheme] = useState<'blue' | 'pink'>('blue');
  const mascot = theme === 'blue'
    ? { name: 'Astro', article: 'o', companion: 'SEU COMPANHEIRO', partner: 'Seu parceiro' }
    : { name: 'Astra', article: 'a', companion: 'SUA COMPANHEIRA', partner: 'Sua parceira' };
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setCompleted(previous => { const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  return <div className={`kids-world kids-theme-${theme}`}>
    <SEO title={`${mascot.name} MP · Espaço Infantil`} description={`Um universo de cuidado com ${mascot.article} ${mascot.name} MP. Pequenas missões para cuidar dos óculos e orientações para toda a família.`} path="/espaco-infantil" />
    <section className="kids-hero"><div className="kids-stars" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i} style={{ left: `${(i * 37 + 7) % 96}%`, top: `${(i * 23 + 11) % 93}%`, fontSize: 10 + i % 4 * 5 }}>✦</span>)}</div>
      <div className="container-max kids-hero-grid"><div className="kids-hero-copy"><span className="eyebrow">MP EYEWEAR / PEQUENOS EXPLORADORES</span><h1>Um universo<br />inteiro para<br /><em>descobrir.</em></h1><p>Com {mascot.article} {mascot.name}, cuidar dos óculos vira uma pequena aventura. Vamos embarcar nessa juntos?</p><a href="#missoes" className="btn-astros">Começar a missão <ArrowUpRight size={18} /></a><div className="astro-selector" role="group" aria-label="Escolha seu mascote"><span>{mascot.companion} DE AVENTURA</span><div><button type="button" className="swatch-blue" aria-pressed={theme === 'blue'} onClick={() => setTheme('blue')}><span />Astro azul</button><button type="button" className="swatch-pink" aria-pressed={theme === 'pink'} onClick={() => setTheme('pink')}><span />Astra rosa</button></div></div></div>
      <div className="kids-mascot"><div className="mascot-orbit orbit-one" aria-hidden="true" /><div className="mascot-orbit orbit-two" aria-hidden="true" /><img key={theme} src={`/assets/images/astro-${theme}.jpeg`} alt={theme === 'blue' ? 'Astro MP azul e vermelho, um foguete sorridente de óculos' : 'Astra MP rosa e lilás, um foguete sorridente de óculos'} width="1024" height="1024" loading="eager" /><div className="mascot-note"><Star size={21} /><p>Oi, eu sou {mascot.article} {mascot.name}!<span>{mascot.partner} em cada novo olhar.</span></p></div></div>
      </div></section>
    <section className="mission-section section-padding" id="missoes"><div className="container-max" data-reveal><div className="section-intro"><div><span className="eyebrow">DIÁRIO DE BORDO</span><h2>Pequenas missões.<br /><em>Grandes cuidados.</em></h2></div><p>Marque os cuidados que você já pratica.<br />Cada pequeno gesto conta!</p></div>
      <div className="mission-progress"><div><Star size={20} /><span aria-live="polite">{completed.size === missions.length ? 'Missão cumprida! Você cuida muito bem dos seus óculos.' : `${completed.size} de ${missions.length} missões concluídas`}</span></div><progress value={completed.size} max={missions.length} aria-label="Missões concluídas" />{completed.size > 0 && <button type="button" onClick={() => setCompleted(new Set())}><RotateCcw size={14} /> Recomeçar</button>}</div>
      <div className="missions-grid">{missions.map((mission, index) => <button type="button" key={mission.id} onClick={() => toggle(mission.id)} aria-pressed={completed.has(mission.id)} className={`mission-card${completed.has(mission.id) ? ' completed' : ''}`}><span className="mission-card-top"><span className="eyebrow">MISSÃO 0{index + 1}</span><span className="mission-check">{completed.has(mission.id) && <Check size={16} />}</span></span><mission.icon size={30} strokeWidth={1.3} /><h3>{mission.title}</h3><p>{mission.text}</p><span className="mission-status">{completed.has(mission.id) ? 'Missão concluída!' : 'Eu já faço isso'}<ArrowUpRight size={16} /></span></button>)}</div><p className="mission-privacy">As marcações duram enquanto você estiver nesta página. Sem cadastro, só descobertas.</p>
    </div></section>
    <section className="section-padding parent-section"><div className="container-max" data-reveal><div className="section-intro"><div><span className="eyebrow">PARA QUEM CUIDA</span><h2>Crescer é melhor<br /><em>com apoio por perto.</em></h2></div><p>Cada criança tem seu ritmo.<br />O cuidado começa por respeitar isso.</p></div><div className="parent-tips">{parentTips.map(tip => <article key={tip.title}><tip.icon size={25} strokeWidth={1.3} /><h3>{tip.title}</h3><p>{tip.description}</p></article>)}</div><div className="parent-note"><Heart size={18} /><p>A resistência ao uso dos óculos não é desobediência. Acolhimento e orientação profissional fazem parte dessa jornada.</p></div></div></section>
    <section className="explorers-section section-padding"><div className="container-max explorers-grid" data-reveal><div className="explorers-art"><img src="/assets/images/astro-blue.jpeg" alt="Astro MP azul" width="1024" height="1024" loading="lazy" /><img src="/assets/images/astro-pink.jpeg" alt="Astra MP rosa" width="1024" height="1024" loading="lazy" /></div><div><span className="coming-soon">EM BREVE / NOVAS DESCOBERTAS</span><h2>A aventura<br /><em>vai continuar.</em></h2><p>Desenhos para colorir, histórias e atividades para levar o universo d{mascot.article} {mascot.name} para casa. Novas missões estão a caminho.</p><WhatsAppLink messageKey="exploradores" variant="ghost" className="text-link">Saber mais sobre o projeto <ArrowUpRight size={18} /></WhatsAppLink></div></div></section>
    <section className="section-padding kids-contact"><div className="container-max max-w-3xl" data-reveal><CTASection title="Vamos cuidar desse pequeno olhar?" message="Conte com a gente para conversar sobre armações infantis, conforto e cuidados com os óculos do seu filho." buttonLabel="Conversar sobre óculos infantis" messageKey="infantil" icon={Heart} variant="astros" /></div></section>
  </div>;
}

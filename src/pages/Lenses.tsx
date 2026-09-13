import PageHero from '@/components/PageHero';
import { Eye, Layers, Cpu, Sparkles, Shield, Sun, CheckCircle2, AlertCircle, Compass } from 'lucide-react';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import GlassPanel from '@/components/GlassPanel';
import CTASection from '@/components/CTASection';
import { type LucideIcon } from 'lucide-react';

type LensType = { icon: LucideIcon; title: string; description: string };

const lensTypes: LensType[] = [
  { icon: Eye, title: 'Lentes de visão simples', description: 'Destinadas a uma necessidade de correção definida — miopia, hipermetropia ou astigmatismo. Têm um único foco para enxergar de longe ou de perto.' },
  { icon: Layers, title: 'Lentes multifocais', description: 'Possuem diferentes regiões para visão de longe, intermediária e de perto, permitindo enxergar em várias distâncias com a mesma lente.' },
  { icon: Cpu, title: 'Lentes digitais', description: 'O termo "digital" se refere ao processo de fabricação com tecnologia digital, que permite maior precisão. Não é necessariamente uma categoria separada — pode ser aplicada tanto a lentes de visão simples quanto multifocais.' },
  { icon: Sparkles, title: 'Tecnologia Free Form', description: 'O Free Form é um processo de fabricação que personaliza o desenho óptico da lente de acordo com a prescrição e características do usuário. Diferencie: processo de fabricação, desenho óptico e personalização são aspectos complementares, não independentes.' },
];

const treatments = [
  { icon: Eye, title: 'Antirreflexo', description: 'Reduz reflexos indesejados na superfície da lente, melhorando o conforto visual em diversas situações.' },
  { icon: Shield, title: 'Proteção UV', description: 'Ajuda a filtrar a radiação ultravioleta. O nível de proteção varia conforme o produto.' },
  { icon: Sparkles, title: 'Resistência a riscos', description: 'Tratamentos que aumentam a durabilidade da lente contra riscos do uso diário. A resistência depende do produto e do fabricante.' },
  { icon: Sun, title: 'Fotossensíveis', description: 'Lentes que escurecem com a luz do sol e clareiam em ambientes internos. A resposta varia conforme o produto.' },
];

const adaptationSteps = [
  { title: 'Reconheça as áreas da lente', description: 'Nos multifocais, a parte superior é para longe, a intermediária para distâncias médias e a inferior para perto.' },
  { title: 'Movimentos dos olhos e da cabeça', description: 'Acostume a mover a cabeça em direção ao que deseja olhar, em vez de apenas virar os olhos para os lados.' },
  { title: 'Uso nas atividades do cotidiano', description: 'Para ler, mantenha o texto na altura natural dos olhos e use a parte inferior da lente.' },
  { title: 'Atenção ao caminhar e usar escadas', description: 'Desça o olhar pela parte superior da lente, onde a visão de longe é mais nítida. Tenha cuidado extra nos primeiros dias.' },
  { title: 'Ajuste da armação', description: 'O bom posicionamento da armação é essencial para o funcionamento dos multifocais. Se escorregar, os campos visuais ficam desalinhados.' },
  { title: 'Quando procurar a loja', description: 'Se após algum tempo os óculos continuarem incômodos ou mal ajustados, procure a loja para verificar ajustes e medidas.' },
  { title: 'Quando buscar um profissional de saúde ocular', description: 'Se houver sintomas persistentes como dor de cabeça, tontura ou visão embaralhada que não melhoram, busque avaliação de um profissional de saúde ocular.' },
];

export default function Lenses() {
  return (
    <>
      <SEO title="Lentes e visão" description="Guia sobre lentes de visão simples, multifocais, tecnologia digital, Free Form, tratamentos e adaptação aos multifocais." path="/lentes" />

      <PageHero number="01" eyebrow="Lentes e visão" title={<>Mais clareza.<br /><em>Em cada olhar.</em></>} description="Cada rotina pede uma forma de ver. Conheça os tipos de lentes, seus recursos e os cuidados na adaptação." ><div className="hero-actions"><a href="#tipos-de-lentes" className="btn-primary">Conheça as opções</a><a href="#adaptacao" className="text-link">Adaptação aos multifocais</a></div></PageHero>

      <section id="tipos-de-lentes" className="section-padding bg-mp-50">
        <div className="container-max">
          <SectionHeading eyebrow="Tipos de lentes" title="Conheça as opções" />
          <div className="grid gap-6 sm:grid-cols-2">
            {lensTypes.map((lens) => (
              <GlassPanel key={lens.title} variant="princess" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mp-100 rounded-xl p-3 flex-shrink-0">
                    <lens.icon className="h-6 w-6 text-mp-800" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-mp-950 mb-2">{lens.title}</h3>
                    <p className="text-sm text-mp-700 leading-relaxed">{lens.description}</p>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-mp-100 to-mp-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Comparação" title="Visão simples x multifocais" subtitle="A escolha depende da sua prescrição, da rotina e da orientação adequada." />
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <GlassPanel variant="princess" className="p-6">
              <h3 className="font-display text-lg font-semibold text-mp-800 mb-3">Visão simples</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Um único foco de correção</li>
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Indicada para uma necessidade específica</li>
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Adaptação geralmente mais simples</li>
              </ul>
            </GlassPanel>
            <GlassPanel variant="princess" className="p-6">
              <h3 className="font-display text-lg font-semibold text-mp-800 mb-3">Multifocais</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Múltiplas distâncias na mesma lente</li>
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Para quem precisa de longe e perto</li>
                <li className="flex items-start gap-2 text-sm text-mp-700"><CheckCircle2 className="h-4 w-4 text-mp-600 mt-0.5 flex-shrink-0" /> Exige período de adaptação</li>
              </ul>
            </GlassPanel>
          </div>
          <div className="flex items-start gap-3 mt-6 max-w-3xl mx-auto glass-princess p-5">
            <AlertCircle className="h-5 w-5 text-mp-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-mp-700">A escolha entre visão simples e multifocais depende da prescrição, da rotina e da orientação adequada. Fale conosco para entender qual atende à sua necessidade.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mp-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Tratamentos e recursos" title="Recursos disponíveis nas lentes" subtitle="Conforme os produtos efetivamente oferecidos pela loja." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => (
              <GlassPanel key={t.title} variant="princess" className="p-5 text-center">
                <div className="mx-auto bg-mp-100 rounded-xl p-3 w-fit mb-3">
                  <t.icon className="h-6 w-6 text-mp-800" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-mp-950 mb-2">{t.title}</h3>
                <p className="text-xs text-mp-600 leading-relaxed">{t.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section id="adaptacao" className="section-padding bg-gradient-to-b from-mp-100 to-mp-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Guia de adaptação" title="Adaptação aos multifocais" subtitle="Orientações para se adaptar com segurança e tranquilidade. Não há um prazo universal — cada pessoa tem seu ritmo." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {adaptationSteps.map((step, i) => (
              <GlassPanel key={step.title} variant="princess" className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-mp-800 text-mp-50 rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold flex-shrink-0">{i + 1}</span>
                  <h3 className="font-display text-base font-semibold text-mp-950">{step.title}</h3>
                </div>
                <p className="text-sm text-mp-700 leading-relaxed">{step.description}</p>
              </GlassPanel>
            ))}
          </div>
          <div className="flex items-start gap-3 mt-6 max-w-3xl mx-auto glass-princess p-5">
            <AlertCircle className="h-5 w-5 text-mp-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-mp-700">Não estabelecemos um prazo universal de adaptação. Se houver sintomas persistentes, não os ignore — procure a loja ou um profissional de saúde ocular.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-mp-50">
        <div className="container-max grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <CTASection title="Quero conhecer as opções de lentes" message="Fale com a My Princess para entender qual lente atende à sua necessidade." buttonLabel="Conhecer lentes" messageKey="lentes" icon={Eye} />
          <CTASection title="Preciso de ajuda com meus multifocais" message="Se está em adaptação ou tem dúvidas, estamos aqui para orientar." buttonLabel="Pedir ajuda" messageKey="multifocais" icon={Compass} />
        </div>
      </section>
    </>
  );
}

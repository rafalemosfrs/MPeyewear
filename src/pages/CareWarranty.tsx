import PageHero from '@/components/PageHero';
import { Sparkles, Wrench, Shield, Droplets, Package, Hand, ThermometerSun, AlertCircle, Stethoscope } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/SectionHeading';
import GlassPanel from '@/components/GlassPanel';
import CTASection from '@/components/CTASection';
import WhatsAppLink from '@/components/WhatsAppLink';

type CareStep = { icon: LucideIcon; title: string; description: string };

const careSteps: CareStep[] = [
  { icon: Droplets, title: 'Como lavar e secar', description: 'Use água corrente e um pouco de sabão neutro. Seque com flanela de microfibra limpa, sem esfregar com força.' },
  { icon: Package, title: 'Como conservar e guardar', description: 'Guarde os óculos no estojo quando não estiver usando. Evite deixar as lentes em contato com superfícies duras.' },
  { icon: Sparkles, title: 'Cuidados com a flanela', description: 'Mantenha a flanela limpa. Se ficar suja, pequenas partículas podem riscar as lentes ao limpar.' },
  { icon: Hand, title: 'Como colocar e retirar', description: 'Use sempre as duas mãos para colocar e retirar os óculos, segurando pelas hastes. Isso evita que a armação fique desalinhada.' },
  { icon: ThermometerSun, title: 'O que evitar', description: 'Evite calor excessivo (painel do carro, secador), atrito com tecidos ásperos, produtos químicos (álcool, solventes) e armazenamento sem estojo.' },
  { icon: AlertCircle, title: 'Empenados ou desalinhados', description: 'Se os óculos estiverem empenados ou desalinhados, não tente ajustar em casa. Aquecer ou forçar a armação pode danificá-la.' },
];

const warrantyTypes = [
  { title: 'Garantia da armação', description: 'Algo aconteceu com sua armação? Conte o que houve para orientarmos a avaliação e as condições aplicáveis.' },
  { title: 'Garantia das lentes', description: 'Consulte a cobertura das suas lentes e tratamentos. As condições dependem do produto adquirido.' },
  { title: 'Garantia de adaptação', description: 'Está com dificuldade para se adaptar? Fale com a loja para verificar ajustes e as condições da sua compra.' },
];

const warrantySteps = [
  { title: 'Entrar em contato', description: 'Fale com a My Princess pelo WhatsApp para relatar o que aconteceu.' },
  { title: 'Relatar o ocorrido', description: 'Descreva a situação com detalhes para que possamos orientar da melhor forma.' },
  { title: 'Receber orientação', description: 'Vamos orientar sobre informações, documentos e se é necessária uma avaliação presencial.' },
  { title: 'Acompanhar a análise', description: 'Você acompanha a análise e as possibilidades de solução ao longo do processo.' },
];

export default function CareWarranty() {
  return (
    <>
      <SEO title="Cuidados e garantias" description="Guia de cuidados com os óculos e informações sobre garantias. Como lavar, guardar, conservar e solicitar avaliação." path="/cuidados-e-garantias" />

      <PageHero number="02" eyebrow="Cuidados e garantias" title={<>Cuidar hoje.<br /><em>Ver bem amanhã.</em></>} description="Seus óculos acompanham você todos os dias. Alguns cuidados fazem a diferença — e, quando precisar, estamos por perto." ><div className="hero-actions"><a href="#cuidados" className="btn-primary">Cuidados com os óculos</a><a href="#garantias" className="text-link">Sobre garantias</a></div></PageHero>

      <section id="cuidados" className="section-padding bg-mp-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Cuidados com os óculos" title="Guia ilustrado de cuidados" subtitle="As orientações respeitam as recomendações dos fabricantes. Não recomendamos solventes, misturas caseiras ou procedimentos que possam danificar lentes e tratamentos." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careSteps.map((step) => (
              <GlassPanel key={step.title} variant="princess" className="p-6">
                <div className="bg-mp-100 rounded-xl p-3 w-fit mb-4">
                  <step.icon className="h-6 w-6 text-mp-800" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-mp-950 mb-2">{step.title}</h3>
                <p className="text-sm text-mp-700 leading-relaxed">{step.description}</p>
              </GlassPanel>
            ))}
          </div>
          <div className="flex items-start gap-3 mt-6 max-w-2xl mx-auto glass-princess p-5">
            <AlertCircle className="h-5 w-5 text-mp-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-mp-700">Ajustes e consertos devem ser avaliados pela loja. Não tente aquecer ou forçar a armação em casa.</p>
          </div>
          <div className="text-center mt-8">
            <WhatsAppLink messageKey="manutenção">
              <Wrench className="h-4 w-4" /> Meus óculos precisam de um ajuste
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="garantias" className="section-padding bg-gradient-to-b from-mp-100 to-mp-50">
        <div className="container-max">
          <SectionHeading center eyebrow="Garantias" title="Conte com orientação em cada etapa" subtitle="As condições variam conforme o produto e o fabricante. Converse com a gente para consultar a cobertura da sua compra." />
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-12">
            {warrantyTypes.map((w) => (
              <GlassPanel key={w.title} variant="princess" className="p-6">
                <Shield className="h-7 w-7 text-mp-800 mb-3" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-mp-950 mb-4">{w.title}</h3>
                <p className="text-sm text-mp-700 leading-relaxed">{w.description}</p><WhatsAppLink messageKey="garantia" variant="ghost" className="mt-4 text-xs">Consultar condições ↗</WhatsAppLink>
              </GlassPanel>
            ))}
          </div>
          <div className="flex items-start gap-3 max-w-2xl mx-auto glass-princess p-5 mb-10">
            <AlertCircle className="h-5 w-5 text-mp-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-mp-700">
              As condições comerciais e garantias do fabricante são diferentes dos direitos legais do consumidor.
              Consulte as condições aplicáveis à sua compra entrando em contato com a My Princess.
            </p>
          </div>
          <SectionHeading center title="Como solicitar uma avaliação" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {warrantySteps.map((step, i) => (
              <GlassPanel key={step.title} variant="princess" className="p-5 text-center">
                <div className="bg-mp-800 text-mp-50 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mx-auto mb-3">{i + 1}</div>
                <h3 className="font-display text-sm font-semibold text-mp-950 mb-1">{step.title}</h3>
                <p className="text-xs text-mp-600 leading-relaxed">{step.description}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mp-50">
        <div className="container-max max-w-2xl">
          <CTASection
            title="Solicitar avaliação dos meus óculos"
            message="Entre em contato pelo WhatsApp para relatar o que aconteceu e receber orientação sobre as condições de garantia aplicáveis à sua compra."
            buttonLabel="Solicitar avaliação"
            messageKey="garantia"
            icon={Stethoscope}
          />
        </div>
      </section>
    </>
  );
}

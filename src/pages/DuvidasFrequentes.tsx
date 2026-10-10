
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { faqMore } from '@/faqData';
import WhatsAppLink from '@/components/WhatsAppLink';

export default function DuvidasFrequentes() {
  return (
    <>
      <SEO
        title="Dúvidas frequentes"
        description="Encontre respostas sobre óculos, lentes, receitas, garantias, cuidados e atendimento da MP Eyewear."
        path="/duvidas-frequentes"
      />

      <header className="faq-page-hero">
        <div className="container-max">

          <span className="eyebrow">
            MP EYEWEAR / DÚVIDAS FREQUENTES
          </span>

          <h1>
            Ficou alguma
            <br />
            <em>dúvida?</em>
          </h1>

          <p>
            Reunimos algumas respostas para facilitar
            sua experiência com a MP Eyewear.
          </p>

        </div>
      </header>

      <section className="faq-page-content">
        <div className="container-max faq-page-grid">

          <div className="faq-page-intro">
            <span className="eyebrow">
              PERGUNTAS E RESPOSTAS
            </span>

            <h2>
              Tudo mais
              <br />
              <em>simples para você.</em>
            </h2>

            <p>
              Informações sobre lentes, armações,
              cuidados, garantias e atendimento.
            </p>
          </div>

          <div>
            <FAQ items={faqMore} />
          </div>

        </div>
      </section>

      <section className="faq-contact-section">
        <div className="container-max faq-contact-inner">

          <MessageCircle
            size={32}
            strokeWidth={1.3}
          />

          <span className="eyebrow">
            ESTAMOS POR AQUI
          </span>

          <h2>
            Ainda precisa
            <br />
            <em>de ajuda?</em>
          </h2>

          <p>
            Nossa equipe está disponível para
            conversar e orientar você.
          </p>

          <WhatsAppLink messageKey="general">
            Fale conosco
            <ArrowUpRight size={18} />
          </WhatsAppLink>

        </div>
      </section>
    </>
  );
}

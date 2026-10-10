
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import WhatsAppLink from '@/components/WhatsAppLink';
import FAQ from '@/components/FAQ';
import { faqHome } from '@/faqData';
import { siteConfig } from '@/config/site';


export default function Home() {
  return (
    <>
      <SEO
        title="Um novo olhar começa aqui"
        description="MP Eyewear. Óculos escolhidos com cuidado para acompanhar você. Fortaleza, CE."
        path="/"
      />

      <section className="home-hero home-hero-compact">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="small-line" />
            MP EYEWEAR
          </span>

          <h1>
            Um novo
            <br />
            olhar começa
            <br />
            <em>aqui.</em>
          </h1>

          <p>
            Óculos escolhidos com cuidado
            <br />
            para acompanhar você.
          </p>

          <div className="hero-actions">
            <Link to="/quem-somos" className="btn-primary">
              Conheça a MP
              <ArrowUpRight size={18} />
            </Link>

            <WhatsAppLink
              messageKey="general"
              variant="secondary"
            >
              Fale conosco
              <ArrowUpRight size={18} />
            </WhatsAppLink>
          </div>

          <div className="hero-location">
            <MapPin size={15} />
            FORTALEZA, CE
          </div>
        </div>

        <div className="hero-art">
          <img
            src="/assets/images/eyewear-editorial.jpg"
            alt="Óculos da MP Eyewear"
            width="1600"
            height="1600"
            loading="eager"
          />
        </div>
      </section>
      
<section className="home-faq-section">
  <div className="container-max home-faq-grid">

    <div className="home-faq-intro">
      <span className="eyebrow">
        DÚVIDAS FREQUENTES
      </span>

      <h2>
        Alguma <em>dúvida?</em>
      </h2>

      <Link
        to="/duvidas-frequentes"
        className="text-link"
      >
        Ver todas as dúvidas
        <ArrowUpRight size={18} />
      </Link>
    </div>

    <FAQ items={faqHome} />

  </div>
</section>

<section className="visit-strip">
  <div className="container-max">
    <div>
      <span className="eyebrow">
        DE PORTAS ABERTAS, EM FORTALEZA
      </span>

      <h2>
        Seu próximo olhar
        <br />
        pode começar com um <em>olá.</em>
      </h2>
    </div>

    <a
      href={siteConfig.address.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary"
    >
      Venha nos visitar
      <ArrowUpRight size={18} />
    </a>
  </div>
</section>


    </>
  );
}

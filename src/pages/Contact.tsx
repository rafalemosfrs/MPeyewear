import {
  MapPin,
  Clock,
  ArrowUpRight,
  Navigation,
  Compass,
  Instagram,
  MessageCircle,
  Star
} from 'lucide-react';

import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import WhatsAppLink from '@/components/WhatsAppLink';
import { siteConfig } from '@/config/site';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contato e visitas"
        description="Converse com a MP Eyewear. Endereço, visitas e atendimento pelo WhatsApp em Fortaleza."
        path="/contato"
      />

      <PageHero
        number="04"
        eyebrow="Contato e visitas"
        title={
          <>
            Toda boa escolha
            <br />
            começa com um <em>olá.</em>
          </>
        }
        description="Tire uma dúvida, combine uma visita ou conte o que seus óculos precisam. A gente está aqui para ouvir."
      />

      <section className="section-padding contact-main">
        <div className="container-max contact-layout">
          <div className="contact-details">
            <span className="eyebrow">VAMOS CONVERSAR</span>

            <h2>
              De perto.
              <br />
              <em>Do seu jeito.</em>
            </h2>

            <p>
              Um atendimento que começa com você.
              <br />
              Fale diretamente com nossa equipe pelo WhatsApp.
            </p>

            <WhatsAppLink messageKey="general">
              Iniciar uma conversa <ArrowUpRight size={18} />
            </WhatsAppLink>

            <div className="contact-detail">
              <Star size={26} strokeWidth={1.3} />

              <div>
                <h3>WhatsApp</h3>
                <p>{siteConfig.whatsappDisplay}</p>
              </div>
            </div>

            <div className="contact-detail">
              <Clock size={20} />

              <div>
                <h3>Horários de atendimento</h3>

                <p>
                  Segunda a sexta: 14:30–18:30
                  <br />
                  Sábado: 09:30–15:00
                  <br />
                  Domingo: fechado
                </p>
              </div>
            </div>

            {siteConfig.instagram && (
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <Instagram size={16} />
                Siga a MP Eyewear
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <div className="location-panel">
            <div className="location-heading">
              <MapPin size={23} />
              <span className="eyebrow">
                NOSSO ENCONTRO É EM FORTALEZA
              </span>
            </div>

            <h2>Esperamos por você.</h2>

            <p>{siteConfig.address.fullAddress}</p>

            <div className="contact-map">
              <iframe
                src={siteConfig.address.mapsEmbedUrl}
                width="100%"
                height="310"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da MP Eyewear"
              />
            </div>

            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Abrir rota no Google Maps
              <Navigation size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding contact-options">
        <div className="container-max contact-options-grid">
          <article>
            <Compass size={26} strokeWidth={1.3} />

            <span className="eyebrow">
              UM JEITO QUE FUNCIONE PARA VOCÊ
            </span>

            <h2>Vamos combinar?</h2>

            <p>
              Precisa de uma visita ou de outro formato de atendimento?
              Consulte as opções disponíveis para o seu caso.
            </p>

            <WhatsAppLink
              messageKey="visitas"
              variant="ghost"
              className="text-link"
            >
              Conversar sobre uma visita
              <ArrowUpRight size={17} />
            </WhatsAppLink>
          </article>

<article>
  <MessageCircle size={26} strokeWidth={1.3} />

  <span className="eyebrow">
    A GENTE QUER OUVIR
  </span>

  <h2>Como foi sua experiência?</h2>

  <p>
    Sua opinião ajuda outras pessoas a conhecerem a MP Eyewear
    e nos ajuda a continuar melhorando nosso atendimento.
  </p>

  <a
    href={siteConfig.googleReviewUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-link"
  >
    Avaliar a MP Eyewear no Google
    <ArrowUpRight size={17} />
  </a>
</article>
        </div>
      </section>
    </>
  );
}
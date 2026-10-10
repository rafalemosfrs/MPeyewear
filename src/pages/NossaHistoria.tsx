
import { ArrowUpRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import WhatsAppLink from '@/components/WhatsAppLink';
import { siteConfig } from '@/config/site';

type HistorySectionProps = {
  number: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
};

function HistorySection({
  number,
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  imageLabel,
}: HistorySectionProps) {
  return (
    <section className="history-section">
      <div className="container-max history-grid">
        <div className="history-marker">
          <span>{number}</span>
        </div>

        <div className="history-content">
          {eyebrow && (
            <span className="eyebrow">{eyebrow}</span>
          )}

          <h2>{title}</h2>

          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {image && (
            <figure className="history-image">
              <img
                src={image}
                alt={imageAlt || title}
                loading="lazy"
              />

              {imageLabel && (
                <figcaption>{imageLabel}</figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

export default function NossaHistoria() {
  return (
    <>
      <SEO
        title="Nossa história"
        description="De My Princess a MP Eyewear. Conheça nossa trajetória desde 2014 e como nasceu nossa marca de óculos."
        path="/nossa-historia"
      />

      <header className="history-hero">
        <div className="container-max">
          <span className="eyebrow">
            MP EYEWEAR / NOSSA HISTÓRIA
          </span>

          <h1>
            De My Princess
            <br />
            <em>a MP Eyewear.</em>
          </h1>

          <p>
            Uma história que começou em 2014
            e continua sendo construída a cada dia.
          </p>

          <div className="history-period">
            <span>2014</span>
            <span className="history-period-line" />
            <span>HOJE</span>
          </div>
        </div>
      </header>

      <main className="history-timeline">
        <HistorySection
          number="01"
          eyebrow="2014 / O COMEÇO"
          title="Tudo começou com vontade de empreender."
          paragraphs={[
            'Em 2014, éramos um casal com muita vontade de empreender e uma ideia: criar uma loja de acessórios. Assim nasceu a My Princess.',
            'O nome veio de algo muito nosso. Meu esposo sempre me chamou de “Princesa” e, como eu seria o rosto da loja, foi ele quem escolheu o nome que daria início à nossa história.',
          ]}
          image="/assets/images/historia-casal-antiga.jpg"
          imageAlt="Fotografia antiga do casal na loja My Princess"
          imageLabel="2014 / NOSSOS PRIMEIROS PASSOS"
        />

        <HistorySection
          number="02"
          eyebrow="NOSSAS PRIMEIRAS FASES"
          title="Uma loja que também foi se descobrindo."
          paragraphs={[
            'Ao longo dos anos, a My Princess viveu diferentes fases.',
            'Tivemos bijuterias, bolsas, cintos, vestuário e outros acessórios. E, desde o início, os óculos de sol também estavam por ali.',
            'Com o tempo, começamos a observar melhor quem entrava na loja, o que nossos clientes procuravam e quais produtos faziam mais sentido para eles.',
            'E os óculos foram ganhando cada vez mais espaço.',
          ]}
          image="/assets/images/historia-loja-antiga.jpg"
          imageAlt="Fotografias antigas da loja My Princess"
          imageLabel="MY PRINCESS / DIFERENTES FASES"
        />

        <HistorySection
          number="03"
          eyebrow="UMA NOVA DIREÇÃO"
          title="Os óculos encontraram seu lugar. E nós também."
          paragraphs={[
            'Aos poucos, fomos deixando algumas categorias para trás e concentrando nosso trabalho naquilo que nossos clientes mais buscavam: óculos de sol e óculos de grau.',
            'O que antes era apenas uma das categorias da My Princess passou a ser o coração do negócio.',
            'Vieram mais conhecimento, novas experiências, novos serviços e uma relação cada vez mais próxima com o universo óptico.',
          ]}
        />

        <HistorySection
          number="04"
          eyebrow="O SONHO DA MARCA PRÓPRIA"
          title="Um sonho antigo começou a ganhar forma."
          paragraphs={[
            'Enquanto a ótica crescia, havia um desejo que nos acompanhava há bastante tempo: ter a nossa própria marca de óculos.',
            'Durante anos, esse projeto existiu primeiro como sonho. Até que, em 2025, chegou o momento de transformá-lo em realidade.',
          ]}
          image="/assets/images/historia-armacoes-mp.jpg"
          imageAlt="Armações da marca própria MP Eyewear"
          imageLabel="MP EYEWEAR / NOSSAS ARMAÇÕES"
        />

        <HistorySection
          number="05"
          eyebrow="DEZEMBRO DE 2025"
          title="Nasce a MP Eyewear."
          paragraphs={[
            'Em dezembro de 2025, nossa marca própria de óculos finalmente ganhou forma. E com ela nasceu a MP Eyewear.',
            'Queríamos um nome mais contemporâneo, que pudesse representar os diferentes estilos e pessoas que já faziam parte da nossa história.',
            'Mantivemos o MP, carregando conosco a origem da My Princess, e acrescentamos Eyewear, traduzindo aquilo que havia se tornado o nosso universo.',
            'A MP Eyewear nasceu como uma marca de armações. Mas logo percebemos que ela representava algo maior.',
          ]}
        />

        <HistorySection
          number="06"
          eyebrow="UMA IDENTIDADE QUE EVOLUIU"
          title="A marca cresceu. A nossa identidade também."
          paragraphs={[
            'O nome que nasceu para identificar nossos óculos passou a representar cada vez melhor aquilo em que a loja havia se transformado.',
            'A My Princess que começou com acessórios em 2014 havia encontrado sua essência no universo dos óculos.',
            'E a MP Eyewear passou, naturalmente, a representar de forma mais madura também essa fase da nossa história.',
          ]}
        />

        <section className="history-quote-section">
          <div className="container-max">
            <p>
              My Princess é a nossa origem.
              <br />
              <em>
                MP Eyewear é a continuação dessa história.
              </em>
            </p>
          </div>
        </section>

        <HistorySection
          number="07"
          eyebrow="2014 → HOJE"
          title="E ainda temos muita história para construir."
          paragraphs={[
            'Muita coisa mudou desde 2014.',
            'Mudaram os produtos. Mudou a loja. Mudou o nome.',
            'Mas continuamos aprendendo com cada pessoa que passa por aqui e acreditando que escolher um óculos também pode ser uma experiência de cuidado, identidade e descoberta.',
            'E ainda temos muita história para construir.',
          ]}
          image="/assets/images/historia-casal-atual.jpg"
          imageAlt="Fotografia atual do casal na MP Eyewear"
          imageLabel="MP EYEWEAR / NOSSA HISTÓRIA CONTINUA"
        />
      </main>

      <section className="history-final-cta">
        <div className="container-max">
          <span className="eyebrow">
            SUA HISTÓRIA TAMBÉM IMPORTA
          </span>

          <h2>
            Um novo olhar
            <br />
            <em>começa aqui.</em>
          </h2>

          <p>Venha conhecer a MP Eyewear.</p>

          <div className="history-cta-actions">
            <WhatsAppLink messageKey="general">
              Fale conosco
              <ArrowUpRight size={18} />
            </WhatsAppLink>

            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MapPin size={17} />
              Como chegar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

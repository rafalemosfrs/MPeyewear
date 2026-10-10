
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';

export default function QuemSomos() {
  return (
    <>
      <SEO
        title="Quem somos"
        description="Conheça a MP Eyewear. Cada escolha começa entendendo você, seu estilo, sua rotina e o que seus olhos precisam."
        path="/quem-somos"
      />

      <section className="about-intro">
        <div className="container-max">

          <div className="about-intro-grid">

            <div className="about-intro-copy">
              <span className="eyebrow">
                MP EYEWEAR / QUEM SOMOS
              </span>

              <h1>
                É sobre você.
                <br />
                <em>E como você vê.</em>
              </h1>

              <p>
                Na MP Eyewear, cada escolha começa
                entendendo você, seu estilo, sua rotina
                e o que seus olhos precisam.
              </p>

              <Link
                to="/nossa-historia"
                className="btn-primary"
              >
                Conheça nossa história
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="about-intro-image">
              <img
                src="/assets/images/eyewear-portrait.jpg"
                alt="Óculos e identidade da MP Eyewear"
                loading="eager"
              />
            </div>

          </div>

          <div className="mp-founders">

            <div className="mp-founders-heading">
              <span className="eyebrow">
                QUEM ESTÁ POR TRÁS DA MP
              </span>

              <h2>
                Nossa história também
                <br />
                <em>faz parte do seu olhar.</em>
              </h2>
            </div>

            <div className="mp-founders-grid">

              <figure className="mp-founder-photo">
                <img
                  src="/assets/images/cristian-ferreira.jpg"
                  alt="Cristian Ferreira usando óculos na MP Eyewear"
                  loading="lazy"
                  width="900"
                  height="1200"
                />

                <figcaption>
                  <span>Cristian Ferreira</span>
                </figcaption>
              </figure>

              <figure className="mp-founder-photo">
                <img
                  src="/assets/images/evelinne-pimentel.jpg"
                  alt="Evelinne Pimentel usando óculos na MP Eyewear"
                  loading="lazy"
                  width="900"
                  height="1200"
                />

                <figcaption>
                  <span>Evelinne Pimentel</span>
                </figcaption>
              </figure>

              <figure className="mp-kit-photo">
                <img
                  src="/assets/images/kit-mp-eyewear.jpg"
                  alt="Kit MP Eyewear com óculos, estojos, bolsa e acessórios da marca"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <figcaption>
                  MP EYEWEAR / NOSSA IDENTIDADE
                </figcaption>
              </figure>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

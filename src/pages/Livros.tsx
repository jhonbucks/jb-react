import './Index.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FancyButton from '../components/FancyButton';
import BannerImageCTAFull from '../components/BannerImageCTAFull';
import styles from './Livros.module.css';

export default function Livros() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <h2 style={{ textAlign: 'center' }}>
          {' '}
          Livros <span className="highlight"> e Artbooks </span>
        </h2>
        <section className={`${styles.products} ${styles.booksProducts}`} aria-label="Livros">
          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/capa56.png" alt="Capa do ArtBook Noah e o Senhor das Almas" />
            </div>

            <div className={styles.productInfo}>
              <h1 style={{ fontSize: '1.5rem' }}>
                Artbook<span className="highlight"> Noah e o Senhor das Almas </span>
              </h1>
              <br />

              <p>
                O ArtBook de Noah e o Senhor das Almas é uma coletânea visual... que documenta todo
                o processo criativo por trás do livro. Ele reúne desde os primeiros esboços até as
                ilustra...
              </p>

              <div className={styles.actions}>
                {/* <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/artbook-noah-e-o-senhor-das-almas/U105732964T">
                  Comprar
                </FancyButton>
                <FancyButton href="/artbookNoah" variant="secondary">
                  Saiba mais
                </FancyButton> */}
                <FancyButton href="/formartbook">Pré-venda</FancyButton>
              </div>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img
                src="/images/2325.png"
                alt="Capa da edicao oficial de Noah e o Senhor das Almas"
              />
            </div>

            <div className={styles.productInfo}>
              <h1 style={{ fontSize: '1.5rem' }}>
                Noah e o <span className="highlight">Senhor das Almas</span>
              </h1>
              <br />
              <p>
                Nesta aventura repleta de coragem, magia e sacrificio, Noah tera que confrontar nao
                apenas forcas malignas, mas tambem os segredos de sua propria linhagem...
              </p>
              <div className={styles.actions}>
                {/* <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-das-almas-edicao-especial/J101496902F">
                  Hotmart
                </FancyButton>
                <FancyButton href="https://www.amazon.com.br/dp/B0GR1GKFJJ">Amazon</FancyButton>
                <FancyButton href="/noah" variant="secondary">
                  Saiba mais
                </FancyButton> */}
                <FancyButton href="/noah">Comprar</FancyButton>
              </div>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/livro2.png" alt="Capa do livro The art BOOK" />
            </div>

            <div className={styles.productInfo}>
              <h1 style={{ fontSize: '1.5rem' }}>
                The <span className="highlight">art BOOK</span>
              </h1>
              <br />
              <p>
                Coletânea visual que explora a criatividade do artista por meio de ilustrações
                únicas, fanarts marcantes e criações autorais inspiradas por temas diversos. Com um
                estilo vibrante ...
              </p>
              <div className={styles.actions}>
                {/* <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/the-art-book/W97175302W">
                  Hotmart
                </FancyButton>
                <FancyButton href="https://www.amazon.com.br/dp/B0GYB53B55">Amazon</FancyButton>
                <FancyButton href="/art" variant="secondary">
                  Saiba mais
                </FancyButton> */}
                <FancyButton href="/art">Comprar</FancyButton>
              </div>
            </div>
          </article>
        </section>{' '}
        <h2 style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '2rem' }}>
          {' '}
          Produtos <span className="highlight"> Exclusivos </span>
        </h2>
        <section className={styles.products} aria-label="Livros">
          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/ecobagnoah.png" alt="Ecobag Tartaruga Ancestral" />
            </div>

            <div className={styles.productInfo}>
              <h1>
                Ecobag<span className="highlight"> Artbook Noah </span>
              </h1>
              <br />
              <p>
                {' '}
                Ecobag oficial e exclusiva do artbook "Noah e o Senhor das Almas", do ilustrador e
                quadrinista Jhon Bucks. Estampada com a arte da capa do livro, esta ecobag ...
              </p>
              <p> ♻️ Ecobag sustentável</p>
              <div className={styles.actions}>
                <FancyButton href="https://umapenca.com/jhonbucks/ecobag/artbook-noah-e-o-senhor-das-almas-366384.html">
                  Comprar
                </FancyButton>
              </div>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/camisetajb.png" alt="Pôster Noite de Devaneios" />
            </div>

            <div className={styles.productInfo}>
              <h1>
                Camiseta<span className="highlight"> Jhon Bucks</span>
              </h1>
              <br />
              <p>
                Camiseta oficial da marca Jhon Bucks, estampada com a logo do pássaro estilizado –
                símbolo que acompanha a evolução visual do artista desde 2012 até os dias ....
              </p>
              <p>
                ✅ 100% algodão <br />✅ Disponível em tamanhos P ao GG
              </p>

              <div className={styles.actions}>
                <FancyButton href="https://umapenca.com/jhonbucks/camiseta/logo-jhon-bucks-passaro-estilizado-366382.html">
                  Comprar
                </FancyButton>
              </div>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/ecobag.png" alt="Ecobag Tartaruga Ancestral" />
            </div>

            <div className={styles.productInfo}>
              <h1>
                Ecobag<span className="highlight"> Tartaruga Ancestral</span>
              </h1>
              <br />
              <p>
                {' '}
                Esta ecobag é mais do que um acessório; é uma tela em movimento. A ilustração
                principal destaca a maestria no uso de hachuras e padrões complexos, conferindo ...
              </p>
              <p> ♻️ Ecobag sustentável</p>
              <div className={styles.actions}>
                <FancyButton href="https://umapenca.com/jhonbucks/ecobag/tartaruga-ancestral-364016.html">
                  Comprar
                </FancyButton>
              </div>
            </div>
          </article>

          <article className={styles.product}>
            <div className={styles.imageBox}>
              <img src="/images/postermenina.png" alt="Pôster Noite de Devaneios" />
            </div>

            <div className={styles.productInfo}>
              <h1>
                Pôster<span className="highlight"> Noite de Devaneios</span>
              </h1>
              <br />
              <p>
                Adicione um toque de expressividade e fantasia ao seu ambiente com este poster
                exclusivo. A obra apresenta uma composição lúdica onde o traço manual...
              </p>
              <p>
                🖼️ Pôster tamanhos A5 / A4 / A3 <br />
                🎨 Arte Exclusiva{' '}
              </p>

              <div className={styles.actions}>
                <FancyButton href="https://umapenca.com/jhonbucks/poster/noite-de-devaneios-364072.html">
                  Comprar
                </FancyButton>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

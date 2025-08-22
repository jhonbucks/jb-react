// pages/Index.tsx
import React from 'react';

import './Index.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TransparentButton from '../components/TransparentButton';
import FancyButton from '../components/FancyButton';
import GallerySection from '../components/GallerySection';
import BannerImageCTAFull from '../components/BannerImageCTAFull';
import ImageGridLightbox from '../components/ImageGridLightbox';

export default function Index() {
  const conceptImages = [
    { src: '/images/art1.png', alt: 'Arte 1' },
    { src: '/images/art2.png', alt: 'Arte 2' },
    { src: '/images/art3.png', alt: 'Arte 3' },
    { src: '/images/art4.png', alt: 'Arte 4' },
  ];

  return (
    <>
      <Navbar />

      <div>
        <div
          style={{
            margin: '0 auto',
            width: '100%',
            maxWidth: 1920,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <BannerImageCTAFull
            src="/images/artbook1.png"
            href="#"
            buttonText="Ver detalhes"
            alt="Banner Noah"
          />
        </div>
      </div>
      <br />
      {/* HERO */}

      {/* SOBRE */}
      <section className="about container" style={{ padding: '0 24px' }}>
        <div id="sobre1">
          <p>
            <strong>
              "The Art Book" de Jhon Bucks é uma coletânea visual que explora a criatividade...
            </strong>
          </p>
          <p>
            ...do artista por meio de ilustrações únicas, fanarts marcantes e criações autorais
            inspiradas por temas diversos. Com um estilo vibrante e cheio de personalidade, o livro
            conduz o leitor por um mergulho em mundos imaginativos, técnicas artísticas e
            inspirações que moldaram sua jornada criativa. Esta edição é um convite para conhecer de
            perto o talento e a paixão de Jhon Bucks pelo desenho.
          </p>
          <p>Muito mais que um livro, The Art Book é um portal para a imaginação.</p>

          <div
            className="btns-small"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginTop: '40px',
            }}
          >
            <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/the-art-book/W97175302W">
              Comprar agora
            </FancyButton>{' '}
            <style>{`
          /* cSpell:words fbtn btns */
          .btns-small .fbtn {
            padding: 8px 16px !important;
            font-size: 0.9rem !important;
            line-height: 1 !important;
          }
          @media (max-width: 640px) {
            .btns-small { justify-content: center; }
            .btns-small .fbtn { padding: 8px 14px !important; }
          }
          @media (max-width: 480px) {
            .btns-small { flex-direction: column; align-items: center; gap: 10px !important; }
            .btns-small .fbtn { width: 100%; max-width: 260px; }
          }
        `}</style>
          </div>
        </div>
      </section>
      <br />
      {/* BLOCO PRODUTOS (texto branco, imagens menores) */}
      <section
        id="insp-block"
        style={{
          marginTop: 0,
          backgroundImage: "url('/images/imgfundoart.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
        }}
      >
        <div
          className="insp-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div className="insp-imageBox">
            <img src="/images/digitalart.png" alt="Livro digital" className="insp-image" />
          </div>

          <div id="digital" className="insp-text">
            <h2>Livro digital</h2>
            <br />
            <p>
              <strong>Gênero:</strong> Art - Design
            </p>
            <p>
              <strong>Páginas:</strong> 34
            </p>
            <p>
              <strong>Formato:</strong> Digital
            </p>
            <p>
              <strong>Onde pode ser lido:</strong> Smartphones - Tablets - Computadores - Leitores
              de eBook (como Kindle e Kobo, desde que suportem o formato PDF)
            </p>
            <br />
            <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/the-art-book/W97175302W">
              Comprar agora
            </FancyButton>
          </div>
        </div>

        <style>{`
          #insp-block .insp-imageBox{
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #insp-block .insp-image{
            width: 70%;
            max-width: 380px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          #insp-block .insp-text{
            max-width: 640px;
            margin: 0 auto 0 0;
            text-align: left;
          }
          /* texto branco nesta seção */
          #insp-block .insp-text h2,
          #insp-block .insp-text p{
            color: #020202ff !important;
          }
          @media (max-width: 1024px){
            #insp-block .insp-grid{
              grid-template-columns: 1fr !important;
              gap: 32px;
            }
            #insp-block .insp-image{ width: 65%; max-width: 320px; }
          }
          @media (max-width: 640px){
            #insp-block .insp-image{ width: 80%; max-width: 260px; }
          }
        `}</style>
      </section>

      <section
        style={{
          padding: '0 24px',
        }}
      >
        <div
          id="sobre1"
          style={{
            textAlign: 'center',

            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{ paddingTop: '50px' }}>Concept art</h2> <br />
          <p>
            Cada personagem e cena traduz um pedaço de narrativa, seja no movimento exagerado e
            cômico, no retrato caricato ou na sutileza das expressões faciais. A presença das
            paletas de cores reforça a identidade visual de cada ilustração, criando atmosferas
            únicas que dialogam com o humor, a fantasia e a imaginação. Este conjunto funciona como
            um registro da construção artística, onde o esboço inicial e a versão finalizada
            coexistem, revelando não apenas o resultado, mas também o caminho percorrido até ele.
          </p>
          <div
            style={{
              paddingLeft: '50px',
              paddingRight: '50px',
            }}
          >
            <ImageGridLightbox images={conceptImages} />
          </div>
          <div
            className="btns-small"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginTop: '40px',
            }}
          >
            <style>{`
                /* cSpell:words fbtn btns */
                .btns-small .fbtn {
                  padding: 8px 16px !important;
                  font-size: 0.9rem !important;
                  line-height: 1 !important;
                }
             
                @media (max-width: 640px) {
                  .btns-small { justify-content: center; }
                  .btns-small .fbtn { padding: 8px 14px !important; }
                }
                @media (max-width: 480px) {
                  .btns-small { flex-direction: column; align-items: center; gap: 10px !important; }
                  .btns-small .fbtn { width: 100%; max-width: 260px; }
                }
              `}</style>
          </div>
        </div>
      </section>

      {/* <section
        style={{
          backgroundImage: "url('/images/imgfundo.png')", // sua imagem de fundo
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "60px 20px",
          color: "#fff", // deixa todos os textos brancos
        }}
      >
        <GallerySection
          heroSrc="/images/corvo.png"
          title="Concept Art"
          description={`“As ilustrações capturam a atmosfera sombria e mística de Noah e o Senhor das Almas, onde os corvos simbolizam presságios e segredos ocultos, voando sobre um mundo assolado pela escuridão. As casas de Nortreus, simples e acolhedoras sob a luz da lua, contrastam com a presença ameaçadora de um cajado ancestral erguido contra o céu, sugerindo a luta entre a magia protetora e o poder maligno de Gregor. Cada traço remete à dualidade central da narrativa: inocência perdida e coragem forjada, enquanto Noah, Daia e Theodor trilham uma jornada em que amizade e sacrifício se tornam armas contra um inimigo que devora não só vidas, mas também esperanças.”`}
          thumbs={[
            { src: "/images/16.png" },
            { src: "/images/18.png" },
            { src: "/images/31.png" },
            { src: "/images/30.png" },
          ]}
        />
      </section> */}

      <Footer />
    </>
  );
}

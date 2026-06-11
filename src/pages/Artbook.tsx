// pages/Index.tsx
import React, { useState } from 'react';

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

  const [data, setData] = useState({ nome: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const SHEET_URL = 'https://sheetdb.io/api/v1/m6cjydmnmh3jx';

    try {
      const res = await fetch(SHEET_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              nome: data.nome,
              email: data.email,
              data_envio: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
    }
  };

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

          <section
            id="form"
            style={{
              background: '#ffffffff',
              color: '#000000ff',
              padding: '60px 20px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px' }}>
              Veja uma <span className="highlight">prévia do ArtBook</span>
            </h2>
            <p>Prévia limitada: Receba ilustrações exclusivas do ArtBook.</p>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px',
                  maxWidth: '400px',
                  margin: '0 auto',
                }}
              >
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={data.nome}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #638CA6',
                    width: '100%',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={data.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #638CA6',
                    width: '100%',
                  }}
                />
                <div style={{ marginTop: '16px' }}>
                  <button
                    type="submit"
                    style={{
                      background: '#638CA6',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    color: '#638CA6',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '20px',
                  }}
                >
                  Liberado com sucesso! Aproveite.
                </p>
                <FancyButton
                  href="https://drive.google.com/file/d/1XrSTsCxJ7mfSTWZTLF1jZw50KX_nQnmY/view?usp=sharing
"
                >
                  Acessar conteúdo
                </FancyButton>
              </div>
            )}
          </section>
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
              hotmart
            </FancyButton>{' '}
            <FancyButton href="https://www.amazon.com.br/dp/B0GYB53B55">amazon/kindle</FancyButton>
          </div>

          <div className="insp-imageBox">
            <img src="/images/artfisico.png" alt="Livro digital" className="insp-image" />
          </div>

          <div id="digital" className="insp-text">
            <h2>Livro físico</h2>
            <br />
            <p>
              <strong>Gênero:</strong> Art - Design
            </p>
            <p>
              <strong>Páginas:</strong> 32
            </p>
            <p>
              <strong>Formato:</strong> Impresso
            </p>
            <p>
              Muito mais que um livro, The Art Book é um portal para a imaginação. Livro impresso em
              Papel Branco, 75g/m² P&amp;B, no tamanho 16x22cm com 32 páginas. Este produto é feito
              sob demandas - será produzido especialmente para você após a compra. Por isso, o prazo
              de entrega pode levar alguns dias. Essa abordagem reduz desperdícios e estoques
              excedentes, contribuindo para uma produção mais sustentável e alinhada com boas
              práticas de ESG.
            </p>
            <br />
            <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/hagsxd-the-art-book-lxs6u/H105645420I">
              hotmart
            </FancyButton>{' '}
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
      <section
        id="showcase-block"
        style={{
          marginTop: 40,
          backgroundColor: '#ffffff',
          padding: '40px 0',
          width: '100%',
          // Removido o marginLeft/Right que quebravam o layout da página
        }}
      >
        <div
          id="song"
          className="showcase-grid"
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            alignItems: 'center',
          }}
        >
          {/* Primeiro item */}
          <div className="showcase-item">
            <div className="showcase-imageBox">
              <img src="/images/capa56.png" alt="2012–2019" className="showcase-image" />
            </div>
            <div className="showcase-text">
              <h3>
                ArtBook <span className="highlight">Noah e o Senhor das Almas </span>
              </h3>
              <p>
                O ArtBook de Noah e o Senhor das Almas é uma coletânea visual que documenta todo o
                processo criativo por trás do livro. Ele reúne desde os primeiros esboços...
              </p>
              <FancyButton href="/artbooknoah">saiba mais</FancyButton>
            </div>
          </div>

          {/* Segundo item */}
          <div className="showcase-item">
            <div className="showcase-imageBox">
              <img src="/images/2325.png" alt="2012–2019" className="showcase-image" />
            </div>
            <div className="showcase-text">
              <h3>
                Noah <span className="highlight"> e o Senhor das almas</span>
              </h3>
              <p>
                Quando Noah Stolk descobre a verdade sobre a noite que matou seus pais, sua vida se
                transforma em uma missão impossível: libertar as almas aprisionadas por Gregor, o
                temível Senhor...
              </p>
              <FancyButton href="/Noah">SAIBA MAIS</FancyButton>
            </div>
          </div>
        </div>

        <style>{`
          /* Todos os estilos são escopados pelo ID #showcase-block */
          #showcase-block .showcase-item {
            background: #f9f9f9;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          #showcase-block .showcase-imageBox {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
          }
          #showcase-block .showcase-image {
            width: 60%;
            max-width: 200px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          #showcase-block .showcase-text {
            text-align: center;
          }
          #showcase-block .showcase-text h3 {
            font-size: 1.2rem;
            margin-bottom: 12px;
          }
          #showcase-block .showcase-text p {
            font-size: 0.85rem;
            line-height: 1.4;
            margin-bottom: 16px;
          }
          @media (max-width: 768px) {
            #showcase-block .showcase-grid {
              grid-template-columns: 1fr !important;
              gap: 24px;
            }
            #showcase-block .showcase-image {
              width: 50%;
              max-width: 150px;
            }
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
}

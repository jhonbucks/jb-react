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
    { src: '/images/18.png', alt: 'Arte 1' },
    { src: '/images/16.png', alt: 'Arte 2' },
    { src: '/images/30.png', alt: 'Arte 3' },
    { src: '/images/31.png', alt: 'Arte 4' },
  ];

  const [data, setData] = useState({ nome: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('🔥 handleSubmit disparado!', data);

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
      // em caso de erro você pode exibir uma mensagem na página também, se quiser
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
            src="/images/noah1.png"
            href="#"
            buttonText="Ver detalhes"
            alt="Banner Noah"
          />
        </div>
      </div>
      {/* HERO */}
      {/* <div
        style={{
          marginTop: 0,
          backgroundImage: "url('/images/noah1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '280px 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
        }}
      /> */}
      {/* BOTÕES HERO (mesma aba) */}
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
        <FancyButton href="#sobre1">Sobre a história</FancyButton>
        <FancyButton href="#digital" variant="secondary">
          Livro digital
        </FancyButton>
        <FancyButton href="#fisico">Livro físico</FancyButton>
        <FancyButton href="#song" variant="secondary">
          Trilha sonora
        </FancyButton>

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
      {/* SOBRE */}
      <section className="about container" style={{ padding: '0 24px' }}>
        <div id="sobre1">
          {' '}
          <br />
          <p>
            <strong>
              Quando Noah Stolk descobre a verdade sobre a noite que matou seus pais, sua vida se
              transforma em uma missão impossível: libertar as almas aprisionadas por Gregor, o
              temível Senhor das Almas.
            </strong>
          </p>
          <p>
            Ao lado de sua destemida amiga Daia — que também carrega a dor de uma mãe perdida — e do
            misterioso guardião Theodor, Noah atravessa a perigosa Floresta Negra. Lá, criaturas
            nascidas da escuridão espreitam: corvos que são olhos do inimigo, aranhas que tecem
            teias mortais e os terríveis sussurrantes, que imitam vozes amadas para atrair
            viajantes.
          </p>
          <p>
            Mas Theodor guarda um segredo: ele já foi amigo de Gregor, antes que o medo da morte o
            consumisse. E quando o guardião se sacrifica para salvá-los, Noah e Daia precisam
            encontrar forças que nem sabiam possuir. No coração das Montanhas das Sombras, Noah
            descobre uma luz interior capaz de enfrentar qualquer escuridão — uma luz que sua mãe
            lhe disse, em sonhos, que existia dentro dele.
          </p>
          <p>
            <em>"Noah e o Senhor das Almas"</em> é uma jornada emocionante sobre perda, amizade,
            coragem e o poder transformador das escolhas. Uma história que vai aquecer seu coração,
            arrancar suas lágrimas e lembrar você de que a verdadeira luz nunca se apaga.
          </p>
          {/* FORMULÁRIO DE DOWNLOAD */}
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
              Leia o <span className="highlight">primeiro capítulo</span>
            </h2>
            <p>Prévia limitada: leia primeiro capítulo do livro "Noah e o Senhor das Almas".</p>
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
                    color: 'green',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '20px',
                  }}
                >
                  ✅ Capítulo liberado com sucesso!
                </p>
                <FancyButton href="https://drive.google.com/file/d/1NK3mtxdwrhPL8vTelRG1HPYYAEmhw0ot/view?usp=sharing">
                  Começar leitura
                </FancyButton>
              </div>
            )}{' '}
          </section>
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
            {/* <FancyButton href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-das-almas-edicao-especial/J101496902F">
              Comprar agora
            </FancyButton> */}
            {/* <FancyButton href="#form" variant="secondary">
              Leia o 1º capítulo
            </FancyButton> */}
            {/* <FancyButton href="#">booktrailer</FancyButton> */}

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
      </section>{' '}
      <section
        id="booktrailer"
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          background: '#ffffffff', // fundo preto para destacar
        }}
      >
        <div
          style={{
            position: 'relative',
            paddingBottom: '40%', // 16:9
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/gbDKFOc9OeU?start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </section>
      <br /> {/* BLOCO PRODUTOS (texto branco, imagens menores) */}
      <section
        id="insp-block"
        style={{
          marginTop: 0,
          backgroundImage: "url('/images/imgfundo.png')",
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
            <img src="/images/livro0023.png" alt="Livro digital" className="insp-image" />
          </div>

          <div id="digital" className="insp-text">
            <h2>Livro digital</h2>
            <br />
            <p>
              Inclui uma história extra da Floresta Negra, nova capa ilustrada e pôsteres exclusivos
              que expandem ainda mais o universo da aventura.
            </p>
            <p>
              <strong>Gênero:</strong> Fantasia - Aventura
            </p>
            <p>
              <strong>Páginas:</strong> 193
            </p>
            <p>
              <strong>Formato:</strong> Digital
            </p>
            <p>
              <strong>Onde pode ser lido:</strong> Smartphones - Tablets - Computadores - Leitores
              de eBook (como Kindle e Kobo, entre outros).
            </p>
            <br />
            {/* ESTE abre em NOVA ABA (Hotmart) */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <TransparentButton
                href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-das-almas-edicao-especial/J101496902F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotmart
              </TransparentButton>
              <TransparentButton
                href="https://www.amazon.com.br/dp/B0GR1GKFJJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Amazon/kindle
              </TransparentButton>{' '}
              {/* <TransparentButton
                href="https://www.amazon.com/dp/B0FVHG5DVL"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Versão inglês
              </TransparentButton> */}
            </div>{' '}
            <br />
            <TransparentButton
              href="https://www.amazon.com/dp/B0FVHG5DVL"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Versão inglês
            </TransparentButton>
          </div>

          <div className="insp-imageBox">
            <img src="/images/livro002.png" alt="Livro físico" className="insp-image" />
          </div>

          <div id="fisico" className="insp-text">
            <h2>Livro físico</h2>
            <br />
            <p>
              Inclui uma história extra da Floresta Negra, nova capa ilustrada e pôsteres exclusivos
              que expandem ainda mais o universo da aventura.
            </p>
            <p>
              <strong>Gênero:</strong> Fantasia - Aventura
            </p>
            <p>
              <strong>Páginas:</strong> 193
            </p>
            <p>
              <strong>Formato:</strong> Impresso
            </p>
            <p>
              Livro impresso em Papel Branco, 75g/m² P&amp;B, no tamanho 15x21cm com 193 páginas.
              Este produto é feito sob demandas - será produzido especialmente para você após a
              compra. Por isso, o prazo de entrega pode levar alguns dias. Essa abordagem reduz
              desperdícios e estoques excedentes, contribuindo para uma produção mais sustentável e
              alinhada com boas práticas de ESG.
            </p>

            <br />
            {/* ESTE abre em NOVA ABA (Hotmart) */}
            {/* <TransparentButton
              href="#"
              onClick={(e) => e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Em Breve
            </TransparentButton> */}
            <TransparentButton
              href="https://go.hotmart.com/O102268682Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Comprar
            </TransparentButton>
          </div>

          <div className="insp-imageBox">
            <img src="/images/livroartfundo.png" alt="Livro físico" className="insp-image" />
          </div>

          <div id="fisico" className="insp-text">
            <h2>Livro + artbook digital</h2>
            <br />
            <p>
              <strong>Gênero:</strong> Fantasia - Art
            </p>

            <p>
              <strong>Formato:</strong> Digital
            </p>
            <p>
              <strong>Onde pode ser lido:</strong> Smartphones - Tablets - Computadores - Leitores
              de eBook (como Kindle e Kobo, desde que suportem o formato PDF)
            </p>

            <br />
            {/* ESTE abre em NOVA ABA (Hotmart) */}
            {/* <TransparentButton
              href="#"
              onClick={(e) => e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Em Breve
            </TransparentButton> */}
            <TransparentButton
              href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-das-almas-artbook-formato-digital/E105733274A"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Comprar
            </TransparentButton>
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
            color: #ffffff !important;
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
        id="soundtrack-block"
        style={{
          marginTop: 40,
          backgroundColor: '#ffffff',
          padding: '40px 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
        }}
      >
        <div
          id="soundtrack-grid"
          className="soundtrack-grid"
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
          <div className="soundtrack-imageBox">
            <img src="/images/song.png" alt="2012–2019" className="soundtrack-image" />
          </div>

          <div className="soundtrack-text">
            <h2>
              Trilha sonora <span className="highlight">do livro</span>
            </h2>
            <p>
              Transforme sua leitura em uma experiência inesquecível! Imagine mergulhar na história
              de Noah e o Senhor das Almas enquanto cada capítulo ganha vida com uma trilha sonora
              feita especialmente para ele. De momentos de mistério e emoção a batalhas épicas e
              recomeços cheios de esperança, cada faixa da soundtrack acompanha o ritmo da
              narrativa, tornando a aventura ainda mais envolvente. Aperte o play e viva essa
              jornada como nunca antes!
            </p>
            <FancyButton href="https://music.youtube.com/playlist?list=PLx8pfCgphZXmLTHzG78blHcLobHQCz385">
              Ouça agora
            </FancyButton>
          </div>
        </div>

        <style>{`
    /* Estilos exclusivos para o bloco da trilha sonora */
    #soundtrack-block .soundtrack-imageBox {
      background: #fff;
      border-radius: 24px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    #soundtrack-block .soundtrack-image {
      width: 70%;
      max-width: 420px;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    
    #soundtrack-block .soundtrack-text {
      max-width: 640px;
      margin: 0 auto 0 0;
      text-align: left;
    }
    
    @media (max-width: 1024px) {
      #soundtrack-block .soundtrack-grid {
        grid-template-columns: 1fr !important;
        gap: 32px;
      }
      #soundtrack-block .soundtrack-image {
        width: 70%;
        max-width: 360px;
      }
    }
    
    @media (max-width: 640px) {
      #soundtrack-block .soundtrack-image {
        width: 80%;
        max-width: 260px;
      }
    }
  `}</style>
      </section>
      {/* <section
        style={{
          background: "#afc4d6", // mude a cor aqui
          padding: "40px 0", // opcional (respiro vertical)
          width: "100%",
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
        style={{
          backgroundImage: "url('/images/imgfundo.png')", // sua imagem de fundo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          padding: '0 24px',
          color: '#fff', // deixa todos os textos brancos
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
            As ilustrações capturam a atmosfera sombria e mística de Noah e o Senhor das Almas, onde
            os corvos simbolizam presságios e segredos ocultos, voando sobre um mundo assolado pela
            escuridão. As casas de Nortreus, simples e acolhedoras sob a luz da lua, contrastam com
            a presença ameaçadora de um cajado ancestral erguido contra o céu, sugerindo a luta
            entre a magia protetora e o poder maligno de Gregor. Cada traço remete à dualidade
            central da narrativa: inocência perdida e coragem forjada, enquanto Noah, Daia e Theodor
            trilham uma jornada em que amizade e sacrifício se tornam armas contra um inimigo que
            devora não só vidas, mas também esperanças.
          </p>{' '}
          <br />
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
              <FancyButton href="/artbookNoah">SAIBA MAIS</FancyButton>
            </div>
          </div>

          {/* Segundo item */}
          <div className="showcase-item">
            <div className="showcase-imageBox">
              <img src="/images/livro2.png" alt="2012–2019" className="showcase-image" />
            </div>
            <div className="showcase-text">
              <h3>
                The <span className="highlight"> art BOOK</span>
              </h3>
              <p>
                Coletânea visual que explora a criatividade do artista por meio de ilustrações
                únicas, fanarts marcantes e criações autorais inspiradas por temas diversos....
              </p>
              <FancyButton href="/art">SAIBA MAIS</FancyButton>
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

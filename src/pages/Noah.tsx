// pages/Index.tsx
import React from 'react';

import './Index.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TransparentButton from '../components/TransparentButton';
import FancyButton from '../components/FancyButton';
import GallerySection from '../components/GallerySection';

export default function Index() {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <div
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
      />
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
          <p>
            <strong>Em um mundo onde a escuridão não é apenas uma sombra...</strong>
          </p>
          <p>
            ...mas um inimigo voraz, Noah Stolk, um jovem de 14 anos, vê sua vida tranquila no
            povoado de Nortreus virar de cabeça para baixo quando descobre a verdade sobre a
            tragédia que moldou seu passado. Criado por seu avô, ele embarca em uma jornada épica ao
            lado de sua destemida amiga Daia e do misterioso guardião Theodor. Juntos, eles
            enfrentam a ameaça sombria do Senhor das Almas, Gregor, um ser consumido pela obsessão
            de escapar da mortalidade às custas de vidas inocentes.
          </p>
          <p>
            Nesta aventura repleta de coragem, magia e sacrifício, Noah terá que confrontar não
            apenas forças malignas, mas também os segredos de sua própria linhagem. Com desafios
            mortais à espreita em florestas proibidas e cavernas sombrias, e aliados improváveis ao
            longo do caminho, "Noah e o Senhor das Almas" é uma história emocionante sobre perda,
            amizade e a busca incansável por justiça.
          </p>
          <p>
            Prepare-se para ser transportado a um universo onde a luz brilha mais intensamente
            quando confronta as trevas. Você está pronto para seguir Noah nessa batalha épica que
            vai mudar o destino de todos?
          </p>
          <p>Um livro que vai capturar seu coração desde a primeira página.</p>
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
            <FancyButton href="#sobre1">Comprar agora</FancyButton>
            <FancyButton href="#digital" variant="secondary">
              Leia o 1º capítulo
            </FancyButton>
            <FancyButton href="#sobre1">booktrailer</FancyButton>

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
            <img src="/images/ed2digitaltr.png" alt="Livro digital" className="insp-image" />
          </div>

          <div id="digital" className="insp-text">
            <h2>Livro digital</h2>
            <br />
            <p>
              <strong>Gênero:</strong> Fantasia - Aventura
            </p>
            <p>
              <strong>Páginas:</strong> 74
            </p>
            <p>
              <strong>Formato:</strong> Digital (compatível com leitores de PDF).
            </p>
            <p>
              <strong>Onde pode ser lido:</strong> Smartphones - Tablets - Computadores - Leitores
              de eBook (como Kindle e Kobo, desde que suportem o formato PDF).
            </p>
            <br />
            {/* ESTE abre em NOVA ABA (Hotmart) */}
            <TransparentButton
              href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-da-almas/E96772234P"
              target="_blank"
              rel="noopener noreferrer"
            >
              comprar agora
            </TransparentButton>
          </div>

          <div className="insp-imageBox">
            <img src="/images/ed2fisicot.png" alt="Livro físico" className="insp-image" />
          </div>

          <div id="fisico" className="insp-text">
            <h2>Livro físico</h2>
            <br />
            <p>
              <strong>Gênero:</strong> Fantasia - Aventura
            </p>
            <p>
              <strong>Páginas:</strong> 74
            </p>
            <p>
              <strong>Formato:</strong> Impresso
            </p>
            <p>
              <strong>Tipo de capa:</strong> Capa Comum
            </p>
            <p>
              <strong>Dimensões do Livro:</strong> Altura: 21 cm • Largura: 14,8 cm
            </p>
            <p>
              <strong>Tipo de Papel:</strong> Offset
            </p>
            <br />
            {/* ESTE abre em NOVA ABA (Hotmart) */}
            <TransparentButton
              href="https://hotmart.com/pt-br/marketplace/produtos/noah-e-o-senhor-das-almas/N100011577H"
              target="_blank"
              rel="noopener noreferrer"
            >
              comprar agora
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
        id="showcase-block"
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
          id="song"
          className="showcase-grid"
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
          <div className="showcase-imageBox">
            <img src="/images/song.png" alt="2012–2019" className="showcase-image" />
          </div>

          <div className="showcase-text">
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
              {' '}
              Ouça agora
            </FancyButton>
          </div>
        </div>

        <style>{`
    #showcase-block .showcase-imageBox{
      background:#fff;
      border-radius:24px;
      overflow:hidden;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    /* menor e responsiva */
    #showcase-block .showcase-image{
      width:70%;
      max-width:420px;
      height:auto;
      display:block;
      margin:0 auto;
    }
    #showcase-block .showcase-text{
      max-width:640px;
      margin:0 auto 0 0;
      text-align:left;
    }
    @media (max-width:1024px){
      #showcase-block .showcase-grid{
        grid-template-columns:1fr !important;
        gap:32px;
      }
      #showcase-block .showcase-image{
        width:70%;
        max-width:360px;
      }
    }
    @media (max-width:640px){
      #showcase-block .showcase-image{
        width:80%;
        max-width:260px;
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
        <div style={{ padding: '0 24px' }}>
          <GallerySection
            heroSrc="/images/corvo.png"
            title="Concept Art"
            description={`“As ilustrações capturam a atmosfera sombria e mística de Noah e o Senhor das Almas, onde os corvos simbolizam presságios e segredos ocultos, voando sobre um mundo assolado pela escuridão. As casas de Nortreus, simples e acolhedoras sob a luz da lua, contrastam com a presença ameaçadora de um cajado ancestral erguido contra o céu, sugerindo a luta entre a magia protetora e o poder maligno de Gregor. Cada traço remete à dualidade central da narrativa: inocência perdida e coragem forjada, enquanto Noah, Daia e Theodor trilham uma jornada em que amizade e sacrifício se tornam armas contra um inimigo que devora não só vidas, mas também esperanças.”`}
            thumbs={[
              { src: '/images/16.png' },
              { src: '/images/18.png' },
              { src: '/images/31.png' },
              { src: '/images/30.png' },
            ]}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

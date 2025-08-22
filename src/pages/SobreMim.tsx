import React from 'react';

import './Index.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';

const HERO_BG = '/images/oficialsite.gif';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroBanner
        src="/images/menina.png"
        title="sobre mim"
        heightVh={60} // pode trocar para 100 se quiser ocupar a tela inteira
      />{' '}
      <br />
      <section className="about container" style={{ padding: '0 24px' }}>
        {/* <h2 id="sobre">
          Sobre <span className="highlight">mim</span>
        </h2> */}
        <p>
          Jhon Bucks, sempre foi apaixonado por arte, expressando sua criatividade desde cedo por
          meio de desenhos e histórias. Atualmente, é ilustrador, escritor e quadrinista, dedicado a
          criar universos fantásticos e emocionantes. Seu mais novo projeto, o livro digital Noah e
          o Senhor das Almas, combina narrativa envolvente e ilustrações marcantes.
        </p>
        <h2>
          Identidade <span className="highlight">visual</span>
        </h2>

        <p>
          A evolução da minha identidade visual reflete uma jornada criativa que acompanha o meu
          amadurecimento ao longo dos anos. Cada versão expressa um momento distinto, começando com
          traços mais orgânicos e detalhados (2012-2019), passando para uma simplificação
          minimalista (2019-2022), até chegar à versão atual (2022-2024), que combina modernidade,
          dinamismo e uma paleta de cores mais vibrante.
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <img src="/images/1.png" alt="2012–2019" />
            <span>2012&nbsp;–&nbsp;2019</span>
          </div>
          <div className="timeline-item">
            <img src="/images/2.png" alt="2019–2022" />
            <span>2019&nbsp;–&nbsp;2022</span>
          </div>
          <div className="timeline-item">
            <img src="/images/3.png" alt="2022–2024" />
            <span>2022&nbsp;–&nbsp;2024</span>
          </div>
          <div className="timeline-item">
            <img src="/images/4.png" alt="2022–2024" />
            <span>2024&nbsp;–&nbsp;2025</span>
          </div>
        </div>
        <p>
          O desenho, inspirado em formas naturais, preserva elementos de continuidade, como o
          espiral central e o bico estilizado, garantindo reconhecimento e autenticidade enquanto
          incorpora uma linguagem visual mais ousada e contemporânea.
        </p>
      </section>
      <section
        id="insp-block"
        style={{
          marginTop: 40,
          backgroundColor: '#afc4d6',
          padding: '40px 0',
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
            <img src="/images/inspirations.png" alt="2012–2019" className="insp-image" />
          </div>

          <div className="insp-text">
            <h2>Production</h2>
            <p>
              O conceito visual dessa logo explora simplicidade e formas orgânicas, transmitindo
              leveza e simpatia. O traço à mão, com textura de lápis, reforça a ideia artesanal e
              pessoal, enquanto a espiral no corpo sugere movimento e criatividade.
            </p>
            <p>
              As variações mostram versatilidade e adaptação para diferentes aplicações, mantendo a
              identidade.
            </p>
          </div>

          <div className="insp-imageBox">
            <img src="/images/5.png" alt="2012–2019" className="insp-image" />
          </div>

          <div className="insp-text">
            <h2>Cores</h2>
            <p>
              A escolha do azul suave remete à confiança e tranquilidade, contrastando com o grafite
              que traz solidez e seriedade. Essa combinação equilibra proximidade e
              profissionalismo, criando um símbolo marcante e memorável.
            </p>
          </div>
        </div>

        <style>{`
    #insp-block .insp-imageBox {
      background: #fff;
      border-radius: 24px;
      overflow: hidden;
    }
    #insp-block .insp-image {
      display: block;
      width: 100%;
      height: auto;
      max-width: 100%;
    }
    #insp-block .insp-text {
      max-width: 640px;
      margin: 0 auto 0 0;
      text-align: left;
    }
    @media (max-width: 1024px) {
      #insp-block .insp-grid {
        grid-template-columns: 1fr !important;
        gap: 32px;
      }
    }
  `}</style>
      </section>
      <Footer />
    </>
  );
}

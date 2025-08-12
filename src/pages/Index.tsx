import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import "./Index.css";
import { Navbar } from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const HERO_BG = "/images/oficialsite.gif";

export default function Index() {
  return (
    <>
      <Navbar />

      <Hero bgImage={HERO_BG} style={{ position: "relative" }}>
        <div
          style={{
            bottom: "2rem", // rode da base do Hero
            left: "50%", // meio horizontal
            transform: "translateX(-50%)",
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button href="/noah" size="large">
            Saiba Mais
          </Button>
        </div>
      </Hero>

      <section id="segunda-secao" className="about container">
        <Cards />

        <h2 id="sobre">
          Sobre <span className="highlight">mim</span>
        </h2>
        <p>
          Jhon Bucks, sempre foi apaixonado por arte, expressando sua
          criatividade desde cedo por meio de desenhos e histórias. Atualmente,
          é ilustrador, escritor e quadrinista, dedicado a criar universos
          fantásticos e emocionantes. Seu mais novo projeto, o livro digital
          Noah e o Senhor das Almas, combina narrativa envolvente e ilustrações
          marcantes.
        </p>
        <h2>
          Identidade <span className="highlight">visual</span>
        </h2>

        <p>
          A evolução da minha identidade visual reflete uma jornada criativa que
          acompanha o meu amadurecimento ao longo dos anos. Cada versão expressa
          um momento distinto, começando com traços mais orgânicos e detalhados
          (2012-2019), passando para uma simplificação minimalista (2019-2022),
          até chegar à versão atual (2022-2024), que combina modernidade,
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
        </div>
        <p>
          O desenho, inspirado em formas naturais, preserva elementos de
          continuidade, como o espiral central e o bico estilizado, garantindo
          reconhecimento e autenticidade enquanto incorpora uma linguagem visual
          mais ousada e contemporânea.
        </p>
      </section>

      <Footer />
    </>
  );
}

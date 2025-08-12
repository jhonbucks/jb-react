// src/components/SectionCards.tsx
import React from "react";
import "./Cards.css";

export interface CardItem {
  imageUrl: string;
  linkUrl: string;
  buttonText: string;
}

const cards: CardItem[] = [
  {
    imageUrl: "/images/card1.png",
    linkUrl: "/sucesso",
    buttonText: "Leia 1º Capítulo",
  },
  {
    imageUrl: "/images/card2.png",
    linkUrl: "/metodologia",
    buttonText: "Voz dos Leitores",
  },
  {
    imageUrl: "/images/card3.png",
    linkUrl: "/recursos",
    buttonText: "Garanta o Seu",
  },
];

export default function SectionCards() {
  return (
    <section className="cards-section container">
      <div className="cards-grid">
        {cards.map((c, i) => (
          <a
            key={i}
            href={c.linkUrl}
            className="card"
            style={{ backgroundImage: `url(${c.imageUrl})` }}
          >
            <span className="card-btn">{c.buttonText}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

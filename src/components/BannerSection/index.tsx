// src/components/BannerSection.tsx
import React from "react";
import TransparentButton from "../TransparentButton";

type Props = {
  bgImage: string;
  title: string;
  description: string;
  minHeight?: number;
};

export default function BannerSection({
  bgImage,
  title,
  description,
  minHeight = 420,
}: Props) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight,
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "min(1100px, 92%)",
          margin: "0 auto",
          padding: "clamp(20px, 4vw, 48px) 0",
          color: "#fff",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)",
            lineHeight: 1.15,
            marginBottom: "clamp(10px, 1.2vw, 14px)",
            fontWeight: 700,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            maxWidth: "60ch",
            fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
            lineHeight: 1.7,
            marginBottom: "clamp(16px, 2vw, 20px)",
            opacity: 0.95,
          }}
        >
          {description}
        </p>

        <TransparentButton href="/sobre">Leia completo</TransparentButton>
      </div>
    </section>
  );
}

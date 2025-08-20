import React from "react";
import TransparentButton from "../TransparentButton";

type Props = {
  leftImages: [string, string];
  rightImage: string;
  title: string;
  description: string;
  buttonText?: string;
  href: string;
};

export default function CareerSection({
  leftImages,
  rightImage,
  title,
  description,
  buttonText = "Saiba mais",
  href,
}: Props) {
  return (
    <section
      role="career-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "16px",
        alignItems: "stretch",
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(12px, 2.5vw, 24px)",
        height: "clamp(420px, 70vh, 300px)",
        overflow: "hidden",
      }}
    >
      {/* Coluna esquerda */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gap: "16px",
          height: "100%",
        }}
      >
        {leftImages.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt={`thumb-${i + 1}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Coluna direita */}
      <div
        style={{
          position: "relative",

          overflow: "hidden",
          height: "100%",
        }}
      >
        <img
          src={rightImage}
          alt="destaque"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Conteúdo AGORA EMBAIXO */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(16px, 4vw, 40px)",
            left: "clamp(16px, 4vw, 48px)",
            right: "clamp(16px, 4vw, 48px)",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
              lineHeight: 1.15,
              marginBottom: "clamp(10px, 1.2vw, 14px)",
              fontWeight: 700,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              lineHeight: 1.7,
              marginBottom: "clamp(14px, 2vw, 18px)",
              opacity: 0.95,
              maxWidth: "min(640px, 90%)",
            }}
          >
            {description}
          </p>
          <TransparentButton href={href}>{buttonText}</TransparentButton>
        </div>
      </div>

      <style>{`
				@media (max-width: 1024px) {
					section[role="career-grid"] {
						grid-template-columns: 1fr;
						height: auto;
					}
					section[role="career-grid"] > div:first-child > div {
						aspect-ratio: 16/9;
						height: auto;
					}
					section[role="career-grid"] > div:last-child {
						height: auto;
						min-height: 280px;
					}
				}
			`}</style>
    </section>
  );
}

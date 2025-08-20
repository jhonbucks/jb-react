import React from "react";
import FancyButton from "../FancyButton";

type Props = {
  src: string; // caminho da imagem
  href: string; // link do botão e do clique na imagem
  buttonText?: string; // texto do botão (default: "Saiba mais")
  alt?: string; // alt da imagem
};

export default function BannerImageCTAFull({
  src,
  href,
  buttonText = "Saiba mais",
  alt = "",
}: Props) {
  const go = () => (window.location.href = href);
  const onKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={buttonText}
      onClick={go}
      onKeyDown={onKey}
      style={{
        position: "relative",
        width: "100%",
        cursor: "pointer",
        // evita overflow lateral em telas pequenas
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        // garante 100% visível sem corte: adapta a largura, altura automática
        style={{ width: "100%", height: "auto", display: "block" }}
        // o clique na imagem também leva ao link
        onClick={go}
      />

      <div
        style={{
          position: "absolute",
          right: "clamp(12px, 3vw, 28px)",
          bottom: "clamp(12px, 3vw, 28px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <FancyButton href={href}>{buttonText}</FancyButton> */}
      </div>
    </div>
  );
}

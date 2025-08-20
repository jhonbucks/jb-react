import React from "react";
import FancyButton from "../FancyButton";
import TransparentButton from "../TransparentButton";

type Props = {
  src: string;
  href: string;
  buttonText?: string;
  alt?: string;
  animationDurationMs?: number; // default 14000
  pauseOnHover?: boolean; // default true
};

export default function BannerImageCTAFullAnimate({
  src,
  href,
  buttonText = "Saiba mais",
  alt = "",
  animationDurationMs = 14000,
  pauseOnHover = true,
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
      className="kb-wrap"
      style={{
        position: "relative",
        width: "100%",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="kb-img"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          willChange: "transform",
          transformOrigin: "center",
          // a animação é aplicada via CSS abaixo
        }}
        onClick={go}
      />
      <div
        style={{
          marginBottom: "25px",
          position: "absolute",
          right: "clamp(12px, 3vw, 28px)",
          bottom: "clamp(12px, 3vw, 28px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <TransparentButton href="/noah">Saiba mais </TransparentButton>
        {/* <FancyButton href={href}>{buttonText}</FancyButton> */}
      </div>
      *
      <style>{`
        /* Ken Burns sutil: pan + zoom contínuo, responsivo */
        @keyframes kbPanZoom {
          0%   { transform: scale(1) translate3d(0%,   0%,   0); }
          25%  { transform: scale(1.04) translate3d(1.5%, -1.5%, 0); }
          50%  { transform: scale(1.08) translate3d(0%,  -2.5%, 0); }
          75%  { transform: scale(1.04) translate3d(-1.5%, -1.0%, 0); }
          100% { transform: scale(1) translate3d(0%,    0%,   0); }
        }

        .kb-wrap .kb-img {
          animation: kbPanZoom ${animationDurationMs}ms ease-in-out infinite;
        }

        /* Pausar ao passar o mouse (opcional) */
        ${
          pauseOnHover
            ? `.kb-wrap:hover .kb-img { animation-play-state: paused; }`
            : ""
        }

        /* Acessibilidade: respeitar usuários que preferem menos movimento */
        @media (prefers-reduced-motion: reduce) {
          .kb-wrap .kb-img {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

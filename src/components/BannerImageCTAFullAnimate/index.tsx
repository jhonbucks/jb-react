import React from "react";
import FancyButton from "../FancyButton";

type Props = {
  src: string;
  href: string;
  buttonText?: string;
  alt?: string;
};

export default function BannerImageCTAFullAnimate({
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
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
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
        <FancyButton href={href} size="small" radius={8}>
          {buttonText}
        </FancyButton>
      </div>
    </div>
  );
}
